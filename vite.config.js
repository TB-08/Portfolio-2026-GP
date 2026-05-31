import { writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

const projectRoot = fileURLToPath(new URL(".", import.meta.url));
const landingPage = resolve(projectRoot, "Trang chính.html");

function landingPageEntry() {
  return {
    name: "portfolio-landing-page-entry",
    configureServer(server) {
      server.middlewares.use((request, _response, next) => {
        if (/^\/(?:\?.*)?$/.test(request.url ?? "")) {
          const query = request.url?.slice(1) ?? "";
          request.url = `/Trang%20ch%C3%ADnh.html${query}`;
        }

        next();
      });
    },
    writeBundle(outputOptions, bundle) {
      const renderedHtml = Object.values(bundle).find(
        (asset) => asset.type === "asset" && asset.fileName.endsWith(".html"),
      );

      if (renderedHtml && outputOptions.dir) {
        writeFileSync(resolve(outputOptions.dir, "index.html"), renderedHtml.source, "utf8");
      }
    },
  };
}

export default defineConfig(({ mode }) => ({
  plugins: [landingPageEntry(), react(), tailwindcss()],
  base: mode === "standalone" ? "./" : "/",
  build: {
    assetsInlineLimit: mode === "standalone" ? 100000000 : undefined,
    rollupOptions: {
      input: landingPage,
      output: mode === "standalone" ? { codeSplitting: false } : undefined,
    },
  },
}));
