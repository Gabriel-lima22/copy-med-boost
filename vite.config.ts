import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode, isSsrBuild }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  // Build SSR (so para gravar o HTML das paginas, ver scripts/prerender-seo.mjs):
  // react-helmet-async e CommonJS e nao carrega como ESM no Node, entao vai embutido.
  ssr: { noExternal: ["react-helmet-async"] },
  build: isSsrBuild ? { copyPublicDir: false } : undefined,
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
