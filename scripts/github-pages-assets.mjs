// Downloads all uploaded photos/videos into the static GitHub Pages build,
// so the site doesn't depend on Lovable hosting for its images.
import { readdirSync, readFileSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const SOURCE = process.env.ASSET_SOURCE || "https://boekenclubdenbosch.lovable.app";
const OUT = "dist/client";

for (const file of readdirSync("src/assets").filter((f) => f.endsWith(".asset.json"))) {
  const { url } = JSON.parse(readFileSync(join("src/assets", file), "utf8"));
  const res = await fetch(SOURCE + url);
  if (!res.ok) throw new Error(`Download mislukt (${res.status}): ${url}`);
  const target = join(OUT, url);
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, Buffer.from(await res.arrayBuffer()));
  console.log("✓", url);
}
// Tell GitHub Pages not to run Jekyll (keeps folders like __l5e intact).
writeFileSync(join(OUT, ".nojekyll"), "");
