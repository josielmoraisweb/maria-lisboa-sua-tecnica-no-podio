import { cp, readdir, rm } from "node:fs/promises";
import { join, resolve } from "node:path";

const standaloneDir = resolve(".next/standalone");

async function removeUnusedImageOptimizerPackages(directory) {
  const entries = await readdir(directory, { withFileTypes: true });

  for (const entry of entries) {
    const path = join(directory, entry.name);
    const isUnusedImagePackage =
      entry.name === "@img" ||
      entry.name === "sharp" ||
      entry.name.startsWith("@img+") ||
      entry.name.startsWith("sharp@");

    if (isUnusedImagePackage) {
      await rm(path, { recursive: true, force: true });
    } else if (entry.isDirectory()) {
      await removeUnusedImageOptimizerPackages(path);
    }
  }
}

await removeUnusedImageOptimizerPackages(join(standaloneDir, "node_modules"));
await cp(resolve("public"), join(standaloneDir, "public"), { recursive: true });
await cp(resolve(".next/static"), join(standaloneDir, ".next/static"), {
  recursive: true,
});
