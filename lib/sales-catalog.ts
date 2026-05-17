/**
 * Single source for sellable product lanes shown on the homepage.
 * Update pricing, imagery paths, and feature bullets here.
 */

export type ContainerHomeModel = {
  title: string
  badge: string
  image: string
  alt: string
  size: string
  layout: string
  unitCost: string
  installed: string
  rent: string | null
  timeline: string
  bestFor: string
  disclaimer?: string
  features: string[]
  highlight?: boolean
}

/** Foundation-first container / hybrid modular lanes (same family as EarthNest build funnel). */
export const CONTAINER_HOME_MODELS: ContainerHomeModel[] = [
  {
    title: "EarthNest 20",
    badge: "Entry container studio",
    image: "/images/container-adu.jpg",
    alt: "20ft container studio ADU on a permanent foundation",
    size: "~160 sq ft",
    layout: "Studio / flex space",
    unitCost: "From ~$25,000",
    installed: "$50K – $100K+",
    rent: null,
    timeline: "Fastest availability",
    bestFor:
      "Backyard studio where allowed, guest or office pod, retreat space, or starter eco-living—verify ADU vs accessory use on your parcel before counting on rental income.",
    disclaimer:
      "At ~160 sq ft, this unit does not meet Orange County's 400 sq ft minimum for a permitted ADU. It is best suited for non-rental uses such as a guesthouse, office, or studio. Eligible uses vary by jurisdiction — we confirm what's possible during your site evaluation.",
    features: [
      "20 ft high-cube container hybrid / modular shell",
      "Permanent slab foundation where required by code",
      "Engineered for Florida Building Code wind loads (Central Florida)",
      "Closed-cell spray foam insulation",
      "Kitchenette, bath, efficient HVAC; solar-ready rough-in available",
      "Optional smart monitoring and edible-landscape starter package",
    ],
  },
  {
    title: "EarthNest 40",
    badge: "One-bedroom hybrid",
    image: "/images/earthnest-model.jpg",
    alt: "40ft container one-bedroom home on a foundation in Florida",
    size: "~320 sq ft",
    layout: "Studio + sleeping area",
    unitCost: "From ~$45,000",
    installed: "$100K – $155K+",
    rent: null,
    timeline: "Fast track",
    bestFor:
      "Premium backyard unit where allowed, long-term guest suite, family housing, or eco retreat—ideal when you want more space than the 20 without a full custom stick build.",
    disclaimer:
      "At ~320 sq ft, this unit falls below Orange County's 400 sq ft ADU minimum. Other Florida jurisdictions may allow it as a permitted ADU. Your evaluation confirms the pathway on your lot.",
    features: [
      "40 ft high-cube container hybrid / modular shell",
      "Permanent slab foundation",
      "Engineered for Florida Building Code wind loads (Central Florida)",
      "Closed-cell spray foam insulation",
      "Defined sleeping zone, kitchen, bath, living, and utility storage",
      "Solar/battery-ready, landscape & water-planning options",
    ],
  },
  {
    title: "Traditional site-built ADU",
    badge: "Fully custom",
    image: "/images/traditional-adu.jpg",
    alt: "Traditional site-built ADU matching the primary home",
    size: "Custom",
    layout: "Studio, 1BR, or 2BR",
    unitCost: "Quoted to plan",
    installed: "$200K+",
    rent: "$1,400 – $2,500/mo",
    timeline: "Longest lead time",
    bestFor:
      "Family housing, larger legal rental ADUs (including Orange County 400+ sq ft path), custom architecture, and strongest appraisal narrative on many lots.",
    features: [
      "Stick-built or CMU — matched to primary home when desired",
      "Slab or engineered foundation per geotech",
      "Florida Building Code wind and impact packages as required",
      "Layouts sized for your jurisdiction's ADU rules",
      "Full custom interior and exterior finishes",
      "Staged EarthNest upgrades (solar, water, monitoring) compatible",
    ],
    highlight: true,
  },
]

export type TinyHomeModel = {
  title: string
  badge: string
  image: string
  alt: string
  size: string
  layout: string
  dimensions: string
  priceBand: string
  placement: string
  bestFor: string
  disclaimer: string
  features: string[]
}

/**
 * Movable tiny / park-model style units you order through us — not the same as a foundation ADU.
 * Placement (backyard THOW, RV park, village pad) is always jurisdiction-specific.
 */
export const TINY_HOME_MODELS: TinyHomeModel[] = [
  {
    title: "Nomad 24",
    badge: "Highway-legal THOW",
    image: "/images/income-property.jpg",
    alt: "Compact tiny house on wheels suitable for Florida communities and private land",
    size: "~220 – 260 sq ft",
    layout: "Open studio + loft option",
    dimensions: `24' length × 8.5' road width`,
    priceBand: "$89K – $125K+",
    placement: "Park model pads · leased lots · some rural private parcels",
    bestFor:
      "Buyers who want a turnkey THOW they can roll to a participating village, seasonal rental setup, or land partner with verified placement rules.",
    disclaimer:
      "Tiny houses on wheels are often classified differently than foundation ADUs. Insurance, lending, and zoning vary sharply by county and HOA — we map options on your evaluation, but final compliance is always between you and local authorities.",
    features: [
      "Dual-axle highway-legal trailer",
      "Insulation and HVAC sized for Florida humidity",
      "Compact kitchen, 3/4 or full bath (plan dependent)",
      "Loft-ready or single-level configurations",
      "Solar and freshwater rough-ins available",
    ],
  },
  {
    title: "Horizon 32",
    badge: "Wide park model",
    image: "/images/earthnest-model.jpg",
    alt: "32 foot park model style tiny home with side entry",
    size: "~360 – 400 sq ft",
    layout: "1 bedroom + living",
    dimensions: `32' length × 10'–11' transport width (permitting escorts may apply)`,
    priceBand: "$115K – $165K+",
    placement: "RV resorts · tiny villages · rural private sites with access",
    bestFor:
      "Couples who want a residential-feel floor plan but still want the economies of off-site fabrication and quicker install than full site-built ADUs.",
    disclaimer:
      "Wider units trigger transport permits and sometimes utility set expectations (50A, sewer vs. septic). We document what your destination pad requires before you order finishes.",
    features: [
      "Factory-built shell with residential-grade finishes",
      "Full kitchen and separate bedroom zones",
      "Stackable washer prep and expanded storage",
      "Wind-region tie-down engineering package available",
      "Optional deck and skirting packages for long-term sits",
    ],
  },
  {
    title: "Atlas 40",
    badge: "Gooseneck / park flagship",
    image: "/images/container-adu.jpg",
    alt: "Long tiny home or gooseneck model for extended living space",
    size: "~480 – 550 sq ft",
    layout: "1–2 bedroom layouts",
    dimensions: `40' deck + gooseneck bedroom over hitch (plan dependent)`,
    priceBand: "$145K – $225K+",
    placement: "Private land with access · premium village pads · long-term leased lots",
    bestFor:
      "Owners who want maximum square footage before crossing into modular/site-built pricing—and can secure a legal siting path first.",
    disclaimer:
      "At this length, placement often mirrors park-model or manufactured-home rules rather than ADU ordinances. We coordinate engineering and siting questions early so you are not surprised at delivery.",
    features: [
      "Gooseneck hitch layout removes axle clutter from living space",
      "Residential appliances and split-bedroom options",
      "Expanded glazing packages (impact-rated where required)",
      "Solar-prepped roof and mini-split HVAC standard",
      "Delivery, set, and anchor scope quoted per destination",
    ],
  },
]
