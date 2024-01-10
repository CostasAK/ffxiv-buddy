import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import eslint from "vite-plugin-eslint";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import svgrPlugin from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  envDir: "./env",
  plugins: [
    react(),
    eslint(),
    svgrPlugin(),
    ViteImageOptimizer({ test: /\.svg$/i }),
  ],
  test: {
    globals: true,
    environment: "happy-dom",
    setupFiles: "./src/test/setup.js",
    // you might want to disable it, if you don't have tests that rely on CSS
    // since parsing CSS is slow
    css: true,
  },
});
