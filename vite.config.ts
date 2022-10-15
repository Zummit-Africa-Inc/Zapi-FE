import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
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
