# JB sites

One repo for every client site JB builds. Read STACK.md before changing anything.

## Layout

- `STACK.md` is the fixed tech stack and the rules for changing it.
- `templates/<niche>/` is the starting point for a niche. Today: `car-detailers`.
- `sites/<id>-<slug>/` is one client site, built from a template.
- `scripts/check-site.mjs` checks a site's content against the rules.
- `.github/PULL_REQUEST_TEMPLATE.md` is the checklist for every pull request.

## Making a site

1. Create the branch `site/<id>-<slug>` from main.
2. Copy `templates/<niche>` to `sites/<id>-<slug>`.
3. Fill in `business.json` from the sheet row. Use only what the sheet holds.
4. Run `node scripts/check-site.mjs sites/<id>-<slug>`.
5. Inside the site folder, run `npm install` and `npm run build`.
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
| `facts[]` | Owner-approved claims. A claim like "licensed" or "years in business" is allowed only if it is here. |
| `source.approved_reviews` | The raw approved_reviews cell from the sheet. |
