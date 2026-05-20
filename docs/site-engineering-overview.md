# Prefabricated.co — engineering & content overview

Handoff doc for engineers and content owners. **Canonical production URL:** `https://www.prefabricated.co` (see `lib/seo.ts` → `SITE_URL`). The stack is **Next.js 16 (App Router)**, React, Tailwind, Neon serverless Postgres for lead/storage, Resend (or configured provider) for transactional email, Vercel Analytics + GA4 (`G-VF74ZRJQ4V` in `app/layout.tsx`).

**See also:** [Site audit handoff](./site-audit-handoff.md) · [Accuracy conflicts appendix](./accuracy-conflicts-appendix.md)

---

## What the site is for

**Prefabricated.co** positions as a **Central Florida–focused** operator helping people explore **legal, permitted, foundation-oriented** small housing: **backyard ADUs**, **prefab / “EarthNest”** style upgrades, **Escape** travel tiny-home SKUs, **Florida tiny-home communities**, and **homestead / eco-upgrade** narratives. It is **lead-generation and education heavy**, not a self-serve commerce catalog for every SKU.

**Fit in the market:** Between (a) generic national prefab marketplaces, (b) local custom ADU builders who don’t publish county-level SEO, and (c) tiny-home manufacturers selling units without zoning context. This site combines **local ADU landing pages** (100+ `/adu-*` routes), **county/rule explainers**, **qualification funnels**, and **email capture** so prospects self-segment before sales touches them.

---

## Information architecture (high level)

| Area | Routes / entry | Role |
|------|-----------------|------|
| **Home** | `/` | Primary funnel: pathways, ADU quiz, calculator, rules teaser, **Home interest** form, CTAs to `/qualify`. |
| **Qualification (deep lead)** | `/qualify` | Multi-step form → `POST /api/qualify-leads` → DB + personalized report emails. |
| **Light lead (homepage-style)** | Sections using `HomeInterestSection` | `POST /api/home-interest` — name, email, ZIP, interests; same table family as qualify in practice (see API). |
| **ADU local SEO** ~100 + 5 hubs | `/adu-orlando`, `/adu-orange-county`, … | `LocalLandingPage` + `lib/local-pages-data.ts` + **regulatory SSOT** in `lib/local-adu-regulatory.ts` + rules adapter in `lib/regulatory/rules-page-adapter.ts`. |
| **ADU utilities** | `/adu-rules`, `/adu-checklist`, `/adu-calculator` | Rules directory, **10-point checklist** + timeline, calculator. |
| **Course / lead magnet** | `/free-adu-course`, `/free-adu-course/starter-kit` | Content + **starter kit** download `POST /api/starter-kit-downloads`. |
| **Escape product line** | `/escape-tiny-homes`, `/escape-tiny-homes/[slug]` | SKUs, checkout hook `POST /api/checkout`, leads `POST /api/escape-leads`. |
| **Build configurator** | `/build` | Multi-step; `POST /api/build-inquiries`. |
| **Trust / brand** | `/about`, `/faq`, `/contact` | Contact form patterns; `/contact` may link to qualify. |
| **EarthNest / homestead** | `/earthnest-living-systems`, `/closed-loop-homestead`, `/florida-growing-zones-homestead-planning`, `/eco-upgrades` | Narrative + upsell to qualify. |
| **Communities** | `/tiny-home-communities`, `/tiny-home-communities/florida`, `/tiny-home-communities/florida/[slug]` | Directory SEO. |
| **Resources** | `/resources`, `/florida-tiny-living-guide`, `/county-guide` | Supporting content. |

---

## Lead capture matrix (what hits the backend)

