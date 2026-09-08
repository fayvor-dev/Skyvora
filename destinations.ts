export interface Destination {
  id: string;
  slug: string;
  city: string;
  country: string;
  image: string;
  description: string;
  overview: string;
  airport: string;
  flightTimeFromLagos: string;
  recommendedCategories: string[];
  experiences: string[];
}

export const destinations: Destination[] = [
  {
    id: "1",
    slug: "dubai",
    city: "Dubai",
    country: "United Arab Emirates",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1400&q=80",
    description: "A crossroads of ambition, luxury and desert light.",
    overview:
      "Dubai blends record-setting architecture with a deep-rooted hospitality tradition, making it a natural hub for business and leisure charters alike.",
    airport: "Dubai International (DXB) / Al Maktoum (DWC)",
    flightTimeFromLagos: "7h 20m",
    recommendedCategories: ["Ultra-Long-Range", "Heavy Jet"],
    experiences: ["Private desert safari", "Burj Al Arab dining", "Yacht charter on the Marina"],
  },
  {
    id: "2",
    slug: "london",
    city: "London",
    country: "United Kingdom",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1400&q=80",
    description: "Centuries of history set against a modern financial capital.",
    overview:
      "London remains the most requested European destination for private travelers, with access to multiple executive airports around the city.",
    airport: "London City / Farnborough / Luton",
    flightTimeFromLagos: "6h 45m",
    recommendedCategories: ["Heavy Jet", "Ultra-Long-Range"],
    experiences: ["West End private box", "Savile Row fitting", "Thames private cruise"],
  },
  {
    id: "3",
    slug: "paris",
    city: "Paris",
    country: "France",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1400&q=80",
    description: "Effortless elegance along the Seine.",
    overview:
      "From Le Bourget's dedicated business aviation terminal, Paris offers some of the fastest curb-to-cabin times in Europe.",
    airport: "Le Bourget (LBG)",
    flightTimeFromLagos: "6h 30m",
    recommendedCategories: ["Heavy Jet", "Midsize Jet"],
    experiences: ["Private Louvre tour", "Champagne house visit", "Haute couture appointment"],
  },
  {
    id: "4",
    slug: "new-york",
    city: "New York",
    country: "United States",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1400&q=80",
    description: "The pace of global business, uninterrupted.",
    overview:
      "Teterboro's proximity to Manhattan makes New York one of the most efficient long-range destinations for executive travel.",
    airport: "Teterboro (TEB)",
    flightTimeFromLagos: "11h 10m",
    recommendedCategories: ["Ultra-Long-Range"],
    experiences: ["Private Broadway box", "Michelin-starred dining", "Helicopter transfer to Manhattan"],
  },
  {
    id: "5",
    slug: "seychelles",
    city: "Seychelles",
    country: "Seychelles",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1400&q=80",
    description: "Granite islands and water the color of glass.",
    overview:
      "A private-island escape reached directly, without the multi-stop routing commercial carriers require from West Africa.",
    airport: "Seychelles International (SEZ)",
    flightTimeFromLagos: "8h 40m",
    recommendedCategories: ["Heavy Jet", "Ultra-Long-Range"],
    experiences: ["Private island villa", "Sunset catamaran sail", "Reef diving charter"],
  },
  {
    id: "6",
    slug: "maldives",
    city: "Maldives",
    country: "Maldives",
    image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=1400&q=80",
    description: "Overwater villas at the edge of the Indian Ocean.",
    overview:
      "Seaplane and speedboat transfers connect Velana International directly to the archipelago's private resorts.",
    airport: "Velana International (MLE)",
    flightTimeFromLagos: "9h 50m",
    recommendedCategories: ["Ultra-Long-Range"],
    experiences: ["Overwater villa stay", "Private sandbank dinner", "Manta ray snorkeling"],
  },
  {
    id: "7",
    slug: "accra",
    city: "Accra",
    country: "Ghana",
    image: "https://images.unsplash.com/photo-1580746738099-72ba7d3f4ffe?w=1400&q=80",
    description: "West Africa's fastest-growing business hub.",
    overview:
      "A short regional hop that keeps executive schedules intact for meetings across the sub-region.",
    airport: "Kotoka International (ACC)",
    flightTimeFromLagos: "1h 15m",
    recommendedCategories: ["Light Jet", "Midsize Jet"],
    experiences: ["Cape Coast heritage tour", "Private beach club", "Business district transfer"],
  },
  {
    id: "8",
    slug: "cape-town",
    city: "Cape Town",
    country: "South Africa",
    image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=1400&q=80",
    description: "Table Mountain, vineyards and the Atlantic coastline.",
    overview:
      "A leisure favorite combining coastal scenery with some of the continent's most acclaimed wine estates.",
    airport: "Cape Town International (CPT)",
    flightTimeFromLagos: "6h 05m",
    recommendedCategories: ["Heavy Jet", "Midsize Jet"],
    experiences: ["Winelands tasting", "Table Mountain private ascent", "Cape Peninsula drive"],
  },
];

export function getDestinationBySlug(slug: string) {
  return destinations.find((d) => d.slug === slug);
}
