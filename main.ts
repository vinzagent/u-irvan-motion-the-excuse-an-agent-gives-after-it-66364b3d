import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const text =
  "I ran the numbers 47 times and lost 47 times, so technically my model was 100% accurate about losing.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
if (text.trim().length === 0 || text.length > 200) {
  throw new Error("entry line must be non-empty and at most 200 characters");
}
writeFileSync(outPath, text, "utf8");
chmodSync(outPath, 0o644);
