/* prerender-cases.mjs — render use-cases/use-case.js server-side so every
 * use-case page ships its body, title/description and JSON-LD in static HTML.
 *
 * WHY: use-case.js builds the page body via root.innerHTML at runtime. Googlebot
 * executes JS and sees it, but the AI answer crawlers this site deliberately
 * invites (robots.txt + llms.txt) generally do not — they were served a bare
 * hero. This module runs the real script in a minimal DOM shim and returns the
 * exact markup it would produce, so build-locales.mjs can bake it into the HTML.
 *
 * The script stays on the page: it re-renders the same content client-side and
 * still drives the language selector, so behaviour is unchanged.
 */
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const ROOT = 'c:/xampp/htdocs/grab-all-files';
const SCRIPT = path.join(ROOT, 'use-cases', 'use-case.js');

export const CASE_IDS = [
  'combine-web-pages-into-one-html',
  'bulk-download-images',
  'download-all-pdfs',
  'download-files-from-webpage',
  'internal-portal-downloads',
  'merge-pdfs-locally',
];

/* use-case.js links with ?lang=<L> because the client switch needs it. The
 * static copy must instead use plain root-absolute paths: build-locales.mjs
 * rewrites those per locale (LOCALIZED targets gain a /<L>/ prefix), which is
 * how the baked markup ends up pointing at sibling-locale URLs. */
function normalizeLinks(html) {
  return html.replace(/href="([^"?]*)\?lang=[a-zA-Z_]+((?:#[^"]*)?)"/g, (m, p, hash) => {
    const abs = p.startsWith('/') ? p : path.posix.normalize('/use-cases/' + p);
    return `href="${abs}${hash}"`;
  });
}

/** The localized string tables use-case.js keeps in module scope.
 *  Used by build-locales.mjs to generate the /use-cases/ hub without inventing
 *  any new translations — every string comes from the same source of truth. */
export function getTables() {
  const src = fs.readFileSync(SCRIPT, 'utf8');
  const grab = (name, close) => {
    const m = src.match(new RegExp(`var ${name} = ([\\s\\S]*?\\n${close});`));
    if (!m) throw new Error(`could not extract ${name} from use-case.js`);
    return vm.runInNewContext('(' + m[1] + ')');
  };
  return {
    UI: grab('UI', '  \\}'),
    GUIDE_LABELS: grab('GUIDE_LABELS', '  \\}'),
    GUIDE_ORDER: grab('GUIDE_ORDER', '  \\]'),
    STORE: grab('STORE', '  \\}'),
  };
}

/** Unique data-ui keys used by a page's static chrome (topbar / footer / CTA). */
export function uiKeysFromHtml(html) {
  return [...new Set([...html.matchAll(/data-ui="([^"]+)"/g)].map((m) => m[1]))];
}

function makeSandbox(caseId, lang, uiKeys) {
  const captured = { title: '', meta: {}, body: '', jsonld: {}, ui: {} };
  // render() localizes the static chrome via querySelectorAll("[data-ui]").
  // Hand it one probe per key so the translated strings are captured too —
  // without this the baked locale pages kept an English topbar and footer.
  const uiProbes = uiKeys.map((key) => ({
    getAttribute: (a) => (a === 'data-ui' ? key : null),
    set textContent(v) { captured.ui[key] = v; },
    get textContent() { return ''; },
  }));
  const node = (onText) => ({
    set textContent(v) { onText(v); },
    get textContent() { return ''; },
    setAttribute() {}, addEventListener() {}, value: '',
  });
  const metaNode = (key) => ({
    setAttribute(attr, v) { if (attr === 'content') captured.meta[key] = v; },
  });
  const document = {
    documentElement: { setAttribute() {}, lang: 'en' },
    body: { getAttribute: (a) => (a === 'data-use-case' ? caseId : null) },
    get title() { return captured.title; },
    set title(v) { captured.title = v; },
    getElementById(id) {
      if (id === 'case-root') {
        return { set innerHTML(v) { captured.body = v; }, get innerHTML() { return captured.body; } };
      }
      if (id === 'case-breadcrumb-schema') return node((v) => { captured.jsonld.breadcrumb = v; });
      if (id === 'case-faq-schema') return node((v) => { captured.jsonld.faq = v; });
      return null; // lang-sel / theme-toggle: not needed for static output
    },
    querySelector(sel) {
      if (sel.includes('name="description"')) return metaNode('description');
      if (sel.includes('og:title')) return metaNode('ogTitle');
      if (sel.includes('og:description')) return metaNode('ogDesc');
      if (sel.includes('twitter:title')) return metaNode('twTitle');
      if (sel.includes('twitter:description')) return metaNode('twDesc');
      return null;
    },
    // Only [data-ui] is shimmed. [data-lang-href] must stay unshimmed: render()
    // would rewrite those hrefs to "?lang=" form, clobbering the clean per-locale
    // paths that build-locales.mjs produces.
    querySelectorAll(sel) { return sel === '[data-ui]' ? uiProbes : []; },
  };
  const sandbox = {
    document,
    localStorage: { getItem: () => null, setItem() {} },
    navigator: { language: '' },
    location: { search: '', href: 'https://grab-all-files.app/use-cases/' },
    console,
  };
  sandbox.window = sandbox;
  sandbox.__FORCE_LANG__ = lang;
  sandbox.matchMedia = () => ({ matches: false });
  return { sandbox, captured };
}

/** Render every (case, locale) pair. Returns out[caseId][lang] = {...}. */
export function renderAll(locales) {
  const source = fs.readFileSync(SCRIPT, 'utf8');
  const script = new vm.Script(source, { filename: 'use-case.js' });
  const out = {};
  for (const caseId of CASE_IDS) {
    const pageHtml = fs.readFileSync(path.join(ROOT, 'use-cases', `${caseId}.html`), 'utf8');
    const uiKeys = uiKeysFromHtml(pageHtml);
    out[caseId] = {};
    for (const lang of locales) {
      const { sandbox, captured } = makeSandbox(caseId, lang, uiKeys);
      script.runInNewContext(sandbox);
      if (!captured.body) throw new Error(`prerender produced no body for ${caseId}/${lang}`);
      if (!captured.jsonld.faq) throw new Error(`prerender produced no FAQ JSON-LD for ${caseId}/${lang}`);
      if (!Object.keys(captured.ui).length) throw new Error(`prerender captured no data-ui strings for ${caseId}/${lang}`);
      out[caseId][lang] = {
        title: captured.title,
        desc: captured.meta.description || '',
        body: normalizeLinks(captured.body),
        breadcrumb: captured.jsonld.breadcrumb,
        faq: captured.jsonld.faq,
        ui: captured.ui,
      };
    }
  }
  return out;
}
