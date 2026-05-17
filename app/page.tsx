import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { HomePathwaysSection } from "@/components/home-pathways-section"
import { ADUQuizFunnel } from "@/components/adu-quiz-funnel"
import { OpportunitySection } from "@/components/opportunity-section"
import { WhatIsAduSection } from "@/components/what-is-adu-section"
import { EscapeProductLanesSection } from "@/components/escape-product-lanes-section"
import { EarthNestSecondarySection } from "@/components/earthnest-secondary-section"
import { ADUCalculatorSection } from "@/components/adu-calculator-section"
import { OrangeCountyRulesSection } from "@/components/orange-county-rules-section"
import { DealBreakdownSection } from "@/components/deal-breakdown-section"
import { ProcessSection } from "@/components/process-section"
import { EarthNestSection } from "@/components/earthnest-section"
import { FloridaHomesteadResourcesSection } from "@/components/florida-homestead-resources-section"
import { TeamSection } from "@/components/team-section"
import { FreeCourseSection } from "@/components/free-course-section"
import { HomeInterestSection } from "@/components/home-interest-section"
import { PartnerSection } from "@/components/partner-section"
import { TinyHomeDirectorySection } from "@/components/tiny-home-directory-section"
import { SiteFooter } from "@/components/site-footer"
import { breadcrumbSchema } from "@/lib/seo"
import { ogImageMeta } from "@/lib/og"

const homeOg = ogImageMeta({
  variant: "default",
  title: "Florida tiny homes, prefab ADUs & homestead tools",
  subtitle: "Escape SKUs, communities, rules, calculators & EarthNest",
})

export const metadata: Metadata = {
  title: "Prefabricated.co | Florida Tiny Homes, Prefab ADUs & Eco Living Systems",
  description:
    "Florida tiny homes (Escape 2026), curated communities, permitted ADUs, county rules, calculators, and optional EarthNest permaculture tools—choose tiny, backyard, or regenerative depth.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Prefabricated.co | Florida Tiny Homes, Prefab ADUs & Eco Living Systems",
    description:
      "Florida tiny homes, communities, ADUs, rules, and EarthNest-style systems—one discovery layer for factory SKUs, zoning, and homestead planning.",
    images: [homeOg],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prefabricated.co | Florida Tiny Homes, Prefab ADUs & Eco Living Systems",
    description:
      "Florida tiny homes, communities, ADUs, rules, and EarthNest-style systems—one discovery layer for factory SKUs, zoning, and homestead planning.",
    images: [homeOg.url],
  },
}

export default function Home() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.prefabricated.co/#website",
    url: "https://www.prefabricated.co",
    name: "Prefabricated.co",
    description:
      "Florida tiny homes, prefab ADUs, backyard units, communities, and EarthNest Living Systems—discovery, zoning-aware planning, and optional regenerative upgrades.",
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
    serviceType: "Prefab Tiny Homes, ADU Construction, Permitting, and Eco-Conscious Living Systems",
    name: "Florida Prefab Tiny Homes, ADUs, and EarthNest Living Systems",
    description:
      "Factory-built tiny homes, legal foundation-built ADUs, and optional EarthNest layers for Central Florida—communities, rules, calculators, and staged sustainability upgrades.",
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
      <HomePathwaysSection />
      <EscapeProductLanesSection />
      <TinyHomeDirectorySection />
      <EarthNestSecondarySection />
      <FloridaHomesteadResourcesSection />
      <ADUQuizFunnel />
      <OpportunitySection />
      <WhatIsAduSection />
      <ADUCalculatorSection />
      <OrangeCountyRulesSection />
      <DealBreakdownSection />
      <ProcessSection />
      <EarthNestSection />
      <TeamSection />
      <FreeCourseSection />
      <HomeInterestSection />
      <PartnerSection />
      <SiteFooter />
    </main>
  )
}
