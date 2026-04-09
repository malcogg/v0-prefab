import type { Metadata } from "next"
import { LocalLandingPage } from "@/components/local-landing-page"
import { getLocalPageBySlug } from "@/lib/local-pages-data"

const pageData = getLocalPageBySlug("adu-union-park")

export const metadata: Metadata = {
  title: pageData?.metaTitle,
  description: pageData?.metaDescription,
}

export default function Page() {
  if (!pageData) return null
  return <LocalLandingPage page={pageData} />
}
