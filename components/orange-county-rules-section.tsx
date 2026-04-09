import { FileCheck, MapPin, Phone, Mail, AlertCircle } from "lucide-react"
import Link from "next/link"

export function OrangeCountyRulesSection() {
  const aduTypes = [
    {
      title: "Type 1 — Attached ADU",
      subtitle: "Addition to primary residential unit",
      requirements: [
        "Site plan or survey showing location",
        "Lot Grading/Drainage Plan + finished floor elevation",
        "Construction Plans by FL Licensed PE or Architect",
        "Existing AND proposed floor plans (all rooms labeled)",
        "Emergency Escape & Rescue Opening (EERO) in every sleeping room",
        "Fire separation between units per FL Building Code",
        "Construction Documents",
        "Energy Calculations + ACCA Manuals J, S, D + EPL card (if HVAC)",
        "Mechanical duct layout (if installing/modifying)",
        "Truss engineering by FL Licensed PE (if applicable)",
        "Orange County Product Approval Specification Sheet",
      ],
    },
    {
      title: "Type 2 — ADU Alteration",
      subtitle: "Convert existing space in primary unit",
      requirements: [
        "Construction Plans by FL Licensed PE or Architect",
        "Existing + proposed floor plans (all rooms labeled)",
        "Emergency Escape & Rescue Opening (EERO) in sleeping rooms",
        "Fire separation between units per FL Building Code",
        "Construction Documents",
        "Energy Calculations + ACCA Manuals + EPL card (if HVAC)",
        "Mechanical duct layout (if modifying ductwork)",
        "Truss engineering (if applicable) — signed & sealed",
        "Orange County Product Approval Specification Sheet",
      ],
    },
    {
      title: "Type 3 — Detached ADU",
      subtitle: "Separate structure (EarthNest Model)",
      requirements: [
        "Site plan or survey showing location",
        "Lot Grading/Drainage Plan + finished floor elevation",
        "Construction Plans by FL Licensed PE or Architect",
        "Fire separation (when applicable) per FL Building Code",
        "Construction Documents",
        "Energy Calculations + ACCA Manuals + EPL card (if HVAC)",
        "Mechanical duct layout (if modifying ductwork)",
        "Truss engineering (if applicable) — signed & sealed",
        "Truss layout from manufacturer",
        "Orange County Product Approval Specification Sheet",
      ],
    },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">
            What Orange County Requires
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground text-balance leading-tight mb-6">
            Official Permitting Requirements
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl leading-relaxed">
            We follow every Orange County regulation exactly. Here's what the county requires for each
            ADU type, sourced directly from{" "}
            <Link
              href="https://www.orangecountyfl.net/PermitsLicenses/Permits/ResidentialAccessoryDwellingUnit.aspx"
              target="_blank"
              className="text-primary hover:underline font-semibold"
            >
              orangecountyfl.net
            </Link>
            .
          </p>
        </div>

        <div className="bg-secondary rounded-lg p-8 border border-border mb-12">
          <h3 className="font-serif text-2xl text-foreground mb-4">
            Orange County Eligibility Requirements — Know Before You Build
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Before any building permit can be issued, Orange County requires ADU projects to meet
            the following baseline eligibility standards. EarthNest Florida verifies all of these
            during your free site evaluation.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-semibold text-foreground mb-2">Owner-Occupancy / Homestead Requirement</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The primary single-family dwelling and the ADU must remain under single ownership at
                all times. The owner must occupy either the primary home or the ADU as their
                principal residence. The property must be homesteaded. A Certificate of Occupancy
                will not be issued until homestead status is confirmed.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Special Exception Approval</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                In most Orange County residential and agricultural zoning districts, an ADU requires
                approval as a Special Exception — a separate zoning review process — before a
                building permit can be applied for. EarthNest Florida coordinates this step as part
                of your project process.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">ADU Size Limits</h4>
              <ul className="text-sm text-muted-foreground leading-relaxed flex flex-col gap-1">
                <li>Minimum: 400 sq ft of living area</li>
                <li>Maximum: 45% of the primary home's living area OR 1,000 sq ft — whichever is less</li>
                <li>Exception: Lots 2 acres or larger have a maximum of 1,500 sq ft</li>
                <li>Maximum: 2 bedrooms</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Lot Size Requirement</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                A detached ADU may only be built on a lot that is at least 1.5x the minimum lot area
                required for a single-family dwelling in that zoning district.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Setbacks — Detached ADU</h4>
              <ul className="text-sm text-muted-foreground leading-relaxed flex flex-col gap-1">
                <li>1-story: Minimum 5 ft from rear property line</li>
                <li>2-story: Minimum 15 ft from rear property line</li>
                <li>Minimum 10 ft separation between the ADU and primary dwelling</li>
                <li>Side setbacks: Must meet principal structure minimums for the zoning district</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Short-Term Rental Restriction</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Orange County prohibits short-term rentals (under 30 days) in most residential zones.
                ADUs may only be rented under standard long-term residential leases. Short-term rental
                platforms (Airbnb, VRBO, etc.) are not a permitted income strategy for ADUs in Orange
                County (unincorporated).
              </p>
            </div>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Note:</strong> Requirements vary by municipality.
            The City of Orlando, Osceola County, Seminole County, and Lake County each operate under
            their own ADU rules. EarthNest Florida reviews the specific requirements for your parcel
            as part of the free evaluation.
          </p>
          <p className="text-xs text-muted-foreground mt-4">
            Source: Orange County Zoning Code Section 38-1426 and orangecountyfl.net/PermitsLicenses/Permits/ResidentialAccessoryDwellingUnit.aspx
          </p>
        </div>

        {/* ADU Types Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {aduTypes.map((type) => (
            <div key={type.title} className="bg-secondary rounded-lg p-6 border border-border">
              <div className="flex items-start gap-3 mb-4">
                <FileCheck className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-serif text-lg text-foreground mb-1">{type.title}</h3>
                  <p className="text-sm text-muted-foreground">{type.subtitle}</p>
                </div>
              </div>

              <div className="border-t border-border pt-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                  Submission Requirements
                </p>
                <ul className="flex flex-col gap-2.5">
                  {type.requirements.map((req) => (
                    <li key={req} className="flex items-start gap-2.5 text-sm text-foreground">
                      <span className="w-1 h-1 rounded-full bg-primary shrink-0 mt-2" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Permit Process */}
        <div className="bg-secondary rounded-lg p-8 border border-border mb-12">
          <h3 className="font-serif text-2xl text-foreground mb-6">The Permit Application Process</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <ul className="flex flex-col gap-4">
                {[
                  "All applications submitted via Orange County Fast Track Online Services portal",
                  "A licensed contractor MUST accept permit issuance",
                  "Owner-builder exemption available under F.S. 489.103(7)(a)",
                  "All permits require inspections, including mandatory final inspection",
                  "Inspections scheduled & managed via Fast Track portal",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info Card */}
            <div className="bg-background rounded-lg p-6 border border-border">
              <h4 className="font-semibold text-foreground mb-4">Questions? Contact Orange County</h4>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-muted-foreground">
                  <strong>Zoning & Site Plan Questions:</strong>
                </p>
                <a
                  href="tel:407-836-3111"
                  className="flex items-center gap-3 text-primary hover:underline font-medium"
                >
                  <Phone className="w-5 h-5" />
                  (407) 836-3111
                </a>
                <a
                  href="mailto:Zoning@ocfl.net"
                  className="flex items-center gap-3 text-primary hover:underline font-medium"
                >
                  <Mail className="w-5 h-5" />
                  Zoning@ocfl.net
                </a>
                <p className="text-sm text-muted-foreground">
                  <strong>Building Inspections & Permit Status:</strong>
                </p>
                <a
                  href="tel:407-836-5550"
                  className="flex items-center gap-3 text-primary hover:underline font-medium"
                >
                  <Phone className="w-5 h-5" />
                  (407) 836-5550
                </a>
                <p className="text-sm text-muted-foreground">
                  Building Safety Division
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 flex gap-4">
          <AlertCircle className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <h4 className="font-semibold text-amber-900 mb-2">Important Disclaimer</h4>
            <p className="text-sm text-amber-800 leading-relaxed">
              ADU permitting requirements are sourced from Orange County's official permit information
              page and are subject to change. Requirements vary by project type, zoning, site
              conditions, and local amendments. Always verify current requirements directly with Orange
              County at orangecountyfl.net or by calling Orange County Zoning at (407) 836-3111 or
              Building Inspections at (407) 836-5550 before beginning any project. EarthNest Florida
              handles all zoning verification and permitting coordination as part of your free property
              evaluation.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
