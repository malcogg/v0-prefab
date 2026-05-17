import { NextResponse } from "next/server"
import { getRegulatoryBlockByCountySlug } from "@/lib/local-adu-regulatory"

export const runtime = "nodejs"

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as unknown
    if (!body || typeof body !== "object") {
      return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 })
    }
    const countySlug =
      "countySlug" in body && typeof body.countySlug === "string" ? body.countySlug.trim() : ""
    const localNeighborhood =
      "localNeighborhood" in body && typeof body.localNeighborhood === "string"
        ? body.localNeighborhood.trim()
        : ""

    if (!countySlug || !localNeighborhood) {
      return NextResponse.json(
        { error: "countySlug and localNeighborhood are required" },
        { status: 400 },
      )
    }

    const countyData = getRegulatoryBlockByCountySlug(countySlug)
    if (!countyData) {
      return NextResponse.json({ error: "County data profile not found" }, { status: 404 })
    }

    return NextResponse.json({
      success: true,
      message: `PDF generation pipeline stub initialized for ${localNeighborhood}`,
      meta: {
        citation: countyData.citation,
        lastVerified: countyData.lastVerified,
        status: countyData.status,
        statusLabel: countyData.statusLabel,
      },
    })
  } catch {
    return NextResponse.json({ error: "Internal processing validation failure" }, { status: 500 })
  }
}
