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
  redirects: {
    '/straatag.php': '/tagdaekning/straatag/',
    '/reparation-af-straatag.php': '/tagdaekning/reparation-af-straatag/',
    '/mosbehandling-straatag.php': '/tagdaekning/mosbehandling-paa-straatag/',
    '/holdbarhed.php': '/tagdaekning/holdbarhed-af-straatag/',
    '/vedligeholdelse.php': '/tagdaekning/vedligeholdelse-af-straatag/',
    '/vedligehold-og-reparation.php': '/tagdaekning/vedligeholdelse-af-straatag/',
    '/reparation-af-tagrygning.php': '/tagdaekning/reparation-af-rygning/',
    '/algebehandling.php': '/tagdaekning/aldebehandling-af-straatag/',
    '/algebehandling-af-tag.php': '/tagdaekning/aldebehandling-af-straatag/',
    '/mosafrensning.php': '/tagdaekning/mosafrensning/',
    '/skorstensrenovering.php': '/tagdaekning/skorstensrenovering/',
    '/moenning.php': '/tagdaekning/monning-til-straatag/',
    '/tagrenderens.php': '/tagdaekning/rensning-af-tagrender/',
    '/garanti.php': '/garanti/',
    '/priser.php': '/priser/',
    '/om-os.php': '/om-os/',
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
