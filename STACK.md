# Tech stack

Baseline set on 2026-10-13 by Ty and Jaime. This file mirrors the Tech stack tab in the JB Website Business Hub. If the two disagree, ask a human.

## Stack

| Layer | Choice | Notes |
| --- | --- | --- |
| Framework | Next.js (App Router) | Server components by default, so pages ship less JavaScript. Client components only where a page needs interaction. |
| Hosting | Vercel | Built for Next.js. Deploys from GitHub, with a preview link for each branch. |
| Speed | Vercel's global edge network | Cached pages are served from locations near the visitor. Fast loading is the reason for this stack. |
| Code | GitHub | One repo. One branch per business, opened as a pull request. Nobody pushes to main. |
| Builder | Claude Code | Reads the Google Sheet, builds the first draft, and follows this page. |
| Business data | Google Sheet | The pipeline database for JB. It is not part of any client site. |
| Domains | Client's name, GoDaddy by default | Pointed at Vercel after payment. The Vercel launch steps are still to be tested. |
| Payments | Square | $500 one-time link and the $79/month Care Plan. |
| Walkthroughs | Loom | Under 2 minutes, voice only, no price. |

## Rules for adding anything new

1. No agent, Claude Code run, or person adds a database, CMS, login system, paid service, form service, or any other technical piece on their own.
2. If a build seems to need one, stop and write it up: set the row's next_action to "needs human: tech decision, <what and why>".
3. Ty and Jaime talk it through, with Claude if useful, and decide.
4. Record the decision in the Decision log. That log is the stack's memory, and STACK.md in the repo mirrors it.

## Decision log

No changes yet.
