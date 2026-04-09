import landListingsData from "@/data/land-listings.json"

export type LandListing = {
  id: string
  mlsNumber: string
  address: string
  city: string
  county: string
  zipCode: string
  jurisdiction: string
  lotSizeAcres: number
  lotSizeSqFt: number
  askingPrice: number
  zoning: string
  aduEligible: boolean
  status: string
  daysOnMarket: number
  description: string
  photo: string
  lat: number
  lng: number
  listingAgent: string
  brokerageName: string
  disclaimer: string
}

type StaticListingResponse = { listings: LandListing[] }

function normalizeListing(raw: LandListing): LandListing {
  return {
    ...raw,
    lotSizeAcres: Number(raw.lotSizeAcres),
    lotSizeSqFt: Number(raw.lotSizeSqFt),
    askingPrice: Number(raw.askingPrice),
    daysOnMarket: Number(raw.daysOnMarket),
    lat: Number(raw.lat),
    lng: Number(raw.lng),
  }
}

export function getStaticLandListings(): LandListing[] {
  const payload = landListingsData as StaticListingResponse
  return payload.listings.map(normalizeListing)
}

export function normalizeIdxListings(idxResponse: unknown): LandListing[] {
  void idxResponse
  // Future Phase 2: map Showcase IDX records to LandListing shape.
  return []
}
