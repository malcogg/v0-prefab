import type { MultiOption } from "@/lib/build/options"

/** One EarthNest / permaculture module in the configurator (checkbox groups). */
export type EarthnestEcoModule = {
  id: string
  title: string
  /** Short Florida / code-aware context for the client */
  note: string
  options: MultiOption[]
}

/**
 * Master checklist for EarthNest + permaculture / site stacks.
 * Prices are illustrative add-on estimates where set; many are 0 (interest scoped at evaluation).
 * Keep aligned with docs/earthnest-permaculture-master-client-list.md
 */
export const EARTHNEST_ECO_MODULES: EarthnestEcoModule[] = [
  {
    id: "envelope",
    title: "Envelope & structure",
    note: "Detailing must meet Florida wind and moisture requirements; engineer-stamped where required.",
    options: [
      { id: "eco-fsc-trim-siding", label: "FSC / responsible wood siding & trim (where specified)", price: 0 },
      { id: "eco-fiber-cement-metal-clad", label: "Fiber-cement or metal cladding with cool-roof coordination", price: 0 },
      { id: "eco-high-performance-windows", label: "High-performance windows / impact-rated package (jurisdiction-dependent)", price: 3500 },
      { id: "eco-air-barrier-package", label: "Airtightness package: taped/liquid-flashed penetrations", price: 1200 },
      { id: "eco-exterior-fixed-shading", label: "Fixed exterior shading (overhangs / louvers) coordination", price: 1800 },
      { id: "eco-mineral-exterior-finish", label: "Mineral / limewash exterior accents (where substrate allows)", price: 0 },
    ],
  },
  {
    id: "indoor-health",
    title: "Indoor health & finishes",
    note: "Low-VOC and natural finishes still need humidity control in Florida.",
    options: [
      { id: "eco-zero-voc-interior", label: "Low / zero-VOC paints, primers & sealers package", price: 800 },
      { id: "eco-natural-oil-floors", label: "Natural oil finishes on wood (where compatible)", price: 600 },
      { id: "eco-cork-lino-flooring", label: "Cork or natural linoleum areas (kitchen/bath as applicable)", price: 1400 },
      { id: "eco-low-formaldehyde-casework", label: "Low-formaldehyde (NAUF) casework upgrade path", price: 1100 },
      { id: "eco-hard-mudroom-transition", label: "Hard-wearing entry / mud transition (soil & sand from landscape)", price: 500 },
    ],
  },
  {
    id: "energy",
    title: "Energy & passive comfort",
    note: "Right-size HVAC for dehumidification; pair with ventilation strategy.",
    options: [
      { id: "eco-erv-hrv-interest", label: "ERV / HRV fresh air strategy (design & quote)", price: 0 },
      { id: "eco-heat-pump-water-heater", label: "Heat pump water heater", price: 2200 },
      { id: "eco-solar-pv-package-interest", label: "Rooftop solar PV (design & interconnect path)", price: 0 },
      { id: "eco-battery-backup-interest", label: "Battery backup + critical loads panel (design & quote)", price: 0 },
      { id: "eco-induction-cooktop", label: "Induction cooking package (electrical capacity check)", price: 900 },
      { id: "eco-energy-monitoring", label: "Circuit-level energy monitoring", price: 650 },
      { id: "eco-vine-trellis-shade", label: "Plant-trained trellis / deciduous shade (site plan coordination)", price: 0 },
    ],
  },
  {
    id: "water",
    title: "Water & plumbing",
    note: "Rain and graywater are permit-heavy; we confirm legality on your parcel.",
    options: [
      { id: "eco-watersense-fixtures", label: "WaterSense high-efficiency fixtures package", price: 450 },
      { id: "eco-leak-detection", label: "Smart leak detectors / optional auto shutoff planning", price: 400 },
      { id: "eco-rainwater-irrigation", label: "Rainwater to irrigation (cistern / barrels, overflow-safe)", price: 0 },
      { id: "eco-drip-smart-irrigation", label: "Drip irrigation + smart controller rough-in coordination", price: 950 },
      { id: "eco-graywater-study", label: "Graywater for subsurface irrigation (feasibility study)", price: 0 },
      { id: "eco-filtration-by-test", label: "Whole-home filtration (based on water test)", price: 0 },
    ],
  },
  {
    id: "stormwater",
    title: "Stormwater & hydrology",
    note: "Never route water toward foundations without civil input.",
    options: [
      { id: "eco-swale-rain-garden", label: "Swales / rain garden planting (engineered grades)", price: 0 },
      { id: "eco-french-drain-overflow", label: "French drains / catch basins / overflow routing plan", price: 0 },
      { id: "eco-permeable-pavers", label: "Permeable pavers or stabilized gravel (where allowed)", price: 0 },
      { id: "eco-gutter-downspout-plan", label: "Gutter sizing, downspouts & subsurface leader coordination", price: 600 },
    ],
  },
  {
    id: "outdoor",
    title: "Outdoor living & hardscape",
    note: "Setbacks, HOA, and wind ratings apply to structures and decks.",
    options: [
      { id: "eco-pergola-pavilion", label: "Shade pergola / pavilion (engineered if required)", price: 0 },
      { id: "eco-durable-decking", label: "Low-maintenance / recycled-content decking system", price: 0 },
      { id: "eco-outdoor-prep-station", label: "Outdoor prep counter + wash station (plumbing coordination)", price: 0 },
      { id: "eco-garden-storage-shed", label: "Garden / tool storage structure (zoning check)", price: 0 },
    ],
  },
  {
    id: "landscape-food",
    title: "Soil, landscape & food",
    note: "Florida-friendly and native plants reduce irrigation and support pollinators.",
    options: [
      { id: "eco-soil-test-amend", label: "Soil test + organic amendment plan", price: 350 },
      { id: "eco-sheet-mulch-beds", label: "Sheet mulch / raised beds starter package", price: 1200 },
      { id: "eco-food-hedge-privacy", label: "Edible hedge & privacy planting design", price: 900 },
      { id: "eco-fruit-tree-shrub", label: "Fruit trees & shrubs (climatically appropriate cultivars)", price: 0 },
      { id: "eco-native-pollinator", label: "Native & Florida-friendly pollinator strips", price: 700 },
      { id: "eco-compost-system", label: "Dual-bin compost station (rodent-aware placement)", price: 450 },
      { id: "eco-chicken-study", label: "Small livestock / poultry (zoning feasibility only)", price: 0 },
    ],
  },
  {
    id: "waste",
    title: "Waste & nutrient cycling",
    note: "Coordinate with HOA and setback requirements.",
    options: [
      { id: "eco-worm-bins", label: "Vermiculture (worm bin) setup zone", price: 200 },
      { id: "eco-bokashi", label: "Bokashi pre-compost system", price: 150 },
      { id: "eco-mulch-mow-regime", label: "Mulch-mow / leave-in-place organic matter strategy", price: 0 },
    ],
  },
  {
    id: "automation",
    title: "Automation & monitoring",
    note: "Makes systems observable; pairs with EarthNest automation story.",
    options: [
      { id: "eco-smart-thermostat-humidity", label: "Smart thermostat with humidity awareness", price: 350 },
      { id: "eco-irrigation-flow-meter", label: "Irrigation hub + flow sensing", price: 500 },
      { id: "eco-soil-moisture-zones", label: "Soil moisture sensors (multiple zones)", price: 400 },
      { id: "eco-tank-level-sensors", label: "Rain tank level monitoring (if cistern path)", price: 250 },
      { id: "eco-indoor-air-quality", label: "Indoor air quality monitor (CO₂, PM2.5, humidity)", price: 350 },
    ],
  },
  {
    id: "advanced",
    title: "Optional / advanced",
    note: "Often parcel-, insurance-, and permit-specific; quoted after study.",
    options: [
      { id: "eco-greenhouse-shade-house", label: "Small greenhouse / shade house (wind-rated)", price: 0 },
      { id: "eco-ev-charger-load-mgmt", label: "EV charger + load management with solar/battery", price: 0 },
      { id: "eco-aquaponics-pond-study", label: "Aquaponics / pond (mosquito & safety study)", price: 0 },
    ],
  },
]

export const EARTHNEST_ECO_OPTIONS_FLAT: MultiOption[] = EARTHNEST_ECO_MODULES.flatMap((m) => m.options)

const ecoPriceById = new Map(EARTHNEST_ECO_OPTIONS_FLAT.map((o) => [o.id, o.price]))
const ecoLabelById = new Map(EARTHNEST_ECO_OPTIONS_FLAT.map((o) => [o.id, o.label]))

export function earthnestEcoOptionPrice(id: string): number {
  return ecoPriceById.get(id) ?? 0
}

export function summarizeEarthnestEcoSelection(ids: string[]): string {
  if (!ids.length) return ""
  return ids.map((id) => ecoLabelById.get(id) ?? id).join("; ")
}
