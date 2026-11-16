// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://mauriciocorread.com',
  // Todas las URL con barra final: coincide con dist/<ruta>/index.html y con las 301 de nginx.conf.
  trailingSlash: 'always',
  // Sin la opción i18n: empareja por ruta y aquí los slugs cambian entre idiomas (/contacto/ ↔ /en/contact/).
  // Los hreflang ya van en el <head> de cada página.
  integrations: [sitemap({ filter: (page) => !page.includes('/404') })],
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    routing: { prefixDefaultLocale: false },
  },
  // Sin prefetchAll ningún enlace se precargaba. 'viewport' también sirve en táctil (no hay hover)
  // y Astro lo omite con ahorro de datos o conexiones lentas; el HTML pesa ~25 KB comprimido.
  prefetch: { prefetchAll: true, defaultStrategy: 'viewport' },
  // El CSS total por página es pequeño: inlinearlo quita las peticiones que bloquean el primer render.
  build: { inlineStylesheets: 'always' },
  devToolbar: { enabled: false },
});
