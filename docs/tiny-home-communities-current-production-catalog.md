# Tiny home communities — current production data

**Purpose:** Every community the site has **full typed data** for ([`tinyHomeCommunitySchema`](lib/tiny-home-communities/schema.ts)), merged in [`lib/tiny-home-communities/repo.ts`](lib/tiny-home-communities/repo.ts) from:

- [`data/tiny-home-communities/florida.ts`](data/tiny-home-communities/florida.ts)
- [`data/tiny-home-communities/national.ts`](data/tiny-home-communities/national.ts) (NC, CA, CO, GA, OR)
- [`data/tiny-home-communities/texas.ts`](data/tiny-home-communities/texas.ts)
- [`data/tiny-home-communities/expansion-communities.ts`](data/tiny-home-communities/expansion-communities.ts) (AZ, SC, TN, OH, VA, AL, KY, MI + **Paradise** CA)
- Shared image/flag helpers: [`data/tiny-home-communities/_helpers.ts`](data/tiny-home-communities/_helpers.ts)

**Live hub:** [prefabricated.co/tiny-home-communities](https://www.prefabricated.co/tiny-home-communities) — each listing is at  
`https://www.prefabricated.co/tiny-home-communities/{state_slug}/{slug}`.

**Total listings:** **60** (as of last data import).

---

## Count by state

| State | `state_slug` | Listings |
| --- | --- | --- |
| Florida | `florida` | 14 |
| Texas | `texas` | 12 |
| California | `california` | 5 |
| North Carolina | `north-carolina` | 4 |
| Colorado | `colorado` | 4 |
| Georgia | `georgia` | 4 |
| Oregon | `oregon` | 4 |
| Arizona | `arizona` | 4 |
| South Carolina | `south-carolina` | 3 |
| Tennessee | `tennessee` | 2 |
| Virginia | `virginia` | 2 |
| Alabama | `alabama` | 2 |
| Ohio | `ohio` | 1 |
| Kentucky | `kentucky` | 1 |
| Michigan | `michigan` | 1 |
| **Total** | — | **60** |

---

## Adding or editing listings

1. Change the appropriate file under `data/tiny-home-communities/`.
2. If you add a **new US state**, append `{ slug, label, code }` to [`DIRECTORY_STATES`](lib/tiny-home-communities/states-registry.ts).
3. Run `pnpm run build` (Zod will validate each object).

For a historical snapshot of the older 38-listing set, see git history of this file or [`docs/tiny-home-communities-research-inventory.md`](./tiny-home-communities-research-inventory.md) (may be out of date until refreshed).
