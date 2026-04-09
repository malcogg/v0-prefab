import { LocalLandingPage } from "@/components/local-landing-page"

export default function AduOrangeCountyPage() {
  return (
    <LocalLandingPage
      locationName="Orange County"
      governingJurisdiction="Orange County (unincorporated) zoning code where applicable"
      marketContext={[
        "Orange County remains one of the strongest ADU markets in Central Florida because demand for long-term rentals continues to outpace supply in many neighborhoods.",
        "The biggest planning factors here are owner-occupancy, special exception approval, and lot-level feasibility rules. Projects that start with zoning verification move faster and avoid rework.",
        "Most owners in this market prioritize traditional site-built ADUs for permitting confidence, appraisal value, and better long-term tenant performance.",
      ]}
      quickRules={[
        "Minimum ADU living area is 400 sq ft in Orange County (unincorporated).",
        "Maximum ADU size is 45% of primary home area or 1,000 sq ft (up to 1,500 sq ft on lots 2+ acres).",
        "Owner must occupy either the primary residence or ADU as a homesteaded principal residence.",
        "Special Exception approval is typically required before building permit application.",
      ]}
    />
  )
}
