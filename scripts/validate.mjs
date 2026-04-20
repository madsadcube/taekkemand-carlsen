// Build-time SEO validation — runs after astro build on dist/ HTML files.
// Exits with code 1 if critical issues are found (blocks deploy on CI).
import { readFileSync, readdirSync, statSync } from 'fs';
import { join, resolve } from 'path';

const distDir = resolve('dist');
let errors = 0;
let warnings = 0;

function walk(dir) {
  return readdirSync(dir).flatMap(f => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });
}

const htmlFiles = walk(distDir).filter(f => f.endsWith('.html'));

for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf-8');
  const rel = file.replace(distDir, '');

  // Title
  const titles = [...html.matchAll(/<title[^>]*>(.*?)<\/title>/gs)].map(m => m[1].trim());
  if (titles.length === 0) {
    console.error(`ERROR [${rel}] Missing <title>`); errors++;
  } else {
    const t = titles[0];
    if (t.length < 10) { console.error(`ERROR [${rel}] Title too short (${t.length} chars): "${t}"`); errors++; }
    if (t.length > 70) { console.warn(`WARN  [${rel}] Title too long (${t.length} chars)`); warnings++; }
  }

  // Description
  const desc = html.match(/<meta\s+name=["']description["']\s+content=["'](.*?)["']/)?.[1] ?? '';
  if (!desc) {
    console.error(`ERROR [${rel}] Missing meta description`); errors++;
  } else {
    if (desc.length < 70) { console.warn(`WARN  [${rel}] Description short (${desc.length} chars)`); warnings++; }
    if (desc.length > 160) { console.warn(`WARN  [${rel}] Description long (${desc.length} chars)`); warnings++; }
  }

  // H1 count
  const h1s = [...html.matchAll(/<h1[\s>]/g)];
  if (h1s.length === 0) { console.warn(`WARN  [${rel}] No <h1>`); warnings++; }
  if (h1s.length > 1) { console.error(`ERROR [${rel}] Multiple <h1> (${h1s.length})`); errors++; }

  // Images missing alt
  const imgs = [...html.matchAll(/<img\b([^>]*)>/gi)];
  for (const [, attrs] of imgs) {
    if (!/\balt=/.test(attrs)) {
      console.error(`ERROR [${rel}] <img> missing alt attribute`); errors++;
    }
  }

  // Canonical
  if (!html.includes('rel="canonical"')) {
    console.warn(`WARN  [${rel}] No canonical link`); warnings++;
  }
}

console.log(`\nValidation complete: ${htmlFiles.length} pages — ${errors} errors, ${warnings} warnings`);

if (errors > 0) {
  console.error('Build failed: fix errors before deploying');
  process.exit(1);
}
