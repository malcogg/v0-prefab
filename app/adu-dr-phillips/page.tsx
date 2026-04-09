import { LocalLandingPage } from "@/components/local-landing-page"

export default function AduDrPhillipsPage() {
  return (
    <LocalLandingPage
      locationName="Dr. Phillips"
      governingJurisdiction="Primarily Orange County (unincorporated)"
      marketContext={[
        "Dr. Phillips is a high-demand submarket where ADUs are often pursued for premium long-term rentals, multigenerational housing, and strategic value-add improvements.",
        "Most parcels here follow Orange County unincorporated standards, making owner-occupancy, special exception review, and lot-level compliance key planning steps.",
        "Given neighborhood quality expectations and resale sensitivity, traditional site-built ADUs are typically the preferred option for permitting and appraisal alignment.",
      ]}
      quickRules={[
        "Orange County standards generally govern most Dr. Phillips parcels.",
        "Minimum ADU size is 400 sq ft where Orange County unincorporated code applies.",
        "Owner-occupancy and special exception requirements are common in this jurisdiction.",
        "Short-term rentals are generally not permitted for ADUs in most Orange County residential zones.",
      ]}
    />
  )
}
