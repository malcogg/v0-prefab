"use client"

import Link from "next/link"
import { useEffect, useMemo, useRef, useState } from "react"
import {
  ADU_CALCULATOR_MAX_SQFT,
  ADU_CALCULATOR_REGULATORY_ALERTS,
  CALCULATOR_COUNTY_KEY_TO_REGULATORY_LABEL,
} from "@/lib/local-adu-regulatory"
import { cn } from "@/lib/utils"

type AduType = "studio" | "1br" | "2br"
type FinancingMode = "cash" | "loan"
type RentMode = "low" | "mid" | "high"
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value)
}

function formatPercent(value: number) {
  return `${value.toFixed(1)}%`
}

function monthlyPayment(principal: number, annualRate: number, termYears: number) {
  const r = annualRate / 100 / 12
  const n = termYears * 12
  if (n <= 0) return 0
  if (r === 0) return principal / n
  return (principal * (r * Math.pow(1 + r, n))) / (Math.pow(1 + r, n) - 1)
}

const COUNTY_AREAS = {
  orange_uninc: {
    label: "Orange County (unincorporated)",
    areas: [
      { id: "dr-phillips-bay-hill", label: "Dr. Phillips / Bay Hill" },
      { id: "windermere", label: "Windermere area" },
      { id: "horizon-west", label: "Horizon West" },
      { id: "lake-nona-orange", label: "Lake Nona area" },
      { id: "hunters-creek-southchase", label: "Hunter's Creek / Southchase" },
      { id: "pine-hills-lockhart", label: "Pine Hills / Lockhart" },
      { id: "other-orange", label: "Other Orange County" },
    ],
  },
  city_orlando: {
    label: "City of Orlando",
    areas: [
      { id: "baldwin-park-winter-park", label: "Baldwin Park / Winter Park area" },
      { id: "lake-nona-orlando", label: "Lake Nona / Medical City" },
      { id: "downtown-college-park", label: "Downtown / College Park" },
      { id: "metrowest-millenia", label: "MetroWest / Millenia" },
      { id: "dr-phillips-bay-hill", label: "Dr. Phillips (City of Orlando)" },
      { id: "south-orlando-conway", label: "South Orlando / Conway" },
      { id: "other-orlando", label: "Other Orlando" },
    ],
  },
  winterpark_apopka_ocoee: {
    label: "City of Winter Park / Apopka / Ocoee / Winter Garden",
    areas: [{ id: "other-orange", label: "Municipal area estimate" }],
  },
  seminole: {
    label: "Seminole County",
    areas: [
      { id: "altamonte-casselberry", label: "Altamonte Springs / Casselberry" },
      { id: "lake-mary-heathrow", label: "Lake Mary / Heathrow" },
      { id: "oviedo-winter-springs", label: "Oviedo / Winter Springs" },
      { id: "other-seminole", label: "Longwood / Sanford / Other Seminole" },
    ],
  },
  osceola: {
    label: "Osceola County / Kissimmee / St. Cloud",
    areas: [
      { id: "celebration", label: "Celebration" },
      { id: "kissimmee-general", label: "Kissimmee (general)" },
      { id: "st-cloud", label: "St. Cloud" },
      { id: "other-osceola", label: "Poinciana / Other Osceola" },
    ],
  },
  lake: {
    label: "Lake County / Clermont",
    areas: [
      { id: "clermont-minneola", label: "Clermont / Minneola" },
      { id: "other-lake", label: "Other Lake County" },
    ],
  },
  polk: {
    label: "Polk County",
    areas: [
      { id: "lakeland-winter-haven", label: "Lakeland / Winter Haven" },
      { id: "other-polk", label: "Other Polk County" },
    ],
  },
} as const

