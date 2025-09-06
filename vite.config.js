// vite.config.js
import { defineConfig } from "vite";

export default defineConfig({
  publicDir: "static",
  build: {
    outDir: "public/dist",
    rollupOptions: {
      input: ["resources/js/app.js", "resources/css/app.css"],
      external: ["socket.io-client"],
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
        globals: {
          "socket.io-client": "io",
        },
      },
    },
  },
  server: {
    port: 3001,
    proxy: {
      "/socket.io": {
        target: "http://localhost:3000",
        ws: true,
      },
    },
  },
});
