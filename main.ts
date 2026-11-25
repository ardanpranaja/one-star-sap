const fs = require("node:fs");
const path = require("node:path");

const review = "One star. She repotted me mid-bloom, called it a glow-up, and now I live in a pot three sizes too big with the self-esteem of a salad.";

if (review.length < 1 || review.length > 279 || review.trim().length === 0) {
  throw new Error("review must be 1-279 non-blank characters, got " + review.length);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), review, "utf8");
console.log("wrote entry.txt (" + review.length + " chars)");
