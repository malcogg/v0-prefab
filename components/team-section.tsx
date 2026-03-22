import Image from "next/image"

const team = [
  {
    name: "Tiffany Baughn",
    title: "Director of Operations",
    company: "Client Focused Group | Licensed Realtor",
    image: "/images/tiffany-baughn.jpg",
    responsibilities: [
      "Real estate strategy & deal sourcing",
      "Investor relations & partnerships",
      "Marketing & lead generation",
      "Client experience & communication",
    ],
    quote:
      "Our goal is to make ADU development accessible, profitable, and stress-free for every homeowner and investor we work with.",
  },
  {
    name: "Michael",
    title: "Construction Operations Lead",
    company: "Build Execution & Site Management",
    image: "/images/michael-ops.jpg",
    responsibilities: [
      "Contractor coordination & oversight",
      "Site feasibility assessment",
      "Build execution & quality control",
      "Timeline & budget management",
    ],
    quote:
      "Every project gets built right the first time. Permitted, inspected, and built to last in the Florida climate.",
  },
]

export function TeamSection() {
  return (
    <section id="team" className="py-24 bg-[oklch(0.11_0_0)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">
            Who We Are
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-white text-balance leading-tight mb-4">
            Strategy Meets Execution
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            We bring together two critical disciplines — real estate intelligence and construction
            expertise — under one roof.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:border-primary/40 transition-colors"
            >
              <div className="flex flex-col sm:flex-row gap-0">
                {/* Image */}
                <div className="relative w-full sm:w-48 aspect-square sm:aspect-auto shrink-0">
                  <Image
                    src={member.image}
                    alt={`${member.name} - ${member.title}`}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-7 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="font-serif text-2xl text-white mb-0.5">{member.name}</h3>
                    <p className="text-primary text-xs font-semibold mb-0.5">{member.title}</p>
                    <p className="text-white/40 text-xs mb-5">{member.company}</p>

                    <ul className="flex flex-col gap-2 mb-5">
                      {member.responsibilities.map((r) => (
                        <li key={r} className="flex items-start gap-2 text-xs text-white/70">
                          <span className="w-1 h-1 rounded-full bg-primary mt-1.5 shrink-0" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <blockquote className="border-l-2 border-primary pl-4">
                    <p className="text-white/60 text-xs italic leading-relaxed">{member.quote}</p>
                  </blockquote>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
