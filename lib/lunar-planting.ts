/**
 * Almanac-style lunar context for educational planting guidance (approximate).
 * Moon phase uses a synodic cycle from a reference new moon; moon sign approximates
 * ecliptic longitude as Sun longitude + lunar elongation (phase × 360°)—sufficient for
 * gardening rhythm, not navigation or exact astrology charts.
 */

import type { FloridaZoneCode } from "@/lib/florida-homestead-zones"

const SYNODIC_MONTH = 29.530588861
/** Reference: New Moon January 6, 2000 ~18:14 UTC (JD). */
const REF_NEW_MOON_JD = 2451550.09765

export const ZODIAC_SIGNS = [
  "Aries",
  "Taurus",
  "Gemini",
  "Cancer",
  "Leo",
  "Virgo",
  "Libra",
  "Scorpio",
  "Sagittarius",
  "Capricorn",
  "Aquarius",
  "Pisces",
] as const

export type ZodiacSign = (typeof ZODIAC_SIGNS)[number]

export type MoonPhaseSegment =
  | "new"
  | "waxing_crescent"
  | "first_quarter"
  | "waxing_gibbous"
  | "full"
  | "waning_gibbous"
  | "last_quarter"
  | "waning_crescent"

export type MoonSignTradition = "fruitful" | "semi-fruitful" | "barren-leaning"

function rad(deg: number) {
  return (deg * Math.PI) / 180
}

/** Julian date, UTC. */
export function julianDayUTC(date: Date): number {
  const y = date.getUTCFullYear()
  const m = date.getUTCMonth() + 1
  const d =
    date.getUTCDate() +
    (date.getUTCHours() + date.getUTCMinutes() / 60 + date.getUTCSeconds() / 3600) / 24
  let Y = y
  let M = m
  if (M <= 2) {
    Y -= 1
    M += 12
  }
  const A = Math.floor(Y / 100)
  const B = 2 - A + Math.floor(A / 4)
  const JD = Math.floor(365.25 * (Y + 4716)) + Math.floor(30.6001 * (M + 1)) + d + B - 1524.5
  return JD
}

/** Apparent ecliptic longitude of the Sun (deg), ~±1°. From Meeus ch.25 (truncated). */
function sunEclipticLongitudeDeg(jd: number): number {
  const T = (jd - 2451545.0) / 36525
  const L0 = 280.46646 + 36000.76983 * T + 0.0003032 * T * T
  const M = 357.52911 + 35999.05029 * T - 0.0001537 * T * T
  const C =
    (1.914602 - 0.004817 * T - 0.000014 * T * T) * Math.sin(rad(M)) +
    (0.019993 - 0.000101 * T) * Math.sin(rad(2 * M)) +
    0.000289 * Math.sin(rad(3 * M))
  const theta = L0 + C
  const omega = 125.04 - 1934.136 * T
  const lambda = theta - 0.00569 - 0.00478 * Math.sin(rad(omega))
  let lon = lambda % 360
  if (lon < 0) lon += 360
  return lon
}

function normalizePhase01(x: number): number {
  let p = x % 1
  if (p < 0) p += 1
  return p
}

function synodicPhase01(jd: number): number {
  return normalizePhase01((jd - REF_NEW_MOON_JD) / SYNODIC_MONTH)
}

function phaseSegment(phase: number): MoonPhaseSegment {
  const i = Math.min(7, Math.floor(phase * 8))
  const map: MoonPhaseSegment[] = [
    "new",
    "waxing_crescent",
    "first_quarter",
    "waxing_gibbous",
    "full",
    "waning_gibbous",
    "last_quarter",
    "waning_crescent",
  ]
  return map[i]!
}

function phaseDisplayLabel(segment: MoonPhaseSegment): string {
  const labels: Record<MoonPhaseSegment, string> = {
    new: "New Moon",
    waxing_crescent: "Waxing Crescent",
    first_quarter: "First Quarter",
    waxing_gibbous: "Waxing Gibbous",
    full: "Full Moon",
    waning_gibbous: "Waning Gibbous",
    last_quarter: "Last Quarter",
    waning_crescent: "Waning Crescent",
  }
  return labels[segment]
}