const rentData = {
  "dr-phillips-bay-hill": {
    label: "Dr. Phillips / Bay Hill",
    studio: { low: 1550, mid: 1750, high: 1950 },
    "1br": { low: 1750, mid: 1950, high: 2200 },
    "2br": { low: 2100, mid: 2400, high: 2700 },
    note: "Premium Orange County submarket. Strong long-term rental demand.",
  },
  windermere: {
    label: "Windermere area",
    studio: { low: 1500, mid: 1700, high: 1900 },
    "1br": { low: 1767, mid: 1950, high: 2200 },
    "2br": { low: 2100, mid: 2400, high: 2700 },
    note: "Town of Windermere or adjacent unincorporated. Verify jurisdiction per parcel.",
  },
  "horizon-west": {
    label: "Horizon West",
    studio: { low: 1400, mid: 1600, high: 1800 },
    "1br": { low: 1600, mid: 1800, high: 2000 },
    "2br": { low: 1900, mid: 2100, high: 2400 },
    note: "Fast-growing western Orange County. Strong family rental demand.",
  },
  "lake-nona-orange": {
    label: "Lake Nona area (Orange County)",
    studio: { low: 1600, mid: 1800, high: 2050 },
    "1br": { low: 1800, mid: 2018, high: 2300 },
    "2br": { low: 2100, mid: 2400, high: 2700 },
    note: "Medical City area. High professional tenant demand.",
  },
  "hunters-creek-southchase": {
    label: "Hunter's Creek / Southchase",
    studio: { low: 1300, mid: 1500, high: 1700 },
    "1br": { low: 1450, mid: 1650, high: 1850 },
    "2br": { low: 1750, mid: 1950, high: 2200 },
    note: "Established South Orange County communities.",
  },
  "pine-hills-lockhart": {
    label: "Pine Hills / Lockhart",
    studio: { low: 1100, mid: 1300, high: 1500 },
    "1br": { low: 1200, mid: 1400, high: 1600 },
    "2br": { low: 1400, mid: 1600, high: 1850 },
    note: "More affordable Orange County submarket.",
  },
  "other-orange": {
    label: "Other Orange County",
    studio: { low: 1250, mid: 1450, high: 1650 },
    "1br": { low: 1400, mid: 1600, high: 1800 },
    "2br": { low: 1700, mid: 1900, high: 2100 },
    note: "Orange County (unincorporated) general estimate.",
  },
  "baldwin-park-winter-park": {
    label: "Baldwin Park / Winter Park",
    studio: { low: 1700, mid: 1950, high: 2200 },
    "1br": { low: 1900, mid: 2200, high: 2500 },
    "2br": { low: 2300, mid: 2600, high: 3000 },
    note: "Premium City of Orlando submarket. No owner-occupancy required.",
  },
  "lake-nona-orlando": {
    label: "Lake Nona / Medical City (City of Orlando)",
    studio: { low: 1600, mid: 1850, high: 2100 },
    "1br": { low: 1800, mid: 2118, high: 2400 },
    "2br": { low: 2100, mid: 2400, high: 2700 },
    note: "City of Orlando. No owner-occupancy required.",
  },
  "downtown-college-park": {
    label: "Downtown / College Park",
    studio: { low: 1550, mid: 1800, high: 2100 },
    "1br": { low: 1700, mid: 2000, high: 2300 },
    "2br": { low: 2000, mid: 2300, high: 2700 },
    note: "City of Orlando. No owner-occupancy required.",
  },
  "metrowest-millenia": {
    label: "MetroWest / Millenia",
    studio: { low: 1350, mid: 1550, high: 1750 },
    "1br": { low: 1500, mid: 1700, high: 1900 },
    "2br": { low: 1800, mid: 2000, high: 2200 },
    note: "City of Orlando. No owner-occupancy required.",
  },
  "south-orlando-conway": {
    label: "South Orlando / Conway",
    studio: { low: 1200, mid: 1400, high: 1600 },
    "1br": { low: 1350, mid: 1550, high: 1750 },
    "2br": { low: 1600, mid: 1800, high: 2050 },
    note: "City of Orlando. No owner-occupancy required.",
  },
  "other-orlando": {
    label: "Other City of Orlando",
    studio: { low: 1300, mid: 1500, high: 1700 },
    "1br": { low: 1409, mid: 1587, high: 1800 },
    "2br": { low: 1700, mid: 1929, high: 2150 },
    note: "City of Orlando general estimate. No owner-occupancy required.",
  },
  "altamonte-casselberry": {
    label: "Altamonte Springs / Casselberry",
    studio: { low: 1200, mid: 1400, high: 1600 },
    "1br": { low: 1350, mid: 1601, high: 1800 },
    "2br": { low: 1600, mid: 1850, high: 2100 },
    note: "Established Seminole County communities.",
  },
  "lake-mary-heathrow": {
    label: "Lake Mary / Heathrow",
    studio: { low: 1400, mid: 1600, high: 1800 },
    "1br": { low: 1550, mid: 1750, high: 1950 },
    "2br": { low: 1850, mid: 2100, high: 2350 },
    note: "Premium Seminole County submarket.",
  },
  "oviedo-winter-springs": {
    label: "Oviedo / Winter Springs",
    studio: { low: 1250, mid: 1450, high: 1650 },
    "1br": { low: 1400, mid: 1600, high: 1800 },
    "2br": { low: 1650, mid: 1900, high: 2100 },
    note: "Growing eastern Seminole corridor.",
  },
  "other-seminole": {
    label: "Other Seminole County",
    studio: { low: 1200, mid: 1400, high: 1600 },
    "1br": { low: 1350, mid: 1550, high: 1750 },
    "2br": { low: 1600, mid: 1850, high: 2100 },
    note: "Seminole County general estimate.",
  },
  celebration: {
    label: "Celebration",
    studio: { low: 1400, mid: 1600, high: 1800 },
    "1br": { low: 1600, mid: 1800, high: 2000 },
    "2br": { low: 1900, mid: 2100, high: 2400 },
    note: "Master-planned community. Extensive HOA — verify ADU eligibility.",
  },
  "kissimmee-general": {
    label: "Kissimmee (general)",
    studio: { low: 1000, mid: 1188, high: 1400 },
    "1br": { low: 1200, mid: 1400, high: 1600 },
    "2br": { low: 1500, mid: 1700, high: 1900 },
    note: "Osceola County. Verify ADU zoning requirements with county.",
  },
  "st-cloud": {
    label: "St. Cloud",
    studio: { low: 1000, mid: 1200, high: 1400 },
    "1br": { low: 1200, mid: 1400, high: 1600 },
    "2br": { low: 1475, mid: 1700, high: 1900 },
    note: "South Osceola. Growing market.",
  },
  "other-osceola": {
    label: "Other Osceola / Poinciana",
    studio: { low: 950, mid: 1150, high: 1350 },
    "1br": { low: 1100, mid: 1300, high: 1500 },
    "2br": { low: 1350, mid: 1550, high: 1750 },
    note: "Osceola County general estimate.",
  },
  "clermont-minneola": {
    label: "Clermont / Minneola",
    studio: { low: 1100, mid: 1300, high: 1500 },
    "1br": { low: 1250, mid: 1450, high: 1650 },
    "2br": { low: 1500, mid: 1700, high: 1950 },
    note: "Fast-growing Lake County. Verify ADU zoning with county.",
  },
  "other-lake": {
    label: "Other Lake County",
    studio: { low: 1000, mid: 1200, high: 1400 },
    "1br": { low: 1150, mid: 1350, high: 1550 },
    "2br": { low: 1400, mid: 1600, high: 1800 },
    note: "Lake County general estimate.",
  },
  "lakeland-winter-haven": {
    label: "Lakeland / Winter Haven",
    studio: { low: 950, mid: 1150, high: 1300 },
    "1br": { low: 1100, mid: 1300, high: 1500 },
    "2br": { low: 1350, mid: 1550, high: 1750 },
    note: "Polk County I-4 corridor. Verify ADU zoning per parcel.",
  },
  "other-polk": {
    label: "Other Polk County",
    studio: { low: 900, mid: 1100, high: 1250 },
    "1br": { low: 1050, mid: 1250, high: 1450 },
    "2br": { low: 1300, mid: 1500, high: 1700 },
    note: "Polk County general estimate.",
  },
} as const