| Mechanism | API route | Schema / notes |
|-----------|-----------|----------------|
| Full qualify | `POST /api/qualify-leads` | `qualifyFullSubmissionSchema` includes optional sanitized **`source`** (from `?source=` on `/qualify`, default `direct`); stored in **`payload` JSON** with the rest of the form. Team email shows attribution line. |
| Home interest (short) | `POST /api/home-interest` | `homeInterestSubmissionSchema` — interests, name, email, ZIP, optional phone/message, **`marketingConsent` required (must be true)**. **Exit-intent modal** posts here with `message: "Exit-intent modal"`. |
| Legacy / other leads | `POST /api/leads` | `lib/submission-schemas.ts` → `leads` table; confirmation emails. |
| Escape | `POST /api/escape-leads` | Tiny-home buyer lead path. |
| Build | `POST /api/build-inquiries` | Configurator completions. |
| Starter kit | `POST /api/starter-kit-downloads` | Download gate. |
| Homestead zone PDF | `POST /api/homestead-zone-report` | Zone report asset. |
| Quiz / progressions | `POST /api/progressions` | `adu-quiz-funnel` — marketing progression tracking. |

**Operational note:** Several flows require **Neon** tables (e.g. `qualify_submissions`, `leads`). If DB is missing, APIs return explicit errors pointing at `db/schema.sql`.

---

## Client experience flow (recommended mental model)

1. **Organic / paid entry** → Local ADU page, home, or guide.
2. **Education** → Quick rules + preflight cards + (on checklist page) **10-point checklist** + permitting timeline.
3. **Soft conversion** → `HomeInterestSection` or **exit-intent modal** (`components/exit-intent-lead-modal.tsx`) → `/api/home-interest`.
4. **Hard conversion** → `/qualify` → report + team email.
5. **Product-specific** → Escape lanes → checkout / `escape-leads`; Build → `build-inquiries`.

**Brand titles (2026-05):** Local ADU pages use `getPageTitle()` in `lib/seo.ts` → `{location} ADU | Prefabricated.co — EarthNest Florida` via `lib/local-page-metadata.ts`. Legacy `metaTitle` in `local-pages-data.ts` is deprecated.

---

## ADU content system (technical)

- **Data:** `lib/local-pages-data.ts` defines each locality (slug, county, copy blocks, `quickRules`, etc.).
- **Regulatory SSOT:** `lib/local-adu-regulatory.ts` — slug-keyed `COUNTY_REGULATORY_BLOCKS` (`orange-county`, `polk-county`, `city-orlando`, etc.) with `maxSizeRule`, `quickRules`, **`lastVerified` (YYYY-MM-DD)**, **`citation`**, **`status`** (`live` | `provisional`). `/adu-rules` consumes `lib/regulatory/rules-page-adapter.ts`. `getRegulatoryFootnoteForPage()` drives local landing footnotes. Calculator alerts derived from SSOT.
- **UI:** `components/local-landing-page.tsx` composes hero, intro, quick rules, Orlando overlay, **preflight 4-card** (`adu-preflight-checklist.tsx`), links, model callout, **permitting timeline**, calculator, **HomeInterestSection**, footer.
- **Checklist page:** `/adu-checklist` uses **full** `ADUFeasibilityChecklist` (`adu-feasibility-checklist.tsx`) — 10 checkboxes, progress persisted in `localStorage`.

---

## Analytics & events

- Vercel Analytics: default page views.
- GA4: `gtag` in root layout; `generate_lead` fired from `HomeInterestSection`, **exit-intent**, and **mobile conversion drawer** CTA.

**Improvement idea:** Name events consistently (`generate_lead` + `source=exit_intent|home_hero|...`) for funnel reporting.

---

## Mobile conversion (max-width viewports)

- **`components/mobile-conversion-drawer.tsx`** — Bottom sheet on `/adu-*` (50% scroll or 45s) and resource paths (45s). **Excluded:** `/qualify`, **`/adu-calculator`** (no overlap with calculator inputs). Cooldowns in `localStorage` under `prefab_mobile_drawer_dismissed`. **45s timer** is armed inside **`requestIdleCallback`** (fallback `setTimeout(0)`) so main-thread work finishes first. CTA → `/qualify?source=mobile_drawer`; GA4 `generate_lead` with `{ source: "mobile_conversion_drawer" }`.

## County report API (stub)

- **`POST /api/generate-county-report`** — JSON `{ countySlug, localNeighborhood }`. Slugs: `orange-county`, `lake-county`, etc. Returns validation stub + `meta` from regulatory SSOT.

## Rate limiting (API)

