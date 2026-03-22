import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { WhatIsAduSection } from "@/components/what-is-adu-section"
import { OpportunitySection } from "@/components/opportunity-section"
import { DesignOptionsSection } from "@/components/design-options-section"
import { ProcessSection } from "@/components/process-section"
import { EarthNestSection } from "@/components/earthnest-section"
import { TeamSection } from "@/components/team-section"
import { LeadFormSection } from "@/components/lead-form-section"
import { PartnerSection } from "@/components/partner-section"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <WhatIsAduSection />
      <OpportunitySection />
      <DesignOptionsSection />
      <ProcessSection />
      <EarthNestSection />
      <TeamSection />
      <LeadFormSection />
      <PartnerSection />
      <SiteFooter />
    </main>
  )
}
