# Website Overview: Tiny Home & Permaculture Platform

**Working name / brand:** Prefabricated.co (evolving toward a broader tiny-living + regenerative homestead destination)

**Document purpose:** Single source of truth for product strategy, content architecture, SEO, monetization, and roadmap—usable for website copy, investor materials, and engineering briefs.

**Last updated:** May 2026

---

## 1. Website Overview

### 1.1 Mission

We help people **discover, compare, and move toward** tiny homes on land or in intentional communities—starting in **Florida**, expanding across the **U.S.**—and we connect that housing journey to **practical permaculture and closed-loop homesteading** (food, water, soil, energy, and resilient systems).

We are **not** the owner/operator of most listed communities. We **curate** high-signal listings, explain governance and tenancy models in plain language, and send serious shoppers to **verified operator sources** with transparency about what we know and what they must verify.

### 1.2 Vision

Become the **most trusted discovery layer** between curious newcomers and legitimate tiny-home pathways—then extend into **vetted marketplace transactions** and **turnkey permaculture property packages** (design + implementation partners), without becoming a low-quality “RV park spam” directory.

### 1.3 Target Audience

| Segment | Needs | How we win |
|--------|--------|------------|
| **Relocation planners** | Legality, climate, flood/wind reality, total cost of ownership | Florida-first rules context, community profiles, outbound verification |
| **Permaculture-curious tiny dwellers** | Edible landscapes, water, compost, vertical growing, zone timing | Guides, tools (e.g. growing zones + lunar rhythm), EarthNest-style systems framing |
| **Investors / family ADU hosts** | Income, permitting, models that are code-aware | ADU calculators, county rules hubs, lead evaluation |
| **Operators (communities, builders)** | Qualified inbound, brand-safe representation | Editorial standards, structured data, consistent NAP-style facts |
| **SEO researchers** | Authoritative explainers vs. thin affiliate pages | Long-form resources, internal linking, primary sources (USDA ARS, extension tone) |

### 1.4 Unique Value Proposition (vs. Typical Directories)

- **Curated, not scraped:** Community profiles emphasize **tenancy models**, **amenity semantics**, **legal notes**, and **primary sources**—not anonymous crowd pins.
- **Florida-grounded realism:** Humidity, storms, salt, zoning, and ADU/tiny distinctions are **first-class**—not “one national map.”
- **Regenerative IQ:** Food/water/soil content is **actionable** (tools + checklists), aligned with homestead workflows—not generic blog filler.
- **Honest boundaries:** We state what is **editorial**, what is **operator-supplied**, and where **buyers must engage counsel/inspectors**.

---

## 2. Content & Information Architecture

### 2.1 Current Site (Representative—verify in repo)

**Core marketing / conversion**

- Homepage: prefab ADUs, EarthNest narrative, calculator, quiz/funnel, lead capture, directory teaser.
- **Build / evaluation** flows and contact.

**Global header / navigation**

- Fixed stack: thin **route accent** bar, **announcement** strip (multi-path Florida copy), primary **nav row** (logo, centered desktop links + Resources menu, CTAs), then a **thin context strip** under the nav for route-aware **“You’re in”** / tagline—keeps the main bar readable on desktop. **Modal dialogs** (e.g. closed-loop card detail) use a **blurred dimmed backdrop** and layer above the fixed header.

**Tiny home communities (directory)**

- National hub: `/tiny-home-communities`
- Florida roster + filters: `/tiny-home-communities/florida`
- **Detail pages:** `/tiny-home-communities/florida/[slug]` with structured content (description, amenities, tenancy modes, legal notes, sources, outbound links).
- Data model supports: geo, contact blocks, amenity flags, tags, schema kinds (e.g. `LodgingBusiness`), JSON-LD ItemList / CollectionPage patterns.

**Resources & guides**

