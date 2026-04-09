import { LocalLandingPage } from "@/components/local-landing-page"

export default function AduWindermerePage() {
  return (
    <LocalLandingPage
      locationName="Windermere"
      governingJurisdiction="Town of Windermere or Orange County jurisdiction, depending on parcel"
      marketContext={[
        "Windermere properties are often high-value homes where ADUs are used for multigenerational living, private guest accommodations, and premium long-term rental strategy.",
        "Jurisdiction is critical here: some parcels are governed by Town of Windermere standards and others by Orange County unincorporated rules, so parcel-level verification is required.",
        "Because architectural consistency is especially important in this market, traditional site-built ADUs are usually the strongest fit for both permitting and value preservation.",
      ]}
      quickRules={[
        "Parcel location determines whether Town of Windermere or Orange County rules apply.",
        "If Orange County rules apply, owner-occupancy and special exception requirements may apply.",
        "Setbacks, height, and design standards vary by governing code and lot characteristics.",
        "Early zoning verification is mandatory before selecting final unit size and layout.",
      ]}
    />
  )
}
