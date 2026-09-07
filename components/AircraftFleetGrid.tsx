"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { clsx } from "clsx";
import AircraftCard from "@/components/AircraftCard";
import { aircraftFleet, AircraftCategory } from "@/lib/aircraft";

const filters: (AircraftCategory | "All")[] = [
  "All",
  "Light Jet",
  "Midsize Jet",
  "Heavy Jet",
  "Ultra-Long-Range",
  "VIP Airliner",
];

export default function AircraftFleetGrid() {
  const searchParams = useSearchParams();
  const initial = (searchParams.get("category") as AircraftCategory) || "All";
  const [active, setActive] = useState<AircraftCategory | "All">(
    filters.includes(initial) ? initial : "All"
  );

  const filtered = useMemo(
    () => (active === "All" ? aircraftFleet : aircraftFleet.filter((a) => a.category === active)),
    [active]
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={clsx(
              "rounded-full px-4 py-2 text-xs tracking-wide transition-colors",
              active === f ? "bg-gold text-obsidian" : "glass-1 text-silver-light/75 hover:text-pearl"
            )}
          >
            {f === "All" ? "All" : f.toUpperCase()}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="glass-1 rounded-2xl p-12 text-center mt-12">
          <p className="text-pearl">No aircraft in this category yet.</p>
          <p className="text-sm text-silver/60 mt-2">Try another category, or request a recommendation from our team.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {filtered.map((aircraft) => (
            <AircraftCard key={aircraft.id} aircraft={aircraft} />
          ))}
        </div>
      )}
    </div>
  );
}
