import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="max-w-6xl mx-auto px-6 pb-28">
      <div className="glass-2 glass-edge rounded-3xl px-8 py-16 sm:py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-fade pointer-events-none" />
        <p className="eyebrow text-gold mb-5 relative">Begin your journey</p>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-pearl max-w-2xl mx-auto text-balance relative">
          Your next departure, arranged around you.
        </h2>
        <div className="mt-9 relative">
          <Link
            href="/charter"
            className="inline-flex items-center gap-2 rounded-full bg-gold hover:bg-gold-light text-obsidian text-sm font-medium px-7 py-3.5 transition-colors"
          >
            Request a Charter
            <ArrowRight size={15} strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </section>
  );
}
