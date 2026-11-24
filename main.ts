// The Funniest Sick-Day Excuse — entry program (program/v1)
// Writes one line, the funniest sick-day excuse, to /output/entry.txt.
// The line leans on a back that went out chasing a motivation that stayed in bed.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I need today off — my back went out while I was bending down to pick up my motivation, and neither of us is getting up again.";

// The gate wants exactly this line, 1–200 chars, no trailing newline.
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
