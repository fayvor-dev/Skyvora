import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { aircraftCategories } from "@/lib/aircraft";

export default function CategoryGrid() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <SectionHeading eyebrow="Categories" title="Every mission, matched to the right aircraft." />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
        {aircraftCategories.map((cat) => (
          <Link
            key={cat.name}
            href={`/aircraft?category=${encodeURIComponent(cat.name)}`}
            className="group relative rounded-2xl overflow-hidden h-72"
          >
            <Image
              src={cat.image}
              alt={cat.name}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-obsidian/10" />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <h3 className="font-display text-xl text-pearl">{cat.name}</h3>
              <p className="text-sm text-silver-light/60 mt-1.5 leading-relaxed">{cat.description}</p>
              <span className="inline-flex items-center gap-1 text-xs text-gold mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                Explore
                <ArrowUpRight size={12} strokeWidth={1.5} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
