import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Destination } from "@/lib/destinations";

export default function DestinationCard({ destination }: { destination: Destination }) {
  return (
    <Link
      href={`/destinations/${destination.slug}`}
      className="group relative block overflow-hidden rounded-3xl h-96"
    >
      <Image
        src={destination.image}
        alt={destination.city}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/30 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 p-6">
        <div className="glass-2 glass-edge rounded-2xl p-5">
          <p className="text-[11px] tracking-wide text-silver-light/70">{destination.country}</p>
          <h3 className="font-display text-2xl text-pearl mt-1">{destination.city}</h3>
          <p className="text-sm text-silver-light/60 mt-2 leading-relaxed">{destination.description}</p>
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/10">
            <span className="text-xs text-gold">{destination.flightTimeFromLagos} flight</span>
            <span className="inline-flex items-center gap-1 text-sm text-pearl/90 group-hover:text-gold transition-colors">
              Explore
              <ArrowUpRight size={14} strokeWidth={1.5} />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
