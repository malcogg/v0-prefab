# Accuracy Conflicts Appendix

**Purpose:** Track known content drift, resolved Tier 1 fixes, and team QA items for page-by-page accuracy reviews.

**Last updated:** 2026-05-20  
**Owner:** Content + legal/planning review

---

## Conflict register

| # | Conflict | Locations | Tier 1 status | Team action |
|---|----------|-----------|---------------|-------------|
| 1 | Orange max **45% vs 50%** | Was: `adu-rules-page`, `site-faq-data` | **Fixed** — SSOT + FAQ use **50%** | Spot-check `/adu-rules`, `/faq` |
| 2 | **Polk missing** from `/adu-rules` | Was: rules page tabs only | **Fixed** — Polk tab added | Verify Polk stats vs Ord. 25-0415 |
| 3 | **Three regulation sources** drifting | Was: regulatory file, rules page, building-requirements | **Fixed** — single SSOT + adapter | No duplicate COUNTY_DATA |
| 4 | **SB 48 Orange** vs legacy Special Exception / owner-occupancy narrative | FAQ (`/faq`), blogs, `process-section.tsx`, `local-pages-data` jurisdiction strings, local landing Service schema | **Documented — content pass next** | Legal review then update FAQ/blogs/process |
| 5 | **Brand titles** (`EarthNest Florida` only vs `Prefabricated.co`) | Was: 100× `metaTitle` in local-pages-data | **Fixed** — runtime `getPageTitle()` | Verify one local page in browser tab |
| 6 | **FL community Unsplash placeholders** | `data/tiny-home-communities/florida.ts` | **Flagged — assets pending** | Replace images when supplied |
| 7 | **Upstash rate limiting** may be off in prod | `middleware.ts` requires env vars | **Ops verify** | Confirm `UPSTASH_REDIS_REST_*` in Vercel |

---

## Florida community image audit

**9 listings using Unsplash placeholders** (replace with `/images/tiny-home-communities/{slug}.png` when available):

| Slug |
|------|
| `circle-pond-ruskin` |
| `gracious-tiny-house-park` |
| `simple-life-lakeshore` |
| `tiny-house-siesta` |
| `matlacha-tiny-village` |
| `sunshine-key-tiny-house-village` |
| `cross-creek-village-leesburg` |
| `story-box-brooksville` |
| `simple-life-charlotte-harbour` |

**5 with local assets:** `tiny-town-orlando`, `peacewind-cocoa`, `escape-tampa-bay-village`, `canoe-creek-st-cloud`, `outpost-the-preserve-winter-haven`

---

## SB 48 / legacy copy — follow-up content pass

These surfaces may still describe **pre-SB 48** Orange County requirements (Special Exception, homestead owner-occupancy). Rules UI surfaces were updated; narrative content was intentionally deferred.

| Surface | Example drift |
|---------|----------------|
| `/faq` | Eligibility answers mention owner-occupancy and Special Exception for Orange |
| `components/process-section.tsx` | Step 2 "Special Exception Filing" |
| `lib/local-pages-data.ts` | Jurisdiction strings on Orange locality pages |
| `components/local-landing-page.tsx` | Service schema mentions "special exception filing" |
| Blogs | `special-exception-orange-county-zoning`, `seven-steps-legal-backyard-home`, budget worksheet |

**Recommended process:** Counsel confirms SB 48 effective language → batch update FAQ + process + top 5 legal pillar blogs → add "as of [date]" footers.

---

## Page-by-page QA checklist

### Regulations

- [ ] `/adu-rules` — Orange 50%, no owner-occupancy in stats, Polk tab live, provisional badges on Lake/Seminole/Osceola
- [ ] `/adu-orange-county` — quick rules match SSOT; footnote shows May 20, 2026 + citation
- [ ] `/` `#orange-county-requirements` — size/eligibility from SSOT; SB 48 note in disclaimer
- [ ] `/adu-calculator` — jurisdiction alerts match county blocks

### Brand + FAQ

- [ ] `/adu-alafaya` (or any local page) — title: `Alafaya ADU | Prefabricated.co — EarthNest Florida`
- [ ] `/faq` — Orange size answer says **50%** (not 45%)

### Communities

- [ ] Each FL listing: name, tenancy, legal notes, outbound URL, image (flag placeholders)

### Lead flows

- [ ] `/qualify` submits; report email received
- [ ] Upstash env vars confirmed in production

---

## Verification commands

```bash
pnpm run build
grep -r "45%" . --include="*.ts" --include="*.tsx"   # ADU copy only — CSS gradients OK
grep -r "COUNTY_DATA" .                               # should return nothing
```

---

*Resolve rows by moving status to **Fixed** and linking the PR/commit. Add new rows when drift is discovered.*
