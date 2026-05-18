# Tiny home communities — research inventory

**Note:** This file was a one-time export of **38** listings. The site now has **60** curated communities; see [`docs/tiny-home-communities-current-production-catalog.md`](./tiny-home-communities-current-production-catalog.md) for current counts and data file locations.

To regenerate a full slug listing from the repo, run `pnpm run build` and use [`getAllCommunities()`](lib/tiny-home-communities/repo.ts) or browse `/tiny-home-communities`.

---

## Legacy snapshot (38 listings) — Florida (14)

<details>
<summary>Historical table (pre-expansion)</summary>

| Slug | Public name | City | County | Official URL | Status | Last researched (repo) | Research notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `canoe-creek-st-cloud` | Canoe Creek (Garber Communities) | St Cloud | Osceola County | https://www.canoecreekrvresort.com/ | contact_for_availability | 2026-05-12 |  |
| `circle-pond-ruskin` | Circle Pond Tiny Community | Ruskin | Hillsborough County | https://circlepondtinycommunity.com/ | waitlist | 2026-05-12 |  |
| `cross-creek-village-leesburg` | Cross Creek Village | Leesburg | Lake County | https://crosscreekvillage.net/ | mixed | 2026-05-12 |  |
| `escape-tampa-bay-village` | Escape Tampa Bay Village | Thonotosassa | Hillsborough County | https://www.escapetampabay.com/ | expanding | 2026-05-12 |  |
| `gracious-tiny-house-park` | Gracious Tiny House Park | Okeechobee area | Okeechobee County area | http://www.gracioustinyhousepark.com/ | waitlist | 2026-05-12 |  |
| `matlacha-tiny-village` | Matlacha Tiny Village | Matlacha | Lee County | https://www.matlachatinyvillage.com/ | mixed | 2026-05-12 |  |
| `outpost-the-preserve-winter-haven` | The Preserve · The Outpost Resort | Winter Haven | Polk County | https://theoutpostresort.com/the-preserve-tiny-house-community/ | contact_for_availability | 2026-05-12 |  |
| `peacewind-cocoa` | Peacewind by Braveheart Properties | Cocoa | Brevard County | https://braveheartproperties.org/ | active | 2026-05-12 |  |
| `simple-life-charlotte-harbour` | Simple Life · Charlotte Harbour area (Charlotte County) | Punta Gorda area | Charlotte County | https://simple-life.com/communities/ | expanding | 2026-05-12 |  |
| `simple-life-lakeshore` | Simple Life · Lakeshore (Lake Andrew) | Oxford | Sumter County | https://www.lakeshoreatlakeandrew.com/ | active | 2026-05-12 |  |
| `story-box-brooksville` | Story Box (Tiny Purple / Brooksville co-op) | Brooksville | Hernando County | https://tinypurple.com/about | expanding | 2026-05-12 |  |
| `sunshine-key-tiny-house-village` | Sunshine Key Tiny House Village (Ohio Key) | Big Pine Key area | Monroe County | https://sunshinekeytinyhouse.com/ | mixed | 2026-05-12 |  |
| `tiny-house-siesta` | Tiny House Siesta | Sarasota | Sarasota County | https://www.tinyhousesiesta.com/ | mixed | 2026-05-12 |  |
| `tiny-town-orlando` | Tiny Town Orlando (Orlando Lakefront) | Orlando | Orange County | https://tinytownorlando.com/ | mixed | 2026-05-12 |  |

</details>

---

## Updating the live site after research

Structured fields live on each listing in `data/tiny-home-communities/*.ts` and are validated by `tinyHomeCommunitySchema` in `lib/tiny-home-communities/schema.ts`. After you change a `.ts` file, run `pnpm run build` to confirm the schema still parses.
