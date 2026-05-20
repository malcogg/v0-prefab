export type SiteFaqSegment =
  | string
  | { link: string; href: string }

export type SiteFaqItem = {
  q: string
  a: SiteFaqSegment[]
}

export type SiteFaqCategory = {
  category: string
  items: SiteFaqItem[]
}

export const SITE_FAQ_CATEGORIES: SiteFaqCategory[] = [
  {
    category: "Getting started",
    items: [
      {
        q: "What is an ADU in Florida?",
        a: [
          "An Accessory Dwelling Unit (ADU) is a secondary dwelling on the same lot as a primary home—typically foundation-built, permitted, and connected to utilities. It is not the same as an RV, THOW, or storage shed. Read ",
          { link: "What is an ADU? (Florida guide)", href: "/blog/what-is-an-adu-florida" },
          " for types, zoning context, and when an ADU beats other backyard options.",
        ],
      },
      {
        q: "What's the difference between a tiny home, an ADU, and an Escape unit?",
        a: [
          "A permitted ",
          { link: "ADU", href: "/blog/what-is-an-adu-florida" },
          " is a legal secondary dwelling on your land. Factory ",
          { link: "Escape tiny homes", href: "/escape-tiny-homes" },
          " are RVIA-certified units suited to catalog purchase and siting rules that vary by jurisdiction. ",
          { link: "Tiny home communities", href: "/tiny-home-communities/florida" },
          " offer long-term-lease village living—not the same as owning a backyard ADU. We help you pick the lane that matches your parcel.",
        ],
      },
      {
        q: "How do I know if my property is worth evaluating?",
        a: [
          "Start with a free evaluation—we check zoning, setbacks, lot size, and feasibility before you spend on drawings. Use ",
          { link: "ADU rules by county", href: "/adu-rules" },
          " for a head start, then ",
          { link: "request a site review", href: "/qualify" },
          " for parcel-specific answers.",
        ],
      },
    ],
  },
  {
    category: "Eligibility & zoning",
    items: [
      {
        q: "Does my property qualify for an ADU in Orange County?",
        a: [
          "In Orange County (unincorporated), you generally need homesteaded owner-occupancy, qualifying single-family zoning, a lot at least 1.5× the minimum for a detached ADU, and a ",
          { link: "Special Exception", href: "/blog/special-exception-orange-county-zoning" },
          " before a building permit. See ",
          { link: "ADU rules by county", href: "/adu-rules" },
          " and ",
          { link: "Orange County requirements", href: "/#orange-county-requirements" },
          " on our homepage.",
        ],
      },
      {
        q: "Do I have to live on the property to build an ADU?",
        a: [
          "In Orange County (unincorporated), yes—the owner must occupy either the primary home or the ADU as a homesteaded principal residence. The City of Orlando does not have this requirement, so investors can rent both units there. Rules vary by jurisdiction; we verify your parcel before you commit.",
        ],
      },
      {
        q: "Can I build an ADU if I have an HOA?",
        a: [
          "Maybe. HOA covenants are separate from county zoning and can prohibit ADUs even when the county allows them. We review HOA documents during your ",
          { link: "free evaluation", href: "/qualify" },
          " and tell you upfront if the path is blocked.",
        ],
      },
      {
        q: "What is a Special Exception and do I need one?",
        a: [
          "In most Orange County residential zones, a detached ADU requires a Special Exception—a zoning hearing process—before you can apply for a building permit. We coordinate this as part of our ",
          { link: "7-step legal backyard home process", href: "/blog/seven-steps-legal-backyard-home" },
          ".",
        ],
      },
      {
        q: "City of Orlando vs. unincorporated Orange County — which rules apply?",
        a: [
          "It depends where your parcel sits. Orlando offers more streamlined by-right paths in many cases; unincorporated Orange County often requires a Special Exception and homestead occupancy. Read ",
          { link: "City of Orlando vs. unincorporated Orange County", href: "/blog/city-orlando-vs-unincorporated-orange-county" },
          " then confirm on ",
          { link: "ADU rules", href: "/adu-rules" },
          ".",
        ],
      },
    ],
  },
  {
    category: "Design, build types & size",
    items: [
      {
        q: "How big can my ADU be in Orange County?",
        a: [
          "Maximum living area is 45% of the primary home's square footage or 1,000 sq ft—whichever is less (up to 1,500 sq ft on lots of 2 acres or more). Minimum is 400 sq ft living area, max 2 bedrooms. Exact caps depend on your district and primary dwelling size.",
        ],
      },
      {
        q: "Can I use a shipping container as an ADU?",
        a: [
          "Often yes—with PE-stamped structural plans, permanent foundation, FBC wind-load compliance, closed-cell insulation, and mechanical ventilation. Standard 20–40 ft containers are below Orange County's 400 sq ft ADU minimum unless combined or used for non-ADU flex space. See ",
          { link: "High Performance Container Engineering", href: "/blog/container-home-living-system-thermal-envelope" },
          ".",
        ],
      },
      {
        q: "Can the ADU match my existing home's style?",
        a: [
          "Yes—and Orange County encourages compatibility with the primary dwelling. Our site-built EarthNest lane is designed to align exterior finish and massing with your existing home.",
        ],
      },
      {
        q: "When should I choose a factory Escape unit vs. a site-built ADU?",
        a: [
          "Escape models suit a fixed factory SKU, RVIA certification, and faster weathertight delivery—subject to local siting rules. Site-built ADUs suit permanent foundation rental income, homestead ADU strategies, and custom match to your primary home. Compare lanes on ",
          { link: "Escape tiny homes", href: "/escape-tiny-homes" },
          " and ",
          { link: "EarthNest living systems", href: "/earthnest-living-systems" },
          ".",
        ],
      },
    ],
  },
  {
    category: "Permitting & timeline",
    items: [
      {
        q: "How long does the ADU process take?",
        a: [
          "Most projects run 6–12 months from evaluation to Certificate of Occupancy: Special Exception (if required) often 4–8 weeks, permit review 4–8 weeks, construction 3–6 months depending on model and scope. Timeline varies by jurisdiction and design complexity.",
        ],
      },
      {
        q: "How much does a free evaluation cost?",
        a: [
          "Nothing—no obligation. It includes zoning review, setback check, lot-size confirmation, feasibility guidance, and a recommended path (ADU, modular, or community). ",
          { link: "Start here", href: "/qualify" },
          ".",
        ],
      },
      {
        q: "What Florida building realities should I plan for?",
        a: [
          "Wind-load engineering, impact-rated openings or shutters, humidity-aware envelopes, and full permit submittals (survey, PE-stamped structure, MEP, energy calcs). Read ",
          { link: "The Florida Reality Check", href: "/blog/florida-reality-check-zoning-hurricanes-humidity" },
          " before you order shells or sign contracts.",
        ],
      },
    ],
  },
  {
    category: "Money & returns",
    items: [
      {
        q: "How much rent can I charge for an ADU?",
        a: [
          "In the current Orlando area, permitted long-term leases often land near $1,200–$1,600 for studios and $1,400–$2,000 for 1-bed units—location, finish, and size move the number. See ",
          { link: "rental income opportunity", href: "/blog/florida-adu-rental-income-opportunity" },
          " and stress-test on the ",
          { link: "ADU calculator", href: "/adu-calculator" },
          ".",
        ],
      },
      {
        q: "Can I use my ADU for Airbnb or short-term rentals?",
        a: [
          "In Orange County (unincorporated), STR under 30 days is prohibited for ADUs in most residential zones. Orlando has different homeshare rules. Verify jurisdiction before you plan STR income—not estimates from national STR averages.",
        ],
      },
      {
        q: "Does an ADU increase my property value?",
        a: [
          "A permitted, foundation-built ADU can add permanent appraised value versus temporary structures. Market uplift depends on size, finish, and rentability. Read ",
          { link: "forced appreciation & permitted ADUs", href: "/blog/forced-appreciation-permitted-adu-appraisals" },
          ".",
        ],
      },
      {
        q: "How do I run the numbers before I build?",
        a: [
          "Use the ",
          { link: "ADU calculator", href: "/adu-calculator" },
          " for rent, cash flow, and conservative assumptions, and the ",
          { link: "Florida ADU budget worksheet", href: "/blog/florida-adu-budget-worksheet" },
          " for all-in cost planning. Download the ",
          { link: "Starter Kit", href: "/free-adu-course#starter-kit" },
          " for checklists.",
        ],
      },
    ],
  },
  {
    category: "EarthNest & homestead systems",
    items: [
      {
        q: "Can I add rainwater harvesting with my ADU?",
        a: [
          "Yes on many lots—roof catchment, first-flush diversion, opaque storage, and overflow routing must be engineered for Florida wet seasons and local plumbing rules. Start with ",
          { link: "Rainwater Collection for Tiny Homes", href: "/blog/rainwater-collection-tiny-homes-first-steps" },
          " or the deep ",
          { link: "ADU deluge guide", href: "/blog/rainwater-harvesting-low-footprint-resilience" },
          " (includes a PDF lead magnet).",
        ],
      },
      {
        q: "Should I add solar before or after efficiency upgrades?",
        a: [
          "Reduce loads first—envelope, mini-split sizing, and air sealing—then size PV and batteries. Read ",
          { link: "Staged Resilience: Efficiency Before Solar", href: "/blog/staged-resilience-efficiency-before-solar-panels" },
          " and ",
          { link: "Solar and Battery Basics", href: "/blog/solar-battery-basics-tiny-home-living" },
          ".",
        ],
      },
      {
        q: "What is regenerative tiny living?",
        a: [
          "It is designing the home and landscape as one system—compost loops, food forests, water capture, and low-waste plumbing—not just a smaller floor plan. Overview in ",
          { link: "What Is Regenerative Tiny Living?", href: "/blog/what-is-regenerative-tiny-living" },
          " and the ",
          { link: "Florida growing zones tool", href: "/florida-growing-zones-homestead-planning" },
          " for planting context.",
        ],
      },
    ],
  },
  {
    category: "Communities & lifestyle",
    items: [
      {
        q: "Where can I find legal tiny home communities in Florida?",
        a: [
          "Browse our curated ",
          { link: "Florida tiny home communities directory", href: "/tiny-home-communities/florida" },
          "—stewardship-led villages, long-term-lease parks, and primary-source links. Read ",
          { link: "stewardship-led tiny villages", href: "/blog/florida-stewardship-led-tiny-villages" },
          " to understand what separates real communities from RV spam listings.",
        ],
      },
      {
        q: "Can a tiny home help me live more self-sufficiently?",
        a: [
          "A smaller footprint frees lot area for gardens, rainwater, and closed-loop systems—but self-sufficiency still requires code-aware planning. Start with ",
          { link: "self-sufficiency & decentralized utilities", href: "/blog/tiny-home-self-sufficiency-decentralized-utilities" },
          " and ",
          { link: "backyard homesteading on small lots", href: "/blog/backyard-homesteading-small-lots-florida" },
          ".",
        ],
      },
    ],
  },
]

export function siteFaqSegmentsToPlain(segments: SiteFaqSegment[]): string {
  return segments
    .map((segment) => (typeof segment === "string" ? segment : segment.link))
    .join("")
}

export function getAllSiteFaqItems(): SiteFaqItem[] {
  return SITE_FAQ_CATEGORIES.flatMap((group) => group.items)
}

export function buildSiteFaqPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: getAllSiteFaqItems().map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: siteFaqSegmentsToPlain(item.a),
      },
    })),
  }
}
