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
  base: "./",
  server: {
    warmup: {
      clientFiles: [
        "./src/App.jsx",
        "./src/components/PortfolioShowcase.jsx",
        "./src/index.css",
      ],
    },
  },
  optimizeDeps: {
    include: ["react", "react-dom", "motion/react", "lucide-react", "lenis"],
  },
  build: {
    target: "es2020",
    cssCodeSplit: true,
    assetsInlineLimit: mode === "standalone" ? 100000000 : 4096,
    rollupOptions: {
      input: landingPage,
      output:
        mode === "standalone"
          ? { codeSplitting: false }
          : {
              manualChunks(id) {
                if (id.includes("node_modules")) {
                  if (id.includes("react") || id.includes("react-dom")) {
                    return "vendor-react";
                  }
                  if (id.includes("motion")) {
                    return "vendor-motion";
                  }
                  if (id.includes("lucide-react")) {
                    return "vendor-icons";
                  }
                  if (id.includes("lenis")) {
                    return "vendor-lenis";
                  }
                  return "vendor";
                }
              },
            },
    },
  },
}));
