# Affiliate product master list (Prefabricated.co)

**Purpose:** Plan Amazon Associates SKUs/category searches and non-Amazon partner links. Replace placeholder URLs in code via `lib/affiliate-links.ts` when programs are approved.

**Compliance (non-negotiable)**

- Follow the [Amazon Associates Operating Agreement](https://affiliate-program.amazon.com/help/operating/agreement) and any program you join.
- **Disclose** affiliate relationships clearly (site footer + near recommendation blocks). Example: *“Prefabricated.co may earn a commission on qualifying purchases. It does not change your price.”*
- **No** price/savings claims unless verified; **no** medical/disease claims for products.
- Prefer **deep links** to exact ASINs after you curate; until then, use this doc to record intended ASINs.

---

## How to use this doc

| Column | You fill |
|--------|----------|
| **Category** | Bucket for site IA (tool page vs blog) |
| **Amazon search terms / product type** | What to search on Amazon |
| **Example ASIN** | After you join Associates and pick exact items |
| **Sponsored URL** | `amzn.to/...` or `amazon.com/dp/...?tag=YOURTAG` |
| **Non-Amazon partner** | Brand program URL you’ll paste for dev |

---

## 1. Florida / small-space gardening

| Priority | Product type | Example search terms | Notes |
|----------|----------------|------------------------|-------|
| High | Raised bed kits (modular) | “raised garden bed kit metal” “Vegepod” | ADU + tiny lot footprint |
| High | Ollas / sub-irrigation | “ollas clay watering” “self watering olla” | Water efficiency |
| High | Drip irrigation starter | “drip irrigation kit” “1/4 inch drip” | Heat + mulch pairing |
| High | Hose timers / smart | “water hose timer digital” | Vacation / storm prep |
| High | Shade cloth | “shade cloth 40 percent” “garden shade cloth” | Florida sun |
| High | Row cover / frost | “floating row cover” | North FL / cold snaps |
| Med | Hand tools (ergonomic) | “Hori hori” “Japanese pruning shears” | Avoid junk sets |
| Med | Compost bins (tumbling) | “compost tumbler dual chamber” | HOA-friendly scale |
| Med | Worm bin | “worm composting bin indoor” | Apartment + ADU |
| Med | Soil inoculant / mycorrhizae | “mycorrhizae granular” | Claims: stick to label |
| Med | pH / moisture meter | “soil moisture meter” “soil pH meter” | Educational use |
| Med | Seed starting | “seed starting trays humidity dome” “capillary mat” | Two-season tomatoes |
| Med | Trellis / cattle panel | “livestock panel trellis” “cucumber trellis” | Vertical tiny homes |

**Books (Amazon often allows)**  

- *Florida gardening* / *carrots love tomatoes* style comp titles (pick editions you’ve actually read).

---

## 2. Water & resilience

| Priority | Product type | Example search terms | Notes |
|----------|----------------|------------------------|-------|
| High | Rain barrel kits | “rain barrel kit 50 gallon” | Code + overflow disclaimers on-site |
| High | First-flush diverters | “rain first flush diverter” | Pair with overflow planning copy |
| Med | RV / boat water filters | “RV inline water filter” | Tiny + THOW relevance |
| Med | Drinking water pitchers / filters | “water filter pitcher NSF” | General homestead |
| Med | Submersible pump small | “utility submersible pump” | Drainage / rain events |
| Med | Heavy-duty hoses | “drinking water safe hose” | Lead-free wording |
| Low | Water storage cubes | “water storage container stackable” | Emergency prep tone |

---

## 3. Energy & lighting (non-wiring)

| Priority | Product type | Example search terms | Notes |
|----------|----------------|------------------------|-------|
| Med | Portable power stations | “portable power station 1000w solar” | **Heavy compliance**—no misleading run-time |
| Med | Solar panel portable | “foldable solar panel 100w” | Match with battery articles |
| High | LED work lights | “rechargeable LED work light” | Build + storm |
| Med | Timer strips / smart plugs | “outdoor smart plug weatherproof” | Pumps, fans |
| Med | Dehumidifiers | “energy star dehumidifier 50 pint” | Florida mold story—sizing disclaimers |
| Med | Ceiling fan / efficient | “low profile ceiling fan” | ADU interior |

---

## 4. Tiny home / ADU living

| Priority | Product type | Example search terms | Notes |
|----------|----------------|------------------------|-------|
| Med | Moisture / humidity monitors | “Govee humidity” *or similar* | Avoid endorsing one brand until tested |
| Med | Air quality (budget) | “indoor air quality monitor PM2.5” | Humidity pairing |
| Med | Storage / loft ladders | “loft ladder folding” “tiny house storage” | Lifestyle |
| Med | Composting toilet supplies | “composting toilet fan” “peat moss compost toilet” | **Legal/use disclaimers**—not RV dump advice |
| Low | RV surge protectors | “30 amp RV surge protector” | If THOW audience |

---

## 5. Kitchen → closed-loop (education)

| Priority | Product type | Example search terms | Notes |
|----------|----------------|------------------------|-------|
| Med | Countertop compost crocks | “compost bin countertop carbon filter” | Scraps loop narrative |
| Med | Fermentation kits | “fermentation kit jars weights” | Food preservation |
| Med | Food dehydrators | “food dehydrator stainless trays” | Glut handling |
| Low | Canning tools | “pressure canner” | Safety education only |

---

## 6. Poultry / small livestock (where policy allows)

| Priority | Product type | Example search terms | Notes |
|----------|----------------|------------------------|-------|
| Med | Automatic coop doors | “automatic chicken coop door” | Predators / heat |
| Med | Feeders / waterers | “chicken waterer nipple” “duck feeder” | Closed-loop copy |
| Med | Electric netting (portable) | “poultry electric fence net” | Check local ordnance messaging |
| Low | Heat lamps (safe) | “radiant heater chick” | Fire safety warnings |

*Verify Amazon category restrictions in your Associates account.*

---

## 7. Storm & yard (Florida)

| Priority | Product type | Example search terms | Notes |
|----------|----------------|------------------------|-------|
| Med | Weather radios | “NOAA weather radio SAME” | Preparedness |
| Med | Tarps / straps | “heavy duty tarp 18oz” “ratchet straps” | Named storm checklist |
| Med | Chainsaw safety | “chainsaw chaps” “helmet system” | **Safety first** positioning |

---

## 8. Non-Amazon programs to layer in (you join → paste URLs)

| Partner type | Examples to investigate | Suggested page placement |
|--------------|-------------------------|--------------------------|
| Solar / batteries | Renogy, EcoFlow affiliates if available | EarthNest, storm blog |
| Composting toilets | Nature’s Head, Separett direct | Tiny living guide, THOW |
| Seeds | Southern Exposure, Strictly Medicinal (program-dependent) | Zone tool footer, guides |
| Water tanks | Local dealers / national tank brands | Homestead tool |
| Tools | Lee Valley, A.M. Leonard | Resource hub “gear” |
| Courses | Reputable PDC affiliates | Permaculture guides |

**Dev handoff:** add rows to a JSON or `lib/affiliate-links.ts` when you have final tagged URLs.

---

## 9. Site placement map (when links go live)

| Destination | Content type |
|-------------|----------------|
| `/resources` | Curated “Starter gear” module + disclosure |
| `/florida-growing-zones-homestead-planning` | Books, zone tools, shade cloth, irrigation |
| `/earthnest-living-systems` | Water, energy, monitoring |
| `/eco-upgrades` | Category-matched blocks per layer |
| Blog / long guides | Contextual inline CTA (1–2 per article max) |

---

## Checklist before launch

- [ ] Associates account approved; `tag=` on every Amazon link  
- [ ] `/affiliate-disclosure` or footer disclosure live  
- [ ] No automated price scraping unless compliant  
- [ ] Quarterly link audit (404 / discontinued ASINs)

*Maintainer: update ASINs when products change; prefer timeless categories over fad gadgets.*
