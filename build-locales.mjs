/* build-locales.mjs — generate per-locale static pages (/ja/, /es/, …) so each
 * language has a real self-canonical URL with reciprocal hreflang (the ?lang=
 * client switch cannot be indexed per-locale).
 *
 * Source of truth = the English root files. This script REGENERATES the
 * /<locale>/ copies and rewrites the hreflang block on the English root files.
 * Re-run whenever the content of a covered page changes:  node build-locales.mjs
 * It is idempotent (overwrites each run).
 *
 * COVERAGE: index.html + security.html + use-cases/*.html, all 10 locales.
 * security.html and use-cases render content AND build nav via JS; their nav was
 * refactored so LOCALIZED targets stay relative (resolve in-tree, e.g. "../" from
 * /ja/use-cases/ = /ja/) while SHARED targets are absolute (security.html
 * BASE_LINKS contact/privacy/terms/legal -> "/…"; use-case.js "/purchase/",
 * "/icon-512.png"). __FORCE_LANG__ (set per generated page) drives their JS i18n.
 *
 * SEO baking (added 2026-07-28):
 *  - use-case pages ship their body, title/description and JSON-LD as STATIC
 *    HTML via prerender-cases.mjs, so crawlers that do not execute JavaScript
 *    (most AI answer engines, which robots.txt + llms.txt explicitly invite)
 *    see the real content instead of a bare hero. use-case.js still runs and
 *    re-renders the same markup, so client behaviour is unchanged.
 *  - locale homepages get their <title>/<meta description>/og/twitter text from
 *    index.html's own META map, so the indexable metadata is in the page's own
 *    language rather than English-swapped-later-by-JS.
 *  - sitemap <lastmod> reflects the day the pages were actually generated.
 */
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { renderAll } from './prerender-cases.mjs';

const ROOT = 'c:/xampp/htdocs/grab-all-files';
const BASE = 'https://grab-all-files.app';

const LOCALES = ['ja', 'es', 'fr', 'de', 'it', 'ko', 'pt_BR', 'zh_CN', 'zh_TW']; // non-English
const ALL = ['en', ...LOCALES];
const BCP47 = { en: 'en', ja: 'ja', es: 'es', fr: 'fr', de: 'de', it: 'it', ko: 'ko', pt_BR: 'pt-BR', zh_CN: 'zh-CN', zh_TW: 'zh-TW' };
const OG = { en: 'en_US', ja: 'ja_JP', es: 'es_ES', fr: 'fr_FR', de: 'de_DE', it: 'it_IT', ko: 'ko_KR', pt_BR: 'pt_BR', zh_CN: 'zh_CN', zh_TW: 'zh_TW' };

const PAGES = [
  { src: 'index.html', rel: '' },
  { src: 'security.html', rel: 'security.html' },
  { src: 'use-cases/bulk-download-images.html', rel: 'use-cases/bulk-download-images.html' },
  { src: 'use-cases/download-all-pdfs.html', rel: 'use-cases/download-all-pdfs.html' },
  { src: 'use-cases/download-files-from-webpage.html', rel: 'use-cases/download-files-from-webpage.html' },
  { src: 'use-cases/internal-portal-downloads.html', rel: 'use-cases/internal-portal-downloads.html' },
  { src: 'use-cases/merge-pdfs-locally.html', rel: 'use-cases/merge-pdfs-locally.html' },
];

// absolute root paths that HAVE per-locale versions (localized cross-links get /<L>/ prefix).
// NOTE: use-case.js and use-cases/style.css are SHARED (not per-locale) and stay at /use-cases/.
const LOCALIZED = new Set([
  '/', '/security.html',
  '/use-cases/bulk-download-images.html', '/use-cases/download-all-pdfs.html',
  '/use-cases/download-files-from-webpage.html', '/use-cases/internal-portal-downloads.html',
  '/use-cases/merge-pdfs-locally.html',
]);

const url = (loc, rel) => loc === 'en' ? `${BASE}/${rel}` : `${BASE}/${loc}/${rel}`;

// NUL is used as the stash delimiter: it can never occur in real HTML source.
const NUL = '\u0000';

function hreflangBlock(rel) {
  const line = (code, loc) => `  <link rel="alternate" hreflang="${code}" href="${url(loc, rel)}">`;
  return [line('x-default', 'en'), ...ALL.map((l) => line(BCP47[l], l))].join('\n');
}

