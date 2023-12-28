import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import { defineConfig } from 'vite';

const baseUrl = './src/';

const alias = [
  ['@modules', './modules/'],
  ['@routing', './routing/'],
  ['@models', './models'],
  ['@common', './common/'],
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
  plugins: [react()],
  resolve: { alias },
});
