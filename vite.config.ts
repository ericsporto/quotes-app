import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@interfaces': path.resolve(__dirname, 'src/interfaces'),
      '@stores': path.resolve(__dirname, 'src/stores'),
      '@services': path.resolve(__dirname, 'src/services'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@routes": path.resolve(__dirname, "src/routes"),
      "@providers": path.resolve(__dirname, "src/providers"),
    },
  },
});
