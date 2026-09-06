import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';
const root = path.dirname(fileURLToPath(import.meta.url));
const base = 'https://grab-all-files.app';
const sitemap = fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8');
const entries = [...sitemap.matchAll(/<url>([\s\S]*?)<\/url>/g)];
const urls = new Set(entries.map(m => m[1].match(/<loc>([^<]+)<\/loc>/)[1]));
assert.equal(urls.size, 90);
let links = 0;
for (const entry of entries) {
  const url = entry[1].match(/<loc>([^<]+)<\/loc>/)[1];
  const pathname = new URL(url).pathname;
  const file = path.join(root, pathname, pathname.endsWith('/') ? 'index.html' : '');
  const html = fs.readFileSync(file, 'utf8');
  assert.equal([...html.matchAll(/<link rel="canonical" href="([^"]+)"/g)].length, 1, url);
  assert.equal(html.match(/<link rel="canonical" href="([^"]+)"/)[1], url, url);
  assert(!/<meta[^>]+name="robots"[^>]+noindex/i.test(html), url);
  const alternates = [...html.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g)];
  assert.equal(alternates.length, 11, url);
  for (const a of alternates) {
    assert(urls.has(a[2]), `${url}: unknown alternate ${a[2]}`);
    const peerPath = new URL(a[2]).pathname;
    const peer = fs.readFileSync(path.join(root, peerPath, peerPath.endsWith('/') ? 'index.html' : ''), 'utf8');
    assert(peer.includes(`href="${url}"`), `${a[2]}: missing reciprocal link to ${url}`);
  }
  for (const ld of html.matchAll(/<script[^>]+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) JSON.parse(ld[1]);
  const markup = html.replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1>/gi, '');
  for (const m of markup.matchAll(/<(?:a|link|img|script|source)\b[^>]*?\s(?:href|src)="([^"]+)"/g)) {
    const target = new URL(m[1].replaceAll('&amp;', '&'), url);
    if (target.origin !== base) continue;
    const disk = path.join(root, decodeURIComponent(target.pathname), target.pathname.endsWith('/') ? 'index.html' : '');
    assert(fs.existsSync(disk), `${url}: missing ${target.pathname}`);
    links++;
  }
  if (pathname === '/') assert(html.includes('window.__FORCE_LANG__="en"'), 'Root must keep English canonical language');

}
// Exercise the actual runtime helper rather than just inspecting its text.
const script = fs.readFileSync(path.join(root, 'use-cases/use-case.js'), 'utf8');
const helper = script.match(/  function withLang\(path, lang\) \{[\s\S]*?\n  \}/)[0];
const context = vm.createContext({});
vm.runInContext(helper + ';this.withLang=withLang;', context);
for (const lang of ['en','ja','es','fr','de','it','ko','pt_BR','zh_CN','zh_TW']) {
  for (const route of ['../','../security.html','../use-cases/','download-all-pdfs.html','../#pricing']) {
    assert.equal(context.withLang(route, lang), route);
  }
  assert.equal(context.withLang('/purchase/',lang), '/purchase/?lang=' + lang);
}
// Exercise the generated selector: canonical locale navigation, preserved anchor,
// saved preference, and no competing body-only language change handler.
const en = fs.readFileSync(path.join(root,'index.html'),'utf8');
const nav = en.match(/<script>(\(function\(\)\{var s=document.getElementById\('lang-sel'\);[\s\S]*?)<\/script>/)[1];
let handler, stopped=false, saved;
const state = {URLSearchParams,document:{getElementById:()=>({addEventListener:(event,fn,capture)=>{assert(capture);handler=fn;}})},location:{hash:'#pricing'},localStorage:{setItem:(k,v)=>{saved=v;}}};
vm.runInNewContext(nav,state);
handler({target:{value:'ja'},stopImmediatePropagation:()=>{stopped=true;}});
assert.equal(state.location.href,'/ja/#pricing');assert.equal(saved,'ja');assert(stopped);
handler({target:{value:'en'},stopImmediatePropagation:()=>{}});
assert.equal(state.location.href,'/#pricing');
for (const [query, expected] of [['?lang=ja&utm_source=test','/ja/?utm_source=test#pricing'], ['?lang=xx',null]]) {
  let redirect=null;
  const legacy={...state,location:{pathname:'/',search:query,hash:'#pricing',replace:value=>{redirect=value;}}};
  vm.runInNewContext(nav,legacy);
  assert.equal(redirect,expected);
}
console.log(`SEO integrity passed: ${urls.size} canonical pages, reciprocal language groups, JSON-LD, ${links} local references, 10-language runtime links and selector navigation.`);
