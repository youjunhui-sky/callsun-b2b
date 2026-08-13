import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // TODO: 替换为客户正式域名（首期部署到 workers.dev）
  site: 'https://callsunenergy.com',
  integrations: [
    tailwind({ applyBaseStyles: true }),
    sitemap(),
  ],
  build: {
    inlineStylesheets: 'auto',
    assets: '_assets',
  },
  compressHTML: true,
  prefetch: { prefetchAll: true, defaultStrategy: 'viewport' },
});