- `/resources` — hub for courses, checklists, calculators, eco upgrades, **and** the closed-loop homestead guide entry point.
- `/florida-tiny-living-guide` — rules/climate framing for Florida tiny living.
- `/florida-growing-zones-homestead-planning` — USDA **2023 ARS** hardiness context (companion to official map), frost notes, **almanac-style lunar rhythm** (educational), regenerative homestead report sections.
- `/closed-loop-homestead` — **Closed-loop homestead guide:** showcase food cards (same strip as zone-tool results), **house-to-land system cards** (solar, water, greywater, compost, poultry, vertical grow, etc.) with **hover affordances** and **click-to-modal** detail (blurred backdrop, stacked above fixed nav). Includes a quick-scan master checklist (energy, water, food/fertility, waste). Linked from **Resources**, **Explore** nav, the **zone tool** closed-loop block, and the homepage **Florida homestead** section.
- `/earthnest-living-systems` — shelter + climate + energy + water + food stack narrative.
- `/eco-upgrades`, `/free-adu-course`, `/adu-calculator`, `/adu-rules`, `/adu-checklist`, **many locality landing pages** (SEO depth).

### 2.2 Planned / To Be Fully Built

| Capability | Description | Dependencies |
|------------|-------------|----------------|
| **Rich listing taxonomy** | Standardized fields for pad vs THOW vs park model, pricing bands (optional), waitlist, pet rules, HOA | CMS or DB, editorial workflow |
| **Faceted search & sort** | Region, amenities, tenancy, pet-friendly, water access, garden-friendly, “permaculture-friendly” tags | Front-end state + indexing |
| **Maps** | Cluster map + detail deep links | Map provider, geocoding policy, performance budget |
| **Claim / update listing** | Operator portal to propose corrections | Auth, moderation queue |
| **Saved searches & alerts** | Email when new listings match | Auth, email infra, deliverability |
| **Marketplace checkout (later)** | Deposits, intro packages, partner handoffs | Payments, legal, disclosures |

### 2.3 Guides & Resources (Editorial Pillars)

- **Legal/pathways:** Tiny vs ADU vs THOW vs RV; Florida county/city notes; insurance and wind pools (where appropriate disclaimer).
- **Land & community:** How to read a community’s lot lease; questions to ask operators; red flags.
- **Permaculture:** Zone + frost + moon rhythm as **planning tools** (not dogma); closed-loop fertility; tiny-home vertical growing.
- **Build systems:** EarthNest-style staged upgrades; water, power, food, monitoring.
- **Money:** Total cost scenarios (transparent ranges, not promises).

### 2.4 Blog / Content SEO Strategy (From Existing Data)

Use **programmatic + editorial** mix:

- **Community spotlights:** One deep post per slug cluster (“Living in X region: what operators actually offer”).
- **Comparison posts:** “Leasehold vs own-the-home in Florida tiny communities.”
- **Checklist downloads** tied to `/resources` for capture.
- **Map-adjacent content:** “Best Central Florida tiny clusters for gardeners” (ethical: disclose relationship, no pay-to-rank without label).
- **Internal linking:** Every guide links **up** to `/resources` and **sideways** to 2–3 relevant communities + relevant locality ADU pages.

---

## 3. Monetization & Business Model

### 3.1 Revenue Streams (Staged)

| Stream | MVP | Scale | Notes |
|--------|-----|-------|-------|
| **Lead generation / intro calls** | ✅ natural fit | Optimize form quality & routing | Disclose lead relationship; record retention policy |
| **Featured listings / sponsorship** | Optional | High margin | Must be **labeled advertising**; editorial firewall |
| **Tiny home sales facilitation** | Pilot with 1–2 builders | CRM + contracts | Prefer state-licensed partners; don’t practice real estate without license |
| **Permaculture property packages** | Partner-led SOWs | Productized tiers | Soil tests, water plans, guild design—not vague “eco premium” |
| **Digital products** | **Ebook** (in progress) | Bundles + templates | Gumroad/Lemon S3 + email delivery |
| **Affiliate** | Selective | Disclosure + tracking | Never trade trust for commission |

### 3.2 Affiliate Program Candidates (Due Diligence Required)

**Apply only after:** traffic baseline, disclosure footer, and merchant category fit review.

