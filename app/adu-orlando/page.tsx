import { LocalLandingPage } from "@/components/local-landing-page"

export default function AduOrlandoPage() {
  return (
    <LocalLandingPage
      locationName="Orlando"
      governingJurisdiction="City of Orlando development code"
      marketContext={[
        "In the City of Orlando, ADUs are a key strategy for homeowners and investors who want to increase rental yield on already high-demand urban lots.",
        "A major differentiator here is that owner-occupancy is generally not required in city rules, which can open stronger investment use cases than some nearby unincorporated areas.",
        "Orlando projects perform best when zoning district standards, design compatibility expectations, and placement limits are addressed early in design.",
      ]}
      quickRules={[
        "Owner-occupancy is generally not required in City of Orlando ADU pathways.",
        "ADUs are permitted by right in many residential zoning districts.",
        "Detached units must typically be placed at side or rear, not in front of the primary dwelling.",
        "Setbacks and height limits vary by district and parcel specifics.",
      ]}
    />
  )
}
