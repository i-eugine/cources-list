import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';

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
    react({
      babel: {
        plugins: [['@babel/plugin-proposal-decorators', { version: '2023-05' }]],
      },
    }),
  ],
  resolve: { alias },
});
