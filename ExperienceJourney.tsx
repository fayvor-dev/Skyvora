"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

const steps = [
  { n: "01", title: "Request", body: "Tell us where you're going, and when." },
  { n: "02", title: "Select", body: "Choose the aircraft that fits your journey." },
  { n: "03", title: "Prepare", body: "Our team handles the details, quietly." },
  { n: "04", title: "Depart", body: "Arrive, board and fly, minutes after you arrive." },
  { n: "05", title: "Arrive", body: "Step directly into your destination." },
];

export default function ExperienceJourney() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <SectionHeading eyebrow="The Experience" title="A journey with every step considered." align="center" className="!max-w-2xl" />

      <div className="relative mt-16 grid grid-cols-1 sm:grid-cols-5 gap-8 sm:gap-4">
        <div className="hidden sm:block absolute top-6 left-[10%] right-[10%] h-px bg-white/10" />
        {steps.map((step, i) => (
          <motion.div
            key={step.n}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
            className="relative text-center sm:text-left"
          >
            <div className="relative z-10 h-12 w-12 mx-auto sm:mx-0 rounded-full glass-2 glass-edge flex items-center justify-center text-gold text-sm font-display">
              {step.n}
            </div>
            <h3 className="font-display text-lg text-pearl mt-4">{step.title}</h3>
            <p className="text-sm text-silver-light/60 mt-1.5 leading-relaxed">{step.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
