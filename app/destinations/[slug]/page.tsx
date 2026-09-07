import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { destinations, getDestinationBySlug } from "@/lib/destinations";

export function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const destination = getDestinationBySlug(params.slug);
  if (!destination) return {};
  return {
    title: `${destination.city} — SKYVORA`,
    description: destination.overview,
  };
}

export default function DestinationDetailPage({ params }: { params: { slug: string } }) {
  const destination = getDestinationBySlug(params.slug);
  if (!destination) notFound();

  return (
    <div>
      <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
        <Image
          src={destination.image}
          alt={destination.city}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-obsidian/50" />
        <div className="absolute inset-x-0 bottom-0 max-w-6xl mx-auto px-6 pb-14">
          <p className="eyebrow text-gold mb-3">{destination.country}</p>
          <h1 className="font-display text-5xl sm:text-6xl text-pearl">{destination.city}</h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-12">
          <div>
            <p className="text-silver-light/80 leading-relaxed text-lg">{destination.overview}</p>

            <div className="mt-10">
              <p className="eyebrow text-gold mb-4">Popular Experiences</p>
              <ul className="space-y-3">
                {destination.experiences.map((exp) => (
                  <li key={exp} className="glass-1 glass-edge rounded-xl px-5 py-4 text-sm text-silver-light/85">
                    {exp}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="glass-2 glass-edge rounded-2xl p-7 h-fit">
            <dl className="space-y-5">
              <div>
                <dt className="text-[11px] text-silver/60">Airport</dt>
                <dd className="text-sm text-pearl mt-1">{destination.airport}</dd>
              </div>
              <div>
                <dt className="text-[11px] text-silver/60">Approx. flight time from Lagos</dt>
                <dd className="text-sm text-gold mt-1">{destination.flightTimeFromLagos}</dd>
              </div>
              <div>
                <dt className="text-[11px] text-silver/60">Recommended aircraft</dt>
                <dd className="flex flex-wrap gap-2 mt-2">
                  {destination.recommendedCategories.map((c) => (
                    <span key={c} className="glass-1 rounded-full px-3 py-1 text-xs text-silver-light/80">
                      {c}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>

            <Link
              href={`/charter?to=${encodeURIComponent(destination.city)}`}
              className="mt-7 inline-flex items-center justify-center gap-2 w-full rounded-full bg-gold hover:bg-gold-light text-obsidian text-sm font-medium px-6 py-3 transition-colors"
            >
              Fly to {destination.city}
              <ArrowRight size={15} strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
