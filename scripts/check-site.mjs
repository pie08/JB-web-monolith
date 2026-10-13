// Usage: node scripts/check-site.mjs sites/<id>-<slug>
// Checks a site's content against the JB rules. Exits 1 if anything fails.
import fs from "node:fs";
import path from "node:path";

const dir = process.argv[2];
if (!dir) { console.error("Usage: node scripts/check-site.mjs <site folder>"); process.exit(2); }

const results = [];
const check = (ok, msg) => results.push([ok, msg]);
const read = (p) => fs.readFileSync(path.join(dir, p), "utf8");

let b;
try { b = JSON.parse(read("business.json")); }
catch (e) { console.log("FAIL  business.json is missing or is not valid JSON"); process.exit(1); }

// Collect every customer-facing string (everything except the raw source cell).
const strings = [];
(function walk(v, key) {
  if (key === "source") return;
  if (typeof v === "string") strings.push(v);
  else if (Array.isArray(v)) v.forEach((x) => walk(x, key));
  else if (v && typeof v === "object") Object.entries(v).forEach(([k, x]) => walk(x, k));
})(b);
const text = strings.join("\n");

// 1. Logo is required and must be the real one.
check(Boolean(b.logoUrl), "logoUrl is set (the real logo is required)");

// 2. Required copy exists.
check(Boolean(b.copy && b.copy.heroHeadline && b.copy.heroSub && b.copy.intro), "hero headline, hero sub, and intro are written");

// 3. No em dashes anywhere customers can read, including the page templates.
const files = ["app/page.jsx", "app/layout.jsx"].filter((f) => fs.existsSync(path.join(dir, f)));
const dashHits = [text, ...files.map(read)].filter((t) => t.includes("\u2014"));
check(dashHits.length === 0, "no em dashes in copy or page files");

// 4. Avoided words.
const banned = /\b(missing|behind|broken|ugly|outdated|struggling|desperate|fix|wrong|problem|bad)\b/i;
const bannedHit = text.match(banned);
check(!bannedHit, bannedHit ? `avoided word in copy: "${bannedHit[0]}"` : "no avoided words in copy");

// 5. Invented claims are allowed only if the owner approved them in facts[].
const claim = /\b(warrant(?:y|ies)|guarantee[sd]?|certified|licensed|insured|bonded|award[- ]winning|years? (?:of experience|in business)|since (?:19|20)\d\d|family[- ]owned|#1|number one|best in)\b/gi;
const facts = (b.facts || []).map((f) => f.toLowerCase());
const unbacked = [...text.matchAll(claim)].map((m) => m[0]).filter((c) => !facts.some((f) => f.includes(c.toLowerCase())));
check(unbacked.length === 0, unbacked.length ? `claim not in facts[]: ${[...new Set(unbacked)].join(", ")}` : "no unapproved claims");

// 6. Prices in copy must come from services[].price, never from free text.
const copyText = [b.copy && Object.values(b.copy).join("\n"), (b.services || []).map((s) => s.description || "").join("\n")].join("\n");
check(!/\$\s?\d/.test(copyText), "no dollar amounts in copy or descriptions (prices live in services[].price)");

// 7. Reviews must be quoted from the approved cell.
const approved = (b.source && b.source.approved_reviews) || "";
const badReviews = (b.reviews || []).filter((r) => !approved.includes(r.text));
check(badReviews.length === 0, badReviews.length ? `review not in approved_reviews: "${badReviews[0].text.slice(0, 40)}"` : "every review is quoted from approved_reviews");

// 8. Phone looks like a phone number, or is empty.
check(!b.phone || /\d{3}\D*\d{4}/.test(b.phone), "phone is empty or looks like a phone number");

let failed = 0;
for (const [ok, msg] of results) { console.log((ok ? "PASS  " : "FAIL  ") + msg); if (!ok) failed++; }
console.log(failed ? `\n${failed} check(s) failed.` : "\nAll checks passed.");
process.exit(failed ? 1 : 0);
