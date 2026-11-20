// Copies the committed entry image to the output directory (no network, deterministic).
import { readFileSync, writeFileSync, mkdirSync, existsSync, statSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "out";
const src = join(import.meta.dirname, "entry.png");
const dst = join(outDir, "entry.png");

const buf = readFileSync(src);
// Must be a real PNG by its first bytes
if (buf.length < 8 || buf[0] !== 0x89 || buf.toString("ascii", 1, 4) !== "PNG") {
  throw new Error("entry.png is not a PNG file");
}
// Cap: at most 1 MiB
if (buf.length > 1048576) {
  throw new Error("entry.png exceeds the 1 MiB cap: " + buf.length + " bytes");
}
if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });
// Write twice and require identical bytes (deterministic output check)
writeFileSync(dst, buf);
const first = readFileSync(dst);
writeFileSync(dst, buf);
const second = readFileSync(dst);
if (!first.equals(second)) throw new Error("output not deterministic");
const st = statSync(dst);
if (st.size !== buf.length) throw new Error("copy integrity check failed");
console.log("wrote " + dst + " (" + buf.length + " bytes)");
