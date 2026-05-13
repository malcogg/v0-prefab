import type { Metadata } from "next"
import { LocalLandingPage } from "@/components/local-landing-page"
import { buildLocalLandingMetadata } from "@/lib/local-page-metadata"
import { getLocalPageBySlug } from "@/lib/local-pages-data"

const pageSlug = "adu-davenport" as const
const pageData = getLocalPageBySlug(pageSlug)

export const metadata: Metadata = buildLocalLandingMetadata(pageSlug)

export default function Page() {
  if (!pageData) return null
  return <LocalLandingPage page={pageData} />
}
