# Portfolio impact and next steps

Push: [`3c96a52`](https://github.com/ShaikMoAbdullah/portfolio/commit/3c96a522f10d1cf4049dfe213d1ca2c444328217) (`update`, 9 Nov 2026) on `main`.

Compared with `9733594`. Two files changed: `resume/resume.tex` (one line) and `public/Shaik_Mohammad_Abdullah_Resume.pdf` (218,755 → 218,432 bytes). No page, component, or SEO file changed.

## What changed

The resume header no longer prints a phone glyph with plain text. The same number is now a link:

```tex
\href{https://wa.me/918748057505}{\faWhatsapp\ +91-8748057505}
```

The rebuilt PDF is still one page (`pdfTeX-1.40.27`). It contains the URI `https://wa.me/918748057505`, and the visible digits are still `+91-8748057505`.

The site was already WhatsApp-first. `Contact` links that number to `https://wa.me/918748057505`, and the section says email and WhatsApp are the fastest way to reach you. The header **Resume** button opens this PDF. Before this commit, that file told a reader to treat the number as a phone call and gave them nothing to click.

## How this shows up

1. **The file people download now uses the same channel as the site.** A recruiter who taps the number in the PDF lands in WhatsApp, which is the path the contact section already asks for. The old header could not do that: the phone icon was not a link.
2. **Source and download stayed in sync.** `resume.tex` and `public/Shaik_Mohammad_Abdullah_Resume.pdf` moved in the same commit. A TeX-only edit would have left the button serving the previous file.
3. **The number is still copyable.** The digits are their own text run, so paste and most résumé parsers still see `+91-8748057505`. The WhatsApp icon is a separate glyph. Text extraction shows it as `«` immediately before the number.
4. **Scope stayed small on purpose.** Hero, Impact, Experience, projects, skills, navigation, and JSON-LD are unchanged. This is a contact-path fix, not a new story about the work.

## What to do next

Start with the contact path this commit just made consistent. Then close the gaps between the résumé and the page, which this push did not touch.

### Contact

1. **Say "WhatsApp" in the visible contact label.** The site card shows `+91 87480 57505` with an icon. The accessible name says WhatsApp; the visible text does not. The résumé now signals WhatsApp with the icon only. Put the word on both surfaces so a reader does not try to place a voice call.
2. **Leave the number as its own text.** Do not replace `+91-8748057505` with an icon. If a parser should know the channel even when it drops icon fonts, add the word "WhatsApp" beside the digits. The `«` glyph in extraction is the icon, not part of the number.
3. **Do not add a prefilled `wa.me` message.** An empty chat is the right handoff. A canned line reads as a template.
4. **Keep WhatsApp as the only phone action unless a role needs a voice call.** Both surfaces are `wa.me` now. That matches the contact copy. Add `tel:+918748057505` only as a second control, and only if a callable number is part of the offer. Do not turn the résumé number back into a dead phone icon.
5. **Skip a schema.org `telephone` or `ContactPoint` unless you want the number republished in search snippets.** Email and profile links are already in the Person schema. The number is already public on the page and in the PDF.

### Résumé file

6. **Point the README at the file the site actually serves.** Setup and deploy still say `public/resume.pdf`. The header links to `/Shaik_Mohammad_Abdullah_Resume.pdf`. That old path is gone, so a rebuild that follows the README ships the wrong file.
7. **Check the header line and the education column on the rendered page.** The education block is `0.31\textwidth` beside skills. `B.Tech, Computer Science` is long enough to wrap mid-phrase in that column. The WhatsApp icon is a different width from the old phone icon; confirm the contact line still fits on the same rows.
8. **Name the change in the commit.** `update` hides a one-line contact fix. `resume: link phone number to WhatsApp` would have made this obvious in history.

### Page content this commit left as-is

9. **Use one title.** The hero, document title, and JSON-LD `jobTitle` say Product Engineer. The résumé summary and the Karya role say Senior Product Engineer.
10. **Make Experience, the case studies, and the résumé tell the same Karya story.** The résumé still leads with project-scoped RBAC (4 global and 5 project roles), NLQ, Preview, 7 health checks, and 30+ components. The timeline mentions the rebuild, Preview, and the 7 checks, and drops NLQ, the role split, and the component count. The access-control case study still describes NLQ chat history, templates, and resizable tables, which the résumé bullet does not. The task-platform card has the 30+ components and has no live URL.
11. **Give the task-platform card an outcome.** Its result line restates the mechanism: tasks are validated before launch, and payouts stay off during testing. Replace that with a measured change (time to launch, failed tasks, or support load) or drop the result until you have one.
12. **Put authorization in Skills.** The lead Karya story is RBAC and ReBAC. The skills list on the page and on the résumé has languages, frontend, backend, AI, testing, and tools, and does not name access control.
13. **Refresh Impact only when a new number is ready.** The strip is still `$40K`, `100+` routes, `3×` click-through, and `12%` sales. Hours-to-seconds and the 7 checks are real, but they are already in the timeline. Add a tile when it is a number a stranger can compare, not a second copy of a bullet.
