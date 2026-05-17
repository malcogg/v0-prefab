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

/** Fallback headlines when a page does not pass `t` / `s` */
const COPY: Record<string, { title: string; subtitle: string }> = {
  default: {
    title: "Florida prefab ADUs & eco tiny living",
    subtitle: "Backyard homes, tiny communities, homestead tools",
  },
  about: {
    title: "About Prefabricated.co",
    subtitle: "ADUs, tiny villages & regenerative homestead planning",
  },
  tiny: {
    title: "Tiny home communities",
    subtitle: "Curated Florida & U.S. directory context",
  },
  homestead: {
    title: "Homestead & growing zones",
    subtitle: "USDA zones, rhythms & closed-loop ideas",
  },
  local: {
    title: "Florida ADU planning guides",
    subtitle: "Code-aware backyard units by area",
  },
  faq: {
    title: "ADU FAQ — Florida",
    subtitle: "Zoning, costs, permitting & rentals",
  },
  resource: {
    title: "Guides & resources",
    subtitle: "Courses, calculators, rules & eco upgrades",
  },
}

/** One calm line for the footer — what the whole site covers */
const SITE_FOOTER_TAGLINE = "ADUs · Tiny communities · Homestead tools · Florida-first guides"

function titleFontSize(text: string): number {
  const n = text.length
  if (n > 72) return 40
  if (n > 55) return 48
  if (n > 42) return 52
  return 58
}

export async function GET(req: Request) {
  const reqUrl = new URL(req.url)
  const { searchParams } = reqUrl
  const origin = reqUrl.origin

  const vRaw = (searchParams.get("v") ?? "default").toLowerCase()
  const variant = vRaw in PALETTE ? vRaw : "default"
  const titleParam = searchParams.get("t")?.trim()
  const subtitleParam = searchParams.get("s")?.trim()

  const preset = COPY[variant] ?? COPY.default
  const title = titleParam && titleParam.length > 0 ? titleParam : preset.title
  const subtitle =
    subtitleParam && subtitleParam.length > 0 ? subtitleParam : preset.subtitle

  const colors = PALETTE[variant] ?? PALETTE.default

  let backdropUrl: string | null = null
  try {
    for (const name of ["og-backdrop.jpg", "og-backdrop.jpeg", "og-backdrop.png", "og-backdrop.webp"]) {
      const u = `${origin}/og/${name}`
      const res = await fetch(u, { cache: "no-store" })
      if (res.ok) {
        backdropUrl = u
        break
      }
    }
  } catch {
    backdropUrl = null
  }

  const usePhoto = backdropUrl != null

  return new ImageResponse(
    (
      <div
        style={{
          width: W,
          height: H,
          display: "flex",
          flexDirection: "column",
          background: usePhoto ? "#1a1f1c" : "linear-gradient(165deg, #fbfbf9 0%, #f0f2ef 48%, #e8ebe6 100%)",
          position: "relative",
        }}
      >
        {usePhoto ? (
          <>
            <img
              src={backdropUrl}
              alt=""
              width={W}
              height={H}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: W,
                height: H,
                objectFit: "cover",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: W,
                height: H,
                background:
                  "linear-gradient(105deg, rgba(10, 18, 14, 0.78) 0%, rgba(10, 18, 14, 0.45) 52%, rgba(10, 18, 14, 0.55) 100%)",
              }}
            />
          </>
        ) : null}

        <div
          style={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            flex: 1,
            width: "100%",
            height: "100%",
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
              padding: "48px 64px 20px",
              justifyContent: "flex-start",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <span
                style={{
                  fontSize: 32,
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                  color: usePhoto ? "#f5faf7" : colors.accent,
                  fontFamily:
                    "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
                }}
              >
                Prefabricated.co
              </span>
              <span
                style={{
                  fontSize: titleFontSize(title),
                  fontWeight: 700,
                  letterSpacing: "-0.03em",
                  lineHeight: 1.08,
                  color: usePhoto ? "#ffffff" : "#141814",
                  fontFamily:
                    "ui-serif, Palatino Linotype, Palatino, Georgia, Cambria, Times New Roman, serif",
                  maxWidth: 1020,
                }}
              >
                {title}
              </span>
              <span
                style={{
                  fontSize: 28,
                  fontWeight: 500,
                  lineHeight: 1.35,
                  color: usePhoto ? "rgba(255,255,255,0.88)" : colors.sub,
                  fontFamily: "ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif",
                  maxWidth: 980,
                }}
              >
                {subtitle}
              </span>
            </div>
          </div>

          <div
            style={{
              marginTop: "auto",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "22px 64px",
              backgroundColor: usePhoto ? "rgba(12, 16, 14, 0.92)" : "#2f3531",
              borderTop: usePhoto ? "1px solid rgba(255,255,255,0.1)" : "none",
            }}
          >
            <span
              style={{
                fontSize: 17,
                fontWeight: 600,
                color: usePhoto ? "rgba(255,255,255,0.78)" : "rgba(255,255,255,0.82)",
                fontFamily: "ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif",
                letterSpacing: "0.04em",
                textTransform: "uppercase" as const,
              }}
            >
              {SITE_FOOTER_TAGLINE}
            </span>
            <span
              style={{
                fontSize: 22,
                fontWeight: 800,
                color: "#ffffff",
                fontFamily: "ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif",
                letterSpacing: "0.14em",
                textTransform: "uppercase" as const,
              }}
            >
              PREFABRICATED.CO
            </span>
          </div>
        </div>
      </div>
    ),
    { width: W, height: H },
  )
}
