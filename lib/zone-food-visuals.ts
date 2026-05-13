import type { FloridaZoneCode } from "@/lib/florida-homestead-zones"

/** “Food strip” + closed-loop copy tailored per zone (educational, Florida-oriented). */
export type ZoneFoodVisual = {
  /** Large emoji row for quick scanning */
  foods: { emoji: string; label: string }[]
  /** Short line under the heading (matches marketing card tone) */
  teaser: string
  /** One paragraph: typical crops for the zone */
  cropsParagraph: string
  /** Full nutrient loop narrative (kitchen → animals → compost → beds → kitchen) */
  cycleParagraph: string
}

const DATA: Record<FloridaZoneCode, ZoneFoodVisual> = {
  "8b": {
    foods: [
      { emoji: "🥬", label: "Kale & collards" },
      { emoji: "🥕", label: "Roots" },
      { emoji: "🫛", label: "English peas" },
      { emoji: "🍠", label: "Sweet potato" },
      { emoji: "🫑", label: "Okra & peas" },
      { emoji: "🥚", label: "Eggs" },
    ],
    teaser:
      "Cool-season brassicas and roots, warm-season peas and sweet potato—designed for short freezes and sandy ridges.",
    cropsParagraph:
      "Think kale, broccoli, carrots, and sugar snaps in spring, with sweet potato, okra, Southern peas, and yardlong beans carrying calories through the heat.",
    cycleParagraph:
      "Kitchen trimmings and garden weeds → poultry or worm bins → compost and litter → beds for cool-season greens and summer climbers → more food scraps and mulch back to soil. Chop-and-drop cover crops feed fungi in sandy soil; fallen leaves bank carbon before summer storms.",
  },
  "9a": {
    foods: [
      { emoji: "🍅", label: "Tomatoes" },
      { emoji: "🫑", label: "Peppers" },
      { emoji: "🍆", label: "Eggplant" },
      { emoji: "🍋", label: "Citrus" },
      { emoji: "🥬", label: "Salad greens" },
      { emoji: "🥚", label: "Eggs" },
    ],
    teaser:
      "Two tomato windows, reliable nightshades, and microclimate citrus—balanced with frost-aware planning.",
    cropsParagraph:
      "Spring and fall cherry tomatoes, peppers, eggplant, and cucurbits after soil warms; figs and citrus where winter lows allow; greens under shade cloth when heat spikes.",
    cycleParagraph:
      "Scraps and culls → chickens or compost | manure → compost tea | feeds fruiting beds and herb hedges | vines and trimmings → mulch or bird forage | worm castings close the loop on potting mixes.",
  },
  "9b": {
    foods: [
      { emoji: "🥦", label: "Brassicas" },
      { emoji: "🍠", label: "Sweet potato" },
      { emoji: "🌿", label: "Malabar spinach" },
      { emoji: "🍌", label: "Banana bank" },
      { emoji: "🌺", label: "Papaya" },
      { emoji: "🥚", label: "Eggs" },
    ],
    teaser:
      "Long cool seasons for beets and brassicas; summer shifts to tropical greens and calorie banks on berms.",
    cropsParagraph:
      "Fall brassicas and beets, summer Malabar spinach, okra, and crowder peas; papaya and banana circles where windbreaks and drainage are sorted first.",
    cycleParagraph:
      "Kitchen streams split: soft greens to ducks, tough stems to compost; litter and manure → hot compost → feeder roots on berms; chop-and-drop support species keep sun off thin soil.",
  },
  "10a": {
    foods: [
      { emoji: "🍠", label: "Sweet potato" },
      { emoji: "🫛", label: "Okra" },
      { emoji: "🍆", label: "Eggplant" },
      { emoji: "🌶️", label: "Peppers" },
      { emoji: "🍅", label: "Tomatoes" },
      { emoji: "🍌", label: "Banana" },
      { emoji: "🥭", label: "Papaya" },
      { emoji: "🍊", label: "Citrus" },
      { emoji: "🥬", label: "Spinach greens" },
      { emoji: "🥚", label: "Eggs" },
    ],
    teaser:
      "Practical loops that fit small footprints: compost, poultry tractoring, vertical climbers, and calorie-dense tubers for resilient communities.",
    cropsParagraph:
      "Sweet potatoes, okra, Southern peas, eggplant, peppers, and tomatoes (cherry or Everglades types are steady). Tropical greens like Malabar, Okinawa, and longevity spinach fill summer salad gaps. Bananas, papaya, and citrus structure shade and steady calories when drainage is right.",
    cycleParagraph:
      "Kitchen scraps and veggie trimmings feed chickens and ducks. Their manure goes into compost. Compost feeds the soil for all your plants. Plant leaves and trimmings become mulch or duck feed. Overripe fruit and peels go to the birds or worms. Worm castings and aged manure fertilize the beds again. Even weeds get chopped-and-dropped or fed to animals. Everything cycles back to build soil and grow more food—nothing wasted.",
  },
  "10b": {
    foods: [
      { emoji: "🥭", label: "Mango" },
      { emoji: "🌿", label: "Moringa" },
      { emoji: "🥬", label: "Tropical spinach" },
      { emoji: "🌽", label: "Corn (winter)" },
      { emoji: "🌱", label: "Microgreens" },
      { emoji: "🥚", label: "Eggs" },
    ],
    teaser:
      "Heat-forward perennials, winter annual window, and storm-season fast crops—with salt and wind in mind.",
    cropsParagraph:
      "Mango, moringa, and tropical spinach analogs for summer; winter sweet corn and greens where pests are managed; microgreens and sprouts after storm clears.",
    cycleParagraph:
      "Fruit drops and culls → poultry or BSF buckets (where appropriate) | litter to compost | compost to fruiting pits and raised kitchen gardens | palm and woody trimmings → mulch or biochar feedstock | rinse water to mulched basins when codes allow.",
  },
  "11a": {
    foods: [
      { emoji: "🌴", label: "Palms" },
      { emoji: "🥭", label: "Mango" },
      { emoji: "🍌", label: "Banana" },
      { emoji: "🌿", label: "Leaf protein" },
      { emoji: "🍄", label: "Mushrooms" },
      { emoji: "🥚", label: "Eggs" },
    ],
    teaser:
      "Canopy-first design: freshwater, soil depth, and wind beats a frost calendar.",
    cropsParagraph:
      "Broad tropical fruit palette with legume support species; fast leafy gaps in bright understory; mushrooms and herbs where humidity is managed.",
    cycleParagraph:
      "Storm prunings → coarse mulch and hugel berms | café/kitchen outputs → compost + animal lanes | manure → anaerobic danger avoided via carbon-heavy composting | castings return to understory guilds.",
  },
  "11b": {
    foods: [
      { emoji: "🥥", label: "Coconut" },
      { emoji: "🌊", label: "Salt-aware" },
      { emoji: "🍌", label: "Banana" },
      { emoji: "💧", label: "Freshwater lens" },
      { emoji: "🪴", label: "Containers" },
      { emoji: "🥚", label: "Eggs" },
    ],
    teaser:
      "Thin soil and salt aerosol mean containers, catchment, and species that tolerate edges.",
    cropsParagraph:
      "Salt-tolerant windbreaks, deep containers for fruit, coconuts and tropical staples where rules and wind allow; loop fertility with compost, biochar, and responsibly sourced amendments.",
    cycleParagraph:
      "Every scrap stays on island-style lots: weeds and hedgerow trimmings → compost | poultry on rotation | manure + biochar stabilizes nutrients | container beds and shade houses catch every drop of rinse water.",
  },
}

export function zoneFoodVisual(zone: FloridaZoneCode): ZoneFoodVisual {
  return DATA[zone]
}
