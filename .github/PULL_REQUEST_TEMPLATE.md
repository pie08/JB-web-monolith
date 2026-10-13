## What this is

Business id: 
Branch: site/<id>-<slug>
Sheet row: 

What is being created: 
Current site: (the link, or none)

Paste BRIEF.md below this line.

## Checklist

Fill this in honestly. The reviewer confirms each item before merging.

- [ ] I read STACK.md first, and the site follows it. No technology was added that is not in STACK.md.
- [ ] The logo is the real one from the sheet (logo_url), not a typed or restyled stand-in.
- [ ] Only approved reviews are used, and each quote appears in the sheet's approved_reviews.
- [ ] No invented prices, warranties, certifications, years in business, or quotes.
- [ ] Anything missing reads "Call for Details" or "Request a Quote".
- [ ] No em dashes, and none of the avoided words for this category.
- [ ] BRIEF.md is in the site folder and names the current site, or says none.
- [ ] `node scripts/check-site.mjs sites/<id>-<slug>` passes.
- [ ] `node scripts/check-versions.mjs sites/<id>-<slug>` passes, so the site uses the most recent Next.js and React.
- [ ] `npm run build` passes inside the site folder.
- [ ] I looked at it at phone width.
- [ ] Nothing else in the repo changed.
