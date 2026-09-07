export type AircraftCategory =
  | "Light Jet"
  | "Midsize Jet"
  | "Heavy Jet"
  | "Ultra-Long-Range"
  | "VIP Airliner";

export interface Aircraft {
  id: string;
  slug: string;
  name: string;
  manufacturer: string;
  category: AircraftCategory;
  tagline: string;
  image: string;
  gallery: { label: string; image: string }[];
  passengers: number;
  range: number; // nautical miles
  cruiseSpeed: number; // knots
  cabinLength: number; // feet
  cabinWidth: number; // feet
  cabinHeight: number; // feet
  baggageCapacity: number; // cubic feet
  hourlyRate: number; // USD
  amenities: string[];
  description: string;
  available: boolean;
}

export const aircraftFleet: Aircraft[] = [
  {
    id: "1",
    slug: "gulfstream-g650",
    name: "Gulfstream G650",
    manufacturer: "Gulfstream",
    category: "Ultra-Long-Range",
    tagline: "The benchmark for range, speed and cabin comfort.",
    image:
      "https://images.unsplash.com/photo-1583396618422-597b2755de6d?w=1600&q=80",
    gallery: [
      { label: "Exterior", image: "https://images.unsplash.com/photo-1583396618422-597b2755de6d?w=1400&q=80" },
      { label: "Cabin", image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=1400&q=80" },
      { label: "Seating", image: "https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?w=1400&q=80" },
      { label: "Cockpit", image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1400&q=80" },
    ],
    passengers: 19,
    range: 7000,
    cruiseSpeed: 516,
    cabinLength: 46.8,
    cabinWidth: 8.5,
    cabinHeight: 6.2,
    baggageCapacity: 195,
    hourlyRate: 8500,
    amenities: ["Wi-Fi", "Private bedroom", "Full galley", "Flat-bed seating", "Entertainment suite"],
    description:
      "The G650 pairs ultra-long range with a cabin engineered for rest and productivity, connecting continents without a stop.",
    available: true,
  },
  {
    id: "2",
    slug: "bombardier-global-7500",
    name: "Bombardier Global 7500",
    manufacturer: "Bombardier",
    category: "Ultra-Long-Range",
    tagline: "Four living spaces, one uninterrupted journey.",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600&q=80",
    gallery: [
      { label: "Exterior", image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1400&q=80" },
      { label: "Cabin", image: "https://images.unsplash.com/photo-1465447142348-e9952c393450?w=1400&q=80" },
      { label: "Dining", image: "https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?w=1400&q=80" },
    ],
    passengers: 19,
    range: 7700,
    cruiseSpeed: 516,
    cabinLength: 54.5,
    cabinWidth: 8.2,
    cabinHeight: 6.2,
    baggageCapacity: 195,
    hourlyRate: 9200,
    amenities: ["Wi-Fi", "Dedicated crew suite", "Dining area", "Private bedroom", "Nice touch lighting"],
    description:
      "The longest-range purpose-built business jet, with four true living zones for rest, work and dining on the longest routes.",
    available: true,
  },
  {
    id: "3",
    slug: "bombardier-challenger-350",
    name: "Bombardier Challenger 350",
    manufacturer: "Bombardier",
    category: "Midsize Jet",
    tagline: "Efficient, spacious, and remarkably smooth.",
    image:
      "https://images.unsplash.com/photo-1610642372651-fe6e7bc2c7a5?w=1600&q=80",
    gallery: [
      { label: "Exterior", image: "https://images.unsplash.com/photo-1610642372651-fe6e7bc2c7a5?w=1400&q=80" },
      { label: "Cabin", image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=1400&q=80" },
    ],
    passengers: 10,
    range: 3200,
    cruiseSpeed: 470,
    cabinLength: 25.2,
    cabinWidth: 7.2,
    cabinHeight: 6.1,
    baggageCapacity: 106,
    hourlyRate: 4600,
    amenities: ["Wi-Fi", "Forward galley", "Fold-out worktable", "Wide cabin"],
    description:
      "A midsize favorite prized for its wide-body comfort and consistently smooth ride on regional and transcontinental legs.",
    available: true,
  },
  {
    id: "4",
    slug: "cessna-citation-latitude",
    name: "Cessna Citation Latitude",
    manufacturer: "Cessna",
    category: "Midsize Jet",
    tagline: "The flat floor cabin, reimagined for shorter journeys.",
    image:
      "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1600&q=80",
    gallery: [
      { label: "Exterior", image: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1400&q=80" },
      { label: "Cabin", image: "https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?w=1400&q=80" },
    ],
    passengers: 9,
    range: 2850,
    cruiseSpeed: 446,
    cabinLength: 21.5,
    cabinWidth: 5.7,
    cabinHeight: 6.0,
    baggageCapacity: 100,
    hourlyRate: 3800,
    amenities: ["Wi-Fi", "Flat floor cabin", "Refreshment center"],
    description:
      "A flat, level cabin floor and generous headroom make the Latitude one of the most comfortable jets in its class.",
    available: true,
  },
  {
    id: "5",
    slug: "gulfstream-g280",
    name: "Gulfstream G280",
    manufacturer: "Gulfstream",
    category: "Midsize Jet",
    tagline: "Superb range for a super-midsize footprint.",
    image:
      "https://images.unsplash.com/photo-1540339832862-474599807836?w=1600&q=80",
    gallery: [
      { label: "Exterior", image: "https://images.unsplash.com/photo-1540339832862-474599807836?w=1400&q=80" },
      { label: "Cabin", image: "https://images.unsplash.com/photo-1465447142348-e9952c393450?w=1400&q=80" },
    ],
    passengers: 10,
    range: 3600,
    cruiseSpeed: 482,
    cabinLength: 25.8,
    cabinWidth: 7.2,
    cabinHeight: 6.2,
    baggageCapacity: 120,
    hourlyRate: 5200,
    amenities: ["Wi-Fi", "Quiet cabin", "Full galley"],
    description:
      "One of the quietest cabins in its class, built for transcontinental range without stepping up to a heavy jet.",
    available: true,
  },
  {
    id: "6",
    slug: "bombardier-global-6000",
    name: "Bombardier Global 6000",
    manufacturer: "Bombardier",
    category: "Heavy Jet",
    tagline: "A stand-up cabin built for long days aloft.",
    image:
      "https://images.unsplash.com/photo-1544731612-de7f96afe55f?w=1600&q=80",
    gallery: [
      { label: "Exterior", image: "https://images.unsplash.com/photo-1544731612-de7f96afe55f?w=1400&q=80" },
      { label: "Cabin", image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=1400&q=80" },
    ],
    passengers: 13,
    range: 6000,
    cruiseSpeed: 513,
    cabinLength: 48.4,
    cabinWidth: 8.2,
    cabinHeight: 6.2,
    baggageCapacity: 195,
    hourlyRate: 7400,
    amenities: ["Wi-Fi", "Four living zones", "Crew rest area"],
    description:
      "Four distinct cabin zones give groups room to work, dine and rest independently across long-range legs.",
    available: true,
  },
  {
    id: "7",
    slug: "embraer-legacy-650e",
    name: "Embraer Legacy 650E",
    manufacturer: "Embraer",
    category: "Heavy Jet",
    tagline: "A three-zone cabin engineered for groups.",
    image:
      "https://images.unsplash.com/photo-1521727857535-28d2047613ee?w=1600&q=80",
    gallery: [
      { label: "Exterior", image: "https://images.unsplash.com/photo-1521727857535-28d2047613ee?w=1400&q=80" },
      { label: "Cabin", image: "https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?w=1400&q=80" },
    ],
    passengers: 14,
    range: 3900,
    cruiseSpeed: 470,
    cabinLength: 41.6,
    cabinWidth: 6.9,
    cabinHeight: 6.0,
    baggageCapacity: 232,
    hourlyRate: 6300,
    amenities: ["Wi-Fi", "Largest baggage in class", "Three cabin zones"],
    description:
      "Three configurable zones and class-leading baggage space make this a favorite for groups travelling together.",
    available: true,
  },
  {
    id: "8",
    slug: "boeing-bbj-737",
    name: "Boeing BBJ 737",
    manufacturer: "Boeing",
    category: "VIP Airliner",
    tagline: "A private residence with intercontinental range.",
    image:
      "https://images.unsplash.com/photo-1569629743817-70d1db700118?w=1600&q=80",
    gallery: [
      { label: "Exterior", image: "https://images.unsplash.com/photo-1569629743817-70d1db700118?w=1400&q=80" },
      { label: "Cabin", image: "https://images.unsplash.com/photo-1540339832862-474599807836?w=1400&q=80" },
      { label: "Bedroom", image: "https://images.unsplash.com/photo-1465447142348-e9952c393450?w=1400&q=80" },
    ],
    passengers: 40,
    range: 6100,
    cruiseSpeed: 470,
    cabinLength: 79.2,
    cabinWidth: 11.6,
    cabinHeight: 7.1,
    baggageCapacity: 1120,
    hourlyRate: 15800,
    amenities: ["Wi-Fi", "Private suite", "Full dining room", "Shower", "Office"],
    description:
      "A fully customized airframe with private suite, office and dining room — built for heads of state and large delegations.",
    available: false,
  },
];

export function getAircraftBySlug(slug: string) {
  return aircraftFleet.find((a) => a.slug === slug);
}

export function getAircraftByCategory(category: AircraftCategory | "All") {
  if (category === "All") return aircraftFleet;
  return aircraftFleet.filter((a) => a.category === category);
}

export const aircraftCategories: { name: AircraftCategory; description: string; image: string }[] = [
  {
    name: "Light Jet",
    description: "Perfect for shorter journeys with two or three passengers.",
    image: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1200&q=80",
  },
  {
    name: "Midsize Jet",
    description: "A balance of comfort, range and efficiency for regional travel.",
    image: "https://images.unsplash.com/photo-1610642372651-fe6e7bc2c7a5?w=1200&q=80",
  },
  {
    name: "Heavy Jet",
    description: "Spacious cabins designed for long-distance travel and groups.",
    image: "https://images.unsplash.com/photo-1544731612-de7f96afe55f?w=1200&q=80",
  },
  {
    name: "Ultra-Long-Range",
    description: "Maximum range, comfort and privacy for intercontinental legs.",
    image: "https://images.unsplash.com/photo-1583396618422-597b2755de6d?w=1200&q=80",
  },
  {
    name: "VIP Airliner",
    description: "Exceptional space for large groups and residence-level luxury.",
    image: "https://images.unsplash.com/photo-1569629743817-70d1db700118?w=1200&q=80",
  },
];
