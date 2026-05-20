# Tiny home community listing spec (PreFabricated.co)

**Purpose:** Editorial and data-entry standard for `/tiny-home-communities/{state}/{slug}` detail pages.  
**Audience:** Content researchers, operators, and developers adding `directoryProfile` to community data files.

**Tone:** Professional, authoritative, sustainable architecture & land planning. No RV-campground clichés or generic filler.

**Visual rule:** Use structured tables and callout blocks so pass/fail constraints scan in ~3 seconds. Use `---` in long-form source notes only—not in React page layout (sections use `<Separator />`).

---

## Five-part page architecture

Every listing renders these sections on the detail page (via `CommunityDirectoryProfile`). Missing fields display:

`[TBD - Research Component Required]`

### 1. Quick-glance park specs (table)

| Field key | Label |
|-----------|--------|
| `parkSpecs.powerInfrastructure` | Power Infrastructure |
| `parkSpecs.wasteSewerSystem` | Waste & Sewer System |
| `parkSpecs.buildCertifications` | Build Certifications |
| `parkSpecs.petConstraints` | Pet Constraints |

**Examples:** `50 Amp / 100 Amp dual pedestal`, `Municipal sewer tie-in`, `RVIA required`, `Max 2 pets, 50 lb limit`.

### 2. Financials & leasing terms

| Field key | Section title |
|-----------|----------------|
| `financials.lotRentBenchmarks` | Lot rent benchmarks |
| `financials.utilityInclusions` | Utility inclusions |
| `financials.leaseMechanics` | Lease mechanics |

Cover interior vs premium waterfront spreads, what rent includes vs metered, minimum term lengths, deposits/waitlist.

### 3. Home specifications & placement rules

| Field key | Section title |
|-----------|----------------|
| `homeSpecifications.dimensionalThresholds` | Dimensional thresholds |
| `homeSpecifications.aestheticControls` | Aesthetic controls & covenants |

Max THOW length/width/height, road clearance, skirting, cladding, awnings, window AC bans.

### 4. Sustainability & permaculture allowances

| Field key | Section title |
|-----------|----------------|
| `sustainability.alternativeWasteSystems` | Alternative waste systems |
| `sustainability.offGridAdaptations` | Off-grid adaptations |
| `sustainability.siteEdiblesGardens` | Site edibles & gardens |

Composting/incinerating toilets, solar/batteries, rainwater barrels, raised beds vs communal garden only.

### 5. Media & lead capture

| Field key | Purpose |
|-----------|---------|
| `media.sitePlanUrl` | Park map image (`/images/...` or https) |
| `media.sitePlanAlt` | Alt text |
| `media.videoTourUrl` | YouTube/Vimeo URL |
| `media.videoTourTitle` | Accessible title |
| `localCta` | Optional override; else auto-routed from county |

**Auto CTA (Florida):** Orange → `/adu-orange-county`, Seminole → `/adu-seminole-county`, Lake → `/adu-lake-county`, Osceola → `/adu-osceola-county`, Polk → `/adu-polk-county`. Others → `/qualify?source=community_listing`.

---

## Data entry (TypeScript)

Add optional `directoryProfile` to any object in:

- `data/tiny-home-communities/florida.ts`
- `data/tiny-home-communities/texas.ts`
- `data/tiny-home-communities/national.ts`
- `data/tiny-home-communities/expansion-communities.ts`

**Example (partial fill — unfilled keys show TBD in UI):**

```ts
directoryProfile: {
  parkSpecs: {
    powerInfrastructure: "50 Amp primary pedestals; 100 Amp upgrade path on premium lakefront pads",
    wasteSewerSystem: "Municipal sewer tie-in required; composting toilets not permitted on pad",
    buildCertifications: "RVIA or NOAH certification required for THOW placements",
    petConstraints: "Max 2 pets; breed restrictions apply—confirm with office",
  },
  financials: {
    lotRentBenchmarks: "Interior pads approx. $650–$850/mo; lakefront $950–$1,200/mo (2026 operator quote)",
    utilityInclusions: "Water and trash included; electric separately metered; Wi-Fi optional park bundle",
    leaseMechanics: "12-month minimum; $500 application deposit; waitlist for lakefront",
  },
  homeSpecifications: {
    dimensionalThresholds: "Max THOW length 32 ft; 8.5 ft road clearance; 13.5 ft height limit at entry gate",
    aestheticControls: "Vinyl or wood-look skirting required; no window AC units visible from street",
  },
  sustainability: {
    alternativeWasteSystems: "Composting toilets prohibited—sewer connection mandatory",
    offGridAdaptations: "Roof-mounted solar allowed with park approval; no ground-mounted battery banks",
    siteEdiblesGardens: "Raised beds allowed behind unit; no in-ground trees without ARC review",
  },
  media: {
    sitePlanUrl: "/images/tiny-home-communities/tiny-town-orlando-site-plan.png",
    sitePlanAlt: "Tiny Town Orlando pad layout showing lakefront and interior loops",
    videoTourUrl: "https://www.youtube.com/watch?v=EXAMPLE",
    videoTourTitle: "Tiny Town Orlando community walkthrough",
  },
},
```

Run `pnpm run build` after edits—Zod validates every listing.

---

## Agent / researcher workflow

When you send raw scrape text or operator PDF notes:

1. Map facts into the five sections above—no orphan bullets.
2. Flag unknowns explicitly; do not invent numbers.
3. Keep `description` as the narrative hook; put technical pass/fail data in `directoryProfile`.
4. Update `lastResearched` (YYYY-MM-DD) when you touch a listing.
5. Add or replace hero `image.url` when real photography is available (see `docs/accuracy-conflicts-appendix.md` for FL placeholder slugs).

---

## Code map

| Piece | Path |
|-------|------|
| Zod schema | `lib/tiny-home-communities/schema.ts` → `directoryProfileSchema` |
| TBD helper + county CTA | `lib/tiny-home-communities/directory-profile.ts` |
| Detail UI | `components/tiny-home-communities/community-directory-profile.tsx` |
| Page shell | `app/tiny-home-communities/[state]/[slug]/page.tsx` |

---

*Version: 2026-05-20 — aligns with Tier 1 regulatory SSOT and community directory expansion.*