| Category | Examples / Program types | Fit |
|----------|---------------------------|-----|
| **General retail** | Amazon Associates | Broad compost bins, tools, books—**low rate, strict rules** |
| **Water & rain** | Brands selling first-flush diverters, tanks, filters (individual programs) | Matches Florida rainfall reality |
| **Solar / portable power** | Goal Zero / Renogy-style programs where available | Tiny + outage resilience angle |
| **Composting toilets** | Separett, Nature’s Head, etc. (direct or dealer affiliates) | THOW/off-grid; compliance disclaimers |
| **Seeds & nursery** | Southern Exposure, Rare Seeds, regional natives (program-dependent) | Zone-aware content synergy |
| **Tooling** | Lee Valley, A.M. Leonard, Hoss Tools (if programs exist) | Serious gardeners |
| **Soil / biology** | Down To Earth, companion microbe products (careful claims) | Educational pairing |
| **Builders / manufacturers** | Park model / tiny builders with referral agreements | High ticket; fewer clicks |
| **Education** | PermacultureDesignCourse affiliates, reputable online courses | Aligns with homestead pillar |

**Policy:** Prefer **direct merchant** programs with clear shipping/returns; label every affiliate link; avoid pay-to-list without “Sponsored” labeling.

**Implementation:** Maintain a living catalog in **`docs/affiliate-product-master-list.md`** (Amazon search buckets + non-Amazon partners). Wire approved links through **`lib/affiliate-links.ts`** so URLs stay in one place.

---

## 4. User Features & Marketing Funnel

### 4.1 Authentication & Personalization (Roadmap)

- [ ] Email + password or magic link (**Auth provider:** Clerk, Supabase Auth, or Auth.js)
- [ ] **Saved favorites** (communities + guides + tools)
- [ ] **Saved searches** (filters → email digest)
- [ ] Optional “buyer profile” (budget band, region, tenancy preference) to power better routing

### 4.2 Funnel Touchpoints (Existing + Planned)

| Stage | On-site tactics | Measurement |
|-------|-----------------|-------------|
| **Aware** | SEO pages, shareable tools (zones), directory hubs | Organic sessions, scroll depth |
| **Consider** | Comparison tables, legal explainers, outbound sources clicked | Outbound CTR, time on page |
| **Intent** | “Get evaluation,” “Book intro,” “Download kit” | Form starts, completions |
| **Trust** | Disclosures, citations (USDA ARS, operators), team/about | Return visitors, branded search |

**Email capture strategy**

- Lead magnet: **starter kit / checklist** (already aligned with free course path).
- **Tool subscribe:** “Get monthly planting + community drop” (only if you can ship consistently).
- Double opt-in where possible; clear privacy copy.

**Pop-ups / interstitials**

- Use **sparingly**; prefer **inline CTAs** on long guides to protect Core Web Vitals and SEO.
- If using exit intent, cap frequency per cookie.

---

## 5. SEO Strategy

### 5.1 Overall Approach

- **Topical authority** in: *Florida tiny living*, *ADU feasibility*, *curated communities*, *regenerative homestead planning*.
- **Entity SEO:** Communities as named entities with consistent `LocalBusiness`/`LodgingBusiness`-style structured data where accurate.
- **Trust signals:** Primary-source links (USDA PHZM, operators), visible corrections policy, `dateModified` on volatile tools.
- **Avoid:** Thin programmatic city pages duplicated without unique value (you have many locality pages—each must have *unique* legal/land context).

### 5.2 On-Page Checklist (Listings, Blog, Homepage)

- [ ] One clear H1; logical H2/H3 hierarchy
- [ ] Unique title + meta description per template
- [ ] Canonical tags; avoid duplicate filter URLs indexed (use `noindex` or canonical rules)
- [ ] Image alt text (community hero images descriptive)
- [ ] FAQ blocks only when questions are **actually frequent** (avoid fake FAQ schema)
- [ ] Internal links: hub ↔ child; related guides; “next step” module

### 5.3 Internal Linking Plan (Skeleton)

- **Homepage** → `#choose-path` pathways; directory hubs → top communities → `/resources`
- **Each community** → nearest **region guide** + **Florida tiny living guide** + relevant tool (zones)
- **Each major guide** → 3–5 communities + 1 calculator/checklist
- **Footers** → trust, privacy, advertising disclosure (when affiliates live)

