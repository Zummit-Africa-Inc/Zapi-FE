import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  define : {
    global: {}
  },
  build: {
    rollupOptions : {
      external: "jss-plugin-{}"
    }
  },
  resolve: {
    alias: {
      './runtimeConfig': './runtimeConfig.browser',
    },
  },
  server: {
    hmr: {
      overlay: false,
    },
  },
});
