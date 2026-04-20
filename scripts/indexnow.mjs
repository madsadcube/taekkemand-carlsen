// Pings IndexNow after production builds so Google/Bing index changes immediately.
// Runs via postbuild npm hook — only fires in Vercel production environment.
import { readFileSync, existsSync } from 'fs';
import { resolve } from 'path';

const KEY = '829cefe60ec722c8c9917369feddee48';
const HOST = 'taekkemandcarlsen.dk';
const SITE = 'https://taekkemandcarlsen.dk';

if (process.env.VERCEL_ENV !== 'production') {
  console.log('IndexNow: skipping (not production)');
  process.exit(0);
}

// Parse URLs from generated sitemap
const sitemapPath = resolve('dist/sitemap-0.xml');
if (!existsSync(sitemapPath)) {
  console.warn('IndexNow: sitemap not found, skipping');
  process.exit(0);
}

const xml = readFileSync(sitemapPath, 'utf-8');
const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);

if (urls.length === 0) {
  console.warn('IndexNow: no URLs found in sitemap');
  process.exit(0);
}

console.log(`IndexNow: submitting ${urls.length} URLs`);

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({
    host: HOST,
    key: KEY,
    keyLocation: `${SITE}/${KEY}.txt`,
    urlList: urls,
  }),
});

console.log(`IndexNow: ${res.status} ${res.statusText}`);
