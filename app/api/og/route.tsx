import { ImageResponse } from "next/og"

export const runtime = "edge"

const W = 1200
const H = 630

const PALETTE: Record<
  string,
  { bar: string; accent: string; sub: string }
> = {
  default: { bar: "#0F6E56", accent: "#0a5342", sub: "#4d5754" },
  about: { bar: "#0F6E56", accent: "#0a5342", sub: "#4d5754" },
  tiny: { bar: "#4c3d9b", accent: "#352a70", sub: "#4d5754" },
  homestead: { bar: "#2d6a4f", accent: "#1b4332", sub: "#4d5754" },
  local: { bar: "#0F6E56", accent: "#0a5342", sub: "#4d5754" },
  faq: { bar: "#0F6E56", accent: "#0a5342", sub: "#4d5754" },
  resource: { bar: "#0F6E56", accent: "#0a5342", sub: "#4d5754" },
}

const COPY: Record<string, { title: string; subtitle: string }> = {
  default: {
    title: "Florida prefab ADUs & backyard homes",
    subtitle: "Tiny communities · EarthNest · homestead guides",
  },
  about: {
    title: "About Prefabricated.co",
    subtitle: "ADUs, tiny villages & regenerative homestead tools",
  },
  tiny: {
    title: "Tiny home communities",
    subtitle: "Florida-first discovery & curated directory context",
  },
  homestead: {
    title: "Homestead & growing zones",
    subtitle: "Educational planning tools for Florida properties",
  },
  local: {
    title: "ADUs in Central Florida",
    subtitle: "Code-aware backyard homes · Prefabricated.co",
  },
  faq: {
    title: "ADU FAQ — Florida",
    subtitle: "Zoning, costs, permitting & rental basics",
  },
  resource: {
    title: "Guides & resources",
    subtitle: "Courses, calculators, rules & eco upgrades",
  },
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const vRaw = (searchParams.get("v") ?? "default").toLowerCase()
  const variant = vRaw in PALETTE ? vRaw : "default"
  const titleParam = searchParams.get("t")?.trim()
  const subtitleParam = searchParams.get("s")?.trim()

  const preset = COPY[variant] ?? COPY.default
  const title = titleParam && titleParam.length > 0 ? titleParam : preset.title
  const subtitle =
    subtitleParam && subtitleParam.length > 0 ? subtitleParam : preset.subtitle

  const colors = PALETTE[variant] ?? PALETTE.default

  return new ImageResponse(
    (
      <div
        style={{
          width: W,
          height: H,
          display: "flex",
          flexDirection: "column",
          background: "linear-gradient(165deg, #fbfbf9 0%, #f0f2ef 48%, #e8ebe6 100%)",
          position: "relative",
        }}
      >
        <div
          style={{
            height: 10,
            width: "100%",
            backgroundColor: colors.bar,
          }}
        />
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            padding: "56px 64px 48px",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <span
              style={{
                fontSize: 30,
                fontWeight: 700,
                letterSpacing: "-0.02em",
                color: colors.accent,
                fontFamily:
                  "ui-serif, Palatino Linotype, Palatino, Georgia, Cambria, Times New Roman, serif",
              }}
            >
              Prefabricated.co
            </span>
            <span
              style={{
                fontSize: title.length > 55 ? 48 : 58,
                fontWeight: 700,
                letterSpacing: "-0.03em",
                lineHeight: 1.08,
                color: "#141814",
                fontFamily:
                  "ui-serif, Palatino Linotype, Palatino, Georgia, Cambria, Times New Roman, serif",
              }}
            >
              {title}
            </span>
            <span
              style={{
                fontSize: 28,
                fontWeight: 500,
                lineHeight: 1.35,
                color: colors.sub,
                fontFamily: "ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif",
                maxWidth: 980,
              }}
            >
              {subtitle}
            </span>
          </div>
          <span
            style={{
              fontSize: 20,
              fontWeight: 600,
              color: "#6b7280",
              fontFamily: "ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif",
              letterSpacing: "0.06em",
              textTransform: "uppercase" as const,
            }}
          >
            Florida · prefab · tiny living · homestead
          </span>
        </div>
      </div>
    ),
    { width: W, height: H },
  )
}
