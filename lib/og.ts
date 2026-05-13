import { SITE_URL } from "@/lib/seo"

export type OgVariant = "default" | "about" | "tiny" | "homestead" | "local" | "faq" | "resource"

export type OgImageParams = {
  variant?: OgVariant
  /** Primary headline on the card */
  title?: string
  /** Secondary line */
  subtitle?: string
}

/** Absolute URL for `/api/og` (social crawlers require absolute URLs). */
export function ogImageAbsoluteUrl(params: OgImageParams): string {
  const search = new URLSearchParams()
  search.set("v", params.variant ?? "default")
  if (params.title) search.set("t", params.title.slice(0, 140))
  if (params.subtitle) search.set("s", params.subtitle.slice(0, 160))
  return `${SITE_URL}/api/og?${search.toString()}`
}

export function ogImageMeta(params: OgImageParams) {
  const url = ogImageAbsoluteUrl(params)
  const alt =
    params.title != null && params.title.length > 0
      ? `${params.title} · Prefabricated.co`
      : "Prefabricated.co — Florida prefab ADUs, tiny communities, homestead guides"
  return {
    url,
    width: 1200,
    height: 630,
    alt,
  }
}
