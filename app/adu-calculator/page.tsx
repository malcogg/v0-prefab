import { ADUCalculatorSection } from "@/components/adu-calculator-section"
import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"

export default function AduCalculatorPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-28">
        <ADUCalculatorSection />
      </div>
      <SiteFooter />
    </main>
  )
}
