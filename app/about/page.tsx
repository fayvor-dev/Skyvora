import type { Metadata } from "next";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "About — SKYVORA",
  description: "The SKYVORA story, philosophy and approach to private aviation.",
};

const timeline = [
  { year: "Foundation", body: "SKYVORA was founded around a simple idea: private aviation should feel personal, not procedural." },
  { year: "Fleet partnerships", body: "Operator partnerships were established across light jets through VIP airliners, vetted against our operational standards." },
  { year: "Concierge network", body: "A concierge network was built across our core destinations, so ground arrangements are ready before the aircraft lands." },
  { year: "Today", body: "SKYVORA arranges journeys across five aircraft categories and a growing list of destinations." },
];

const values = [
  { title: "Precision", body: "Every detail of a charter is confirmed, not assumed." },
  { title: "Privacy", body: "Your itinerary and your journey remain your own." },
  { title: "Restraint", body: "Luxury shown through quality, not excess." },
];

export default function AboutPage() {
  return (
    <div>
      <div className="relative h-[55vh] min-h-[380px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=2000&q=85"
          alt="Private jet cabin interior"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/30 to-obsidian/60" />
        <div className="absolute inset-x-0 bottom-0 max-w-6xl mx-auto px-6 pb-14">
          <p className="eyebrow text-gold mb-3">About Skyvora</p>
          <h1 className="font-display text-5xl sm:text-6xl text-pearl text-balance">Beyond the ordinary.</h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="max-w-2xl">
          <p className="text-lg text-silver-light/80 leading-relaxed">
            SKYVORA arranges private aircraft charter for clients who value their time as much as their
            destination. We work with a network of vetted operators and a curated fleet spanning light jets
            to VIP airliners, so every journey is matched to the aircraft it deserves.
          </p>
        </div>

        <div className="mt-20">
          <SectionHeading eyebrow="Values" title="What guides every charter." />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-10">
            {values.map((v) => (
              <div key={v.title} className="glass-1 glass-edge rounded-2xl p-7">
                <h3 className="font-display text-lg text-pearl">{v.title}</h3>
                <p className="text-sm text-silver-light/60 mt-2 leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24">
          <SectionHeading eyebrow="Our Story" title="Built around how you actually travel." />
          <div className="relative mt-12 pl-8 sm:pl-10">
            <div className="absolute left-[3px] sm:left-1 top-1 bottom-1 w-px bg-white/10" />
            <div className="space-y-10">
              {timeline.map((t) => (
                <div key={t.year} className="relative">
                  <span className="absolute -left-8 sm:-left-10 top-1 h-2 w-2 rounded-full bg-gold" />
                  <p className="text-xs text-gold tracking-wide">{t.year}</p>
                  <p className="text-sm text-silver-light/70 mt-2 leading-relaxed max-w-xl">{t.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div id="safety" className="mt-24">
          <SectionHeading
            eyebrow="Safety &amp; Trust"
            title="Standards that come before everything else."
            description="Private aviation depends on trust. Every operator partner is reviewed against our own operational standards before a single flight is arranged."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10">
            {[
              { title: "Operator vetting", body: "Partner operators are reviewed for certification and operational history before onboarding." },
              { title: "Crew qualifications", body: "Flight crews meet the training and experience requirements set by our operator partners." },
              { title: "Maintenance standards", body: "Aircraft are maintained to manufacturer and regulatory schedules by their operating partner." },
              { title: "Ongoing review", body: "Partner relationships are reviewed on a continuing basis, not only at onboarding." },
            ].map((item) => (
              <div key={item.title} className="glass-1 glass-edge rounded-2xl p-6">
                <h3 className="text-sm text-pearl">{item.title}</h3>
                <p className="text-sm text-silver-light/60 mt-2 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
