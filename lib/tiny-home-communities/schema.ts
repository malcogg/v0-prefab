import { z } from "zod"

export const tenancyModeSchema = z.enum([
  "lease_land_own_home",
  "rent_home_or_lot",
  "purchase_home_on_site",
  "purchase_or_rent_mix",
  "unspecified",
])

export type TenancyMode = z.infer<typeof tenancyModeSchema>

export const communityStatusSchema = z.enum([
  "active",
  "waitlist",
  "contact_for_availability",
  "expanding",
  "mixed",
])

export type CommunityStatus = z.infer<typeof communityStatusSchema>

export const schemaKindSchema = z.enum(["Campground", "RVPark", "LodgingBusiness"])

export type CommunitySchemaKind = z.infer<typeof schemaKindSchema>

export const MACRO_REGION_VALUES = [
  "Central Florida",
  "Tampa Bay",
  "Space Coast",
  "Treasure Coast",
  "Nature Coast",
  "Southwest Florida",
  "South Florida",
  "Florida Keys",
  "North Florida",
  "Panhandle",
] as const

export type MacroRegion = (typeof MACRO_REGION_VALUES)[number]

export const macroRegionSchema = z.enum(MACRO_REGION_VALUES)

export const AMENITY_FLAG_KEYS = [
  "lakefront",
  "waterfront",
  "petFriendly",
  "gated",
  "ownershipPossible",
  "communityGarden",
  "pool",
  "clubhouse",
  "pickleballOrSports",
  "dockOrMarina",
  "fitnessCenter",
  "rvHookups",
  "coworkSpace",
  "laundry",
] as const

export type AmenityFlagKey = (typeof AMENITY_FLAG_KEYS)[number]

export const amenityFlagsSchema = z.object({
  lakefront: z.boolean(),
  waterfront: z.boolean(),
  petFriendly: z.boolean(),
  gated: z.boolean(),
  ownershipPossible: z.boolean(),
  communityGarden: z.boolean(),
  pool: z.boolean(),
  clubhouse: z.boolean(),
  pickleballOrSports: z.boolean(),
  dockOrMarina: z.boolean(),
  fitnessCenter: z.boolean(),
  rvHookups: z.boolean(),
  coworkSpace: z.boolean(),
  laundry: z.boolean(),
})

export type AmenityFlags = z.infer<typeof amenityFlagsSchema>

export const editorialSourceSchema = z.object({
  label: z.string().min(1),
  url: z.string().url(),
})

export type EditorialSource = z.infer<typeof editorialSourceSchema>

/** HTTPS URL or root-relative `/public` asset (e.g. `/images/foo.png`). */
export const listingImageUrlSchema = z
  .string()
  .refine((s) => /^https?:\/\//i.test(s) || /^\/[^?\s]+$/.test(s), {
    message: "Listing image URL must be http(s) or a root-relative path",
  })

const contactSchema = z.object({
  website: z.string().url().optional(),
  email: z.string().email().optional(),
  phone: z.string().optional(),
})

export const tinyHomeCommunitySchema = z.object({
  slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  name: z.string().min(1),
  /** Broader marketing region (maps, filters) */
  macroRegion: macroRegionSchema,
  /** Human-readable sub-cluster; keep for cards/SEO copy */
  regionLabel: z.string().min(1),
  city: z.string().min(1),
  county: z.string().min(1),
  state: z.literal("FL"),
  streetAddress: z.string().optional(),
  postalCode: z.string().optional(),
  latitude: z.number().optional(),
  longitude: z.number().optional(),
  contact: contactSchema,
  description: z.string().min(1),
  status: communityStatusSchema,
  statusDetail: z.string().optional(),
  lotDetailsSummary: z.string().min(1),
  tenancyModes: z.array(tenancyModeSchema).min(1),
  amenityFlags: amenityFlagsSchema,
  tags: z.array(z.string()),
  /** Internal editorial citations (do not substitute official contact.website UX) */
  sources: z.array(editorialSourceSchema),
  yearEstablished: z.number().int().optional(),
  legalNotes: z.string().optional(),
  image: z.object({
    url: listingImageUrlSchema,
    alt: z.string().min(1),
  }),
  schemaKind: schemaKindSchema.default("LodgingBusiness"),
  lastResearched: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
})

export type TinyHomeCommunity = z.infer<typeof tinyHomeCommunitySchema>

export const floridaCommunitiesSchema = z.array(tinyHomeCommunitySchema)
