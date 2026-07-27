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

function makeSandbox(caseId, lang) {
  const captured = { title: '', meta: {}, body: '', jsonld: {} };
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
    querySelectorAll() { return []; }, // [data-ui] / [data-lang-href] are static in the HTML
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
    out[caseId] = {};
    for (const lang of locales) {
      const { sandbox, captured } = makeSandbox(caseId, lang);
      script.runInNewContext(sandbox);
      if (!captured.body) throw new Error(`prerender produced no body for ${caseId}/${lang}`);
      if (!captured.jsonld.faq) throw new Error(`prerender produced no FAQ JSON-LD for ${caseId}/${lang}`);
      out[caseId][lang] = {
        title: captured.title,
        desc: captured.meta.description || '',
        body: normalizeLinks(captured.body),
        breadcrumb: captured.jsonld.breadcrumb,
        faq: captured.jsonld.faq,
      };
    }
  }
  return out;
}
