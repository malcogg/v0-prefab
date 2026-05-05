import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ADUQuizFunnel } from "@/components/adu-quiz-funnel"
import { OpportunitySection } from "@/components/opportunity-section"
import { WhatIsAduSection } from "@/components/what-is-adu-section"
import { DesignOptionsSection } from "@/components/design-options-section"
import { ADUCalculatorSection } from "@/components/adu-calculator-section"
import { OrangeCountyRulesSection } from "@/components/orange-county-rules-section"
import { DealBreakdownSection } from "@/components/deal-breakdown-section"
import { ProcessSection } from "@/components/process-section"
import { EarthNestSection } from "@/components/earthnest-section"
import { TeamSection } from "@/components/team-section"
import { FreeCourseSection } from "@/components/free-course-section"
import { LeadFormSection } from "@/components/lead-form-section"
import { PartnerSection } from "@/components/partner-section"
import { SiteFooter } from "@/components/site-footer"
import { breadcrumbSchema } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Prefabricated.co | Florida Prefab ADUs & Eco Tiny Living Systems",
  description:
    "Explore Florida prefab ADUs, backyard homes, tiny living systems, and eco-conscious EarthNest concepts. Legal, foundation-built options for income, family flexibility, and resilient living.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Prefabricated.co | Florida Prefab ADUs & Eco Tiny Living Systems",
    description:
      "Explore Florida prefab ADUs, backyard homes, tiny living systems, and eco-conscious EarthNest concepts. Legal, foundation-built options for income, family flexibility, and resilient living.",
    url: "/",
    images: [
      {
        url: "/og/homepage.jpg",
        width: 1200,
        height: 630,
        alt: "Florida prefab ADUs and eco-conscious tiny living systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prefabricated.co | Florida Prefab ADUs & Eco Tiny Living Systems",
    description:
      "Explore Florida prefab ADUs, backyard homes, tiny living systems, and eco-conscious EarthNest concepts. Legal, foundation-built options for income, family flexibility, and resilient living.",
    images: ["/og/homepage.jpg"],
  },
}

export default function Home() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.prefabricated.co/#website",
    url: "https://www.prefabricated.co",
    name: "Prefabricated.co",
    description: "Florida prefab homes, ADUs, backyard income units, and EarthNest Living Systems",
    publisher: { "@id": "https://www.prefabricated.co/#business" },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://www.prefabricated.co/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Prefab ADU Construction, Permitting, and Eco-Conscious Living Systems",
    name: "Florida Prefab ADUs and EarthNest Living Systems",
    description:
      "Legal, foundation-built ADUs and prefab backyard home concepts designed for Central Florida income potential, flexible living, and staged sustainability upgrades.",
    provider: { "@id": "https://www.prefabricated.co/#business" },
    areaServed: { "@type": "State", name: "Florida" },
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "PriceSpecification",
        minPrice: "200000",
        maxPrice: "450000",
        priceCurrency: "USD",
      },
      availability: "https://schema.org/InStock",
    },
  }

  const breadcrumb = breadcrumbSchema([{ name: "Home", path: "/" }])

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <Navigation />
      <HeroSection />
      <ADUQuizFunnel />
      <OpportunitySection />
      <WhatIsAduSection />
      <DesignOptionsSection />
      <ADUCalculatorSection />
      <OrangeCountyRulesSection />
      <DealBreakdownSection />
      <ProcessSection />
      <EarthNestSection />
      <TeamSection />
      <FreeCourseSection />
      <LeadFormSection />
      <PartnerSection />
      <SiteFooter />
    </main>
  )
}