### 5.4 Keyword Themes (Examples—not exhaustive)

| Bucket | Example intents |
|--------|-----------------|
| **Florida discovery** | tiny home communities Florida, THOW legal Florida, lakefront tiny village |
| **Metro long-tail** | tiny homes Orlando, Tampa Bay tiny house community |
| **Law/rules** | ADU rules Orange County, Appendix Q Florida context (always verify) |
| **Homestead** | Florida growing zone tool, permaculture tiny house, closed loop compost Florida |
| **Commercial** | prefab ADU Florida, backyard cottage income (align with service reality) |

---

## 6. Pitch Deck Summary

### 6.1 Suggested Slide Flow

1. **Problem:** Tiny living discovery is noisy; legal reality is local; permaculture buyers lack trusted bundling.
2. **Solution:** Curated directory + education + future transactions with **verification ethic**.
3. **Product:** Live screenshots—directory profile, resource tool, lead flow.
4. **Market:** Florida wedge → Sun Belt expansion; TAM/SAM/SOM (build honestly).
5. **Business model:** Leads → sponsorship → digital → affiliate → marketplace facilitation.
6. **Traction:** Traffic, communities indexed, operator conversations, waitlist, course downloads.
7. **Moat:** Data model + editorial standards + regional SEO depth + partner network.
8. **Roadmap:** Auth, favorites, monetization pilots.
9. **Team + advisors**
10. **Ask + use of funds**

### 6.2 Metrics to Track

- Organic sessions & branded search ratio
- Community detail **engagement** (scroll, outbound clicks)
- Lead volume, CPA, **lead→call** rate
- Email list growth & churn
- Revenue per stream (when live)
- **Quality:** citation corrections/month, operator satisfaction

### 6.3 Growth & Revenue Narrative (Realistic)

Tell a **phase story**: prove **Florida SEO + directory trust** → introduce **monetized placements** with disclosure → add **digital SKU** for margin → expand **geo** with repeatable playbook → only then **marketplace** mechanics. Investors reward disciplined sequencing over fantasy GMV.

---

## 7. Future Roadmap

### Phase 1 — MVP (now → near term)

- [x] Florida community directory + detail pages + JSON-LD
- [x] High-value resource pages (tiny living guide, zones + lunar companion tool with USDA citations)
- [x] Lead capture on core pages
- [x] Homepage “choose your path” section (`#choose-path`) + hero CTAs for ADU, tiny communities, permaculture
- [ ] Standardize listing QA checklist & refresh dates
- [ ] Measurement baseline (analytics events for outbound + forms)

### Phase 2 — Accounts, favorites, digital product

- [ ] Auth + saved lists
- [ ] **Ebook** launch + receipt email funnel
- [ ] Email marketing integration (Resend/ConvertKit/etc.)
- [ ] Operator “suggest an edit” form + moderation

### Phase 3 — Marketplace depth, packages, affiliates

- [ ] Faceted search + map
- [ ] Featured listings (labeled) + sponsorship agreement templates
- [ ] Permaculture package partners (SOW + regions served)
- [ ] Affiliate rollout with **Advertising & Affiliates** policy page
- [ ] Select transaction facilitation (legal review required)

---

## Appendix A — Brand & Compliance Notes

- **Disclosures:** Affiliate links; sponsored listings; lead referral relationships.
- **Not legal/financial advice:** Especially zoning, tax, and investment claims.
- **Fair housing & advertising:** Avoid discriminatory targeting in paid social.
- **Data privacy:** Minimal PII; clear retention; unsubscribe honor.

## Appendix B — How to Use This Document

- **Website copy:** Sections 1, 2.3, 4.2, 5.4
- **Dev brief:** Sections 2.2, 4.1, 7
- **Investor deck:** Sections 1, 3, 6
- **SEO sprint backlog:** Sections 2.4, 5.2, 5.3

---

*This document is a living strategy brief. Update quarterly or when roadmap phases change.*
