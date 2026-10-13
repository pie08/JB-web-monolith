# JB sites

One repo for every client site JB builds. Read STACK.md before changing anything.

## Layout

- `STACK.md` is the fixed tech stack and the rules for changing it.
- `templates/local-business/` is the base template. It works for any kind of local business, so a site's niche only shows up in its `business.json`.
- `sites/<id>-<slug>/` is one client site, built from a template. Each has a `BRIEF.md` that says what is being created and links the current site, or says none.
- `scripts/check-site.mjs` checks a site's content against the rules.
- `scripts/check-versions.mjs` checks that the site uses the most recent Next.js and React.
- `.github/PULL_REQUEST_TEMPLATE.md` is the checklist for every pull request.

## Making a site

1. Create the branch `site/<id>-<slug>` from main.
2. Copy `templates/local-business` to `sites/<id>-<slug>`.
3. Fill in `business.json` from the sheet row, and write `BRIEF.md` in the site folder. Use only what the sheet holds.
4. Inside the site folder, install the most recent versions: `npm install next@latest react@latest react-dom@latest --save-exact`.
5. Run `node scripts/check-site.mjs sites/<id>-<slug>` and `node scripts/check-versions.mjs sites/<id>-<slug>`. Then run `npm run build` in the site folder.
6. Open a pull request with the template filled in.

## business.json

| Field | Meaning |
| --- | --- |
| `name`, `niche`, `city`, `phone` | From the sheet. Leave `phone` empty if the sheet has none. |
| `logoUrl` | The real logo. The build stops without it. |
| `copy.heroHeadline` | The stand they take for their customers. |
| `copy.intro` | What the customer feels before they call. |
| `copy.servicesIntro` | What they do, plainly. |
| `services[]` | `name`, optional `description`, optional `price`. A missing price shows "Call for Details". |
| `photos[]` | Real photos only. |
| `reviews[]` | Each `text` must appear in `source.approved_reviews`. |
| `currentSite` | Their current website, or an empty string when they have none. It is for the brief and is never shown on the site. |
| `facts[]` | Owner-approved claims. A claim like "licensed" or "years in business" is allowed only if it is here. |
| `source.approved_reviews` | The raw approved_reviews cell from the sheet. |