- **`middleware.ts`** — Upstash sliding window (40 req / 60s per IP) on `POST /api/*` when **`UPSTASH_REDIS_REST_URL`** and **`UPSTASH_REDIS_REST_TOKEN`** are set in the environment. If unset, throttling is disabled — confirm in Vercel production.

---

## Exit-intent behavior (implementation details)

- **Trigger:** `mouseleave` on `document.documentElement` when `clientY <= 0` (desktop pointer intent).
- **Excluded:** `(pointer: coarse)` devices (most phones/tablets — **no mobile exit intent yet**).
- **Paths:** `/qualify` (and children) skipped so we don’t interrupt the main funnel.
- **Frequency:** Once per browser session (`sessionStorage`); **7d** cooldown after dismiss, **30d** after successful submit (`localStorage` key `prefab_exit_intent_v1`).

**Follow-up options:** time-on-site modal for mobile, or `visibilitychange` when hiding tab (more aggressive — product/legal should approve).

---

## Accuracy, risk, and content governance

- **County bullet rules** in `local-adu-regulatory.ts` are **marketing-paraphrase** aligned to official citations — not legal advice. See [accuracy conflicts appendix](./accuracy-conflicts-appendix.md) for known narrative drift in blogs/FAQ/process copy.
- **Disclaimer** in `components/site-footer.tsx` and checklist page: emphasizes **2026 / SB 48** narrative and that **municipal/county** authority governs; not legal advice.
- **Open questions for stakeholders**
  1. Single public brand: Prefabricated.co vs EarthNest Florida vs Escape — how should OG titles read?
  2. Should exit-intent fire on **all** pages or exclude `/checkout` / blog?
  3. **Marketing email consent:** Implemented — `marketingConsent` required (must be `true`) on `/api/home-interest`; checkbox on homepage interest form and exit-intent modal; recorded in DB payload and team email.
  4. Add **X/Twitter `site`** back to page `metadata.twitter.site` when the account exists (currently omitted).
  5. Target CRM: are APIs only email, or should we sync to HubSpot/Salesforce?

---

## Suggested improvements (near term)

- **Mobile lead capture:** Pair exit-intent with a **gentle** bottom sheet after N seconds or scroll depth on ADU pages only.
- **CRM / webhook:** One outbound webhook from `qualify-leads` and `home-interest` for ops.
- **Unify EarthNest naming** in metadata and OG images.
- **Typecheck in CI:** `next build` currently notes skipped validation — enable `tsc --noEmit` in CI if not already.
- **docs/affiliate-product-master-list.md** — keep commerce/offers aligned with on-site Escape and ADU promises.

---

## Suggested additions (later)

- Authenticated **saved checklist** (account) vs localStorage only.
- **County PDF** downloads per hub with revision dates.
- **A/B** hero and qualify step order; measure completion rate.
- **Structured data** per locality (FAQ / LocalBusiness where appropriate) — audit for duplication and Google guidelines.

---

## Key file index

| Concern | Location |
|---------|-----------|
| SEO defaults + `getPageTitle()` | `lib/seo.ts` |
| Local page metadata | `lib/local-page-metadata.ts` |
| Locality data | `lib/local-pages-data.ts` |
| Regulatory SSOT | `lib/local-adu-regulatory.ts` |
| Rules page adapter | `lib/regulatory/rules-page-adapter.ts` |
| OC homepage building reqs | `lib/building-requirements/florida-orange-county.ts` |
| Local ADU page shell | `components/local-landing-page.tsx` |
| 10-point checklist | `components/adu-feasibility-checklist.tsx` |
| Preflight 4-card | `components/adu-preflight-checklist.tsx` |
| Exit modal | `components/exit-intent-lead-modal.tsx` |
| Mobile bottom sheet (≤767px) | `components/mobile-conversion-drawer.tsx` |
| ADU income calculator | `components/adu-calculator-section.tsx` |
| County report stub | `app/api/generate-county-report/route.ts` |
| Qualify form | `components/qualify/qualify-multi-step-form.tsx` |
| Short lead form | `components/home-interest-section.tsx` |
| Root shell / analytics | `app/layout.tsx` |

---

*Generated for internal handoff; update this doc when routes or APIs change.*
