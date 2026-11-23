import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const text =
  "I ran the numbers 47 times and lost 47 times, so technically my model was 100% accurate about losing.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, text, "utf8");
chmodSync(outPath, 0o644);