function phaseGlyph(segment: MoonPhaseSegment): string {
  const glyphs: Record<MoonPhaseSegment, string> = {
    new: "🌑",
    waxing_crescent: "🌒",
    first_quarter: "🌓",
    waxing_gibbous: "🌔",
    full: "🌕",
    waning_gibbous: "🌖",
    last_quarter: "🌗",
    waning_crescent: "🌘",
  }
  return glyphs[segment]
}

/** Approximate moon ecliptic longitude (deg): Sun + elongation from synodic phase. */
function moonLongitudeDegApprox(jd: number, phase: number): number {
  const sun = sunEclipticLongitudeDeg(jd)
  const elongation = 360 * phase
  let lon = (sun + elongation) % 360
  if (lon < 0) lon += 360
  return lon
}

function moonSignFromLongitude(lon: number): ZodiacSign {
  const idx = Math.floor(lon / 30) % 12
  return ZODIAC_SIGNS[idx]!
}

function traditionForSign(sign: ZodiacSign): MoonSignTradition {
  if (sign === "Cancer" || sign === "Scorpio" || sign === "Pisces") return "fruitful"
  if (sign === "Taurus" || sign === "Capricorn") return "semi-fruitful"
  return "barren-leaning"
}

function daysToNextNew(phase: number): number {
  if (phase < 1e-4) return SYNODIC_MONTH
  return (1 - phase) * SYNODIC_MONTH
}

function daysToNextFull(phase: number): number {
  if (phase <= 0.5) return (0.5 - phase) * SYNODIC_MONTH
  return (1.5 - phase) * SYNODIC_MONTH
}

function isWaxingByPhase(phase: number): boolean {
  if (phase === 0 || Math.abs(phase - 1) < 1e-6) return false
  return phase > 0 && phase < 0.5
}

function illuminationPercent(phase: number): number {
  const pct = (1 - Math.cos(2 * Math.PI * phase)) / 2
  return Math.round(pct * 100)
}

function activitiesForContext(opts: {
  waxing: boolean
  segment: MoonPhaseSegment
  tradition: MoonSignTradition
}): string[] {
  const { waxing, segment, tradition } = opts
  const out: string[] = []

  if (segment === "new") {
    out.push(
      "New Moon reset energy: plan rotations, sharpen irrigation, inoculate compost, map shade paths—hold splashy transplanting until roots won’t bake.",
    )
    out.push(
      "If signs are fruitful, pencil in fast turnovers (microgreens, sprouts); if barren-leaning, fix structures, trellises, and tool hygiene instead.",
    )
  } else if (segment === "full") {
    out.push(
      "Full Moon brightness: harvest aromatics, check fruit sugar, scout caterpillar pressure, and capture observations for communal learning.",
    )
    out.push(
      "Balance indulgent picking with compost return—every fallen fruit belongs in a duck path or hot pile, not fire ants on pavement.",
    )
  } else if (waxing) {
    out.push(
      "Favor above-ground crops: leafy greens, fruiting crops, herbs, and transplanting seedlings while light is building (Old Farmer’s Almanac–style waxing guidance).",
    )
    if (tradition === "fruitful") {
      out.push(
        "With the Moon in a traditionally fruitful sign, many growers prioritize planting and grafting tender crops—still cross-check heat, soil moisture, and your freeze window.",
      )
    } else if (tradition === "semi-fruitful") {
      out.push(
        "Earth-leaning signs often suit root vegetables that also need strong tops early—balance with mulch and steady water in Florida sand.",
      )
    } else {
      out.push(
        "Barren-leaning signs are a useful rhythm for maintenance: trellis repairs, tool care, and planning—then return to big planting pushes on the next favorable window.",
      )
    }
  } else {
    out.push(
      "Favor below-ground work: root crops, tubers, dividing plants, pruning, compost turning, and soil amendments while light winds down (waning-to-new rhythm).",
    )
    if (tradition === "fruitful") {
      out.push(
        "Fruitful signs during a waning phase can still support root crops and perennials that establish quietly—sweet potato slips, malanga, and fruit-tree mulching.",
      )
    } else {
      out.push(
        "Good stretch for berm building, swale maintenance, and turning compost piles so every output feeds another on-site element.",
      )
    }
  }

  return out.slice(0, 4)
}

