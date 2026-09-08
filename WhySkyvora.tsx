import SectionHeading from "@/components/SectionHeading";
import AnimatedCounter from "@/components/AnimatedCounter";

const points = [
  { title: "Your time", body: "Fly around your schedule, not an airline's." },
  { title: "Your space", body: "Complete privacy, from the tarmac to the cabin." },
  { title: "Your journey", body: "Direct routing to the destinations that matter." },
  { title: "Your experience", body: "Every detail arranged around you." },
  { title: "Global access", body: "Reach airports beyond conventional routes." },
  { title: "Exceptional service", body: "One point of contact, before, during and after." },
];

const stats = [
  { value: 8, suffix: "", label: "Aircraft categories" },
  { value: 12, suffix: "+", label: "Regular destinations" },
  { value: 24, suffix: "/7", label: "Concierge availability" },
];

export default function WhySkyvora() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-14">
        <div>
          <SectionHeading eyebrow="Why Skyvora" title="Private aviation, built around you." />
          <div className="grid grid-cols-3 gap-6 mt-10 max-w-sm">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-2xl text-gold">
                  <AnimatedCounter value={s.value} suffix={s.suffix} />
                </p>
                <p className="text-xs text-silver/60 mt-1 leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {points.map((p) => (
            <div key={p.title} className="glass-1 glass-edge rounded-2xl p-6">
              <h3 className="text-pearl text-sm">{p.title}</h3>
              <p className="text-sm text-silver-light/60 mt-2 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
