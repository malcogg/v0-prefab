import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ADUQuizFunnel } from "@/components/adu-quiz-funnel"
import { WhatIsAduSection } from "@/components/what-is-adu-section"
import { DesignOptionsSection } from "@/components/design-options-section"
import { ADUCalculatorSection } from "@/components/adu-calculator-section"
import { OrangeCountyRulesSection } from "@/components/orange-county-rules-section"
import { DealBreakdownSection } from "@/components/deal-breakdown-section"
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
      <ADUQuizFunnel />
      <WhatIsAduSection />
      <DesignOptionsSection />
      <ADUCalculatorSection />
      <OrangeCountyRulesSection />
      <DealBreakdownSection />
      <ProcessSection />
      <EarthNestSection />
      <TeamSection />
      <LeadFormSection />
      <PartnerSection />
      <SiteFooter />
    </main>
  )
}
