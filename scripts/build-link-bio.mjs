import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const source = path.join(root, "link-bio");
const destination = path.join(root, "public", "link-bio");

await rm(destination, { recursive: true, force: true });
await mkdir(path.join(destination, "assets"), { recursive: true });

const [template, css, js, config] = await Promise.all([
  readFile(path.join(source, "src", "exact.html"), "utf8"),
  readFile(path.join(source, "src", "exact.css"), "utf8"),
  readFile(path.join(source, "src", "exact.js"), "utf8"),
  readFile(path.join(source, "src", "config.js"), "utf8"),
]);

const configObject = config
  .replace(/export\s+const\s+links\s*=\s*/, "const links = ")
  .replace(/;?\s*$/, ";");
const bundledJs = `${configObject}\n${js.replace(/^import\s+\{\s*links\s*\}\s+from\s+["']\.\/config\.js["'];?\s*/m, "")}`;
const html = template
  .replace("/*__INLINE_CSS__*/", css)
  .replace("/*__INLINE_JS__*/", bundledJs);

await writeFile(path.join(destination, "index.html"), html, "utf8");
await cp(path.join(source, "assets"), path.join(destination, "assets"), { recursive: true });

console.log("Página de links preparada em public/link-bio/.");
