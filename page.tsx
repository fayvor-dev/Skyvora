import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import CorporateComparison from "@/components/CorporateComparison";
import FAQAccordion from "@/components/FAQAccordion";
import { services, faqs } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services — SKYVORA",
  description: "Private jet charter, corporate travel, VIP concierge and more.",
};

export default function ServicesPage() {
  return (
    <div>
      <div className="max-w-6xl mx-auto px-6 pt-36 pb-24">
        <SectionHeading
          eyebrow="Services"
          title="Every part of the journey, arranged around you."
          description="From the aircraft to the ground, SKYVORA coordinates the details so your journey feels effortless."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {services.map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 pb-24">
        <SectionHeading
          eyebrow="Corporate Aviation"
          title="Commercial travel versus SKYVORA."
          description="Executive schedules run on flexibility, not fixed departures."
        />
        <div className="mt-10">
          <CorporateComparison />
        </div>
      </div>

      <div id="faq" className="max-w-3xl mx-auto px-6 pb-28">
        <SectionHeading eyebrow="FAQ" title="Common questions." align="center" className="!max-w-2xl" />
        <div className="mt-10">
          <FAQAccordion faqs={faqs} />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 pb-28">
        <div className="glass-2 glass-edge rounded-3xl px-8 py-14 text-center">
          <h2 className="font-display text-3xl text-pearl">Not sure which service fits your trip?</h2>
          <p className="text-silver-light/70 mt-3 max-w-md mx-auto">
            Tell us about your journey and our concierge team will recommend the right combination.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-gold hover:bg-gold-light text-obsidian text-sm font-medium px-6 py-3 mt-7 transition-colors"
          >
            Talk to our team
            <ArrowRight size={15} strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </div>
  );
}
