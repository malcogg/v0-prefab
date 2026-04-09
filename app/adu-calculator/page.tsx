import type { Metadata } from "next"
import { ADUCalculatorSection } from "@/components/adu-calculator-section"
import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { breadcrumbSchema } from "@/lib/seo"

export const metadata: Metadata = {
  title: "ADU Income Calculator — Central Florida | EarthNest Florida",
  description:
    "Estimate your ADU rental income, equity gain, and payback period in under 60 seconds. Built for Orange County and surrounding Central Florida markets.",
  alternates: { canonical: "/adu-calculator" },
  openGraph: {
    title: "ADU Income Calculator — Central Florida | EarthNest Florida",
    description:
      "Estimate your ADU rental income, equity gain, and payback period in under 60 seconds. Built for Orange County and surrounding Central Florida markets.",
    url: "/adu-calculator",
    images: [{ url: "/og/calculator.jpg", width: 1200, height: 630, alt: "ADU Income Calculator" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@earthnestfl",
    title: "ADU Income Calculator — Central Florida | EarthNest Florida",
    description:
      "Estimate your ADU rental income, equity gain, and payback period in under 60 seconds. Built for Orange County and surrounding Central Florida markets.",
    images: ["/og/calculator.jpg"],
  },
}

export default function AduCalculatorPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "ADU Income Calculator", path: "/adu-calculator" },
  ])

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <Navigation />
      <div className="pt-28">
        <ADUCalculatorSection />
      </div>
      <SiteFooter />
    </main>
  )
}