// Rewrite href/src paths to absolute root, localized targets prefixed /<L>/.
// Stashes only the *inner* content of <script>/<style> so inline JS/CSS is never
// touched, while the opening tag stays visible — an external <script src="…"> must
// still be made absolute, otherwise /<L>/use-cases/ pages resolve it against their
// own directory and 404 (which silently emptied every locale use-case page).
// Query strings and #fragments are split off before the LOCALIZED lookup, so
// "/#pricing" localizes to "/<L>/#pricing" instead of pointing back at English.
function rewritePaths(html, srcDir, L) {
  const stash = [];
  html = html.replace(/(<(script|style)\b[^>]*>)([\s\S]*?)(<\/\2>)/gi, (m, open, tag, body, close) => {
    stash.push(body);
    return `${open}${NUL}B${stash.length - 1}${NUL}${close}`;
  });
  html = html.replace(/(?<![-\w])((?:href|src)=)"([^"]*)"/g, (m, attr, v) => {
    if (v === '' || /^(https?:|\/\/|#|mailto:|tel:|data:|javascript:)/i.test(v)) return m;
    const cut = v.search(/[?#]/);
    const pathPart = cut >= 0 ? v.slice(0, cut) : v;
    const suffix = cut >= 0 ? v.slice(cut) : '';
    if (pathPart === '') return m;
    const abs = pathPart.startsWith('/') ? pathPart : path.posix.normalize('/' + (srcDir ? srcDir + '/' : '') + pathPart);
    const loc = abs === '/index.html' ? '/' : abs;
    const out = LOCALIZED.has(loc) ? `/${L}${loc === '/' ? '/' : loc}` : abs;
    return `${attr}"${out}${suffix}"`;
  });
  return html.replace(new RegExp(NUL + 'B(\\d+)' + NUL, 'g'), (m, i) => stash[+i]);
}

/* ---------- static content baking ---------- */

const attrEsc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const textEsc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
// "</script>" inside JSON-LD would close the block early; \u003c keeps it inert.
const jsonForScript = (s) => String(s).replace(/</g, '\\u003c');

// Always replace via a FUNCTION: baked copy contains "$19.99", and a string
// replacement would interpret "$1" as a capture-group reference and corrupt it.
function setMetaContent(html, selectorAttr, name, value) {
  const re = new RegExp(`(<meta ${selectorAttr}="${name}" content=")([^"]*)(">)`);
  return html.replace(re, (m, a, _old, c) => a + attrEsc(value) + c);
}

function bakeCase(html, data, L) {
  let h = html;
  h = h.replace(/<title>[\s\S]*?<\/title>/, () => `<title>${textEsc(data.title)}</title>`);
  h = setMetaContent(h, 'name', 'description', data.desc);
  h = setMetaContent(h, 'property', 'og:title', data.title);
  h = setMetaContent(h, 'property', 'og:description', data.desc);
  h = setMetaContent(h, 'name', 'twitter:title', data.title);
  h = setMetaContent(h, 'name', 'twitter:description', data.desc);

  // BreadcrumbList URLs are emitted against the English tree; point them at this locale.
  let breadcrumb = data.breadcrumb;
  if (L !== 'en') {
    breadcrumb = breadcrumb
      .split(`"${BASE}/use-cases/`).join(`"${BASE}/${L}/use-cases/`)
      .split(`"${BASE}/#use-cases"`).join(`"${BASE}/${L}/#use-cases"`)
      .split(`"${BASE}/"`).join(`"${BASE}/${L}/"`);
  }
  h = h.replace(/(<script id="case-breadcrumb-schema" type="application\/ld\+json">)[\s\S]*?(<\/script>)/,
    (m, a, b) => a + jsonForScript(breadcrumb) + b);
  h = h.replace(/(<script id="case-faq-schema" type="application\/ld\+json">)[\s\S]*?(<\/script>)/,
    (m, a, b) => a + jsonForScript(data.faq) + b);

  h = h.replace(/(<main id="case-root">)[\s\S]*?(<\/main>)/, (m, a, b) => a + '\n' + data.body + '\n  ' + b);
  return h;
}

// Locale homepages carried English <title>/<meta description> in the raw HTML and
// only swapped them in JS. Bake the page's own language in instead.
function localizeIndexMeta(html, L, META) {
  const m = META[L];
  if (!m) return html;
  let h = html.replace(/<title>[\s\S]*?<\/title>/, () => `<title>${textEsc(m.title)}</title>`);
  h = setMetaContent(h, 'name', 'description', m.desc);
  h = setMetaContent(h, 'property', 'og:title', m.title);
  h = setMetaContent(h, 'property', 'og:description', m.desc);
  h = setMetaContent(h, 'name', 'twitter:title', m.title);
  h = setMetaContent(h, 'name', 'twitter:description', m.desc);
  return h;
}

function extractIndexMeta(indexHtml) {
  const m = indexHtml.match(/var META = (\{[\s\S]*?\});\s*\n\s*var STORE_LINKS/);
  if (!m) throw new Error('could not extract the META map from index.html');
  return vm.runInNewContext('(' + m[1] + ')');
}

/* ---------- per-locale page generation ---------- */

function genLocale(srcHtml, page, L) {
  let h = srcHtml;
  const self = url(L, page.rel);
  h = h.replace(/<html lang="en">/, () => `<html lang="${BCP47[L]}">`);
  h = h.replace(/<head>/, () => `<head>\n  <script>window.__FORCE_LANG__=${JSON.stringify(L)};</script>`);
  h = h.replace(/<link rel="canonical"[^>]*>/, () => `<link rel="canonical" href="${self}">`);
  h = h.replace(/[ \t]*<link rel="alternate" hreflang="x-default"[\s\S]*?<link rel="alternate" hreflang="zh-TW"[^>]*>/, () => hreflangBlock(page.rel));
  h = h.replace(/<meta property="og:url"[^>]*>/, () => `<meta property="og:url" content="${self}">`);
  h = h.replace(/<meta property="og:locale" content="en_US">/, () => `<meta property="og:locale" content="${OG[L]}">`);
  if (!/property="og:locale"/.test(h)) h = h.replace(/(<meta property="og:image"[^>]*>)/, (m, a) => `${a}\n  <meta property="og:locale" content="${OG[L]}">`);
  // move static .active from en -> L (no-JS crawlers) — protect scripts
  const stash = [];
  h = h.replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1>/gi, (m) => { stash.push(m); return `${NUL}A${stash.length - 1}${NUL}`; });
  h = h.replace(/data-lang="en" class="active"/g, 'data-lang="en"');
  h = h.replace(new RegExp(`data-lang="${L}"(?![^>]*class=)`, 'g'), `data-lang="${L}" class="active"`);
  h = h.replace(new RegExp(NUL + 'A(\\d+)' + NUL, 'g'), (m, i) => stash[+i]);
  // rewrite paths (own script/style protection)
  const srcDir = path.posix.dirname('/' + page.src).replace(/^\//, '');
  h = rewritePaths(h, srcDir === '.' ? '' : srcDir, L);
  // selector navigates to sibling locale URLs
  const nav = `<script>(function(){var s=document.getElementById('lang-sel');if(!s)return;var R=${JSON.stringify(page.rel)};s.addEventListener('change',function(e){var c=e.target.value;location.href=(c==='en'?'/':'/'+c+'/')+R;},true);})();</script>`;
  h = h.replace(/<\/body>/, () => nav + '\n</body>');
  return h;
}

/* ---------- run ---------- */

const CASE_ID_BY_SRC = {};
for (const page of PAGES) {
  const m = page.src.match(/^use-cases\/(.+)\.html$/);
  if (m) CASE_ID_BY_SRC[page.src] = m[1];
}
const prerendered = renderAll(ALL);
const META = extractIndexMeta(fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8'));

let genCount = 0, rootCount = 0, bakedCount = 0;
for (const page of PAGES) {
  const srcPath = path.join(ROOT, page.src);
  const srcHtml = fs.readFileSync(srcPath, 'utf8');
  const caseId = CASE_ID_BY_SRC[page.src];
  for (const L of LOCALES) {
    let base = srcHtml;
    if (caseId) { base = bakeCase(base, prerendered[caseId][L], L); bakedCount++; }
    let out = genLocale(base, page, L);
    if (page.rel === '') out = localizeIndexMeta(out, L, META);
    const dest = path.join(ROOT, L, page.src);
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.writeFileSync(dest, out);
    genCount++;
  }
  let en = srcHtml.replace(/[ \t]*<link rel="alternate" hreflang="x-default"[\s\S]*?<link rel="alternate" hreflang="zh-TW"[^>]*>/, () => hreflangBlock(page.rel));
  if (caseId) { en = bakeCase(en, prerendered[caseId].en, 'en'); bakedCount++; }
  fs.writeFileSync(srcPath, en);
  rootCount++;
}
console.log(`Generated ${genCount} per-locale pages; updated ${rootCount} English root page(s)' hreflang.`);
console.log(`Baked static body + JSON-LD into ${bakedCount} use-case page(s).`);

// Regenerate sitemap.xml — every page-version as its own <url> with the full
// xhtml:link alternate set (Google's recommended hreflang-sitemap form). Covers
// exactly the indexable multilingual pages (PAGES); noindex pages stay out.
function smAlternates(rel) {
  const l = [`    <xhtml:link rel="alternate" hreflang="x-default" href="${url('en', rel)}" />`];
  for (const c of ALL) l.push(`    <xhtml:link rel="alternate" hreflang="${BCP47[c]}" href="${url(c, rel)}" />`);
  return l.join('\n');
}
// These pages are rewritten by this run, so "today" is their true last-modified
// date. Use the LOCAL date (the site is maintained in JST); toISOString() would
// report the previous day for most of the working day.
const now = new Date();
const LASTMOD = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
const entries = [];
for (const page of PAGES) {
  for (const c of ALL) {
    const pri = page.rel === '' ? (c === 'en' ? '1.0' : '0.9') : (c === 'en' ? '0.8' : '0.7');
    entries.push(`  <url>\n    <loc>${url(c, page.rel)}</loc>\n    <lastmod>${LASTMOD}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>${pri}</priority>\n${smAlternates(page.rel)}\n  </url>`);
  }
}
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n        xmlns:xhtml="http://www.w3.org/1999/xhtml">\n\n${entries.join('\n\n')}\n\n</urlset>\n`;
fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), sitemap);
console.log(`Wrote sitemap.xml with ${entries.length} per-locale URLs (lastmod ${LASTMOD}).`);
