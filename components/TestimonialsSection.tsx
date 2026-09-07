import { testimonials } from "@/lib/services";

export default function TestimonialsSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {testimonials.map((t) => (
          <div key={t.id} className="glass-1 glass-edge rounded-2xl p-7 flex flex-col justify-between">
            <p className="text-pearl/90 text-[0.95rem] leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
            <div className="mt-6 pt-5 border-t border-white/10">
              <p className="text-sm text-pearl">{t.name}</p>
              <p className="text-xs text-silver/60 mt-0.5">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
