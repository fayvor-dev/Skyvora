import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import AircraftCard from "@/components/AircraftCard";
import { aircraftFleet } from "@/lib/aircraft";

const featuredSlugs = ["gulfstream-g650er", "boeing-777-vvip", "airbus-h160-signature"];

export default function FleetShowcase() {
  const featured = featuredSlugs
    .map((slug) => aircraftFleet.find((a) => a.slug === slug))
    .filter((a): a is (typeof aircraftFleet)[number] => Boolean(a));

  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
        <SectionHeading
          eyebrow="The Fleet"
          title="Exceptional aircraft, selected for exceptional journeys."
        />
        <Link
          href="/aircraft"
          className="inline-flex items-center gap-2 text-sm text-silver-light/80 hover:text-gold transition-colors whitespace-nowrap"
        >
          View full fleet
          <ArrowRight size={14} strokeWidth={1.5} />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        {featured.map((aircraft) => (
          <AircraftCard key={aircraft.id} aircraft={aircraft} />
        ))}
      </div>
    </section>
  );
}
