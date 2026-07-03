import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://romorris.github.io',
  base: '/Petes-Marine-Service2/',
  integrations: [sitemap()],
  build: {
    assets: 'assets',
  },
});