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
import { renderAll, getTables, CASE_IDS } from './prerender-cases.mjs';
import { renderAll as renderSecurity } from './prerender-security.mjs';

const ROOT = 'c:/xampp/htdocs/grab-all-files';
const BASE = 'https://grab-all-files.app';

const LOCALES = ['ja', 'es', 'fr', 'de', 'it', 'ko', 'pt_BR', 'zh_CN', 'zh_TW']; // non-English
const ALL = ['en', ...LOCALES];
const BCP47 = { en: 'en', ja: 'ja', es: 'es', fr: 'fr', de: 'de', it: 'it', ko: 'ko', pt_BR: 'pt-BR', zh_CN: 'zh-CN', zh_TW: 'zh-TW' };
const OG = { en: 'en_US', ja: 'ja_JP', es: 'es_ES', fr: 'fr_FR', de: 'de_DE', it: 'it_IT', ko: 'ko_KR', pt_BR: 'pt_BR', zh_CN: 'zh_CN', zh_TW: 'zh_TW' };

const PAGES = [
  { src: 'index.html', rel: '' },
  { src: 'security.html', rel: 'security.html' },
  { src: 'use-cases/index.html', rel: 'use-cases/' },
  { src: 'use-cases/combine-web-pages-into-one-html.html', rel: 'use-cases/combine-web-pages-into-one-html.html' },
  { src: 'use-cases/bulk-download-images.html', rel: 'use-cases/bulk-download-images.html' },
  { src: 'use-cases/download-all-pdfs.html', rel: 'use-cases/download-all-pdfs.html' },
  { src: 'use-cases/download-files-from-webpage.html', rel: 'use-cases/download-files-from-webpage.html' },
  { src: 'use-cases/internal-portal-downloads.html', rel: 'use-cases/internal-portal-downloads.html' },
  { src: 'use-cases/merge-pdfs-locally.html', rel: 'use-cases/merge-pdfs-locally.html' },
];

