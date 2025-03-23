import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
  server: {
    allowedHosts: [
      "0b0dd16e-ff37-4709-b16b-564981349cf4-00-3ljx2icbozty5.sisko.replit.dev",
      "*replit.dev",
      // You can also use a wildcard to allow all Replit domains
      // '*.replit.dev'
    ],
  },
});
