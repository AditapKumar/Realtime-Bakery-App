// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  publicDir: 'static',
  build: {
    outDir: 'public/dist',
    rollupOptions: {
      input: ['resources/js/app.js', 'resources/css/app.css'],
      // Add this output configuration
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
  },
});