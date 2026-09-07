"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import CharterSearchPanel from "@/components/CharterSearchPanel";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1540339832862-474599807836?w=2000&q=85"
          alt="Private jet on a runway at dusk"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/85 via-obsidian/30 to-obsidian" />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian/60 via-transparent to-obsidian/40" />
        <svg
          className="absolute inset-0 w-full h-full opacity-40"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="none"
        >
          <path className="flight-line" d="M0,700 C 250,600 450,780 1000,560" fill="none" strokeWidth="1" />
          <path className="flight-line" d="M0,300 C 300,250 600,380 1000,240" fill="none" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto w-full px-6 pt-40 pb-14">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="eyebrow text-gold mb-6"
        >
          Private Aviation
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="font-display text-[3.2rem] leading-[0.98] sm:text-7xl md:text-8xl text-pearl text-balance"
        >
          Beyond
          <br />
          the ordinary.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.22 }}
          className="mt-6 max-w-md text-base sm:text-lg text-silver-light/80 leading-relaxed"
        >
          Private aviation designed around your journey, your time, and your destination.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.32 }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <Link
            href="/charter"
            className="inline-flex items-center gap-2 rounded-full bg-gold hover:bg-gold-light text-obsidian text-sm font-medium px-6 py-3 transition-colors"
          >
            Request a Charter
            <ArrowRight size={15} strokeWidth={1.5} />
          </Link>
          <Link
            href="/aircraft"
            className="inline-flex items-center gap-2 rounded-full glass-2 glass-edge text-pearl text-sm px-6 py-3 hover:text-gold transition-colors"
          >
            Explore Aircraft
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.45 }}
        className="relative max-w-6xl mx-auto w-full px-6 pb-10"
      >
        <CharterSearchPanel />
      </motion.div>
    </section>
  );
}
