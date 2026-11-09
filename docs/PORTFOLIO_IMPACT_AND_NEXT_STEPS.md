# Portfolio impact and next steps

Commit `cc5d4c7` (`feat: add awesome updates`) on `main`, compared with `247aab3`.
17 files changed, 349 insertions, 718 deletions. The public resume PDF went from `public/resume.pdf` (~124 KB) to `public/Shaik_Mohammad_Abdullah_Resume.pdf` (~39 KB).

This is a narrative cut, not a visual refresh. The page and the resume now argue a shorter story: senior product engineer, founder, three proof points.

## What made a significant difference

### 1. Selected work is now three case studies

`Projects.tsx` dropped eight catalog cards (Umrain, Karya NLQ, HealthCheck, EazyUpdates, Kroger, Smrize, Confluence, and the 2021 research paper). What remains is three write-ups with Problem, What I did, and Result:

| Case study | Why it carries the page |
| --- | --- |
| Umrain (featured, full width) | Founder scope plus ~$40K first-year revenue, with a live link. |
| Access control and plain-English queries (Karya) | 100+ routes, hours-to-seconds provisioning, SQL removed for non-technical users. |
| Homepage and category discovery (Kroger) | 3× click-through and 12% sales lift on a named, public product. |

A reader can see the problem, the decision, and the outcome without parsing a paragraph of stack tags. The collapsing “+N more skills” widget is gone, which removes a piece of UI that hid the point of each card.

### 2. Experience and the resume finally agree on the spine of the story

Before this commit the two surfaces disagreed in ways a recruiter would notice:

- The site listed Umrain as 2024–2025 and put it first. The resume listed Umrain as 2025–2026 and put it first.
- The site email was `smabdullahblr@gmail.com`. The resume used the same old address.

After this commit:

- Both list Karya (Sep 2024–Present), then Umrain (2024–Present), then ZopSmart, then MountBlue.
- Both use `shaikmoabdullah@gmail.com`. The site JSON-LD email matches.
- The resume opens with one line a scanner can use: “Senior Product Engineer with 5+ years shipping SaaS end to end. Founder of Umrain (~$40K first-year revenue).”
- Role bullets on the site are one to three sentences. The resume dropped the duplicate Key Achievements section, per-bullet stack tags, the student-club entry, the school line, the research project, Confluence, and HealthCheck.

The resume also states the enterprise line in a form the site now echoes: Google and OpenAI as clients, Anthropic and Microsoft as partners, on Karya’s PaaS. The previous resume only said “enterprise client onboarding,” and the achievements section said “teams working with” those companies. Naming the relationship is the sharpest new claim in the commit.

### 3. The page asks for one thing

The hero title changed from “Product/Engineer” to “Product Engineer, Founder.” The hero button is “Get in touch,” and it scrolls to contact. Resume download left the hero (including the fake two-second “Downloading…” state) and became a persistent header button that opens the named PDF. LinkedIn, GitHub, and X moved out of the hero and sit once, as icon buttons, next to email and WhatsApp.

Contact copy changed from “Open to opportunities and conversations” to “Email and WhatsApp are the fastest way to reach me.” The phone control is a `wa.me` link, not `tel:`.

Navigation shrank from seven items (About, Impact, Experience, Projects, Skills, Education, Contact) to four (About, Experience, Work, Contact). The education section was removed; “B.Tech, Computer Science · REVA University” is a footer line. Skills are no longer their own destination. They sit as a compact definition list under Selected work.

### 4. The layout matches that shorter story, and motion follows the user

- Numbered headings (`01` Experience, `02` Selected work, `03` Contact) via a shared `SectionHeading`.
- Experience is a timeline instead of bordered cards with impact chips.
- Impact metrics dropped their boxes and read as a strip. The “zero-trust” label became “Karya authorization.”
- Section divider rules were removed. `scroll-mt-20` keeps anchors clear of the sticky header.
- `prefers-reduced-motion: reduce` turns off smooth scrolling. Framer Motion is wrapped in `MotionConfig reducedMotion="user"`.

Net effect: less chrome, fewer repeated social links, and a page that can be read in one pass.

