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

