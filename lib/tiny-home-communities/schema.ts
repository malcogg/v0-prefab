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

const contactSchema = z.object({
  website: z.string().url().optional(),
  email: z.string().email().optional(),
  phone: z.string().optional(),
})

export const tinyHomeCommunitySchema = z.object({
  slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  name: z.string().min(1),
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
  amenities: z.array(z.string()),
  tags: z.array(z.string()),
  yearEstablished: z.number().int().optional(),
  legalNotes: z.string().optional(),
  image: z.object({
    url: z.string().url(),
    alt: z.string().min(1),
  }),
  schemaKind: schemaKindSchema.default("LodgingBusiness"),
  /** ISO date (YYYY-MM-DD); omit if unknown */
  lastVerified: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
})

export type TinyHomeCommunity = z.infer<typeof tinyHomeCommunitySchema>

export const floridaCommunitiesSchema = z.array(tinyHomeCommunitySchema)
