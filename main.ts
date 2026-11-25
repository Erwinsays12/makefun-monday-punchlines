// Monday Morning Punchlines — entry program.
//
// Writes exactly one joke about Monday mornings to /output/entry.txt.
// Deterministic: no clock, no network, no randomness. The joke is a
// fixed string, so every run produces byte-identical output.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The joke (139 characters, well under the 200-character cap):
// the alarm itself is a fellow Monday victim — it sighs, snoozes
// itself, and calls out the sleeper. Monday-specific, a real turn
// instead of a complaint, and a twist no tired Monday cliche uses.
const JOKE =
  "On Monday mornings my alarm doesn't ring \u2014 it sighs, hits snooze on itself, and whispers, 'We both know you're not getting up.'";

const outPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";

// Self-check the competition's gate before writing: the entry must be
// UTF-8 text of 1 to 200 characters, not only white space. Fail loudly
// instead of submitting an invalid joke.
if (JOKE.length < 1 || JOKE.length > 200 || JOKE.trim().length === 0) {
  console.error(`Joke is ${JOKE.length} characters; the gate needs 1-200.`);
  process.exit(1);
}

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, JOKE, "utf8");
console.log(`Wrote ${JOKE.length} characters to ${outPath}`);
