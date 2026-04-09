import { LocalLandingPage } from "@/components/local-landing-page"

export default function AduWinterGardenPage() {
  return (
    <LocalLandingPage
      locationName="Winter Garden"
      governingJurisdiction="City of Winter Garden or Orange County jurisdiction, depending on parcel"
      marketContext={[
        "Winter Garden continues to attract homeowners and investors due to strong rental demand and rising property values near downtown and key commuter corridors.",
        "This area has mixed governance, with some parcels under City of Winter Garden standards and others under Orange County unincorporated code, so zoning cannot be assumed.",
        "Most successful projects here start with parcel mapping, setback validation, and a model recommendation aligned to local standards and neighborhood character.",
      ]}
      quickRules={[
        "Verify whether the parcel is governed by City of Winter Garden or Orange County rules.",
        "Detached ADU standards and placement requirements vary by jurisdiction and zoning district.",
        "Owner-occupancy and special exception requirements may apply in Orange County contexts.",
        "Lot dimensions and utility placement materially affect feasible ADU size and location.",
      ]}
    />
  )
}
