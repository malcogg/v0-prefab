import type { Metadata } from "next"
import { breadcrumbSchema } from "@/lib/seo"
import { AduRulesPageClient } from "@/components/adu-rules-page"

export const metadata: Metadata = {
  title: "ADU Rules by County — Central Florida | EarthNest Florida",
  description:
    "What you can and can't build in Orange County, Orlando, Osceola, Seminole & Lake County. Official ADU rules, size limits, setbacks, and contact info for each jurisdiction.",
  alternates: { canonical: "/adu-rules" },
  openGraph: {
    title: "ADU Rules by County — Central Florida | EarthNest Florida",
    description:
      "What you can and can't build in Orange County, Orlando, Osceola, Seminole & Lake County. Official ADU rules, size limits, setbacks, and contact info for each jurisdiction.",
    url: "/adu-rules",
    images: [{ url: "/og/county-directory.jpg", width: 1200, height: 630, alt: "ADU Rules by County" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@earthnestfl",
    title: "ADU Rules by County — Central Florida | EarthNest Florida",
    description:
      "What you can and can't build in Orange County, Orlando, Osceola, Seminole & Lake County. Official ADU rules, size limits, setbacks, and contact info for each jurisdiction.",
    images: ["/og/county-directory.jpg"],
  },
}

export default function AduRulesPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "ADU Rules by County", path: "/adu-rules" },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <AduRulesPageClient />
    </>
  )
}
