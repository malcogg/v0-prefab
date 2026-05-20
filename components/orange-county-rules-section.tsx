import { AlertCircle } from "lucide-react"
import Link from "next/link"

import { AduRequirementsAccordions } from "@/components/adu-requirements-accordions"
import { BuildingRequirementsByState } from "@/components/building-requirements-by-state"
import { FLORIDA_ORANGE_COUNTY_REQUIREMENTS } from "@/lib/building-requirements/florida-orange-county"

export function OrangeCountyRulesSection() {
  const jurisdiction = FLORIDA_ORANGE_COUNTY_REQUIREMENTS

  return (
    <section id="orange-county-requirements" className="py-24 bg-background scroll-mt-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10 md:mb-12">
          <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">
            What Orange County Requires
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground text-balance leading-tight mb-6">
            Official Permitting Requirements
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl leading-relaxed">
            {jurisdiction.intro}
            <Link
              href={jurisdiction.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-semibold"
            >
              {jurisdiction.sourceLabel}
            </Link>
            .
          </p>
        </div>

        <AduRequirementsAccordions jurisdiction={jurisdiction} />

        <BuildingRequirementsByState />

        <div className="mt-12 bg-amber-50 border border-amber-200 rounded-lg p-6 flex gap-4">
          <AlertCircle className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" aria-hidden />
          <div>
            <h4 className="font-semibold text-amber-900 mb-2">Important disclaimer</h4>
            <p className="text-sm text-amber-800 leading-relaxed">{jurisdiction.disclaimer}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
