// Usage: node scripts/check-versions.mjs sites/<id>-<slug>
// Fails unless next, react, and react-dom are pinned to the most recent release on npm.
import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";

const dir = process.argv[2];
if (!dir) { console.error("Usage: node scripts/check-versions.mjs <site folder>"); process.exit(2); }

let pkg;
try { pkg = JSON.parse(fs.readFileSync(path.join(dir, "package.json"), "utf8")); }
catch { console.log("FAIL  package.json is missing or is not valid JSON"); process.exit(1); }

let failed = 0;
for (const name of ["next", "react", "react-dom"]) {
  const have = (pkg.dependencies || {})[name];
  let latest;
  try {
    latest = execSync(`npm view ${name} version`, { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"], timeout: 30000 }).trim();
  } catch {
    console.log(`FAIL  ${name}: could not read the latest version from npm. Stop and ask a human.`);
    failed++;
    continue;
  }
  if (have === latest) console.log(`PASS  ${name} ${have} is the most recent`);
  else { console.log(`FAIL  ${name} is ${have || "missing"} but the most recent is ${latest}`); failed++; }
}
console.log(failed ? `\n${failed} check(s) failed. Run: npm install next@latest react@latest react-dom@latest --save-exact` : "\nAll versions are current.");
process.exit(failed ? 1 : 0);
