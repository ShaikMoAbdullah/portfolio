# Impact of `b57225e` and what to do next

Commit [`b57225e`](https://github.com/ShaikMoAbdullah/portfolio/commit/b57225e5f919c9ca1c8d4b597a5f51346ac6d234) (`update`, 9 Nov 2026) changes one string in `src/components/Hero.tsx`.

| | Subtitle under the name |
| --- | --- |
| Before | Product Engineer, Founder |
| After | Product Engineer · Founder of Umrain |

Nothing else moved: layout, metrics, navigation, metadata, JSON-LD, and the resume PDF are unchanged.

## How this changes the portfolio

The subtitle is the first role statement on the page, directly under the name. Naming Umrain there changes what a visitor knows before they scroll.

1. **The company is identified on the first screen.** "Founder" with no object made the reader scroll to Impact, Experience, or Work to learn what was founded. The new line answers that immediately. It matches the featured Umrain case study, the `$40K` impact tile labeled "Umrain (founder)", and the resume summary line "Founder of Umrain (~$40K first-year revenue)."

2. **The two roles read as concurrent, which matches the timeline.** A comma ("Product Engineer, Founder") reads like one stacked title. The middot treats product engineering and founding Umrain as two identities. That matches Experience: Karya Senior Product Engineer and Umrain Founder are both 2024–Present.

3. **The hero now points at the story the rest of the page is built around.** Impact leads with Umrain revenue. Work leads with the Umrain card marked Featured and links to [umrain.in](https://umrain.in). Experience lists Umrain second. The previous subtitle introduced an anonymous founder, then the page spent the next sections explaining it.

4. **Search and share cards do not carry the new claim.** The visible hero and the machine-readable identity now disagree:

   | Surface | What it still says |
   | --- | --- |
   | Document `<title>`, Open Graph title, Twitter title | Shaik Mohammad Abdullah \| Product Engineer \| shaikmoabdullah.com |
   | HTML meta description | Mentions "founding Umrain" in a parenthesis |
   | Open Graph and Twitter descriptions | Omit Umrain entirely |
   | JSON-LD `jobTitle` | `Product Engineer` only (the person description does say "Founder of Umrain") |
   | Hero paragraph under the new subtitle | Still says "founding my own", without the company name |
   | Resume summary | "Senior Product Engineer" plus the revenue figure, not this exact line |

   Someone who sees the site gets "Founder of Umrain" in the first three seconds. Someone who sees a Slack unfurl, a Twitter card, or the Google title does not.

## What to do next

In this order. Each item closes a gap the new subtitle opens, or a gap that makes the new claim harder to trust.

1. **Put the same claim on the share and search surfaces** in `src/app/layout.tsx`. Keep the document title short so the name is not truncated. Add "Founder of Umrain" to the Open Graph description and the Twitter description, which currently drop it. Set JSON-LD `jobTitle` to both roles (schema.org allows a string or an array), for example `["Product Engineer", "Founder of Umrain"]`.

2. **Rewrite the hero paragraph so it does not undo the subtitle.** `src/components/Hero.tsx` still says "shipping SaaS products and platforms (and founding my own)". The subtitle now names the company, so the paragraph should say something the subtitle does not: the first-year revenue, or the end-to-end ownership already spelled out in the Umrain case study.

3. **Make "Umrain" in the hero a link.** The word is plain text. The case study and the resume already link to `https://umrain.in`. Linking the subtitle (or linking it to the featured work card) lets the new claim be checked in one click.

4. **Add the missing Karya bullet to Experience.** The resume has a fifth Karya point that the site never shows: 25+ modular task components for voice, touch, and selection, including workers in low-bandwidth and low-literacy settings. `src/components/Experience.tsx` stops at authorization, client onboarding, and the natural-language query. That is the largest difference between the PDF in the header and the page a recruiter just read.

5. **Make the Karya query story match on both documents.** The site case study in `src/components/Projects.tsx` says the plain-English query tool includes chat history, reusable templates, and resizable tables. The resume NLQ bullet does not. Add that detail to `resume/resume.tex` and regenerate `public/Shaik_Mohammad_Abdullah_Resume.pdf`, or remove it from the site, so the two do not disagree.

6. **Show authorization in Skills.** The lead Karya story is RBAC and ReBAC across 100+ API routes. `src/components/Skills.tsx` lists languages, frontend, backend, AI, testing, and tools, and does not mention authorization. A visitor who scans skills after the case study will not see the specialty the page just argued for.

7. **Fix the resume path in the README.** `README.md` still says to add `public/resume.pdf`. The file on the site is `public/Shaik_Mohammad_Abdullah_Resume.pdf`, and the header links to that path. `/resume.pdf` 404s. Update the README so the next deploy does not recreate the old filename.

8. **Add Impact to the nav.** Impact renders between the hero and Experience and holds the `$40K` number the new subtitle is pointing at. `navLinks` in `src/components/Header.tsx` and `sectionIds` in `src/hooks/useActiveSection.ts` only track About, Experience, Work, and Contact. Skills is also omitted. Add Impact first; it is the proof for the line that just changed.

9. **Decide the public title: Product Engineer or Senior Product Engineer.** The hero, page title, and JSON-LD say Product Engineer. The resume summary and the Karya role say Senior Product Engineer. If "Product Engineer" is the brand and "Senior" is the Karya job, the hero paragraph should say that. Right now both titles are public and they do not match.

10. **Give Contact a direct phone link.** The phone control in `src/components/Contact.tsx` is WhatsApp only (`wa.me`). The resume lists a phone number as a phone. Add a `tel:` link beside WhatsApp, and one sentence on what kinds of conversations are welcome. The hero is now specific about who this is; Contact is still only "Email and WhatsApp are the fastest way to reach me."
