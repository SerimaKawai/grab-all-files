import fs from 'node:fs';

const locales = [
  { code: 'en', file: 'index.html', title: ['Bulk file download', 'web pages', 'HTML'], h1: ['Bulk-download files', 'web pages', 'HTML'] },
  { code: 'ja', file: 'ja/index.html', title: ['ファイル一括保存', 'Webページ', 'HTML'], h1: ['ファイル', '複数ページ', 'HTML'] },
  { code: 'es', file: 'es/index.html', title: ['Descarga masiva', 'páginas', 'HTML'], h1: ['Descarga archivos', 'páginas', 'HTML'] },
  { code: 'fr', file: 'fr/index.html', title: ['Téléchargement groupé', 'pages', 'HTML'], h1: ['fichiers', 'pages', 'HTML'] },
  { code: 'de', file: 'de/index.html', title: ['Stapel-Download', 'Webseiten', 'HTML'], h1: ['Dateien', 'Webseiten', 'HTML'] },
  { code: 'it', file: 'it/index.html', title: ['Download in blocco', 'pagine', 'HTML'], h1: ['file', 'pagine', 'HTML'] },
  { code: 'ko', file: 'ko/index.html', title: ['파일 일괄 저장', '웹페이지', 'HTML'], h1: ['파일', '여러 페이지', 'HTML'] },
  { code: 'pt_BR', file: 'pt_BR/index.html', title: ['Download em lote', 'páginas', 'HTML'], h1: ['arquivos', 'páginas', 'HTML'] },
  { code: 'zh_CN', file: 'zh_CN/index.html', title: ['文件批量下载', '网页', 'HTML'], h1: ['文件', '多个页面', 'HTML'] },
  { code: 'zh_TW', file: 'zh_TW/index.html', title: ['檔案批次下載', '網頁', 'HTML'], h1: ['檔案', '多個頁面', 'HTML'] },
];

const planTerms = {
  en: ['Choose exactly 1 candidate', 'Select multiple related candidates'],
  ja: ['候補から常に1ページだけ', '複数の関連候補ページ'],
  es: ['Elige exactamente 1 candidata', 'Selecciona varias páginas relacionadas'],
  fr: ['Choisissez exactement 1 candidate', 'Sélectionnez plusieurs pages associées'],
  de: ['Genau 1 Kandidaten', 'Mehrere zugehörige Seiten'],
  it: ['Scegli esattamente 1 candidata', 'Seleziona più pagine correlate'],
  ko: ['후보 중 정확히 1개', '여러 관련 후보 페이지'],
  pt_BR: ['Escolha exatamente 1 candidata', 'Selecione várias páginas relacionadas'],
  zh_CN: ['候选中始终只选 1 页', '选择多个相关候选页面'],
  zh_TW: ['候選中始終只選 1 頁', '選擇多個相關候選頁面'],
};

const combineHeadlines = {
  en: 'Free saves 1 page. Pro combines multiple pages',
  ja: '無料は1ページ保存。Proは複数ページ',
  es: 'Free guarda 1 página. Pro combina varias',
  fr: 'Free enregistre 1 page. Pro en regroupe plusieurs',
  de: 'Free speichert 1 Seite. Pro bündelt mehrere Seiten',
  it: 'Free salva 1 pagina. Pro ne unisce più',
  ko: 'Free는 1페이지 저장. Pro는 여러 페이지',
  pt_BR: 'Free salva 1 página. Pro reúne várias',
  zh_CN: 'Free 保存1页。Pro 将多页合并',
  zh_TW: 'Free 儲存1頁。Pro 將多頁合併',
};

