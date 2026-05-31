import { execFileSync } from "node:child_process";
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(fileURLToPath(new URL("..", import.meta.url)));
const outputDir = resolve(projectRoot, process.argv[2] ?? "open-directly");
const viteBin = resolve(projectRoot, "node_modules/vite/bin/vite.js");

execFileSync(
  process.execPath,
  [viteBin, "build", "--mode", "standalone", "--base", "./", "--outDir", outputDir],
  {
    cwd: projectRoot,
    stdio: "inherit",
  },
);

const assetsDir = join(outputDir, "assets");
const styleFile = readdirSync(assetsDir).find((file) => file.endsWith(".css"));
const scriptFile = readdirSync(assetsDir).find((file) => file.endsWith(".js"));

if (!styleFile || !scriptFile) {
  throw new Error("Standalone build needs one CSS asset and one JavaScript asset.");
}

const htmlPathOriginal = join(outputDir, "Trang chính.html");
const htmlPathTarget = join(outputDir, "index.html");
const style = readFileSync(join(assetsDir, styleFile), "utf8").replaceAll("</style", "<\\/style");
const script = readFileSync(join(assetsDir, scriptFile), "utf8").replaceAll("</script", "<\\/script");
let html = readFileSync(htmlPathOriginal, "utf8");

html = html
  .replace(
    /<script\b[^>]*\bsrc="\.\/assets\/[^"]+\.js"[^>]*><\/script>/,
    () => `<script type="module">\n${script}\n</script>`,
  )
  .replace(
    /<link\b[^>]*\brel="stylesheet"[^>]*\bhref="\.\/assets\/[^"]+\.css"[^>]*>/,
    () => `<style>\n${style}\n</style>`,
  )
  .replace(/<link rel="modulepreload" [^>]+>/g, "")
  .replace(/<script>\s*const directOpenPath[\s\S]+?<\/script>/, "");

writeFileSync(htmlPathTarget, html);