const TYPE_CONFIG: Record<AduType, { label: string; sizeMin: number; sizeMax: number; sizeDefault: number; costMin: number; costMax: number; costDefault: number; description: string }> = {
  studio: {
    label: "Studio ADU",
    description: "400-550 sq ft, no separate bedroom",
    sizeMin: 400,
    sizeMax: 550,
    sizeDefault: 475,
    costMin: 50000,
    costMax: 100000,
    costDefault: 75000,
  },
  "1br": {
    label: "1-Bedroom ADU",
    description: "500-750 sq ft, separate bedroom",
    sizeMin: 500,
    sizeMax: 750,
    sizeDefault: 625,
    costMin: 100000,
    costMax: 155000,
    costDefault: 127500,
  },
  "2br": {
    label: "2-Bedroom ADU",
    description: "700-1,000 sq ft, two bedrooms",
    sizeMin: 700,
    sizeMax: 1000,
    sizeDefault: 850,
    costMin: 200000,
    costMax: 320000,
    costDefault: 250000,
  },
}

export function ADUCalculatorSection() {
  const [countyKey, setCountyKey] = useState<keyof typeof COUNTY_AREAS | "">("")
  const [areaKey, setAreaKey] = useState<keyof typeof rentData | "">("")
  const [aduType, setAduType] = useState<AduType | "">("")
  const [sizeSqft, setSizeSqft] = useState(475)
  const [buildCost, setBuildCost] = useState(75000)
  const [buildCostValidation, setBuildCostValidation] = useState("")
  const [sizeValidation, setSizeValidation] = useState("")

  const [financingMode, setFinancingMode] = useState<FinancingMode>("loan")
  const [downPaymentPercent, setDownPaymentPercent] = useState(20)
  const [interestRate, setInterestRate] = useState(7.5)
  const [loanTermYears, setLoanTermYears] = useState(20)

  const [vacancyRate, setVacancyRate] = useState(5)
  const [insurance, setInsurance] = useState(75)
  const [maintenanceReserve, setMaintenanceReserve] = useState(Math.round((75000 * 0.01) / 12))
  const [maintenanceTouched, setMaintenanceTouched] = useState(false)
  const [showAdvanced, setShowAdvanced] = useState(false)
  const [propertyTaxAnnualIncrease, setPropertyTaxAnnualIncrease] = useState(1200)
  const [managementFeeRate, setManagementFeeRate] = useState(0)
  const [hoa, setHoa] = useState(0)
  const [utilities, setUtilities] = useState(0)
  const [rentMode, setRentMode] = useState<RentMode>("mid")
  const [showProjection, setShowProjection] = useState(false)

  const resultsRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!aduType) return
    const cfg = TYPE_CONFIG[aduType]
    setSizeSqft(cfg.sizeDefault)
    setBuildCost(cfg.costDefault)
  }, [aduType])

  useEffect(() => {
    if (!maintenanceTouched) {
      setMaintenanceReserve(Math.round((buildCost * 0.01) / 12))
    }
  }, [buildCost, maintenanceTouched])

  useEffect(() => {
    if (!countyKey) return
    const label = CALCULATOR_COUNTY_KEY_TO_REGULATORY_LABEL[countyKey]
    if (!label) return
    const cap = ADU_CALCULATOR_MAX_SQFT[label] ?? 1000
    setSizeSqft((s) => Math.min(s, cap))
    setSizeValidation("")
  }, [countyKey])

  const availableAreas = countyKey ? COUNTY_AREAS[countyKey].areas : []
  const selectedRentData = areaKey ? rentData[areaKey] : null
  const canCalculate = Boolean(selectedRentData && aduType)
  const aduTypeKey = (aduType || "studio") as AduType
  const typeCfg = TYPE_CONFIG[aduTypeKey]

  const regulatoryCountyLabel = countyKey
    ? CALCULATOR_COUNTY_KEY_TO_REGULATORY_LABEL[countyKey]
    : undefined
  const regulatoryAlert = regulatoryCountyLabel
    ? ADU_CALCULATOR_REGULATORY_ALERTS[regulatoryCountyLabel]
    : undefined
  const regulatoryMaxSqft = regulatoryCountyLabel
    ? (ADU_CALCULATOR_MAX_SQFT[regulatoryCountyLabel] ?? 1000)
    : Number.POSITIVE_INFINITY
  const calculatorSqftCap = regulatoryCountyLabel
    ? (ADU_CALCULATOR_MAX_SQFT[regulatoryCountyLabel] ?? 1000)
    : 1000
  const sizeSliderMax = Math.min(typeCfg.sizeMax, regulatoryMaxSqft)
  const sizeSliderMin = typeCfg.sizeMin

  const effectiveBuildCost = Math.max(typeCfg.costMin, buildCost)
  const downPaymentAmount = (effectiveBuildCost * downPaymentPercent) / 100
  const loanAmount = Math.max(0, effectiveBuildCost - downPaymentAmount)
  const monthlyLoanPayment =
    financingMode === "loan" ? monthlyPayment(loanAmount, interestRate, loanTermYears) : 0

  const selectedRent = selectedRentData ? selectedRentData[aduTypeKey][rentMode] : 0
  const rentLow = selectedRentData ? selectedRentData[aduTypeKey].low : 0
  const rentMid = selectedRentData ? selectedRentData[aduTypeKey].mid : 0
  const rentHigh = selectedRentData ? selectedRentData[aduTypeKey].high : 0

  const calc = useMemo(() => {
    if (!canCalculate) return null
    const grossRent = selectedRent
    const vacancyAmount = grossRent * (vacancyRate / 100)
    const effectiveIncome = grossRent - vacancyAmount
    const managementFeeAmount = effectiveIncome * (managementFeeRate / 100)
    const propertyTaxMonthly = propertyTaxAnnualIncrease / 12
    const operatingExpenses =
      insurance + maintenanceReserve + propertyTaxMonthly + managementFeeAmount + hoa + utilities
    const totalExpenses = operatingExpenses + monthlyLoanPayment
    const netMonthlyCashFlow = effectiveIncome - totalExpenses
    const annualGrossIncome = grossRent * 12
    const annualEffectiveIncome = effectiveIncome * 12
    const annualNetCashFlow = netMonthlyCashFlow * 12
    const cashInvested = financingMode === "cash" ? effectiveBuildCost : downPaymentAmount
    const cashOnCashReturn = cashInvested > 0 ? (annualNetCashFlow / cashInvested) * 100 : 0
    const noiAnnual = (effectiveIncome - operatingExpenses) * 12
    const capRate = effectiveBuildCost > 0 ? (noiAnnual / effectiveBuildCost) * 100 : 0
    const equityGain = effectiveBuildCost * 0.55
    const paybackYears = annualNetCashFlow > 0 ? effectiveBuildCost / annualNetCashFlow : null

    const projection = []
    let cumulative = 0
    for (let year = 1; year <= 10; year += 1) {
      const rentAnnual = annualGrossIncome * Math.pow(1.02, year - 1)
      const vacancyAnnual = rentAnnual * (vacancyRate / 100)
      const effectiveAnnual = rentAnnual - vacancyAnnual
      const opAnnualBase = operatingExpenses * 12
      const opAnnual = opAnnualBase * Math.pow(1.03, year - 1)
      const loanAnnual = monthlyLoanPayment * 12
      const annualExpenses = opAnnual + loanAnnual
      const netAnnual = effectiveAnnual - annualExpenses
      cumulative += netAnnual
      projection.push({
        year,
        annualRent: rentAnnual,
        annualExpenses,
        netCashFlow: netAnnual,
        cumulativeIncome: cumulative,
      })
    }

    return {
      grossRent,
      vacancyAmount,
      effectiveIncome,
      managementFeeAmount,
      propertyTaxMonthly,
      totalExpenses,
      netMonthlyCashFlow,
      annualGrossIncome,
      annualEffectiveIncome,
      annualNetCashFlow,
      cashInvested,
      cashOnCashReturn,
      capRate,
      equityGain,
      paybackYears,
      projection,
      cumulative10Year: projection[projection.length - 1]?.cumulativeIncome ?? 0,
      combined10Year: (projection[projection.length - 1]?.cumulativeIncome ?? 0) + equityGain,
    }
  }, [
    canCalculate,
    selectedRent,
    vacancyRate,
    managementFeeRate,
    propertyTaxAnnualIncrease,
    insurance,
    maintenanceReserve,
    hoa,
    utilities,
    monthlyLoanPayment,
    financingMode,
    effectiveBuildCost,
    downPaymentAmount,
  ])

  const trackCalculatorInteraction = () => {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "calculator_interaction", {
        event_category: "Engagement",
        event_label: "ADU Income Calculator",
      })
    }
  }

   const handleBuildCostInput = (raw: number) => {
    trackCalculatorInteraction()
    const min = typeCfg.costMin
    if (raw < min) {
      setBuildCost(min)
      setBuildCostValidation(
        `Use at least ${min.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 })} for this ADU type (current published build ranges).`
      )
      return
    }
    setBuildCostValidation("")
    setBuildCost(raw)
  }

  const handleSizeInput = (raw: number) => {
    trackCalculatorInteraction()
    const cap = calculatorSqftCap
    if (raw > cap) {
      setSizeSqft(cap)
      setSizeValidation(
        regulatoryAlert?.message ??
          `For this county selection, the calculator caps size at ${cap} sq ft. Verify with your jurisdiction.`,
      )
      return
    }
    setSizeValidation("")
    setSizeSqft(raw)
  }

  return (
    <section className="py-24 bg-background" id="adu-calculator">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10">
          <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">ADU Calculator</p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground text-balance leading-tight mb-4">
            ADU Investment Calculator
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl leading-relaxed">
            Conservative, location-aware underwriting for Central Florida ADU projects.
          </p>
        </div>

        <div className="lg:hidden mb-4">
          {canCalculate ? (
            <button
              type="button"
              onClick={() => resultsRef.current?.scrollIntoView({ behavior: "smooth" })}
              className="fixed bottom-6 right-6 z-40 px-4 py-3 rounded bg-primary text-primary-foreground text-sm font-semibold shadow-lg"
            >
              View Results ↓
            </button>
          ) : null}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <div className="bg-secondary rounded-lg p-6 border border-border">
              <h3 className="font-serif text-2xl text-foreground mb-4">Section 1 — Your Property and Build</h3>
              <div className="space-y-5">
                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">
                    Where is your property?
                  </label>
                  <select
                    value={countyKey}
                    onChange={(e) => {
                      setCountyKey(e.target.value as keyof typeof COUNTY_AREAS)
                      setAreaKey("")
                    }}
                    className="w-full rounded border border-border px-3 py-2.5 text-sm"
                  >
                    <option value="">Select county / jurisdiction</option>
                    {Object.entries(COUNTY_AREAS).map(([key, value]) => (
                      <option key={key} value={key}>
                        {value.label}
                      </option>
                    ))}
                  </select>
                </div>

                {countyKey ? (
                  <div>
                    <label className="text-sm font-medium text-foreground block mb-2">Select area</label>
                    <select
                      value={areaKey}
                      onChange={(e) => setAreaKey(e.target.value as keyof typeof rentData)}
                      className="w-full rounded border border-border px-3 py-2.5 text-sm"
                    >
                      <option value="">Select area</option>
                      {availableAreas.map((area) => (
                        <option key={area.id} value={area.id}>
                          {area.label}
                        </option>
                      ))}
                    </select>
                    <p className="text-xs text-muted-foreground mt-2">
                      We use this to estimate realistic rent for your area based on current market data.
                    </p>
                  </div>
                ) : null}

                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">
                    What type of ADU are you building?
                  </label>
                  <div className="grid md:grid-cols-3 gap-2">
                    {(Object.keys(TYPE_CONFIG) as AduType[]).map((key) => (
                      <button
                        key={key}
                        type="button"
                        onClick={() => setAduType(key)}
                        className={`rounded border px-3 py-3 text-left text-sm transition-colors ${
                          aduType === key
                            ? "border-primary bg-primary/10 text-primary"
                            : "border-border text-foreground hover:border-primary/40"
                        }`}
                      >
                        <p className="font-semibold">{TYPE_CONFIG[key].label}</p>
                        <p className="text-xs text-muted-foreground mt-1">{TYPE_CONFIG[key].description}</p>
                      </button>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    {regulatoryCountyLabel
                      ? "County-specific limits apply to the size slider and validation below."
                      : "Select a county to load jurisdiction-aware size caps in the calculator."}
                  </p>
                </div>

                <div>
                  {regulatoryAlert ? (
                    <div
                      key={countyKey}
                      className={cn(
                        "mb-3 rounded-lg border px-3 py-2.5 text-xs leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300",
                        regulatoryAlert.variant === "warning"
                          ? "border-amber-300/80 bg-amber-50/90 text-amber-950"
                          : "border-primary/25 bg-primary/5 text-foreground/90",
                      )}
                      role="status"
                    >
                      {regulatoryAlert.message}
                    </div>
                  ) : null}
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-medium text-foreground">Estimated ADU size (sq ft)</label>
                    <input
                      type="number"
                      value={sizeSqft}
                      onChange={(e) => handleSizeInput(Number(e.target.value || 0))}
                      className="w-28 rounded border border-border px-2 py-1 text-sm text-right"
                      disabled={!aduType}
                    />
                  </div>
                  <input
                    type="range"
                    min={sizeSliderMin}
                    max={sizeSliderMax}
                    step={5}
                    value={Math.min(Math.max(sizeSqft, sizeSliderMin), sizeSliderMax)}
                    onChange={(e) => handleSizeInput(Number(e.target.value))}
                    className="w-full"
                    disabled={!aduType}
                  />
                  {sizeValidation ? <p className="text-xs text-amber-700 mt-2">{sizeValidation}</p> : null}
                  <p className="text-[11px] text-muted-foreground/90 mt-1.5">
                    {countyKey
                      ? `Slider max ${sizeSliderMax} sq ft for this ADU type and county (educational — confirm on site).`
                      : `Slider follows ADU type limits; select a county for regulatory caps (${calculatorSqftCap} sq ft default guard until you do).`}
                  </p>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-medium text-foreground">Estimated build cost</label>
                    <input
                      type="number"
                      value={buildCost}
                      onChange={(e) => handleBuildCostInput(Number(e.target.value || 0))}
                      className="w-36 rounded border border-border px-2 py-1 text-sm text-right"
                      disabled={!aduType}
                    />
                  </div>
                  <input
                    type="range"
                    min={typeCfg.costMin}
                    max={typeCfg.costMax}
                    step={1000}
                    value={Math.min(Math.max(buildCost, typeCfg.costMin), typeCfg.costMax)}
                    onChange={(e) => handleBuildCostInput(Number(e.target.value))}
                    className="w-full"
                    disabled={!aduType}
                  />
                  {buildCostValidation ? (
                    <p className="text-xs text-amber-700 mt-2">{buildCostValidation}</p>
                  ) : null}
                  <p className="text-xs text-muted-foreground mt-2">
                    Includes design, permitting, construction, and inspection. Does not include land
                    cost. Final cost confirmed after free site evaluation.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-secondary rounded-lg p-6 border border-border">
              <h3 className="font-serif text-2xl text-foreground mb-4">Section 2 — Financing</h3>
              <div className="grid grid-cols-2 gap-2 mb-4">
                {[
                  { id: "cash", label: "Paying Cash" },
                  { id: "loan", label: "Using a Loan / HELOC" },
                ].map((mode) => (
                  <button
                    key={mode.id}
                    type="button"
                    onClick={() => setFinancingMode(mode.id as FinancingMode)}
                    className={`rounded border px-3 py-2 text-sm font-medium ${
                      financingMode === mode.id
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border text-foreground"
                    }`}
                  >
                    {mode.label}
                  </button>
                ))}
              </div>
              {financingMode === "cash" ? (
                <p className="text-sm text-foreground">
                  Total cash invested: <strong>{formatCurrency(effectiveBuildCost)}</strong>
                </p>
              ) : (
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-foreground block mb-2">
                      Cash you&apos;re putting in ({downPaymentPercent}%)
                    </label>
                    <input
                      type="range"
                      min={10}
                      max={50}
                      step={1}
                      value={downPaymentPercent}
                      onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                      className="w-full"
                    />
                    <p className="text-xs text-muted-foreground mt-1">= {formatCurrency(downPaymentAmount)}</p>
                  </div>
                  <p className="text-sm text-foreground">
                    Loan amount: <strong>{formatCurrency(loanAmount)}</strong>
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-sm font-medium text-foreground block mb-1">
                        Annual interest rate (%)
                      </label>
                      <input
                        type="number"
                        step={0.25}
                        min={3}
                        max={15}
                        value={interestRate}
                        onChange={(e) =>
                          setInterestRate(Math.min(15, Math.max(3, Number(e.target.value || 0))))
                        }
                        className="w-full rounded border border-border px-2 py-1.5 text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground block mb-1">Loan term</label>
                      <div className="grid grid-cols-4 gap-1">
                        {[10, 15, 20, 30].map((term) => (
                          <button
                            key={term}
                            type="button"
                            onClick={() => setLoanTermYears(term)}
                            className={`rounded border px-2 py-1.5 text-xs ${
                              loanTermYears === term
                                ? "border-primary bg-primary/10 text-primary"
                                : "border-border text-foreground"
                            }`}
                          >
                            {term}y
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-foreground">
                    Est. monthly loan payment: <strong>{formatCurrency(monthlyLoanPayment)}</strong>
                  </p>
                </div>
              )}
            </div>

            <div className="bg-secondary rounded-lg p-6 border border-border">
              <h3 className="font-serif text-2xl text-foreground mb-4">
                Section 3 — Monthly expenses and assumptions
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-sm font-medium text-foreground block mb-1">Vacancy rate (%)</label>
                  <input
                    type="number"
                    min={0}
                    max={20}
                    step={0.5}
                    value={vacancyRate}
                    onChange={(e) => setVacancyRate(Math.min(20, Math.max(0, Number(e.target.value || 0))))}
                    className="w-full rounded border border-border px-2 py-1.5 text-sm"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground block mb-1">
                    Monthly insurance (ADU only)
                  </label>
                  <input
                    type="number"
                    value={insurance}
                    onChange={(e) => setInsurance(Math.max(0, Number(e.target.value || 0)))}
                    className="w-full rounded border border-border px-2 py-1.5 text-sm"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-sm font-medium text-foreground block mb-1">
                    Monthly maintenance reserve
                  </label>
                  <input
                    type="number"
                    value={maintenanceReserve}
                    onChange={(e) => {
                      setMaintenanceTouched(true)
                      setMaintenanceReserve(Math.max(0, Number(e.target.value || 0)))
                    }}
                    className="w-full rounded border border-border px-2 py-1.5 text-sm"
                  />
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowAdvanced((prev) => !prev)}
                className="mt-3 text-sm text-primary font-medium"
              >
                {showAdvanced ? "Hide advanced assumptions" : "Show advanced assumptions"}
              </button>
              {showAdvanced ? (
                <div className="grid sm:grid-cols-2 gap-3 mt-3">
                  <div>
                    <label className="text-sm font-medium text-foreground block mb-1">
                      Annual property tax increase
                    </label>
                    <input
                      type="number"
                      value={propertyTaxAnnualIncrease}
                      onChange={(e) => setPropertyTaxAnnualIncrease(Math.max(0, Number(e.target.value || 0)))}
                      className="w-full rounded border border-border px-2 py-1.5 text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground block mb-1">
                      Property management fee (%)
                    </label>
                    <input
                      type="number"
                      value={managementFeeRate}
                      onChange={(e) => setManagementFeeRate(Math.max(0, Number(e.target.value || 0)))}
                      className="w-full rounded border border-border px-2 py-1.5 text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground block mb-1">Monthly HOA fee</label>
                    <input
                      type="number"
                      value={hoa}
                      onChange={(e) => setHoa(Math.max(0, Number(e.target.value || 0)))}
                      className="w-full rounded border border-border px-2 py-1.5 text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground block mb-1">
                      Monthly utilities (if landlord pays)
                    </label>
                    <input
                      type="number"
                      value={utilities}
                      onChange={(e) => setUtilities(Math.max(0, Number(e.target.value || 0)))}
                      className="w-full rounded border border-border px-2 py-1.5 text-sm"
                    />
                  </div>
                </div>
              ) : null}
              <p className="text-xs text-muted-foreground mt-3">
                These are conservative estimates. Actual expenses vary. Review with a CPA before making
                financial decisions.
              </p>
            </div>
          </div>

          <div ref={resultsRef} className="lg:sticky lg:top-32 self-start">
            <div className="bg-secondary rounded-lg p-6 border border-border">
              {!canCalculate || !calc ? (
                <div className="rounded border border-border bg-background p-6">
                  <p className="text-sm text-muted-foreground">
                    Start by selecting your location and ADU type to view investment results.
                  </p>
                </div>
              ) : (
                <div className="space-y-5">
                  <div className="bg-background rounded-lg border border-border p-4">
                    <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">
                      Estimated Monthly Rent
                    </p>
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div>
                        <p className="text-xs text-muted-foreground">Conservative</p>
                        <p className="font-semibold">{formatCurrency(rentLow)}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Market Rate</p>
                        <p className="font-semibold">{formatCurrency(rentMid)}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Optimistic</p>
                        <p className="font-semibold">{formatCurrency(rentHigh)}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {[
                        ["low", "Use Conservative"],
                        ["mid", "Use Market"],
                        ["high", "Use Optimistic"],
                      ].map(([value, label]) => (
                        <button
                          key={value}
                          type="button"
                          onClick={() => setRentMode(value as RentMode)}
                          className={`px-2 py-1 text-xs rounded border ${
                            rentMode === value
                              ? "border-primary bg-primary/10 text-primary"
                              : "border-border text-foreground"
                          }`}
                        >
                          {label}
                        </button>
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      Based on current {selectedRentData?.label ?? "selected area"} market data for a{" "}
                      {typeCfg.label}.
                    </p>
                  </div>

                  <div className="bg-background rounded-lg border border-border p-4">
                    <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">
                      Monthly Cash Flow
                    </p>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between"><span>Gross rent</span><span>{formatCurrency(calc.grossRent)}</span></div>
                      <div className="flex justify-between"><span>Vacancy ({formatPercent(vacancyRate)})</span><span>- {formatCurrency(calc.vacancyAmount)}</span></div>
                      <div className="flex justify-between font-medium"><span>Effective gross income</span><span>{formatCurrency(calc.effectiveIncome)}</span></div>
                      <div className="pt-1 border-t border-border" />
                      <div className="flex justify-between"><span>Insurance</span><span>- {formatCurrency(insurance)}</span></div>
                      <div className="flex justify-between"><span>Maintenance reserve</span><span>- {formatCurrency(maintenanceReserve)}</span></div>
                      <div className="flex justify-between"><span>Property tax increase</span><span>- {formatCurrency(calc.propertyTaxMonthly)}</span></div>
                      <div className="flex justify-between"><span>Management fee</span><span>- {formatCurrency(calc.managementFeeAmount)}</span></div>
                      <div className="flex justify-between"><span>HOA</span><span>- {formatCurrency(hoa)}</span></div>
                      <div className="flex justify-between"><span>Utilities</span><span>- {formatCurrency(utilities)}</span></div>
                      <div className="flex justify-between"><span>Loan payment</span><span>- {formatCurrency(monthlyLoanPayment)}</span></div>
                      <div className="flex justify-between font-medium"><span>Total expenses</span><span>- {formatCurrency(calc.totalExpenses)}</span></div>
                      <div className={`flex justify-between text-base font-semibold ${calc.netMonthlyCashFlow >= 0 ? "text-primary" : "text-destructive"}`}>
                        <span>Net monthly cash flow</span>
                        <span>{formatCurrency(calc.netMonthlyCashFlow)}</span>
                      </div>
                    </div>
                    {calc.netMonthlyCashFlow < 0 ? (
                      <p className="text-xs text-amber-700 mt-2">
                        At these assumptions, this ADU runs at a monthly loss. Adjust build cost, financing terms, or rent estimate.
                      </p>
                    ) : null}
                  </div>

                  <div className="bg-background rounded-lg border border-border p-4">
                    <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">
                      Annual and Investment Returns
                    </p>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between"><span>Annual gross income</span><span>{formatCurrency(calc.annualGrossIncome)}</span></div>
                      <div className="flex justify-between"><span>Annual effective income</span><span>{formatCurrency(calc.annualEffectiveIncome)}</span></div>
                      <div className="flex justify-between"><span>Annual net cash flow</span><span>{formatCurrency(calc.annualNetCashFlow)}</span></div>
                      <div className="pt-1 border-t border-border" />
                      <div className="flex justify-between"><span>Build cost</span><span>{formatCurrency(effectiveBuildCost)}</span></div>
                      <div className="flex justify-between"><span>Cash invested</span><span>{formatCurrency(calc.cashInvested)}</span></div>
                      <div className="flex justify-between"><span>Cash-on-cash return</span><span>{formatPercent(calc.cashOnCashReturn)}</span></div>
                      <div className="flex justify-between"><span>Cap rate</span><span>{formatPercent(calc.capRate)}</span></div>
                      <div className="flex justify-between"><span>Estimated equity gain</span><span>{formatCurrency(calc.equityGain)}</span></div>
                      <div className="flex justify-between"><span>Estimated new property value</span><span>+{formatCurrency(calc.equityGain)}</span></div>
                      <div className="flex justify-between">
                        <span>Simple payback period</span>
                        <span>{calc.paybackYears ? `${calc.paybackYears.toFixed(1)} yrs` : "N/A - see cash flow note"}</span>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      Conservative equity estimate uses 55% of build cost. Actual equity gain varies by appraisal and market conditions.
                    </p>
                  </div>

                  <div className="bg-background rounded-lg border border-border p-4">
                    <div className="flex items-center justify-between">
                      <p className="text-xs uppercase tracking-wide text-muted-foreground">10-Year Investment Outlook</p>
                      <button type="button" onClick={() => setShowProjection((p) => !p)} className="text-xs text-primary">
                        {showProjection ? "Hide table" : "Show table"}
                      </button>
                    </div>
                    {showProjection ? (
                      <div className="mt-3 overflow-x-auto">
                        <table className="w-full text-xs">
                          <thead>
                            <tr className="text-left text-muted-foreground">
                              <th className="py-1 pr-2">Year</th>
                              <th className="py-1 pr-2">Annual Rent</th>
                              <th className="py-1 pr-2">Annual Expenses</th>
                              <th className="py-1 pr-2">Net Cash Flow</th>
                              <th className="py-1">Cumulative</th>
                            </tr>
                          </thead>
                          <tbody>
                            {calc.projection.map((row) => (
                              <tr key={row.year} className="border-t border-border">
                                <td className="py-1 pr-2">{row.year}</td>
                                <td className="py-1 pr-2">{formatCurrency(row.annualRent)}</td>
                                <td className="py-1 pr-2">{formatCurrency(row.annualExpenses)}</td>
                                <td className="py-1 pr-2">{formatCurrency(row.netCashFlow)}</td>
                                <td className="py-1">{formatCurrency(row.cumulativeIncome)}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ) : null}
                    <div className="mt-2 text-sm">
                      <p>10-year cumulative net income: <strong>{formatCurrency(calc.cumulative10Year)}</strong></p>
                      <p>Estimated equity gain: <strong>{formatCurrency(calc.equityGain)}</strong></p>
                      <p>Combined 10-year return: <strong>{formatCurrency(calc.combined10Year)}</strong></p>
                    </div>
                  </div>

                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Rent estimates based on current market data from Apartments.com, Zillow, Zumper, and RentCafe for Central Florida (Q1 2026). ADU rents may differ from apartment complex averages. Estimates are not guaranteed.
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    All figures produced by this calculator are illustrative estimates only and are not guaranteed. Rental income estimates are based on current Central Florida market data and may not reflect actual achievable rents for your specific property, unit, or market conditions. Expense assumptions are conservative estimates - actual costs vary. Equity gain projections are not guaranteed and depend on appraisal, market conditions, and property-specific factors. This calculator does not constitute financial, investment, tax, or legal advice. PreFabricated.co strongly recommends consulting a licensed CPA, financial advisor, and real estate attorney before making any investment decision.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-lg border border-border bg-secondary p-8 text-center">
          <h3 className="font-serif text-3xl text-foreground mb-2">
            Want numbers specific to your property?
          </h3>
          <p className="text-muted-foreground mb-5 max-w-3xl mx-auto">
            The calculator gives you a market-rate estimate. A free site evaluation gives you actual
            zoning, buildable area, and a real cost range for your specific lot.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/qualify"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground text-sm font-semibold rounded transition-all hover:bg-[oklch(0.58_0.13_192)]"
            >
              Get My Free Property Evaluation
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-border text-foreground text-sm font-semibold rounded transition-colors hover:border-primary/40"
            >
              Talk to our team about financing options →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
