import fs from 'node:fs';

const locales = [
  { code: 'en', file: 'index.html', title: ['Bulk file download', 'web pages', 'HTML'], h1: ['Bulk-download files', 'web pages', 'HTML'] },
  { code: 'ja', file: 'ja/index.html', title: ['ファイル一括保存', 'Webページ', 'HTML'], h1: ['ファイル', '複数ページ', 'HTML'] },
  { code: 'es', file: 'es/index.html', title: ['Descarga masiva', 'páginas', 'HTML'], h1: ['Descarga archivos', 'páginas', 'HTML'] },
  { code: 'fr', file: 'fr/index.html', title: ['Téléchargement groupé', 'pages', 'HTML'], h1: ['fichiers', 'pages', 'HTML'] },
  { code: 'de', file: 'de/index.html', title: ['Stapel-Download', 'Webseiten', 'HTML'], h1: ['Dateien', 'Webseiten', 'HTML'] },
  { code: 'it', file: 'it/index.html', title: ['Download in blocco', 'pagine', 'HTML'], h1: ['file', 'pagine', 'HTML'] },
  { code: 'ko', file: 'ko/index.html', title: ['파일 일괄 저장', '여러 페이지', 'HTML'], h1: ['파일', '여러 페이지', 'HTML'] },
  { code: 'pt_BR', file: 'pt_BR/index.html', title: ['Download em lote', 'páginas', 'HTML'], h1: ['arquivos', 'páginas', 'HTML'] },
  { code: 'zh_CN', file: 'zh_CN/index.html', title: ['文件批量下载', '多网页', 'HTML'], h1: ['文件', '多个页面', 'HTML'] },
  { code: 'zh_TW', file: 'zh_TW/index.html', title: ['檔案批次下載', '多網頁', 'HTML'], h1: ['檔案', '多個頁面', 'HTML'] },
];

const failures = [];
const assert = (ok, message) => { if (!ok) failures.push(message); };
const text = (html) => html.replace(/<[^>]*>/g, '').replace(/&amp;/g, '&').trim();
const attr = (html, re) => (html.match(re) || [])[1] || '';

