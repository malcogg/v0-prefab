import type { Metadata } from "next"

import { getLocalPageBySlug } from "@/lib/local-pages-data"
import { ogImageMeta } from "@/lib/og"
import { getPageTitle } from "@/lib/seo"

export function buildLocalLandingMetadata(slug: string): Metadata {
  const pageData = getLocalPageBySlug(slug)
  if (!pageData) {
    return {
      title: "Florida ADU Specialists | Prefabricated.co",
      alternates: { canonical: "/" },
    }
  }

  const title = getPageTitle({
    primary: `${pageData.locationName} ADU`,
    suffix: "local-adu",
  })

  const og = ogImageMeta({
    variant: "local",
    title: `ADUs in ${pageData.locationName}`,
    subtitle: `${pageData.county}, Florida`,
  })

  return {
    title,
    description: pageData.metaDescription,
    alternates: { canonical: `/${pageData.slug}` },
    openGraph: {
      title,
      description: pageData.metaDescription,
      url: `/${pageData.slug}`,
      images: [og],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: pageData.metaDescription,
      images: [og.url],
    },
  }
}
