import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import AircraftGallery from "@/components/AircraftGallery";
import AircraftSpecs from "@/components/AircraftSpecs";
import { aircraftFleet, getAircraftBySlug } from "@/lib/aircraft";

export function generateStaticParams() {
  return aircraftFleet.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const aircraft = getAircraftBySlug(params.slug);
  if (!aircraft) return {};
  return {
    title: `${aircraft.name} — SKYVORA`,
    description: aircraft.description,
  };
}

export default function AircraftDetailPage({ params }: { params: { slug: string } }) {
  const aircraft = getAircraftBySlug(params.slug);
  if (!aircraft) notFound();

  return (
    <div className="max-w-6xl mx-auto px-6 pt-36 pb-24">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div>
          <p className="eyebrow text-gold mb-3">
            {aircraft.manufacturer} &middot; {aircraft.category}
          </p>
          <h1 className="font-display text-4xl sm:text-5xl text-pearl text-balance">{aircraft.name}</h1>
          <p className="text-silver-light/70 mt-3 max-w-xl leading-relaxed">{aircraft.description}</p>
        </div>
        <Link
          href={`/charter?aircraft=${aircraft.slug}`}
          className="inline-flex items-center gap-2 rounded-full bg-gold hover:bg-gold-light text-obsidian text-sm font-medium px-6 py-3 transition-colors whitespace-nowrap"
        >
          Request this aircraft
          <ArrowRight size={15} strokeWidth={1.5} />
        </Link>
      </div>

      <div className="mt-10">
        <AircraftGallery gallery={aircraft.gallery} aircraftName={aircraft.name} />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
        <Stat label="Passengers" value={`${aircraft.passengers}`} />
        <Stat label="Range" value={`${aircraft.range.toLocaleString()} nm`} />
        <Stat label="Cruise speed" value={`${aircraft.cruiseSpeed} ktas`} />
        <Stat label="From" value={`$${aircraft.hourlyRate.toLocaleString()}/hr`} gold />
      </div>

      <div className="mt-16">
        <p className="eyebrow text-gold mb-6">Specifications</p>
        <AircraftSpecs aircraft={aircraft} />
      </div>

      <div className="mt-16">
        <p className="eyebrow text-gold mb-6">Comfort &amp; Amenities</p>
        <div className="glass-1 glass-edge rounded-2xl p-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {aircraft.amenities.map((a) => (
            <div key={a} className="flex items-center gap-3">
              <span className="h-6 w-6 rounded-full glass-2 flex items-center justify-center text-gold shrink-0">
                <Check size={12} strokeWidth={2} />
              </span>
              <span className="text-sm text-silver-light/80">{a}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 glass-2 glass-edge rounded-3xl p-10 text-center">
        <h2 className="font-display text-2xl sm:text-3xl text-pearl">Ready to fly on the {aircraft.name}?</h2>
        <p className="text-silver-light/70 mt-3 max-w-md mx-auto">
          Tell us your route and dates — our team will confirm availability and an exact quote.
        </p>
        <Link
          href={`/charter?aircraft=${aircraft.slug}`}
          className="inline-flex items-center gap-2 rounded-full bg-gold hover:bg-gold-light text-obsidian text-sm font-medium px-6 py-3 mt-7 transition-colors"
        >
          Request a Charter
          <ArrowRight size={15} strokeWidth={1.5} />
        </Link>
      </div>
    </div>
  );
}

function Stat({ label, value, gold }: { label: string; value: string; gold?: boolean }) {
  return (
    <div className="glass-1 glass-edge rounded-2xl px-5 py-4">
      <p className="text-[11px] text-silver/60">{label}</p>
      <p className={`text-lg mt-1 ${gold ? "text-gold" : "text-pearl"}`}>{value}</p>
    </div>
  );
}
