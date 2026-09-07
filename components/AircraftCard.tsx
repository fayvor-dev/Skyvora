import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Aircraft } from "@/lib/aircraft";

export default function AircraftCard({ aircraft }: { aircraft: Aircraft }) {
  return (
    <Link
      href={`/aircraft/${aircraft.slug}`}
      className="group relative block overflow-hidden rounded-3xl glass-1 glass-edge"
    >
      <div className="relative h-64 sm:h-72 overflow-hidden rounded-t-3xl">
        <Image
          src={aircraft.image}
          alt={aircraft.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/10 to-transparent" />
        {!aircraft.available && (
          <span className="absolute top-4 left-4 glass-2 rounded-full px-3 py-1 text-[11px] tracking-wide text-silver-light">
            Currently unavailable
          </span>
        )}
        <span className="absolute top-4 right-4 glass-2 rounded-full px-3 py-1 text-[11px] tracking-wide text-gold">
          {aircraft.category}
        </span>
      </div>

      <div className="p-6">
        <p className="text-xs text-silver/70">{aircraft.manufacturer}</p>
        <h3 className="font-display text-xl text-pearl mt-1">{aircraft.name}</h3>
        <p className="text-sm text-silver-light/60 mt-2 leading-relaxed">{aircraft.tagline}</p>

        <div className="grid grid-cols-3 gap-3 mt-5 text-center">
          <div>
            <p className="text-sm text-pearl">{aircraft.passengers}</p>
            <p className="text-[10px] text-silver/60 mt-0.5">Passengers</p>
          </div>
          <div className="border-x border-white/10">
            <p className="text-sm text-pearl">{aircraft.range.toLocaleString()}</p>
            <p className="text-[10px] text-silver/60 mt-0.5">NM Range</p>
          </div>
          <div>
            <p className="text-sm text-pearl">{aircraft.cruiseSpeed}</p>
            <p className="text-[10px] text-silver/60 mt-0.5">KTAS</p>
          </div>
        </div>

        <div className="flex items-center justify-between mt-6 pt-5 border-t border-white/10">
          <div>
            <p className="text-[10px] text-silver/60">From</p>
            <p className="text-gold text-sm">${aircraft.hourlyRate.toLocaleString()}/hr</p>
          </div>
          <span className="inline-flex items-center gap-1 text-sm text-pearl/90 group-hover:text-gold transition-colors">
            View aircraft
            <ArrowUpRight size={15} strokeWidth={1.5} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
