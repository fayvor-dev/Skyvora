export interface Service {
  id: string;
  slug: string;
  name: string;
  summary: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    id: "1",
    slug: "private-jet-charter",
    name: "Private Jet Charter",
    summary: "Travel privately, without the restrictions of commercial aviation.",
    description:
      "On-demand access to a curated fleet, matched to your route, group size and schedule — with a single point of contact from request to touchdown.",
    icon: "Plane",
  },
  {
    id: "2",
    slug: "corporate-travel",
    name: "Corporate Travel",
    summary: "Efficient aviation solutions for executives and businesses.",
    description:
      "Multi-city itineraries, standby aircraft and consolidated billing built around the pace of your business, not an airline schedule.",
    icon: "Briefcase",
  },
  {
    id: "3",
    slug: "group-travel",
    name: "Group Travel",
    summary: "Private aircraft for families, teams and larger groups.",
    description:
      "Cabin configurations and aircraft sized for the group travelling together, from family holidays to full delegations.",
    icon: "Users",
  },
  {
    id: "4",
    slug: "vip-concierge",
    name: "VIP Concierge",
    summary: "Personalized travel arrangements from departure to arrival.",
    description:
      "Ground transportation, hotel arrangements and on-the-ground logistics coordinated before you leave, so nothing is left to chance.",
    icon: "Sparkles",
  },
  {
    id: "5",
    slug: "ground-transportation",
    name: "Ground Transportation",
    summary: "Luxury vehicles arranged around your flight.",
    description: "Chauffeured transfers timed precisely to your arrival and departure, at both ends of the journey.",
    icon: "Car",
  },
  {
    id: "6",
    slug: "premium-catering",
    name: "Premium Catering",
    summary: "Curated dining experiences onboard.",
    description:
      "Menus built around your preferences and the length of the journey, prepared by partner kitchens at your departure city.",
    icon: "UtensilsCrossed",
  },
  {
    id: "7",
    slug: "special-occasions",
    name: "Special Occasions",
    summary: "Aircraft charter for celebrations, events and unforgettable journeys.",
    description:
      "From proposals at altitude to milestone celebrations, our team designs the details around the occasion itself.",
    icon: "PartyPopper",
  },
];

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "Every leg of our trip was arranged without a single question from us — the aircraft, the crew, the timing all simply worked.",
    name: "Private client",
    role: "Corporate charter, Lagos–Dubai",
  },
  {
    id: "2",
    quote: "The level of coordination on the ground made a five-city trip feel like one continuous afternoon.",
    name: "Private client",
    role: "Multi-city business travel",
  },
  {
    id: "3",
    quote: "Our family trip was planned around nap times and school pickup — details airlines never ask about.",
    name: "Private client",
    role: "Family charter, Accra–Cape Town",
  },
];

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    id: "1",
    question: "How far in advance should I request a charter?",
    answer:
      "Most journeys can be arranged with as little as a few hours' notice, though we recommend 48 hours where possible to secure the ideal aircraft for your route.",
  },
  {
    id: "2",
    question: "Can I choose a specific aircraft?",
    answer:
      "Yes. You can select a specific aircraft from the fleet, a category, or ask our team to recommend the best match for your route and group size.",
  },
  {
    id: "3",
    question: "Are pets allowed onboard?",
    answer: "Pets are welcome on most aircraft in the fleet. Let us know when requesting your charter so we can confirm suitability.",
  },
  {
    id: "4",
    question: "What is included in the hourly rate?",
    answer:
      "Hourly rates displayed are estimates covering aircraft and crew. Landing fees, catering, and ground services are quoted separately based on your itinerary.",
  },
  {
    id: "5",
    question: "Can I bring more passengers than the listed capacity?",
    answer:
      "Aircraft are certified for a maximum passenger count for safety reasons. Our team can recommend a larger aircraft or a second aircraft for bigger groups.",
  },
  {
    id: "6",
    question: "Do you operate the aircraft directly?",
    answer:
      "SKYVORA arranges charters through vetted operator partners, matching each journey to an aircraft and crew that meet our operational standards.",
  },
];

export const passengerOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 19, 20];

export const optionalServices = [
  { id: "chauffeur", name: "Chauffeur", description: "Door-to-jet ground transportation." },
  { id: "catering", name: "Catering", description: "Curated in-flight dining." },
  { id: "ground", name: "Ground Transportation", description: "Vehicles arranged at your destination." },
  { id: "concierge", name: "VIP Concierge", description: "End-to-end trip coordination." },
  { id: "hotel", name: "Hotel Arrangements", description: "Accommodation booked around your schedule." },
  { id: "special", name: "Special Requests", description: "Anything else your journey requires." },
];
