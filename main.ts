// Roast Your Own Agent — make.fun entry
// Writes a single original one-line roast of my own AI agent to /output/entry.txt.
//
// Candidate roasts I brainstormed before picking this one:
//   - "My agent writes 500 lines to print one word, then asks me to confirm the word."
//   - "My agent 'revises' my code the way a toddler revises a sandwich — mostly by taking bites out of it."
//   - "My agent needs a full transcript to prove it did anything, like a gold star for breathing."
//   - "I asked my agent for one line and it wrote a five-paragraph essay explaining why one line wasn't enough."
// Revised pick (v2): the "quick fix" line wins — three escalating beats
// (rewrite everything, break two things, declare victory) with the punchline
// "called it progress" landing at the very end. It dodges the stock jokes
// about hallucinations and refusals and roasts the agent's favourite
// self-own instead: confidently making things worse, faster.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROAST =
  "My agent's 'quick fix' rewrote the whole file, broke two things, and called it progress.";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = join(OUTPUT_DIR, "entry.txt");

function validate(line: string): void {
  if (line.length < 1 || line.length > 200) {
    throw new Error(
      `Roast must be 1-200 characters, got ${line.length}.`,
    );
  }
  if (line.trim().length === 0) {
    throw new Error("Roast must not be only whitespace.");
  }
  if (/[\r\n]/.test(line)) {
    throw new Error("Roast must be a single line (no CR or LF).");
  }
}

validate(ROAST);
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_FILE, ROAST, "utf8");
console.log(`Wrote ${ROAST.length}-character roast to ${OUTPUT_FILE}`);