for (const locale of locales) {
  const html = fs.readFileSync(locale.file, 'utf8');
  const title = text(attr(html, /<title>([\s\S]*?)<\/title>/i));
  const description = attr(html, /<meta name="description" content="([^"]*)">/i);
  const h1s = [...html.matchAll(/<h1>([\s\S]*?)<\/h1>/gi)].map((m) => text(m[1]));
  const h1 = locale.code === 'en' ? h1s[0] : h1s[0] || '';
  const grids = [...html.matchAll(/<div class="tools-grid">([\s\S]*?)<\/div>/gi)].map((m) => m[1]);
  const grid = grids[0] || '';
  const how = attr(html, /<section class="block" id="how">([\s\S]*?)<\/section>/i);

  assert(title.length <= 70, `${locale.file}: title is over 70 characters (${title.length})`);
  assert(description.length >= 40 && description.length <= 180, `${locale.file}: meta description length is ${description.length}`);
  for (const term of locale.title) assert(title.includes(term), `${locale.file}: title is missing "${term}"`);
  for (const term of locale.h1) assert(h1.includes(term), `${locale.file}: H1 is missing "${term}"`);
  if (locale.code !== 'en') {
    assert(h1s.length === 1, `${locale.file}: expected one H1, found ${h1s.length}`);
    assert(grids.length === 1, `${locale.file}: expected one two-tool grid, found ${grids.length}`);
  }
  assert((grid.match(/class="tool-panel"/g) || []).length === 2, `${locale.file}: the core grid must contain two equal tool panels`);
  assert(grid.includes('use-cases/download-files-from-webpage.html'), `${locale.file}: missing bulk-download detail link in core grid`);
  assert(grid.includes('use-cases/combine-web-pages-into-one-html.html'), `${locale.file}: missing page-collector detail link in core grid`);
  const expectedWorkflowCount = locale.code === 'en' ? 20 : 2;
  const expectedStepGridCount = locale.code === 'en' ? 20 : 2;
  const expectedStepCount = locale.code === 'en' ? 60 : 6;
  assert((how.match(/class="workflow-title"/g) || []).length === expectedWorkflowCount, `${locale.file}: expected two workflow titles per visible language`);
  assert((how.match(/class="steps"/g) || []).length === expectedStepGridCount, `${locale.file}: expected two three-step workflow grids per visible language`);
  assert((how.match(/class="step"/g) || []).length === expectedStepCount, `${locale.file}: expected three steps for each of the two tools`);
  assert((html.match(/hreflang=/g) || []).length === 11, `${locale.file}: expected 11 hreflang links`);
  assert(html.includes('type="text/plain"') && html.includes('/llms.txt'), `${locale.file}: missing AI-readable summary link`);
  assert(!html.includes('5.3.11'), `${locale.file}: stale version 5.3.11 remains`);
  for (const staleClaim of ["best at one thing", "It isn't an all-in-one", "万能ツールではなく"]) {
    assert(!html.includes(staleClaim), `${locale.file}: old one-feature positioning remains: "${staleClaim}"`);
  }

  const schemas = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi)].map((m, i) => {
    try { return JSON.parse(m[1]); }
    catch (error) { failures.push(`${locale.file}: JSON-LD block ${i + 1} is invalid: ${error.message}`); return null; }
  }).filter(Boolean);
  const app = schemas.find((schema) => schema['@type'] === 'SoftwareApplication');
  const website = schemas.find((schema) => schema['@type'] === 'WebSite');
  assert(app?.hasPart?.length === 2, `${locale.file}: SoftwareApplication must describe two core tools in hasPart`);
  assert(app?.hasPart?.some((part) => part.name === 'Bulk File Download'), `${locale.file}: structured data is missing Bulk File Download`);
  assert(app?.hasPart?.some((part) => part.name === 'Web Page Collector'), `${locale.file}: structured data is missing Web Page Collector`);
  assert(website?.name === 'Grab All Files', `${locale.file}: WebSite structured data is missing the site name`);
  assert(website?.description?.includes('Bulk File Download') && website?.description?.includes('Web Page Collector'), `${locale.file}: WebSite structured data must describe both core tools`);
  assert(schemas.filter((schema) => schema['@type'] === 'HowTo').length === 2, `${locale.file}: expected one HowTo for each core tool`);
}

const llms = fs.readFileSync('llms.txt', 'utf8');
for (const required of [
  'two equally central tools',
  'Tool 1 — Bulk File Download',
  'Tool 2 — Web Page Collector',
  'describe both core tools',
  'download-files-from-webpage.html',
  'combine-web-pages-into-one-html.html',
  'default is 25 MB',
]) assert(llms.includes(required), `llms.txt: missing "${required}"`);

const robots = fs.readFileSync('robots.txt', 'utf8');
for (const required of ['ChatGPT-User', 'OAI-SearchBot', 'Claude-User', 'Google-Extended', 'Sitemap: https://grab-all-files.app/sitemap.xml']) {
  assert(robots.includes(required), `robots.txt: missing "${required}"`);
}

const sitemap = fs.readFileSync('sitemap.xml', 'utf8');
for (const locale of locales) {
  const prefix = locale.code === 'en' ? '' : `${locale.code}/`;
  for (const guide of ['download-files-from-webpage.html', 'combine-web-pages-into-one-html.html']) {
    const url = `https://grab-all-files.app/${prefix}use-cases/${guide}`;
    assert(sitemap.includes(`<loc>${url}</loc>`), `sitemap.xml: missing ${url}`);
  }
}

if (failures.length) {
  console.error(`Homepage SEO/balance check failed (${failures.length}):`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`Homepage SEO/balance check passed for ${locales.length} languages, both core tools, JSON-LD, llms.txt, robots.txt, and sitemap.xml.`);
