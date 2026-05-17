import { z } from "zod"

export const floridaAnswerSchema = z.enum(["yes", "no", "not_sure"])

export const projectTypeSchema = z.enum([
  "tiny_escape",
  "earthnest",
  "adu_backyard",
  "village_rental",
  "other",
])

export const landStatusSchema = z.enum(["yes", "no", "looking"])

export const utilitySchema = z.enum(["power", "water", "sewer", "septic", "none"])

export const desiredUseSchema = z.enum([
  "primary",
  "guest_adu",
  "airbnb",
  "retreat_office",
  "other",
])

export const budgetRangeSchema = z.enum([
  "under_50k",
  "50_80k",
  "80_120k",
  "120_160k",
  "160k_plus",
])

export const offGridSchema = z.enum(["yes", "somewhat", "no"])

export const bedroomsSchema = z.enum(["studio", "1", "2", "3", "4plus"])

const zip = z
  .string()
  .trim()
  .regex(/^\d{5}(-\d{4})?$/, "Enter a valid U.S. ZIP code")

export const qualifyFullSubmissionSchema = z
  .object({
    fullName: z.string().trim().min(1, "Name is required").max(200),
    email: z.string().trim().email("Valid email required").max(320),
    phone: z.string().trim().min(7, "Phone is required").max(50),
    zip: zip,
    city: z.string().trim().max(120).optional().default(""),
    state: z.string().trim().max(2).optional().default(""),
    floridaResidence: floridaAnswerSchema,
    projectTypes: z.array(projectTypeSchema).min(1, "Select at least one project type"),
    landStatus: landStatusSchema,
    propertyInFlorida: floridaAnswerSchema.optional(),
    zoning: z.string().trim().max(300).optional().default(""),
    floodZone: floridaAnswerSchema.optional(),
    hoa: floridaAnswerSchema.optional(),
    utilities: z.array(utilitySchema).default([]),
    desiredUse: desiredUseSchema,
    budgetRange: budgetRangeSchema,
    timeline: z.string().trim().min(1, "Share your timeline").max(500),
    modelInterest: z.string().trim().max(120).optional().default(""),
    offGrid: offGridSchema.optional(),
    bedrooms: bedroomsSchema.optional(),
    notes: z.string().trim().max(4000).optional().default(""),
  })
  .superRefine((data, ctx) => {
    if (data.landStatus === "yes") {
      if (!data.propertyInFlorida) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Required when you own property",
          path: ["propertyInFlorida"],
        })
      }
      if (!data.zoning?.trim()) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Select or enter zoning",
          path: ["zoning"],
        })
      }
      if (!data.floodZone) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Flood zone helps us guide you accurately",
          path: ["floodZone"],
        })
      }
      if (!data.hoa) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "HOA answer needed",
          path: ["hoa"],
        })
      }
    }
  })

export type QualifyFullSubmission = z.infer<typeof qualifyFullSubmissionSchema>

const interestEnum = z.enum(["tiny_homes", "adu", "earthnest", "village", "not_sure"])

export const homeInterestSubmissionSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(200),
  email: z.string().trim().email("Valid email required").max(320),
  zip: zip,
  phone: z.string().trim().max(50).optional().default(""),
  message: z.string().trim().max(500).optional().default(""),
  interests: z.array(interestEnum).min(1, "Pick at least one interest"),
})

export type HomeInterestSubmission = z.infer<typeof homeInterestSubmissionSchema>
