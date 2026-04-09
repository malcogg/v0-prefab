import { HOME_MODELS } from "@/lib/build/models"
import { EXTERIOR_OPTIONS, INTERIOR_OPTIONS, SYSTEM_OPTIONS } from "@/lib/build/options"
import type { LandListing } from "@/lib/build/land-adapter"

export type BuildStep = 1 | 2 | 3 | 4 | 5

export type BuildSession = {
  step: BuildStep
  selectedLot: LandListing | null
  selectedModelId: (typeof HOME_MODELS)[number]["id"] | null
  customizations: {
    exterior: {
      siding: string | null
      roof: string | null
      colorPalette: string | null
      door: string | null
      windowFrame: string | null
    }
    interior: {
      flooring: string | null
      cabinets: string | null
      countertop: string | null
      fixtures: string | null
      wallAccent: string | null
    }
    systems: {
      hvac: string
      addOns: string[]
    }
  }
}

export const BUILD_SESSION_KEY = "earthnest-build-session-v1"

export const DEFAULT_BUILD_SESSION: BuildSession = {
  step: 1,
  selectedLot: null,
  selectedModelId: null,
  customizations: {
    exterior: {
      siding: null,
      roof: null,
      colorPalette: null,
      door: null,
      windowFrame: null,
    },
    interior: {
      flooring: null,
      cabinets: null,
      countertop: null,
      fixtures: null,
      wallAccent: null,
    },
    systems: {
      hvac: "standard-mini-split",
      addOns: [],
    },
  },
}

function optionPrice(id: string | null, options: Array<{ id: string; price: number }>) {
  if (!id) return 0
  return options.find((item) => item.id === id)?.price ?? 0
}

export function getSelectedModel(modelId: BuildSession["selectedModelId"]) {
  return HOME_MODELS.find((model) => model.id === modelId) ?? null
}

export function calculateOptionsTotal(session: BuildSession) {
  const { exterior, interior, systems } = session.customizations
  return (
    optionPrice(exterior.siding, EXTERIOR_OPTIONS.siding) +
    optionPrice(exterior.roof, EXTERIOR_OPTIONS.roof) +
    optionPrice(exterior.colorPalette, EXTERIOR_OPTIONS.colorPalette) +
    optionPrice(exterior.door, EXTERIOR_OPTIONS.door) +
    optionPrice(exterior.windowFrame, EXTERIOR_OPTIONS.windowFrame) +
    optionPrice(interior.flooring, INTERIOR_OPTIONS.flooring) +
    optionPrice(interior.cabinets, INTERIOR_OPTIONS.cabinets) +
    optionPrice(interior.countertop, INTERIOR_OPTIONS.countertop) +
    optionPrice(interior.fixtures, INTERIOR_OPTIONS.fixtures) +
    optionPrice(interior.wallAccent, INTERIOR_OPTIONS.wallAccent) +
    optionPrice(systems.hvac, SYSTEM_OPTIONS.hvac) +
    systems.addOns.reduce((sum, addOn) => sum + optionPrice(addOn, SYSTEM_OPTIONS.addOns), 0)
  )
}

export function calculateEstimatedTotal(session: BuildSession) {
  const lotPrice = session.selectedLot?.askingPrice ?? 0
  const modelPrice = getSelectedModel(session.selectedModelId)?.startingAt ?? 0
  const optionsTotal = calculateOptionsTotal(session)
  return lotPrice + modelPrice + optionsTotal
}

export function canContinueStep(session: BuildSession, step: BuildStep) {
  if (step === 1) return Boolean(session.selectedLot)
  if (step === 2) return Boolean(session.selectedModelId)
  if (step === 3) {
    const required = session.customizations
    return Boolean(required.exterior.siding && required.interior.flooring && required.interior.cabinets)
  }
  if (step === 4) return true
  return false
}