const stalePlanClaims = [
  'every feature is included', 'every feature included', 'every feature is free', 'all features are free',
  'all selected pages in one collection', 'pauses every 10 pages', '10-page confirmations',
  '全機能を利用可能', '全機能を無料', 'すべての機能を無料', '選択した全ページを同じ収集', '10ページごと',
  'todas las funciones', 'toutes les fonctionnalités sont gratuites', 'alle Funktionen sind kostenlos',
  'ogni funzionalità è gratuita', '모든 기능이 무료', 'todos os recursos são gratuitos',
  '所有功能均免费', '所有功能均免費',
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
  const screenshotGroups = [...html.matchAll(/<div class="product-shots[^"]*" data-lang="([^"]+)">([\s\S]*?)<\/div>/gi)];
  const screenshotGroup = screenshotGroups.find((group) => group[1] === locale.code)?.[2] || '';
  const pricing = attr(html, /<section class="block alt" id="pricing">([\s\S]*?)<\/section>/i);

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
  assert(screenshotGroups.length === (locale.code === 'en' ? 10 : 1), `${locale.file}: expected one localized two-tool screenshot group per available language`);
  assert((screenshotGroup.match(/class="product-shot"/g) || []).length === 2, `${locale.file}: visible screenshot group must contain two equal product screenshots`);
  assert(screenshotGroup.includes(`shot-${locale.code}.jpg`) && screenshotGroup.includes(`shot-${locale.code}.webp`), `${locale.file}: missing localized Bulk File Download screenshot sources`);
  assert(screenshotGroup.includes(`collector-${locale.code}.jpg`) && screenshotGroup.includes(`collector-${locale.code}.webp`), `${locale.file}: missing localized Web Page Collector screenshot sources`);
  assert((screenshotGroup.match(/width="1600" height="1429"/g) || []).length === 2, `${locale.file}: both screenshots must reserve the same 1600x1429 layout`);
  assert((screenshotGroup.match(/<figcaption><strong>/g) || []).length === 2, `${locale.file}: both screenshots need visible tool labels and captions`);
  const expectedPlanCards = locale.code === 'en' ? 20 : 2;
  assert((pricing.match(/class="plan-card /g) || []).length === expectedPlanCards, `${locale.file}: pricing must show one Free card and one Pro card per available language`);
  assert(pricing.includes('plan-free') && pricing.includes('plan-pro'), `${locale.file}: pricing is missing the explicit Free/Pro comparison`);
  assert(pricing.includes('$19.99'), `${locale.file}: Pro one-time price is missing`);
  for (const term of planTerms[locale.code]) assert(pricing.includes(term), `${locale.file}: pricing is missing plan boundary "${term}"`);
  assert((html.match(/hreflang=/g) || []).length === 11, `${locale.file}: expected 11 hreflang links`);
  assert(html.includes('type="text/plain"') && html.includes('/llms.txt'), `${locale.file}: missing AI-readable summary link`);
  assert(!html.includes('5.3.11'), `${locale.file}: stale version 5.3.11 remains`);
  for (const staleClaim of stalePlanClaims) assert(!html.toLowerCase().includes(staleClaim.toLowerCase()), `${locale.file}: stale plan claim remains: "${staleClaim}"`);
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
  assert(app?.softwareVersion === '5.6.14', `${locale.file}: SoftwareApplication version must be 5.6.14`);
  assert(app?.author?.name === 'Tetsunobu Kawai', `${locale.file}: SoftwareApplication author must identify the Developer, Tetsunobu Kawai`);
  assert(Array.isArray(app?.screenshot) && app.screenshot.length === 2, `${locale.file}: SoftwareApplication must expose screenshots for both core tools`);
  assert(app?.screenshot?.some((shot) => shot.url?.endsWith('/shot-en.jpg') && shot.caption?.includes('Bulk File Download')), `${locale.file}: structured data is missing the Bulk File Download screenshot`);
  assert(app?.screenshot?.some((shot) => shot.url?.endsWith('/collector-en.jpg') && shot.caption?.includes('Web Page Collector')), `${locale.file}: structured data is missing the Web Page Collector screenshot`);
  assert(website?.name === 'Grab All Files', `${locale.file}: WebSite structured data is missing the site name`);
  assert(website?.description?.includes('Bulk File Download') && website?.description?.includes('Web Page Collector'), `${locale.file}: WebSite structured data must describe both core tools`);
  assert(schemas.filter((schema) => schema['@type'] === 'HowTo').length === 2, `${locale.file}: expected one HowTo for each core tool`);
}

for (const locale of locales) {
  for (const stem of [`shot-${locale.code}`, `collector-${locale.code}`]) {
    for (const ext of ['jpg', 'webp']) {
      assert(fs.existsSync(`assets/screenshots/${stem}.${ext}`), `assets/screenshots/${stem}.${ext}: referenced screenshot file is missing`);
    }
  }
}

for (const locale of locales) {
  const prefix = locale.code === 'en' ? '' : `${locale.code}/`;
  const file = `${prefix}use-cases/combine-web-pages-into-one-html.html`;
  const html = fs.readFileSync(file, 'utf8');
  assert(/(?:\$19\.99|19,99\s*\$)/.test(html), `${file}: Pro price is missing from the shared product panel`);
  assert(html.includes(combineHeadlines[locale.code]), `${file}: localized Free/Pro collector headline is missing`);
  for (const staleClaim of stalePlanClaims) assert(!html.toLowerCase().includes(staleClaim.toLowerCase()), `${file}: stale plan claim remains: "${staleClaim}"`);
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
  'Current version: 5.6.14',
  'keeps exactly one page selected',
  'combines multiple selected readable page bodies',
  'Tetsunobu Kawai is the independent Developer and Data Controller',
  'Serima Kawai is the Seller and Service Provider',
]) assert(llms.includes(required), `llms.txt: missing "${required}"`);

const legal = fs.readFileSync('legal.html', 'utf8');
assert(/Data controller[\s\S]*?Tetsunobu Kawai/.test(legal), 'legal.html: Data controller contact must be Tetsunobu Kawai');
assert(legal.includes('developed by Tetsunobu Kawai and provided by Serima Kawai'), 'legal.html: English role clarification is missing');

const terms = fs.readFileSync('terms.html', 'utf8');
assert(terms.includes('independently developed by Tetsunobu Kawai and provided and distributed by Serima Kawai'), 'terms.html: English Developer/Service Provider roles are missing');
assert(!terms.includes('developed and distributed by Serima Kawai'), 'terms.html: Seller must not also be described as the Developer');

const privacy = fs.readFileSync('privacy-policy.html', 'utf8');
assert(privacy.includes('Tetsunobu Kawai is the Data Controller and Developer'), 'privacy-policy.html: English Data Controller/Developer role is missing');
assert(privacy.includes('Serima Kawai is the Seller / Service Provider'), 'privacy-policy.html: English Seller/Service Provider role is missing');

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
