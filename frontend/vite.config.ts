import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": "http://localhost:5001"
    }
  },
  resolve: {
    // ensure only one React copy is bundled
    dedupe: ["react", "react-dom"]
  },
  optimizeDeps: {
    // force re-scan after cache issues
    force: true,
    include: ["react", "react-dom"]
  }
});