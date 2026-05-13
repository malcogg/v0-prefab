import fs from "fs"
import path from "path"

const appDir = path.join(process.cwd(), "app")

for (const name of fs.readdirSync(appDir)) {
  if (!name.startsWith("adu-")) continue
  const filePath = path.join(appDir, name, "page.tsx")
  if (!fs.existsSync(filePath)) continue

  const raw = fs.readFileSync(filePath, "utf8")
  const slugMatch = raw.match(/getLocalPageBySlug\("([^"]+)"\)/)
  if (!slugMatch) {
    console.warn("skip (no slug):", filePath)
    continue
  }
  const slug = slugMatch[1]

  const next = `import type { Metadata } from "next"
import { LocalLandingPage } from "@/components/local-landing-page"
import { buildLocalLandingMetadata } from "@/lib/local-page-metadata"
import { getLocalPageBySlug } from "@/lib/local-pages-data"

const pageSlug = "${slug}" as const
const pageData = getLocalPageBySlug(pageSlug)

export const metadata: Metadata = buildLocalLandingMetadata(pageSlug)

export default function Page() {
  if (!pageData) return null
  return <LocalLandingPage page={pageData} />
}
`

  fs.writeFileSync(filePath, next)
  console.log("patched", name)
}
