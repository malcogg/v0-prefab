import type { Metadata } from "next"
import { Suspense } from "react"
import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { BuildConfigurator } from "@/components/build/build-configurator"
import { ogImageMeta } from "@/lib/og"

const buildOg = ogImageMeta({
  variant: "default",
  title: "Build your EarthNest ADU or prefab backyard home",
  subtitle: "Configurator · eco-ready options · Florida feasibility",
})

export const metadata: Metadata = {
  title: "Build Your EarthNest ADU or Prefab Backyard Home | Prefabricated.co",
  description:
    "Choose an EarthNest model or traditional site-built ADU, customize finishes and eco-ready options, and submit your build inquiry. Property-specific feasibility starts with a free site evaluation.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/build" },
  openGraph: {
    title: "Build Your EarthNest ADU or Prefab Backyard Home | Prefabricated.co",
    description:
      "Choose an EarthNest model or traditional site-built ADU, customize finishes and eco-ready options, and submit your build inquiry.",
    url: "/build",
    images: [buildOg],
  },
  twitter: {
    card: "summary_large_image",
    title: "Build Your EarthNest ADU or Prefab Backyard Home | Prefabricated.co",
    description:
      "Choose an EarthNest model or traditional site-built ADU, customize finishes and eco-ready options.",
    images: [buildOg.url],
  },
}

export default function BuildPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "EarthNest Build Configurator",
    description: "Multi-step home configurator for EarthNest ADU and prefab backyard home projects.",
    url: "https://www.prefabricated.co/build",
    provider: {
      "@id": "https://www.prefabricated.co/#business",
    },
  }

  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navigation />
      <div className="pt-32">
        <Suspense fallback={<div className="max-w-7xl mx-auto px-6 py-10 text-sm text-muted-foreground">Loading build configurator...</div>}>
          <BuildConfigurator />
        </Suspense>
      </div>
      <SiteFooter />
    </main>
  )
}
