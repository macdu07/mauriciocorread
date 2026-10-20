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
  devToolbar: { enabled: false },
});
