/**
 * Curated affiliate / partner URLs.
 * Source: docs/affiliate-product-master-list.md
 */

export type AffiliateProgramId = "amazon" | "partner"

export interface AffiliateLinkRecord {
  id: string
  label: string
  program: AffiliateProgramId
  href: string
  category: string
  notes?: string
}

export const AFFILIATE_LINKS: AffiliateLinkRecord[] = [
  // Garden / small-space food
  { id: "vegepod-medium", label: "Vegepod raised garden bed (medium)", program: "amazon", href: "https://amzn.to/4dfBneH", category: "garden" },
  { id: "vego-tomato-cage", label: "Vego Garden tomato cage (4 pack)", program: "amazon", href: "https://amzn.to/4nAX1xw", category: "garden" },
  { id: "vego-raised-bed", label: "Vego Garden raised bed kit", program: "amazon", href: "https://amzn.to/4uoLiEY", category: "garden" },
  { id: "terracotta-watering-spikes", label: "Ceramic self-watering spikes (4 pack)", program: "amazon", href: "https://amzn.to/4tHh92j", category: "garden" },
  { id: "drip-tubing-100ft", label: "1/4\" drip irrigation tubing (100 ft)", program: "amazon", href: "https://amzn.to/4uOEyji", category: "garden" },
  { id: "raindrip-kit", label: "Raindrip automatic drip kit with timer", program: "amazon", href: "https://amzn.to/4wF1Z0o", category: "garden" },
  { id: "orbit-hose-timer", label: "Orbit digital hose timer", program: "amazon", href: "https://amzn.to/43evIj2", category: "garden" },
  { id: "shade-cloth-40", label: "40% shade cloth (10 x 20 ft)", program: "amazon", href: "https://amzn.to/3RwlPKZ", category: "garden" },
  { id: "garden-hoops-tunnel", label: "Garden hoops grow tunnel kit", program: "amazon", href: "https://amzn.to/4dOX3yo", category: "garden" },
  { id: "garden-netting", label: "Ultra fine mesh garden netting", program: "amazon", href: "https://amzn.to/4tEwMHE", category: "garden" },
  { id: "pruning-shears", label: "Japanese steel pruning shears", program: "amazon", href: "https://amzn.to/42ZAu45", category: "garden" },
  { id: "compost-tumbler", label: "Miracle-Gro dual chamber compost tumbler", program: "amazon", href: "https://amzn.to/4uMSCK6", category: "garden" },
  // Water & resilience
  { id: "rain-wizard-barrel", label: "Rain Wizard 50-gallon rain barrel + diverter", program: "amazon", href: "https://amzn.to/3R5ySDb", category: "water" },
  { id: "downspout-diverter-3x4", label: "Downspout diverter (3x4 / 2x3)", program: "amazon", href: "https://amzn.to/3RKCzhC", category: "water" },
  { id: "first-flush-kit", label: "Rain harvesting first flush kit", program: "amazon", href: "https://amzn.to/499lcwV", category: "water" },
  { id: "anivia-diverter", label: "Anivia downspout diverter kit", program: "amazon", href: "https://amzn.to/4wApfwg", category: "water" },
  { id: "camco-rv-filter", label: "Camco Tastepure RV inline water filter", program: "amazon", href: "https://amzn.to/4eRtPQz", category: "water" },
  { id: "waterdrop-pitcher", label: "Waterdrop filter dispenser", program: "amazon", href: "https://amzn.to/4tMfWa1", category: "water" },
  { id: "express-water-ro", label: "Express Water 11-stage RO system", program: "amazon", href: "https://amzn.to/4ukEwQq", category: "water" },
  { id: "submersible-pump", label: "Utility submersible pump", program: "amazon", href: "https://amzn.to/3R63K6u", category: "water" },
  { id: "rv-drinking-hose", label: "Camco EvoFlex RV drinking water hose", program: "amazon", href: "https://amzn.to/4ugrpj7", category: "water" },
  { id: "water-storage-tank", label: "Water storage tank / cistern", program: "amazon", href: "https://amzn.to/4dNusJH", category: "water" },
]

export function getAffiliateLinksByCategory(category: string): AffiliateLinkRecord[] {
  return AFFILIATE_LINKS.filter((r) => r.category === category)
}

export function findAffiliateLinkByHref(href: string): AffiliateLinkRecord | undefined {
  return AFFILIATE_LINKS.find((r) => r.href === href)
}
