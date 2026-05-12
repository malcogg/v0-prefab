import { SITE_URL } from "@/lib/seo"
import { amenityLabelsForLodging } from "./amenity-labels"
import type { TinyHomeCommunity } from "./schema"

export function floridaListingUrl(slug: string) {
  return `${SITE_URL}/tiny-home-communities/florida/${slug}`
}

export function floridaHubUrl() {
  return `${SITE_URL}/tiny-home-communities/florida`
}

export function directoryHubUrl() {
  return `${SITE_URL}/tiny-home-communities`
}

export function itemListSchemaFromCommunities(items: TinyHomeCommunity[], listName: string) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: listName,
    numberOfItems: items.length,
    itemListElement: items.map((c, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: c.name,
      url: floridaListingUrl(c.slug),
    })),
  }
}

/** Structured data for a single curated community listing (Lodging-oriented place). */
export function communityLodgingSchema(community: TinyHomeCommunity) {
  const url = floridaListingUrl(community.slug)
  const postal: Record<string, string> = {
    "@type": "PostalAddress",
    addressLocality: community.city,
    addressRegion: community.state,
    addressCountry: "US",
  }
  if (community.streetAddress) postal.streetAddress = community.streetAddress
  if (community.postalCode) postal.postalCode = community.postalCode

  const base: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": community.schemaKind,
    "@id": `${url}#place`,
    name: community.name,
    description: community.description,
    url: community.contact.website ?? url,
    address: postal,
    sameAs: community.contact.website ? [community.contact.website] : undefined,
    amenityFeature: amenityLabelsForLodging(community.amenityFlags).map((name) => ({
      "@type": "LocationFeatureSpecification",
      name,
    })),
  }

  if (community.latitude != null && community.longitude != null) {
    base.geo = {
      "@type": "GeoCoordinates",
      latitude: community.latitude,
      longitude: community.longitude,
    }
  }
  if (community.contact.phone) base.telephone = community.contact.phone
  if (community.contact.email) base.email = community.contact.email

  return base
}
