import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin/", "/api/", "/private/", "/*.json$"],
    },
    sitemap: "https://www.prefabricated.co/sitemap.xml",
  }
}