## What this traded away

These are the costs of the cut. They are the reason the next edits matter.

- **Proof that no longer has a home.** EazyUpdates (about half the product, GitHub and Google Calendar integrations, live site `eazyupdates.com`) and Smrize (20% traffic, 24-minute sessions) survive as single ZopSmart lines. They are not case studies. Confluence, HealthCheck, the research paper, and the campus developer-club role are gone from both surfaces.
- **A new site/resume gap replaced the old date gap.** The resume still has the Karya bullet for 25+ voice, touch, and selection task components in low-bandwidth, low-literacy settings. The site experience section does not. The Karya case study still mentions chat history, reusable templates, and resizable tables. The resume NLQ bullet does not.
- **Impact is on the page and absent from the menu.** The four numbers ($40K, 100+, 3×, 12%) still render, but `#impact` is not in the header and not in `useActiveSection`. Skills are in the same position: visible, not linked.
- **The differentiator left the skills list.** RBAC, ReBAC, and Permit.io are no longer skills, even though authorization is the lead Karya story. Python, WhatsApp Business API, D3.js, MySQL, Azure AI, and Google Analytics were removed from both the site and the resume.
- **`/resume.pdf` now 404s.** The header points at `/Shaik_Mohammad_Abdullah_Resume.pdf`. `README.md` still says to add `public/resume.pdf` for a Download Resume button that no longer exists.
- **Hiring intent is implicit.** “Open to opportunities” is gone. That is the right line if the page is a founder profile. It is a missing line if the page is also for senior product-engineering roles.
- **WhatsApp is the only phone path.** Desktop visitors without WhatsApp cannot place a call from the contact row. The resume still prints the number as a phone number.
- **Repeated “Live” links.** Three case-study anchors expose the accessible name “Live,” with no product name.

## What to do next

In this order. The first three close holes this commit opened. The rest make the new story harder to dismiss.

1. **Keep the old resume URL working.** Serve the same PDF at `/resume.pdf` (a copy or a rewrite) and point `README.md` at `public/Shaik_Mohammad_Abdullah_Resume.pdf`. Anything already linking to `/resume.pdf` is broken as of this commit.

2. **Make the Karya story identical on the site and the resume.** Add the 25+ task-component outcome back to the site timeline. It is the accessibility proof and it is already on the resume. Then either restore “chat history, reusable templates, resizable tables” on the resume NLQ bullet or delete that clause from the case study.

3. **Add one case study back, in the new shape.** EazyUpdates is the better candidate: clear ownership (half the product), two named integrations, and a live URL. Smrize’s 20% traffic and 24-minute sessions are the backup if there is no public Smrize URL. Leave Confluence, HealthCheck, and the research paper off the page. Three or four studies is enough; eight was a catalog.

4. **Put the numbers where the nav can reach them.** Add Impact between About and Experience, or move the four metrics into the hero and delete the orphan section. Right now the best evidence sits in a block the menu skips. While touching the nav, add RBAC and ReBAC back to the skills row. They are the Karya headline, not filler.

5. **Give contact two honest paths.** Keep WhatsApp. Add a `tel:` link with the same number. Decide in one hero sentence whether this page is “building Umrain” or “open to senior product engineering roles.” The current hero still uses the older “product-minded engineer” paragraph under the new “Product Engineer, Founder” title, so those two lines should be rewritten together.

6. **Make the enterprise sentence verifiable.** Keep Google, OpenAI, Anthropic, and Microsoft only if each relationship can be described in one public clause (what was onboarded, without customer data). Do the same privately for $40K, 3×, 12%, and hours-to-seconds: time window and baseline. The page does not need a footnote. The wording does need to survive a recruiter asking “what did you ship for them?”

7. **Name the live links.** Use “Umrain live site,” “Karya live site,” and “Kroger live site” as the accessible names. The visible word can stay “Live.”

8. **Align the document title with the hero.** The `<title>` and Open Graph text still say “Product Engineer” and the Open Graph description does not mention founding Umrain, while the meta description does. One description, used in both, should match “Product Engineer, Founder” and the email already updated in JSON-LD.
