import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import { ManifestOptions, VitePWA } from 'vite-plugin-pwa';

const manifest: Partial<ManifestOptions> = {
  name: 'React-vite-app',
  short_name: 'react-vite-app',
  description: 'I am a simple vite app',
  icons: [
    { src: '/maskable_icon.png', sizes: '512x512', type: 'image/png', purpose: 'any maskable' },
    { src: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png', purpose: 'favicon' },
    { src: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'favicon' },
    {
      src: '/apple-touch-icon.png',
      sizes: '180x180',
      type: 'image/png',
      purpose: 'apple touch icon',
    },
  ],
  theme_color: '#171717',
  background_color: '#f0e7db',
  display: 'standalone',
  scope: '/',
  start_url: '/',
  orientation: 'portrait',
};

const baseUrl = './src/';

const alias = [
  ['@modules', './modules/'],
  ['@routing', './routing/'],
  ['@models', './models'],
  ['@utils', './utils/'],
  ['@store', './store/'],

  ['@components', './common/components/'],
  ['@hooks', './common/hooks/'],
  ['@loaders', './common/loaders/'],
  ['@common-modules', './common/modules/'],
  ['@services', './common/services/'],
].map(([name, path]) => ({ find: name, replacement: resolve(__dirname, baseUrl, path) }));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({ babel: { plugins: [['@babel/plugin-proposal-decorators', { version: '2023-05' }]] } }),
    VitePWA({
      workbox: { globPatterns: ['**/*'] }, // cache all the imports
      includeAssets: ['**/*'], // cache all thestatic assets in the public folder
      manifest,
    }),
  ],
  resolve: { alias },
});
