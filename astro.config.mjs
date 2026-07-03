import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://petes-marine-service.com',
  integrations: [sitemap()],
  build: {
    assets: 'assets',
  },
});