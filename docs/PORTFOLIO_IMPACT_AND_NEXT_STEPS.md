# Portfolio impact: commit `9733594` ("data")

Push to `main` on 9 Nov 2026. Compared with `b57225e`.

Files touched:

- `resume/resume.tex` and `public/Shaik_Mohammad_Abdullah_Resume.pdf`
- `src/components/Experience.tsx`
- `src/components/Projects.tsx`

Hero, Impact, Skills, navigation, contact, and page metadata are unchanged.

## How this change matters

### 1. Karya reads as the product, not only as an access-control project

Before this push, Karya on the site was two highlights plus one case study: project authorization, named clients and partners, and a plain-English query tool. The resume had the same shape, plus a count of modular task components.

This push adds the work that sits in the middle of a data-collection platform:

- A **Preview** stage that validates a task end to end before workers see it. Promotion is one database transaction, payouts stay off during testing, and worker assignments are rebuilt in dependency order.
- **Task health** on the task page: 7 checks (assignments, microtasks, completion policy, upstream tasks, avatar linking, rejected work, boxes), each linking to the screen that fixes the issue.
- **30+ task components** (was 25+), named: audio transcription, image annotation, fill-in-the-blanks, including for low-bandwidth and low-literacy workers.

That is a different claim. The portfolio now shows judgment about correctness and money (do not pay workers for a test run), not only permissions and an LLM interface. Selected work grew from three case studies to four. The new card, "Task platform: preview, health & components", is the first Karya story about the product itself.

### 2. The authorization claim is more specific

The resume no longer says the system was architected from scratch for four personas. It says authorization was **rebuilt** as **project-scoped RBAC and ReBAC** across 100+ API routes, with **4 global and 5 project roles**, permissions defined in code, and a self-serve UI that still cuts provisioning from hours to seconds.

The self-serve UI used to be its own bullet. Folding it into the authorization bullet keeps the outcome and frees a line for Preview and task health. The Karya case study on the site uses the same role split. "Rebuilt" and "project-scoped" also landed on the Experience timeline.

### 3. The resume still fits on one page, with education in the scan path

Education moved out of a full section at the bottom and into a column beside Technical Skills. A one-line description now sits under the Karya heading: "Platform for large-scale data collection, task operations, and worker payments." Skill values use ragged-right wrapping, and the heading tables use `\linewidth` so they fit inside those columns.

The compiled PDF is still **one page** (pdfTeX, 9 Nov 2026). Two new Karya bullets and a longer component bullet fit because education no longer consumes its own block. A recruiter who only skims the top third now sees the degree next to the skills instead of hunting for it after MountBlue.

### 4. The site and the PDF finally share the task-platform story

`30+` components and the Preview / health checks are on both the resume and the new case study. Before this push, the component work existed only as a resume bullet the site never mentioned.

## Where the difference stops

The first screen is the same. Hero still says "Product Engineer · Founder of Umrain". The Impact row is still `$40K`, `100+` routes, `3×` click-through, and `12%` sales. Nothing in this push gives that strip a new number, so a visitor who does not scroll gets no signal that the Karya story changed.

The new case study's result line does not add a measurement. It restates the mechanism: "Tasks are validated before launch, with payouts off during testing." The Preview bullet on the resume has the same shape: a careful description, no outcome in bold. Task health's only figure is the count of checks.

Experience traded away the natural-language query highlight to make room for Preview and task health. The resume and the older Karya case study still lead with that query tool. Someone who only reads the timeline no longer sees it.

## What to do next

In the order that most changes what a reader believes.

1. **Give Preview and task health a real result.** On the resume bullets and on the new case study's Result line, replace the restatement with an outcome you can stand behind: tasks blocked before launch, payout mistakes avoided, or time to promote a task. Do not invent a figure. If there is no number, write the operator outcome in one sentence that is not a repeat of the feature ("operators land on the screen that fixes the failed check, and a test run cannot pay workers").

2. **Put the plain-English query work back on the Experience timeline.** The resume still has the NLQ bullet, and the "Access control & plain-English queries" card still claims chat history, reusable templates, and resizable tables. The timeline dropped that story. A fourth short Karya highlight, or a tighter merge with the client-onboarding line, keeps both proofs. While you are there, add the Karya one-liner from the resume ("data collection, task operations, and worker payments") above the highlights, and either mention the 4 global / 5 project roles or leave that detail only on the case study so the two surfaces stay intentional.

3. **Fix the education column on the PDF.** Text extraction of the new one-page PDF breaks the degree as "B.Tech, Computer" / "Science". The 31% column is too narrow for the `Degree` / `University` labels plus "Computer Science". Drop the label column and stack university, degree, and dates as three short lines, or widen that minipage until "Computer Science" stays on one line. Recompile with pdfLaTeX and confirm it is still a single page. The file also grew from about 39KB (previous build was XeLaTeX) to about 213KB (pdfTeX). That is font embedding, not a second page, but glance at the header icons and the skills/education rule so the two columns do not collide.

4. **Decide what the new card should do in the grid.** It has no Live link, unlike Umrain, the other Karya card, and Kroger. If the work is internal, link `https://karya.in` the same way the authorization card does, or mark it internal so the missing control does not look unfinished. The card is also the tall one: three "What I did" bullets beside a two-bullet card, and Kroger then sits alone in the two-column grid. Either shorten the Preview bullet on the card (the resume can keep the transaction detail) or let this card span the row the way Umrain does.

5. **Close the smaller mismatches that this push did not touch.**
   - Skills still have no RBAC or ReBAC chip, while authorization remains the lead Karya proof.
   - The site case study's NLQ details (chat history, templates, resizable tables) are still absent from the resume's NLQ bullet. Add them or delete them so both documents make the same claim.
   - Hero, the page title, Open Graph, and JSON-LD `jobTitle` say "Product Engineer". The resume summary and the Karya role say "Senior Product Engineer".
   - `README.md` still tells you to add `public/resume.pdf`. That path 404s. The header correctly links `/Shaik_Mohammad_Abdullah_Resume.pdf`.
   - Impact should gain a tile only if a new number from step 1 is real. `30+` components is a count of output and is weaker than the revenue and sales figures already on that row.
