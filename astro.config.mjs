// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://taekkemandcarlsen.dk',
  vite: {
    plugins: [tailwindcss()]
  },
  build: {
    inlineStylesheets: 'always'
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/helsinge') || true,
      serialize(item) {
        return { ...item, lastmod: new Date().toISOString() };
      },
    })
  ]
});
