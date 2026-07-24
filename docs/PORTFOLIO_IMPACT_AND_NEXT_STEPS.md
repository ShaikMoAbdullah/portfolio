# Portfolio impact analysis — `feat: add more details`

**Commit:** [`247aab3`](https://github.com/ShaikMoAbdullah/portfolio/commit/247aab3060b829aff9e6963d0861986591b2e65a)  
**Compare:** [24855ce…247aab3](https://github.com/ShaikMoAbdullah/portfolio/compare/24855ce11d38...247aab3060b8)  
**Files touched:** `src/components/Experience.tsx`, `src/components/Projects.tsx`, `resume/resume.tex` (new), `public/resume.pdf`

---

## How this change makes a significant difference

### 1. Experience tells a clearer career story
- **Karya is now first** (current role), with Umrain placed after it and dated **2024 – 2025** instead of the previous future-looking **2025 – 2026**. Recruiters see the active senior role before the founder chapter.
- A new Karya highlight positions you as the **access-control lead**: end-to-end ownership, reviews, and mentoring — not only feature delivery. That signals scope and leadership, not just shipping tickets.
- ZopSmart now includes **Smrize** and **Confluence** alongside Kroger, EazyUpdates, and HealthCheck, so the ZopSmart tenure reads as a broader product portfolio instead of a few flagship bullets.

### 2. Projects section is more complete and metric-backed
- **Smrize** is a first-class project card with stack and impact (**20% traffic**, **24-min average daily sessions**).
- That closes a gap where a strong mobile/Next.js outcome lived only in memory (or resume) but not in the public portfolio grid.

### 3. Resume is now maintainable as code
- Adding `resume/resume.tex` turns the PDF from a binary-only artifact into an **editable, reviewable source of truth**.
- The refreshed `public/resume.pdf` is smaller (~187KB → ~124KB) and aligned with a denser ATS-friendly layout (skills matrix, achievements, full experience).
- Download CTA on the site and the LaTeX source can stay in sync going forward — a real ops win for a portfolio that markets both web presence and resume.

### 4. Stronger proof density for hiring conversations
Taken together, the site + resume now reinforce the same narrative: **authorization/security ownership at Karya**, **founder outcome (~$40K)**, and **measurable product wins** (Kroger CTR/sales, Smrize engagement, NLQ removing SQL dependency). That makes cold outreach and screening conversations easier to back with numbers.

---

## What to do next (prioritized)

### P0 — Fix consistency bugs (trust)
1. **Align Umrain dates and ordering across site vs resume.**  
   Site: Karya first, Umrain `2024 – 2025`. Resume TeX: Umrain first as `2025 -- 2026`. Pick one timeline and mirror it in Experience, Projects, Impact, TeX, and PDF.
2. **Sync the new Karya leadership bullet into `resume/resume.tex`** (and recompile PDF) so the downloadable resume matches the site.
3. **Decide Confluence/Smrize live links.** Both project cards lack `liveUrl`/`githubUrl`. Add demos, case-study pages, or explicit “private / client work” labels so empty CTAs do not look unfinished.

### P1 — Raise conversion for recruiters
4. **Surface resume “Key Achievements” on the site Impact strip** (e.g. NLQ removed SQL dependency; enterprise onboarding involving Anthropic / Microsoft / Google / OpenAI — only if claim language is accurate and approved).
5. **Add 1–2 deep case studies** (Umrain founder journey; Karya zero-trust authz). Short project cards win attention; case studies win interviews.
6. **Tighten Experience length.** Karya has 8 dense bullets — keep 4–5 strongest outcome bullets on the site; leave full detail in the resume PDF.
7. **Hero CTA pair:** keep Download Resume and add a secondary “View selected work” jump to Projects/Impact.

### P2 — Product & polish
8. **Single content source.** Extract experience/projects/skills into a shared JSON/MD module consumed by React *and* documented as the input for resume generation, to prevent future drift.
9. **Visual proof.** Screenshots or short Looms for Smrize, NLQ UI, HealthCheck graph, and Umrain itinerary flow — portfolios with product visuals outperform text-only grids.
10. **SEO / shareability.** Dedicated OG image, richer meta description featuring top metrics, and optional `/work/umrain` and `/work/karya-authz` routes for indexing.
11. **Accessibility pass on project cards.** Ensure `+N` stack overflow tooltips are keyboard-accessible (hover-only today).
12. **Resume build automation.** Document or script `pdflatex` → copy into `public/resume.pdf` so PDF never lags TeX.

### P3 — Positioning
13. Clarify the **Product/Engineer** title in the hero with a sharper target (e.g. Senior Product Engineer / Platform / Authz) so inbound matches the roles you want.
14. Add a short **“How I work”** or principles line under the hero so founders/hiring managers get signal beyond metrics.

---

## Suggested immediate checklist

| Action | Why |
|--------|-----|
| Unify Umrain dates site ↔ resume | Avoid credibility hits in screening |
| Recompile PDF after TeX sync | Download resume must match site story |
| Add Smrize/Confluence media or “private” labels | Projects feel complete |
| Promote top 3 achievements into Impact | Faster “wow” in first scroll |
| Draft one case study (Karya authz or Umrain) | Differentiates from resume mirrors |

---

*Generated for push automation on commit `247aab3` (`feat: add more details`).*
