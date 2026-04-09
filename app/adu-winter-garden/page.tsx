import type { Metadata } from "next"
import { LocalLandingPage } from "@/components/local-landing-page"
import { getLocalPageBySlug } from "@/lib/local-pages-data"

const pageData = getLocalPageBySlug("adu-winter-garden")

export const metadata: Metadata = {
  title: pageData?.metaTitle,
  description: pageData?.metaDescription,
  alternates: { canonical: pageData ? `/${pageData.slug}` : "/" },
  openGraph: {
    title: pageData?.metaTitle,
    description: pageData?.metaDescription,
    url: pageData ? `/${pageData.slug}` : "/",
    images: [
      {
        url: "/og/local-page-default.jpg",
        width: 1200,
        height: 630,
        alt: "ADU Specialists in Central Florida",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@earthnestfl",
    title: pageData?.metaTitle,
    description: pageData?.metaDescription,
    images: ["/og/local-page-default.jpg"],
  },
}

export default function Page() {
  if (!pageData) return null
  return <LocalLandingPage page={pageData} />
}
