/* prerender-security.mjs — render security.html's inline i18n script server-side
 * so every locale copy ships its own language in static HTML.
 *
 * WHY: security.html builds its body with `#security-root`.innerHTML and swaps the
 * chrome through [data-ui] at runtime, exactly like use-cases/use-case.js. The
 * per-locale copies were therefore shipping the *entire English page* under
 * <html lang="ja"> etc. — Googlebot renders JS and coped, but the AI answer
 * crawlers that robots.txt and llms.txt explicitly invite saw English on all
 * nine locale URLs. This runs the page's own script in a minimal DOM shim and
 * returns exactly the markup it would produce.
 *
 * The inline script stays on the page and re-renders the same content client
 * side, so behaviour is unchanged.
 */
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const ROOT = 'c:/xampp/htdocs/grab-all-files';
const PAGE = path.join(ROOT, 'security.html');

/** The i18n IIFE is the last <script> block on the page. */
function extractScript(html) {
  const blocks = [...html.matchAll(/<script(?![^>]*\ssrc=)[^>]*>([\s\S]*?)<\/script>/g)].map((m) => m[1]);
  const body = blocks.reverse().find((b) => b.includes('security-root') && b.includes('function render'));
  if (!body) throw new Error('could not locate the security.html i18n script');
  return body;
}

export function uiKeysFromHtml(html) {
  return [...new Set([...html.matchAll(/data-ui="([^"]+)"/g)].map((m) => m[1]))];
}

/* The page links with ?lang=<L> because the client switch needs it. The static
 * copy uses plain root-absolute paths instead; build-locales.mjs then prefixes
 * the LOCALIZED ones per locale, which is how the baked markup ends up pointing
 * at sibling-locale URLs. */
function normalizeLinks(html) {
  return html.replace(/href="([^"?]*)\?lang=[a-zA-Z_]+((?:#[^"]*)?)"/g, (m, p, hash) => {
    const abs = p.startsWith('/') ? p : path.posix.normalize('/' + p);
    return `href="${abs}${hash}"`;
  });
}

function makeSandbox(lang, uiKeys) {
  const captured = { title: '', meta: {}, body: '', ui: {}, footer: '' };
  const metaNode = (key) => ({
    setAttribute(attr, v) { if (attr === 'content') captured.meta[key] = v; },
  });
  const uiProbes = uiKeys.map((key) => ({
    getAttribute: (a) => (a === 'data-ui' ? key : null),
    set textContent(v) { captured.ui[key] = v; },
    get textContent() { return ''; },
  }));
  const document = {
    documentElement: { setAttribute() {}, lang: 'en' },
    get title() { return captured.title; },
    set title(v) { captured.title = v; },
    getElementById(id) {
      if (id === 'security-root') {
        return { set innerHTML(v) { captured.body = v; }, get innerHTML() { return captured.body; } };
      }
      if (id === 'footer-copy') {
        return { set textContent(v) { captured.footer = v; }, get textContent() { return ''; } };
      }
      return null; // lang-sel / theme-toggle are not needed for static output
    },
    querySelector(sel) {
      if (sel.includes('name="description"')) return metaNode('description');
      if (sel.includes('og:title')) return metaNode('ogTitle');
      if (sel.includes('og:description')) return metaNode('ogDesc');
      if (sel.includes('twitter:title')) return metaNode('twTitle');
      if (sel.includes('twitter:description')) return metaNode('twDesc');
      return null;
    },
    // [data-href] is deliberately NOT shimmed: render() would rewrite those hrefs
    // into "?lang=" form, clobbering the clean paths build-locales.mjs produces.
    querySelectorAll(sel) { return sel === '[data-ui]' ? uiProbes : []; },
  };
  const sandbox = {
    document,
    localStorage: { getItem: () => null, setItem() {} },
    navigator: { language: '' },
    location: { search: '', href: 'https://grab-all-files.app/security.html' },
    console,
  };
  sandbox.window = sandbox;
  sandbox.__FORCE_LANG__ = lang;
  sandbox.matchMedia = () => ({ matches: false });
  return { sandbox, captured };
}

/** Render security.html for each locale. Returns out[lang] = {...}. */
export function renderAll(locales) {
  const html = fs.readFileSync(PAGE, 'utf8');
  const script = new vm.Script(extractScript(html), { filename: 'security-i18n.js' });
  const uiKeys = uiKeysFromHtml(html);
  const out = {};
  for (const lang of locales) {
    const { sandbox, captured } = makeSandbox(lang, uiKeys);
    script.runInNewContext(sandbox);
    if (!captured.body) throw new Error(`prerender produced no body for security/${lang}`);
    if (!captured.title) throw new Error(`prerender produced no title for security/${lang}`);
    if (!Object.keys(captured.ui).length) throw new Error(`prerender captured no data-ui strings for security/${lang}`);
    out[lang] = {
      title: captured.title,
      desc: captured.meta.description || '',
      body: normalizeLinks(captured.body),
      ui: captured.ui,
      footer: captured.footer,
    };
  }
  return out;
}
