/* build-locales.mjs — generate per-locale static pages (/ja/, /es/, …) for the
 * indexable multilingual pages, so each language has a real self-canonical URL
 * with reciprocal hreflang (the ?lang= client switch cannot be indexed per-locale).
 *
 * Source of truth = the English root files (index.html, security.html,
 * use-cases/*.html). This script REGENERATES the /<locale>/ copies and also
 * rewrites the hreflang block on the English root files. Re-run it whenever the
 * content of those source pages changes:  node build-locales.mjs
 *
 * It is idempotent: it overwrites the generated files each run.
 */
import fs from 'node:fs';
import path from 'node:path';

const ROOT = 'c:/xampp/htdocs/grab-all-files';
const BASE = 'https://grab-all-files.app';

const LOCALES = ['ja', 'es', 'fr', 'de', 'it', 'ko', 'pt_BR', 'zh_CN', 'zh_TW']; // non-English
const ALL = ['en', ...LOCALES];
const BCP47 = { en: 'en', ja: 'ja', es: 'es', fr: 'fr', de: 'de', it: 'it', ko: 'ko', pt_BR: 'pt-BR', zh_CN: 'zh-CN', zh_TW: 'zh-TW' };
const OG = { en: 'en_US', ja: 'ja_JP', es: 'es_ES', fr: 'fr_FR', de: 'de_DE', it: 'it_IT', ko: 'ko_KR', pt_BR: 'pt_BR', zh_CN: 'zh_CN', zh_TW: 'zh_TW' };

// pages: src file (relative to ROOT), rel = path relative to a locale root ('' = home)
const PAGES = [
  { src: 'index.html', rel: '' },
  { src: 'security.html', rel: 'security.html' },
  { src: 'use-cases/bulk-download-images.html', rel: 'use-cases/bulk-download-images.html' },
  { src: 'use-cases/download-all-pdfs.html', rel: 'use-cases/download-all-pdfs.html' },
  { src: 'use-cases/download-files-from-webpage.html', rel: 'use-cases/download-files-from-webpage.html' },
  { src: 'use-cases/internal-portal-downloads.html', rel: 'use-cases/internal-portal-downloads.html' },
  { src: 'use-cases/merge-pdfs-locally.html', rel: 'use-cases/merge-pdfs-locally.html' },
];

// absolute root paths that HAVE per-locale versions (localized cross-links get a /<L>/ prefix)
const LOCALIZED = new Set([
  '/', '/security.html',
  '/use-cases/bulk-download-images.html', '/use-cases/download-all-pdfs.html',
  '/use-cases/download-files-from-webpage.html', '/use-cases/internal-portal-downloads.html',
  '/use-cases/merge-pdfs-locally.html',
]);

const url = (loc, rel) => loc === 'en' ? `${BASE}/${rel}` : `${BASE}/${loc}/${rel}`;

function hreflangBlock(rel) {
  const line = (code, loc) => `  <link rel="alternate" hreflang="${code}" href="${url(loc, rel)}">`;
  return [
    line('x-default', 'en'),
    ...ALL.map((l) => line(BCP47[l], l)),
  ].join('\n');
}

function rewritePaths(html, srcDir, L) {
  // Negative lookbehind so we DON'T match data-href / data-src (JS i18n/lazy attrs) —
  // only real href= / src= (preceded by whitespace or '<', never '-' or a word char).
  return html.replace(/(?<![-\w])((?:href|src)=)"([^"]*)"/g, (m, attr, v) => {
    if (/^(https?:|\/\/|#|mailto:|tel:|data:|javascript:)/i.test(v) || v === '') return m;
    let abs;
    if (v.startsWith('/')) abs = v;
    else abs = path.posix.normalize('/' + (srcDir ? srcDir + '/' : '') + v);
    let loc = abs === '/index.html' ? '/' : abs;
    let out;
    if (LOCALIZED.has(loc)) out = `/${L}${loc === '/' ? '/' : loc}`;
    else out = abs;
    return `${attr}"${out}"`;
  });
}

function genLocale(srcHtml, page, L) {
  let h = srcHtml;
  const self = url(L, page.rel);
  // 1) <html lang>
  h = h.replace(/<html lang="en">/, `<html lang="${BCP47[L]}">`);
  // 2) force locale + (later) navigate selector — inject __FORCE_LANG__ right after <head>
  h = h.replace(/<head>/, `<head>\n  <script>window.__FORCE_LANG__=${JSON.stringify(L)};</script>`);
  // 3) canonical -> self
  h = h.replace(/<link rel="canonical" href="[^"]*">/, `<link rel="canonical" href="${self}">`);
  // 4) hreflang block -> new structure
  h = h.replace(/[ \t]*<link rel="alternate" hreflang="x-default"[\s\S]*?<link rel="alternate" hreflang="zh-TW"[^>]*>/, hreflangBlock(page.rel));
  // 5) og:url + og:locale
  h = h.replace(/<meta property="og:url" content="[^"]*">/, `<meta property="og:url" content="${self}">`);
  h = h.replace(/<meta property="og:locale" content="en_US">/, `<meta property="og:locale" content="${OG[L]}">`);
  // some pages (security, use-cases) have no og:locale in source — add one after og:image
  if (!/property="og:locale"/.test(h)) {
    h = h.replace(/(<meta property="og:image"[^>]*>)/, `$1\n  <meta property="og:locale" content="${OG[L]}">`);
  }
  // 6) move static .active from en -> L (for no-JS crawlers)
  h = h.replace(/data-lang="en" class="active"/g, 'data-lang="en"');
  h = h.replace(new RegExp(`data-lang="${L}"(?![^>]*class=)`, 'g'), `data-lang="${L}" class="active"`);
  // 7) rewrite asset/link paths
  const srcDir = path.posix.dirname('/' + page.src).replace(/^\//, '');
  h = rewritePaths(h, srcDir === '.' ? '' : srcDir, L);
  // 8) selector navigates to sibling locale URLs
  const nav = `<script>(function(){var s=document.getElementById('lang-sel');if(!s)return;var R=${JSON.stringify(page.rel)};s.addEventListener('change',function(e){var c=e.target.value;location.href=(c==='en'?'/':'/'+c+'/')+R;},true);})();</script>`;
  h = h.replace(/<\/body>/, nav + '\n</body>');
  return h;
}

let genCount = 0, rootCount = 0;
for (const page of PAGES) {
  const srcPath = path.join(ROOT, page.src);
  const srcHtml = fs.readFileSync(srcPath, 'utf8');
  // per-locale copies
  for (const L of LOCALES) {
    const out = genLocale(srcHtml, page, L);
    const dest = path.join(ROOT, L, page.src);
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.writeFileSync(dest, out);
    genCount++;
  }
  // English root: just fix the hreflang block in place
  let en = srcHtml.replace(/[ \t]*<link rel="alternate" hreflang="x-default"[\s\S]*?<link rel="alternate" hreflang="zh-TW"[^>]*>/, hreflangBlock(page.rel));
  fs.writeFileSync(srcPath, en);
  rootCount++;
}
console.log(`Generated ${genCount} per-locale pages; updated ${rootCount} English root pages' hreflang.`);
