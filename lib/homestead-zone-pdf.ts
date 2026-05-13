import { StandardFonts, PDFDocument, rgb } from "pdf-lib"
import type { FrostGuidance, ZoneHomesteadReport, FloridaZoneCode } from "@/lib/florida-homestead-zones"
import type { LunarPlantingContext } from "@/lib/lunar-planting"
import { zoneFoodVisual } from "@/lib/zone-food-visuals"

const MARGIN = 50
const LINE_HEIGHT = 14
const PAGE_WIDTH = 612
const PAGE_HEIGHT = 792
const MAX_CHARS = 92

function wrapParagraph(text: string, maxChars: number): string[] {
  const words = text.split(/\s+/).filter(Boolean)
  const lines: string[] = []
  let cur = ""
  for (const w of words) {
    const next = cur ? `${cur} ${w}` : w
    if (next.length > maxChars && cur) {
      lines.push(cur)
      cur = w
    } else {
      cur = next
    }
  }
  if (cur) lines.push(cur)
  return lines
}

function drawLines(
  page: import("pdf-lib").PDFPage,
  lines: string[],
  font: import("pdf-lib").PDFFont,
  size: number,
  startY: number,
): number {
  let y = startY
  for (const line of lines) {
    page.drawText(line, {
      x: MARGIN,
      y,
      size,
      font,
      color: rgb(0.12, 0.14, 0.12),
    })
    y -= LINE_HEIGHT
  }
  return y
}

function sectionTitle(
  page: import("pdf-lib").PDFPage,
  title: string,
  fontBold: import("pdf-lib").PDFFont,
  y: number,
): number {
  page.drawText(title, {
    x: MARGIN,
    y,
    size: 13,
    font: fontBold,
    color: rgb(0.05, 0.38, 0.26),
  })
  return y - 22
}

export type HomesteadZonePdfInput = {
  zone: FloridaZoneCode
  matchedLabel: string
  addressQuery: string
  frost: FrostGuidance
  report: ZoneHomesteadReport
  lunar: LunarPlantingContext | null
  seasonalAndLunarLines: string[]
  generatedAt: Date
}

