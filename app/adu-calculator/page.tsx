import type { Metadata } from "next"
import { ADUCalculatorSection } from "@/components/adu-calculator-section"
import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { breadcrumbSchema } from "@/lib/seo"
import { ogImageMeta } from "@/lib/og"

const calcOg = ogImageMeta({
  variant: "default",
  title: "ADU income calculator",
  subtitle: "Central Florida rent, cash flow & 10-year outlook",
})

export const metadata: Metadata = {
  title: "ADU Income Calculator — Central Florida | EarthNest Florida",
  description:
    "Calculate your ADU rental income, monthly cash flow, cap rate, and 10-year return for your specific Central Florida neighborhood. Real numbers. Conservative assumptions.",
  alternates: { canonical: "/adu-calculator" },
  openGraph: {
    title: "ADU Income Calculator — Central Florida | EarthNest Florida",
    description:
      "Calculate your ADU rental income, monthly cash flow, cap rate, and 10-year return for your specific Central Florida neighborhood. Real numbers. Conservative assumptions.",
    url: "/adu-calculator",
    images: [calcOg],
  },
  twitter: {
    card: "summary_large_image",
    site: "@earthnestfl",
    title: "ADU Income Calculator — Central Florida | EarthNest Florida",
    description:
      "Calculate your ADU rental income, monthly cash flow, cap rate, and 10-year return for your specific Central Florida neighborhood. Real numbers. Conservative assumptions.",
    images: [calcOg.url],
  },
}

export default function AduCalculatorPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "ADU Income Calculator", path: "/adu-calculator" },
  ])
  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "EarthNest ADU Investment Calculator",
    url: "https://www.prefabricated.co/adu-calculator",
    applicationCategory: "FinanceApplication",
    description:
      "ADU investment calculator for Central Florida homeowners and investors. Location-specific rent estimates, financing analysis, and 10-year projection.",
    provider: {
      "@id": "https://www.prefabricated.co/#business",
    },
  }

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <Navigation />
      <div className="pt-28">
        <ADUCalculatorSection />
      </div>
      <SiteFooter />
    </main>
  )
}