export interface LunarPlantingContext {
  /** UTC ISO timestamp used for the calculation */
  calculatedAtUtc: string
  synodicPhase01: number
  phaseSegment: MoonPhaseSegment
  phaseLabel: string
  phaseGlyph: string
  waxing: boolean
  illuminationPercent: number
  daysToNextNewMoon: number
  daysToNextFullMoon: number
  moonSign: ZodiacSign
  moonSignTradition: MoonSignTradition
  suggestedActivities: string[]
  guidanceParagraph: string
}

function floridaSeasonalHook(zone: FloridaZoneCode, monthIndexUtc: number): string {
  const m = monthIndexUtc
  const heat =
    m >= 4 && m <= 8
      ? "Heat management comes first: deep mulch, early watering, and afternoon shade for tender greens."
      : "Cooler windows reward fast brassicas, peas, and root successions if moisture stays even."
  const storms = m >= 5 && m <= 9 ? "Storm season awareness: secure trellises and plan harvests before named-storm surges." : ""

  const zoneNote =
    zone === "10a" || zone === "10b" || zone === "11a" || zone === "11b"
      ? "South/Central Florida rhythms often flip winter into your prime annual vegetable season—pair lunar timing with irrigation and salt-wind reality on the coast."
      : "North and Central-North Florida still tracks frost pockets—pair lunar rhythm with local last-frost confidence, not instead of it."

  return `${zoneNote} ${heat} ${storms}`.trim()
}

export function buildLunarGuidanceParagraph(zone: FloridaZoneCode, ctx: LunarPlantingContext, when: Date): string {
  const month = when.getUTCMonth()
  const trad =
    ctx.moonSignTradition === "fruitful"
      ? "traditionally considered fruitful (water triad)"
      : ctx.moonSignTradition === "semi-fruitful"
        ? "traditionally semi-fruitful (earth signs)"
        : "often treated as lean or barren for heavy planting in classic almanacs (dry/air/fire emphasis)"

  const phaseRhythm =
    ctx.phaseSegment === "new"
      ? "New Moon is the quiet reset—plan, amend soil, and stage systems before the next waxing surge."
      : ctx.phaseSegment === "full"
        ? "Full Moon highlights harvest intelligence and peak sap—balance picking with compost return loops."
        : ctx.waxing
          ? "Waxing light favors leaves, fruits, and transplanting confidence when weather agrees."
          : "Waning light favors roots, pruning, compost work, and systems that rebuild soil."

  const illuminationBit = `at ~${ctx.illuminationPercent}% illumination`
  const motionBit =
    ctx.phaseSegment === "new"
      ? "in the new phase"
      : ctx.phaseSegment === "full"
        ? "near full illumination"
        : ctx.waxing
          ? "waxing toward the next quarter"
          : "waning toward the next new moon"

  return `Right now (${when.toLocaleDateString(undefined, { weekday: "long", month: "long", day: "numeric" })}, rhythm calculated in UTC) the Moon is ${ctx.phaseLabel.toLowerCase()} ${illuminationBit}, ${motionBit}, moving through ${ctx.moonSign}—${trad}. ${phaseRhythm} For Zone ${zone}, ${floridaSeasonalHook(zone, month)}`
}

