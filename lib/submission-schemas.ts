import { z } from "zod"

export const leadSubmissionSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(200),
  phone: z.string().trim().min(7, "Phone is required").max(50),
  email: z.string().trim().email("Email is invalid").max(320),
  address: z.string().trim().min(1, "Address is required").max(500),
  owns_property: z.enum(["Yes", "No"], {
    message: "Please select whether you own the property",
  }),
  model_interest: z.string().trim().min(1, "Please select a model").max(100),
})

export const progressionSubmissionSchema = z.object({
  // Quiz answers
  county: z.string().trim().min(1).max(200),
  propertyType: z.string().trim().min(1).max(100),
  lotSize: z.string().trim().min(1).max(100),
  hoa: z.string().trim().min(1).max(100),
  floodZone: z.string().trim().min(1).max(100),
  goal: z.string().trim().min(1).max(100),
  modelInterest: z.string().trim().min(1).max(100),

  // Contact info
  name: z.string().trim().min(1, "Name is required").max(200),
  email: z.string().trim().email("Email is invalid").max(320),
  phone: z.string().trim().min(7, "Phone is required").max(50),
})

export const buildInquirySubmissionSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(200),
  phone: z.string().trim().min(7, "Phone is required").max(50),
  email: z.string().trim().email("Email is invalid").max(320),
  hearAbout: z.preprocess(
    (val) => (val == null ? "" : val),
    z.string().trim().max(100),
  ),
  message: z.preprocess(
    (val) => (val == null ? "" : val),
    z.string().trim().max(4000),
  ),
  session: z.object({
    step: z.coerce.number().min(1).max(4),
    selectedLot: z
      .object({
        id: z.string(),
        address: z.string(),
        city: z.string(),
        county: z.string(),
        lotSizeAcres: z.coerce.number(),
        zoning: z.string(),
        askingPrice: z.coerce.number(),
        mlsNumber: z.string(),
      })
      .nullable(),
    selectedModelId: z.string().nullable(),
    customizations: z.object({
      exterior: z.record(z.string().nullable()),
      interior: z.record(z.string().nullable()),
      systems: z.object({
        hvac: z.string(),
        addOns: z.array(z.string()).default([]),
      }),
      earthnestEco: z.array(z.string()).default([]),
    }),
  }),
})

export const starterKitDownloadSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(200),
  email: z.string().trim().email("Email is invalid").max(320),
  source: z.string().trim().max(100).default("free-adu-course"),
})

export const floridaZoneCodeSchema = z.enum(["8b", "9a", "9b", "10a", "10b", "11a", "11b"])

export const zoneLookupSourceSchema = z.enum(["zip", "city", "demo"])

export const homesteadZoneReportDownloadSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(200),
  phone: z.string().trim().min(7, "Phone is required").max(50),
  email: z.string().trim().email("Email is invalid").max(320),
  zone: floridaZoneCodeSchema,
  lookupSource: zoneLookupSourceSchema,
  matchedLabel: z.string().trim().min(1).max(500),
  isFloridaZip: z.boolean(),
  addressQuery: z.string().trim().max(500).optional().default(""),
  lunarSnapshotIso: z
    .string()
    .trim()
    .min(10)
    .max(50)
    .refine((s) => !Number.isNaN(Date.parse(s)), "Invalid lunar snapshot date"),
})

