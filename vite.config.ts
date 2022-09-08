import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true,
  },
  root: "./src",
  publicDir: "../public",
  build: {
    // root (= ./src) から見た相対パスで指定
    outDir: "../dist",
  },
  plugins: [react()],
});
