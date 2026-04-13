export type HomeModel = {
  id: "earthnest-20" | "earthnest-40" | "traditional-site-built"
  name: string
  badge: string
  badgeTone: "amber" | "green"
  size: string
  layout: string
  startingAt: number
  leadTime: string
  bestFor: string
  image: string
  isPopular?: boolean
}

export const HOME_MODELS: HomeModel[] = [
  {
    id: "earthnest-20",
    name: "EarthNest 20ft Studio",
    badge: "Guesthouse / Home Office",
    badgeTone: "amber",
    size: "~160 sq ft",
    layout: "Studio",
    startingAt: 50000,
    leadTime: "8-12 weeks",
    bestFor: "Guest suite, private office, creative studio",
    image: "/images/container-adu.jpg",
  },
  {
    id: "earthnest-40",
    name: "EarthNest 40ft",
    badge: "Extended Stay / Flex Unit",
    badgeTone: "amber",
    size: "~320 sq ft",
    layout: "Studio + sleeping area",
    startingAt: 100000,
    leadTime: "10-14 weeks",
    bestFor: "Extended family, long-term guesthouse",
    image: "/images/earthnest-model.jpg",
  },
  {
    id: "traditional-site-built",
    name: "Traditional Site-Built",
    badge: "Orange County ADU Eligible",
    badgeTone: "green",
    size: "400-1,000 sq ft (custom)",
    layout: "Studio, 1BR, or 2BR",
    startingAt: 200000,
    leadTime: "16-28 weeks",
    bestFor: "Permitted rental ADU, maximum appraisal value",
    image: "/images/traditional-adu.jpg",
    isPopular: true,
  },
]
