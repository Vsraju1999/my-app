import { defineConfig } from 'vite';
import eslintPlugin from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [eslintPlugin()],
  base: '/my-app',
});
