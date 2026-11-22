import { mkdirSync, writeFileSync } from "node:fs";

const lines = [
  "Rain keeps a slow, even time on the window, and the kettle has gone quiet on the stove.",
  "The cat is asleep in the warm pool of lamplight, one paw folded beneath her chin.",
  "The room is warm, the evening is small, and nothing here asks anything of you.",
];

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outputDir, { recursive: true });
writeFileSync(`${outputDir}/entry.txt`, lines.join(" "));
