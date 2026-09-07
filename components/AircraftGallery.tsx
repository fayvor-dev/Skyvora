"use client";

import { useState } from "react";
import Image from "next/image";
import { clsx } from "clsx";

export default function AircraftGallery({
  gallery,
  aircraftName,
}: {
  gallery: { label: string; image: string }[];
  aircraftName: string;
}) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="relative h-[26rem] sm:h-[32rem] rounded-3xl overflow-hidden glass-1 glass-edge">
        <Image
          key={gallery[active].image}
          src={gallery[active].image}
          alt={`${aircraftName} — ${gallery[active].label}`}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </div>
      <div className="flex flex-wrap gap-2 mt-4">
        {gallery.map((g, i) => (
          <button
            key={g.label}
            onClick={() => setActive(i)}
            className={clsx(
              "rounded-full px-4 py-2 text-xs transition-colors",
              active === i ? "bg-gold text-obsidian" : "glass-1 text-silver-light/70 hover:text-pearl"
            )}
          >
            {g.label}
          </button>
        ))}
      </div>
    </div>
  );
}
