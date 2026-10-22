// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://mauriciocorread.com',
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    routing: { prefixDefaultLocale: false },
  },
  prefetch: true,
  // El CSS total por página es pequeño: inlinearlo quita las peticiones que bloquean el primer render.
  build: { inlineStylesheets: 'always' },
  devToolbar: { enabled: false },
});
