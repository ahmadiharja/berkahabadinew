import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    assetsDir: "assets",
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  server: {
    allowedHosts: [
      "0b0dd16e-ff37-4709-b16b-564981349cf4-00-3ljx2icbozty5.sisko.replit.dev",
      "*replit.dev",
    ],
  },
});