// absolute root paths that HAVE per-locale versions (localized cross-links get /<L>/ prefix).
// NOTE: use-case.js and use-cases/style.css are SHARED (not per-locale) and stay at /use-cases/.
const LOCALIZED = new Set([
  '/', '/security.html', '/use-cases/',
  '/use-cases/combine-web-pages-into-one-html.html',
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

function localizeUseCaseChrome(html, ui) {
  let h = html;
  h = h.replace(/(<a class="skip-link"[^>]*>)[\s\S]*?(<\/a>)/, (m, a, b) => a + textEsc(ui.skip) + b);
  h = h.replace(/(<nav class="nav-links" aria-label=")[^"]*(")/, (m, a, b) => a + attrEsc(ui.primaryNav) + b);
  h = h.replace(/(<button\b(?=[^>]*\bid="theme-toggle")[^>]*\baria-label=")[^"]*(")/, (m, a, b) => a + attrEsc(ui.themeToggle) + b);
  h = h.replace(/(<select\b(?=[^>]*\bid="lang-sel")[^>]*\baria-label=")[^"]*(")/, (m, a, b) => a + attrEsc(ui.languageLabel) + b);
  return setMetaContent(h, 'property', 'og:image:alt', 'Grab All Files');
}

function bakeCase(html, data, L, ui) {
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

  // The topbar/footer/CTA chrome lives OUTSIDE #case-root and is localized at
  // runtime through [data-ui]. Bake those strings too, or a JS-less crawler gets
  // a Japanese <main> wrapped in an English shell under <html lang="ja">.
  for (const [key, text] of Object.entries(data.ui || {})) {
    const re = new RegExp(`(<[^<>]*\\sdata-ui="${key}"[^<>]*>)([^<]*)`, 'g');
    h = h.replace(re, (m, open) => open + textEsc(text));
  }
  return localizeUseCaseChrome(h, ui);
}

/* security.html renders its body through #security-root.innerHTML and swaps the
 * chrome via [data-ui], so every locale copy used to ship the whole English page
 * under <html lang="xx">. Bake the locale's own text in, exactly as bakeCase does
 * for the use-case pages, and fill the BreadcrumbList (the page carried no
 * structured data at all before). */
function bakeSecurity(html, data, L) {
  let h = html;
  h = h.replace(/<title>[\s\S]*?<\/title>/, () => `<title>${textEsc(data.title)}</title>`);
  h = setMetaContent(h, 'name', 'description', data.desc);
  h = setMetaContent(h, 'property', 'og:title', data.title);
  h = setMetaContent(h, 'property', 'og:description', data.desc);
  h = setMetaContent(h, 'name', 'twitter:title', data.title);
  h = setMetaContent(h, 'name', 'twitter:description', data.desc);

  const site = L === 'en' ? `${BASE}/` : `${BASE}/${L}/`;
  const breadcrumb = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Grab All Files', item: site },
      { '@type': 'ListItem', position: 2, name: data.title.split('|')[0].trim(), item: `${site}security.html` },
    ],
  });
  h = h.replace(/(<script id="security-breadcrumb-schema" type="application\/ld\+json">)[\s\S]*?(<\/script>)/,
    (m, a, b) => a + jsonForScript(breadcrumb) + b);

  h = h.replace(/(<main id="security-root">)[\s\S]*?(<\/main>)/, (m, a, b) => a + '\n' + data.body + '\n  ' + b);

  for (const [key, text] of Object.entries(data.ui || {})) {
    const re = new RegExp(`(<[^<>]*\\sdata-ui="${key}"[^<>]*>)([^<]*)`, 'g');
    h = h.replace(re, (m, open) => open + textEsc(text));
  }
  if (data.footer) {
    h = h.replace(/(<p id="footer-copy">)([^<]*)/, (m, open) => open + textEsc(data.footer));
  }
  return h;
}

/* The /use-cases/ hub: a real parent page for the use-case guides, which previously
 * had no parent at all (their breadcrumb pointed at a "#use-cases" anchor on the
 * homepage). Fully generated — every string comes from use-case.js's own tables
 * and the prerendered per-case metadata, so no new translations are invented. */
// The language-selector script is stripped and re-added on every bake. Guarding
// with an "already present?" check is what let it accumulate once (the probe
// string was case-sensitive and never matched getElementById); removing first is
// unconditional and keeps the build idempotent.
const LANG_NAV_RE = /\n?<script>\(function\(\)\{var s=document\.getElementById\('lang-sel'\);[\s\S]*?<\/script>/g;
const FORCE_LANG_RE = /\n?[ \t]*<script>window\.__FORCE_LANG__="[^"]+";<\/script>/g;
const localeNavScript = (rel) => `<script>(function(){var s=document.getElementById('lang-sel');if(!s)return;var R=${JSON.stringify(rel)};s.addEventListener('change',function(e){var c=e.target.value;location.href=(c==='en'?'/':'/'+c+'/')+R;},true);})();</script>`;

function bakeHub(html, lang, tables, cases) {
  const ui = tables.UI[lang] || tables.UI.en;
  const labels = tables.GUIDE_LABELS[lang] || tables.GUIDE_LABELS.en;
  const order = tables.GUIDE_ORDER;
  const title = `${ui.useCases} | Grab All Files`;
  const desc = order.map((id) => labels[id]).join(' · ');
  const guideUrl = (id) => `/use-cases/${id}.html`;

  let h = html.replace(LANG_NAV_RE, '');
  h = h.replace(/<title>[\s\S]*?<\/title>/, () => `<title>${textEsc(title)}</title>`);
  h = setMetaContent(h, 'name', 'description', desc);
  h = setMetaContent(h, 'property', 'og:title', title);
  h = setMetaContent(h, 'property', 'og:description', desc);
  h = setMetaContent(h, 'name', 'twitter:title', title);
  h = setMetaContent(h, 'name', 'twitter:description', desc);

  const site = lang === 'en' ? `${BASE}/` : `${BASE}/${lang}/`;
  const hubUrl = `${site}use-cases/`;
  const breadcrumb = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Grab All Files', item: site },
      { '@type': 'ListItem', position: 2, name: ui.useCases, item: hubUrl },
    ],
  });
  const itemList = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: ui.useCases,
    inLanguage: lang.replace('_', '-'),
    itemListElement: order.map((id, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: labels[id],
      url: `${site}use-cases/${id}.html`,
    })),
  });
  h = h.replace(/(<script id="hub-breadcrumb-schema" type="application\/ld\+json">)[\s\S]*?(<\/script>)/, (m, a, b) => a + jsonForScript(breadcrumb) + b);
  h = h.replace(/(<script id="hub-itemlist-schema" type="application\/ld\+json">)[\s\S]*?(<\/script>)/, (m, a, b) => a + jsonForScript(itemList) + b);

  const cards = order.map((id) => {
    const meta = cases[id] && cases[id][lang];
    const blurb = meta ? meta.desc : '';
    return `        <section class="section-card"><h2><a href="${guideUrl(id)}">${textEsc(labels[id])}</a></h2><p>${textEsc(blurb)}</p></section>`;
  }).join('\n');

  const body = [
    '    <section class="case-hero">',
    '      <div>',
    `        <a class="breadcrumb" href="/">← ${textEsc(ui.home)}</a>`,
    `        <h1>${textEsc(ui.useCases)}</h1>`,
    `        <p class="lead">${textEsc(desc)}</p>`,
    '      </div>',
    '    </section>',
    '    <div class="section-stack">',
    '      <div class="two-col">',
    cards,
    '      </div>',
    '    </div>',
    `    <section class="final-cta"><h2>${textEsc(ui.ctaTitle)}</h2><p>${textEsc(ui.ctaText)}</p><div class="final-dl">` +
      `<a class="store-btn" href="${tables.STORE.chrome}" target="_blank" rel="noopener">${textEsc(ui.dlChrome)}</a>` +
      `<a class="store-btn" href="${tables.STORE.edge}" target="_blank" rel="noopener">${textEsc(ui.dlEdge)}</a>` +
      `<a class="store-btn" href="${tables.STORE.firefox}" target="_blank" rel="noopener">${textEsc(ui.dlFirefox)}</a>` +
      '</div></section>',
  ].join('\n');
  h = h.replace(/(<main id="hub-root">)[\s\S]*?(<\/main>)/, (m, a, b) => `${a}\n${body}\n  ${b}`);

  for (const [key, text] of Object.entries(ui)) {
    const re = new RegExp(`(<[^<>]*\\sdata-ui="${key}"[^<>]*>)([^<]*)`, 'g');
    h = h.replace(re, (m, open) => open + textEsc(text));
  }
  // The hub has no client-side i18n script to sync the selector, so mark the
  // current locale statically — otherwise /ja/use-cases/ shows "English".
  h = h.replace(/<option value="([^"]*)"( selected)?>/g, (m, v) => `<option value="${v}"${v === lang ? ' selected' : ''}>`);
  return localizeUseCaseChrome(h, ui);
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

