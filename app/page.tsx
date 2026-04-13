import type { Metadata } from "next"
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
import { breadcrumbSchema } from "@/lib/seo"

export const metadata: Metadata = {
  title: "PreFabricated.co | Tiny Homes & ADUs in Florida",
  description:
    "Build a legal, permitted tiny home or ADU in Florida. PreFabricated.co handles zoning, design, permitting & construction—serving the state, based in Orlando. Free property evaluation.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "PreFabricated.co | Tiny Homes & ADUs in Florida",
    description:
      "Build a legal, permitted tiny home or ADU in Florida. PreFabricated.co handles zoning, design, permitting & construction—serving the state, based in Orlando. Free property evaluation.",
    url: "/",
    images: [
      {
        url: "/og/homepage.jpg",
        width: 1200,
        height: 630,
        alt: "Florida tiny homes and ADU specialists",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PreFabricated.co | Tiny Homes & ADUs in Florida",
    description:
      "Build a legal, permitted tiny home or ADU in Florida. PreFabricated.co handles zoning, design, permitting & construction—serving the state, based in Orlando. Free property evaluation.",
    images: ["/og/homepage.jpg"],
  },
}

export default function Home() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.prefabricated.co/#website",
    url: "https://www.prefabricated.co",
    name: "PreFabricated.co",
    description: "Tiny homes and ADUs in Florida — permitted, foundation-built",
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
    serviceType: "ADU Construction and Permitting",
    name: "Traditional Site-Built ADU",
    description:
      "Fully custom, stick-built or CMU block ADU designed to match your primary home. Includes full permitting, construction, and inspection management in Central Florida.",
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
