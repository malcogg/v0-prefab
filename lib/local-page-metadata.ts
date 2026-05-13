import type { Metadata } from "next"

import { getLocalPageBySlug } from "@/lib/local-pages-data"
import { ogImageMeta } from "@/lib/og"

export function buildLocalLandingMetadata(slug: string): Metadata {
  const pageData = getLocalPageBySlug(slug)
  if (!pageData) {
    return {
      title: "Florida ADU Specialists | Prefabricated.co",
      alternates: { canonical: "/" },
    }
  }

  const og = ogImageMeta({
    variant: "local",
    title: `ADUs in ${pageData.locationName}`,
    subtitle: `${pageData.county}, Florida`,
  })

  return {
    title: pageData.metaTitle,
    description: pageData.metaDescription,
    alternates: { canonical: `/${pageData.slug}` },
    openGraph: {
      title: pageData.metaTitle,
      description: pageData.metaDescription,
      url: `/${pageData.slug}`,
      images: [og],
    },
    twitter: {
      card: "summary_large_image",
      site: "@earthnestfl",
      title: pageData.metaTitle,
      description: pageData.metaDescription,
      images: [og.url],
    },
  }
}