/* index.html carries all ten languages inline as <span|div data-lang="xx"> and
 * hides the inactive nine with CSS. On a /<L>/ page the other nine are dead
 * weight: ~268KB per document, ten <h1> elements, and ten languages of body copy
 * on a URL whose hreflang promises one. Strip them.
 *
 * Safe because the markup was checked first: only span/div carry data-lang, none
 * are void or self-closing, and no data-lang element contains another. Scripts,
 * styles and comments are stashed so their contents can't be mistaken for tags.
 * The English root keeps all ten — "/" still switches in place and honours
 * "?lang=", which real links use. Locale pages force their own language
 * (__FORCE_LANG__ outranks ?lang=), so nothing there needs the other nine.
 */
function stripOtherLanguages(html, L) {
  const stash = [];
  const h = html.replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1>|<!--[\s\S]*?-->/gi, (m) => {
    stash.push(m);
    return `${NUL}S${stash.length - 1}${NUL}`;
  });

  const openRe = /<(span|div)\b[^>]*\sdata-lang="([^"]+)"[^>]*>/i;
  let out = '';
  let rest = h;
  let guard = 0;
  for (;;) {
    const m = rest.match(openRe);
    if (!m) { out += rest; break; }
    if (++guard > 5000) throw new Error('stripOtherLanguages: runaway scan');
    const tag = m[1].toLowerCase();
    const scan = new RegExp(`<${tag}\\b[^>]*>|</${tag}\\s*>`, 'gi');
    scan.lastIndex = m.index;
    let depth = 0, end = -1, s;
    while ((s = scan.exec(rest))) {
      if (s[0][1] === '/') { depth--; if (depth === 0) { end = s.index + s[0].length; break; } }
      else depth++;
    }
    if (end < 0) throw new Error(`stripOtherLanguages: unbalanced <${tag} data-lang="${m[2]}">`);
    out += m[2] === L ? rest.slice(0, end) : rest.slice(0, m.index);
    rest = rest.slice(end);
  }
  return out.replace(new RegExp(NUL + 'S(\\d+)' + NUL, 'g'), (mm, i) => stash[+i]);
}

