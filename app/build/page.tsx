import type { Metadata } from "next"
import { Suspense } from "react"
import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { BuildConfigurator } from "@/components/build/build-configurator"

export const metadata: Metadata = {
  title: "Build Your ADU — Land + Home Configurator | EarthNest Florida",
  description:
    "Browse available land in Central Florida, choose your EarthNest home model, customize interior and exterior finishes, and submit your build inquiry. No pressure — just a plan.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/build" },
}

export default function BuildPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "EarthNest Build Configurator",
    description: "Multi-step land and home configurator for EarthNest Florida ADU projects.",
    url: "https://www.prefabricated.co/build",
    provider: {
      "@id": "https://www.prefabricated.co/#business",
    },
  }

  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navigation />
      <div className="pt-24">
        <Suspense fallback={<div className="max-w-7xl mx-auto px-6 py-10 text-sm text-muted-foreground">Loading build configurator...</div>}>
          <BuildConfigurator />
        </Suspense>
      </div>
      <SiteFooter />
    </main>
  )
}
