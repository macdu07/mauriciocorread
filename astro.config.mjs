// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://mauriciocorread.com',
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