/* ---------- per-locale page generation ---------- */

function genLocale(srcHtml, page, L) {
  let h = srcHtml.replace(FORCE_LANG_RE, '').replace(LANG_NAV_RE, '');
  const self = url(L, page.rel);
  h = h.replace(/<html lang="en">/, () => `<html lang="${BCP47[L]}">`);
  h = h.replace(/<head>/, () => `<head>\n  <script>window.__FORCE_LANG__=${JSON.stringify(L)};</script>`);
  h = h.replace(/<link rel="canonical"[^>]*>/, () => `<link rel="canonical" href="${self}">`);
  h = h.replace(/[ \t]*<link rel="alternate" hreflang="x-default"[\s\S]*?<link rel="alternate" hreflang="zh-TW"[^>]*>/, () => hreflangBlock(page.rel));
  h = h.replace(/<meta property="og:url"[^>]*>/, () => `<meta property="og:url" content="${self}">`);
  h = h.replace(/<meta property="og:locale" content="en_US">/, () => `<meta property="og:locale" content="${OG[L]}">`);
  if (!/property="og:locale"/.test(h)) h = h.replace(/(<meta property="og:image"[^>]*>)/, (m, a) => `${a}\n  <meta property="og:locale" content="${OG[L]}">`);
  // og:locale:alternate must list the OTHER locales. The English source lists the
  // nine non-English ones; copying that run verbatim made /ja/ advertise ja_JP as
  // its own alternate while omitting en_US. Rebuild it as ALL minus this locale.
  if (/og:locale:alternate/.test(h)) {
    const alts = ALL.filter((x) => x !== L).map((x) => `  <meta property="og:locale:alternate" content="${OG[x]}">`).join('\n');
    h = h.replace(/[ \t]*<meta property="og:locale:alternate"[^>]*>(?:\s*<meta property="og:locale:alternate"[^>]*>)*/, () => alts);
  }
  // drop the nine other languages (index.html is the only page built this way)
  // GAF_NO_STRIP=1 builds the unstripped page, so you can capture a locale's
  // document.body.innerText in a browser and prove the strip changed nothing
  // visible. Verified that way for ja, de and ko.
  if (!process.env.GAF_NO_STRIP && /\sdata-lang="/.test(h)) h = stripOtherLanguages(h, L);
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
  h = h.replace(/<\/body>/, () => localeNavScript(page.rel) + '\n</body>');
  return h;
}

/* ---------- run ---------- */

const CASE_ID_BY_SRC = {};
for (const page of PAGES) {
  const m = page.src.match(/^use-cases\/(.+)\.html$/);
  // use-cases/index.html is the hub, not a case — it has no entry in CASE_IDS.
  if (m && CASE_IDS.includes(m[1])) CASE_ID_BY_SRC[page.src] = m[1];
}
const HUB_SRC = 'use-cases/index.html';
const SEC_SRC = 'security.html';
const prerendered = renderAll(ALL);
const prerenderedSecurity = renderSecurity(ALL);
const tables = getTables();
const META = extractIndexMeta(fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8'));

// Previous <lastmod> per URL, read back from the sitemap we wrote last time.
// A page keeps its old date unless its bytes actually changed — stamping all 70
// URLs with the build date on every run is a freshness signal Google discounts.
function previousLastmod() {
  const map = new Map();
  try {
    const xml = fs.readFileSync(path.join(ROOT, 'sitemap.xml'), 'utf8');
    for (const m of xml.matchAll(/<loc>([^<]*)<\/loc>\s*<lastmod>([^<]*)<\/lastmod>/g)) map.set(m[1], m[2]);
  } catch (_) { /* first run */ }
  return map;
}
const PREV = previousLastmod();
const now = new Date();
const TODAY = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
const lastmodFor = new Map();

function writeIfChanged(dest, content) {
  let old = null;
  try { old = fs.readFileSync(dest, 'utf8'); } catch (_) { /* new file */ }
  if (old === content) return false;
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, content);
  return true;
}

let genCount = 0, rootCount = 0, bakedCount = 0, changedCount = 0, hubCount = 0, secCount = 0;
for (const page of PAGES) {
  const srcPath = path.join(ROOT, page.src);
  const srcHtml = fs.readFileSync(srcPath, 'utf8');
  const caseId = CASE_ID_BY_SRC[page.src];
  for (const L of LOCALES) {
    let base = srcHtml;
    if (caseId) { base = bakeCase(base, prerendered[caseId][L], L, tables.UI[L]); bakedCount++; }
    if (page.src === HUB_SRC) { base = bakeHub(base, L, tables, prerendered); hubCount++; }
    if (page.src === SEC_SRC) { base = bakeSecurity(base, prerenderedSecurity[L], L); secCount++; }
    let out = genLocale(base, page, L);
    if (page.rel === '') out = localizeIndexMeta(out, L, META);
    const dest = path.join(ROOT, L, page.src);
    const changed = writeIfChanged(dest, out);
    const u = url(L, page.rel);
    lastmodFor.set(u, changed ? TODAY : (PREV.get(u) || TODAY));
    if (changed) changedCount++;
    genCount++;
  }
  let en = srcHtml
    .replace(FORCE_LANG_RE, '')
    .replace(LANG_NAV_RE, '')
    .replace(/[ \t]*<link rel="alternate" hreflang="x-default"[\s\S]*?<link rel="alternate" hreflang="zh-TW"[^>]*>/, () => hreflangBlock(page.rel));
  if (caseId) { en = bakeCase(en, prerendered[caseId].en, 'en', tables.UI.en); bakedCount++; }
  if (page.src === SEC_SRC) { en = bakeSecurity(en, prerenderedSecurity.en, 'en'); secCount++; }
  if (page.src === HUB_SRC) {
    en = bakeHub(en, 'en', tables, prerendered); hubCount++;
    // genLocale adds this for the /<L>/ copies; the English hub needs its own.
    en = en.replace(/<\/body>/, () => localeNavScript('use-cases/') + '\n</body>');
  }
  // English case/security URLs are self-canonical English pages. Keep their
  // rendered language fixed and navigate the selector to the matching locale
  // URL, instead of swapping only the body while leaving English SEO metadata.
  if (caseId || page.src === SEC_SRC) {
    en = en.replace(/<head>/, () => '<head>\n  <script>window.__FORCE_LANG__="en";</script>');
    en = en.replace(/<\/body>/, () => localeNavScript(page.rel) + '\n</body>');
  }
  const enChanged = writeIfChanged(srcPath, en);
  const enUrl = url('en', page.rel);
  lastmodFor.set(enUrl, enChanged ? TODAY : (PREV.get(enUrl) || TODAY));
  if (enChanged) changedCount++;
  rootCount++;
}
console.log(`Generated ${genCount} per-locale pages; updated ${rootCount} English root page(s)' hreflang.`);
console.log(`Baked static body + JSON-LD into ${bakedCount} use-case page(s); generated ${hubCount} hub page(s); localized ${secCount} security page(s).`);
console.log(`${changedCount} page(s) changed this run (their sitemap lastmod becomes ${TODAY}).`);

// Regenerate sitemap.xml — every page-version as its own <url> with the full
// xhtml:link alternate set (Google's recommended hreflang-sitemap form). Covers
// exactly the indexable multilingual pages (PAGES); noindex pages stay out.
function smAlternates(rel) {
  const l = [`    <xhtml:link rel="alternate" hreflang="x-default" href="${url('en', rel)}" />`];
  for (const c of ALL) l.push(`    <xhtml:link rel="alternate" hreflang="${BCP47[c]}" href="${url(c, rel)}" />`);
  return l.join('\n');
}
// lastmod is per URL: TODAY only for pages whose bytes changed this run, else the
// date carried over from the previous sitemap (see lastmodFor / previousLastmod).
const entries = [];
for (const page of PAGES) {
  for (const c of ALL) {
    const pri = page.rel === '' ? (c === 'en' ? '1.0' : '0.9') : (c === 'en' ? '0.8' : '0.7');
    const u = url(c, page.rel);
    entries.push(`  <url>\n    <loc>${u}</loc>\n    <lastmod>${lastmodFor.get(u) || TODAY}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>${pri}</priority>\n${smAlternates(page.rel)}\n  </url>`);
  }
}
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n        xmlns:xhtml="http://www.w3.org/1999/xhtml">\n\n${entries.join('\n\n')}\n\n</urlset>\n`;
fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), sitemap);
const dates = [...new Set(entries.map((e) => e.match(/<lastmod>([^<]*)</)[1]))].sort();
console.log(`Wrote sitemap.xml with ${entries.length} per-locale URLs (lastmod: ${dates.join(', ')}).`);