/** Full context with zone-specific narrative (call from UI after lookup). */
export function getLunarPlantingContextForZone(zone: FloridaZoneCode, date = new Date()): LunarPlantingContext {
  const jd = julianDayUTC(date)
  const phase = synodicPhase01(jd)
  const segment = phaseSegment(phase)
  const waxing = isWaxingByPhase(phase)
  const moonLon = moonLongitudeDegApprox(jd, phase)
  const moonSign = moonSignFromLongitude(moonLon)
  const moonSignTradition = traditionForSign(moonSign)
  const suggestedActivities = activitiesForContext({
    waxing,
    segment,
    tradition: moonSignTradition,
  })

  const ctx: LunarPlantingContext = {
    calculatedAtUtc: date.toISOString(),
    synodicPhase01: phase,
    phaseSegment: segment,
    phaseLabel: phaseDisplayLabel(segment),
    phaseGlyph: phaseGlyph(segment),
    waxing,
    illuminationPercent: illuminationPercent(phase),
    daysToNextNewMoon: daysToNextNew(phase),
    daysToNextFullMoon: daysToNextFull(phase),
    moonSign,
    moonSignTradition,
    suggestedActivities,
    guidanceParagraph: "",
  }
  ctx.guidanceParagraph = buildLunarGuidanceParagraph(zone, ctx, date)
  return ctx
}

/** Static Old Farmer’s Almanac–style primer (educational; not individualized). */
export const LUNAR_ASTROLOGICAL_PLANTING_GUIDE = {
  intro:
    "Moon planting is a rhythm tool—not a substitute for irrigation, heat indexes, freeze dates, or Florida storm planning. Pair it with USDA hardiness, microclimate notes, and what your soil actually needs this week.",
  waxing: {
    title: "Waxing Moon (New → Full)",
    bullets: [
      "Favor above-ground growth: lettuce mixes, kale, chard, beans, tomatoes, peppers, eggplant, cucumbers, summer squash, and herbs that bounce back after rain events.",
      "Many growers transplant during waxing phases—whenever humidity, root moisture, and the 3-day forecast make the shift gentle.",
    ],
  },
  waning: {
    title: "Waning Moon (Full → New)",
    bullets: [
      "Favor below-ground crops and maintenance: sweet potatoes, true yams, malanga/taro where appropriate, carrots, beets, radish, onions, garlic (season permitting), and dividing perennials.",
      "Classic waning work: prune with a plan, turn compost, sheet-mulch new beds, install berms/swales, and sharpen biosecurity (tool cleaning, pest scouting) so outputs loop cleanly.",
    ],
  },
  signs: {
    title: "Moon signs (fruitful • semi-fruitful • lean/barren)",
    paragraphs: [
      "Fruitful (water) — Cancer, Scorpio, Pisces: traditionally favored for planting, grafting, and encouraging lush food systems—still weigh afternoon heat and fungal pressure in Florida’s wet season.",
      "Semi-fruitful (earth) — Taurus, Capricorn: associated with steady roots, tubers, trees, and structural plants that reward patience—great days to feed woody perennials and install windbreaks.",
      "Barren-leaning (fire & air) — Aries, Leo, Sagittarius, Gemini, Libra, Aquarius: often highlighted for cultivation chores, training vines, harvesting for storage, or knocking out infrastructure instead of babying tender seedlings.",
      "This tool’s Moon-sign estimate is for rhythm prompts—pair it with the official USDA map at planthardiness.ars.usda.gov for perennial survivability and with a nautical or astronomical almanac if you want precise sign ingress times.",
    ],
  },
} as const

export function lunarRhythmHighlightsForReport(zone: FloridaZoneCode, ctx: LunarPlantingContext): string[] {
  const w = ctx.waxing ? "Waxing Moon (New → Full)" : "Waning Moon (Full → New)"
  const signLine = `Moon in ${ctx.moonSign} (${
    ctx.moonSignTradition === "fruitful"
      ? "classic fruitful sign"
      : ctx.moonSignTradition === "semi-fruitful"
        ? "semi-fruitful / productive earth tone"
        : "often considered “barren” for heavy sowing in older almanacs—great for cultivation chores"
  })`

  return [
    `${w}: ${ctx.waxing ? "lean into leafy greens, fruiting crops, grafting, and transplanting when humidity and heat allow." : "lean into roots, tubers, pruning, compost, mulching, and infrastructure that stores carbon in the soil."}`,
    `${signLine}—stack this with your Zone ${zone} frost/heat reality, not instead of it.`,
    `About ${ctx.daysToNextFullMoon.toFixed(1)} days to the next Full Moon and ${ctx.daysToNextNewMoon.toFixed(1)} days to the next New Moon (synodic model, UTC-based).`,
  ]
}