export async function buildHomesteadZonePdfBytes(input: HomesteadZonePdfInput): Promise<Uint8Array> {
  const doc = await PDFDocument.create()
  const font = await doc.embedFont(StandardFonts.Helvetica)
  const fontBold = await doc.embedFont(StandardFonts.HelveticaBold)

  let page = doc.addPage([PAGE_WIDTH, PAGE_HEIGHT])
  let y = PAGE_HEIGHT - MARGIN

  const food = zoneFoodVisual(input.zone)

  page.drawText("Prefabricated.co — Florida homestead zone report", {
    x: MARGIN,
    y,
    size: 11,
    font: fontBold,
    color: rgb(0.05, 0.38, 0.26),
  })
  y -= 20
  page.drawText(`Zone ${input.zone} · Generated ${input.generatedAt.toLocaleString("en-US", { timeZone: "America/New_York" })} ET`, {
    x: MARGIN,
    y,
    size: 10,
    font,
    color: rgb(0.3, 0.32, 0.3),
  })
  y -= 28

  y = sectionTitle(page, "Disclaimer", fontBold, y)
  const disclaimer =
    "Educational only. Hardiness zones and frost dates are estimates—verify with the USDA ARS map and local Extension. Moon rhythm is almanac-style pacing, not agronomic advice. Check animal feeding, compost, and code rules in your jurisdiction."
  y = drawLines(page, wrapParagraph(disclaimer, MAX_CHARS), font, 9, y) - 8

  y = sectionTitle(page, "Your lookup", fontBold, y)
  y = drawLines(
    page,
    [
      ...wrapParagraph(`Matched: ${input.matchedLabel}`, MAX_CHARS),
      ...wrapParagraph(`Search: ${input.addressQuery || "—"}`, MAX_CHARS),
    ],
    font,
    10,
    y,
  )
  y -= 8

  y = sectionTitle(page, "Frost planning", fontBold, y)
  y = drawLines(
    page,
    [
      `Last frost: ${input.frost.lastFrostLabel}`,
      `First frost: ${input.frost.firstFrostLabel}`,
      ...wrapParagraph(input.frost.narrative, MAX_CHARS),
    ],
    font,
    10,
    y,
  )
  y -= 8

  y = sectionTitle(page, "Foods & loop (visual summary)", fontBold, y)
  y = drawLines(page, wrapParagraph(food.teaser, MAX_CHARS), font, 10, y)
  y -= 4
  y = drawLines(page, wrapParagraph(`Crops: ${food.cropsParagraph}`, MAX_CHARS), font, 10, y)
  y -= 4
  y = drawLines(page, wrapParagraph(`Cycle: ${food.cycleParagraph}`, MAX_CHARS), font, 10, y)
  y -= 12

  if (y < 120) {
    page = doc.addPage([PAGE_WIDTH, PAGE_HEIGHT])
    y = PAGE_HEIGHT - MARGIN
  }

  y = sectionTitle(page, "Recommended crops (detail)", fontBold, y)
  for (const line of input.report.recommendedCrops) {
    const wrapped = wrapParagraph(`• ${line}`, MAX_CHARS)
    y = drawLines(page, wrapped, font, 10, y)
  }
  y -= 8

  if (y < 160) {
    page = doc.addPage([PAGE_WIDTH, PAGE_HEIGHT])
    y = PAGE_HEIGHT - MARGIN
  }

  y = sectionTitle(page, "Closed-loop pattern (site-wide)", fontBold, y)
  y = drawLines(page, wrapParagraph(input.report.closedLoop, MAX_CHARS), font, 10, y)
  y -= 8

  y = sectionTitle(page, "Vertical / exterior", fontBold, y)
  for (const line of input.report.exteriorClimbing) {
    y = drawLines(page, wrapParagraph(`• ${line}`, MAX_CHARS), font, 10, y)
  }
  y -= 8

  y = sectionTitle(page, "Tubers & calorie anchors", fontBold, y)
  for (const line of input.report.tubers) {
    y = drawLines(page, wrapParagraph(`• ${line}`, MAX_CHARS), font, 10, y)
  }
  y -= 8

  if (y < 200) {
    page = doc.addPage([PAGE_WIDTH, PAGE_HEIGHT])
    y = PAGE_HEIGHT - MARGIN
  }

  y = sectionTitle(page, "Seasonal + lunar highlights", fontBold, y)
  for (const line of input.seasonalAndLunarLines) {
    y = drawLines(page, wrapParagraph(`• ${line}`, MAX_CHARS), font, 10, y)
    if (y < 80) {
      page = doc.addPage([PAGE_WIDTH, PAGE_HEIGHT])
      y = PAGE_HEIGHT - MARGIN
    }
  }
  y -= 8

  if (input.lunar) {
    if (y < 180) {
      page = doc.addPage([PAGE_WIDTH, PAGE_HEIGHT])
      y = PAGE_HEIGHT - MARGIN
    }
    y = sectionTitle(page, "Lunar snapshot (at generation time)", fontBold, y)
    const lunarLines = [
      `Phase: ${input.lunar.phaseLabel} (~${input.lunar.illuminationPercent}% lit, ${input.lunar.waxing ? "waxing" : "waning"})`,
      `Moon sign: ${input.lunar.moonSign}`,
      ...wrapParagraph(input.lunar.guidanceParagraph, MAX_CHARS),
      "Suggested activities:",
      ...input.lunar.suggestedActivities.map((a) => `• ${a}`),
    ]
    for (const segment of lunarLines) {
      const wrapped = segment.startsWith("•") ? [segment] : wrapParagraph(segment, MAX_CHARS)
      y = drawLines(page, wrapped, font, 10, y)
      if (y < 72) {
        page = doc.addPage([PAGE_WIDTH, PAGE_HEIGHT])
        y = PAGE_HEIGHT - MARGIN
      }
    }
    y -= 8
  }

  if (y < 140) {
    page = doc.addPage([PAGE_WIDTH, PAGE_HEIGHT])
    y = PAGE_HEIGHT - MARGIN
  }

  y = sectionTitle(page, "Regenerative tips", fontBold, y)
  for (const line of input.report.regenerative) {
    y = drawLines(page, wrapParagraph(`• ${line}`, MAX_CHARS), font, 10, y)
  }

  return doc.save()
}
