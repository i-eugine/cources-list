import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import { defineConfig } from 'vite';

const baseUrl = './src/';

const alias = [
  ['@modules', './modules/'],
  ['@modules', './modules/'],
].map(([name, path]) => ({ find: name, replacement: resolve(__dirname, baseUrl, path) }));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: { alias },
});
