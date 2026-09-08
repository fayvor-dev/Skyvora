"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

const menuItems = ["Fleet", "Charter", "Concierge", "Destinations", "Help"];

export default function FlightDeckBar() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const update = () =>
      setTime(
        new Date().toLocaleString("en-US", {
          weekday: "short",
          month: "short",
          day: "numeric",
          hour: "numeric",
          minute: "2-digit",
        })
      );
    update();
    const id = setInterval(update, 30000);
    return () => clearInterval(id);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.9 }}
      className="w-full h-10 bg-black/40 backdrop-blur-md border-t border-b border-white/10"
    >
      <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between text-xs">
        <div className="flex items-center gap-5">
          <span className="font-semibold text-pearl tracking-wide">SKYVORA</span>
          {menuItems.map((item, i) => (
            <span
              key={item}
              className={
                "text-silver-light/60 hover:text-pearl transition-colors cursor-default " +
                (i > 2 ? "hidden sm:inline " : "") +
                (i > 3 ? "hidden md:inline" : "")
              }
            >
              {item}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-4 text-silver-light/60">
          <span className="hidden sm:inline text-gold">All Systems Operational</span>
          <Search size={13} strokeWidth={1.5} />
          {time && <span>{time}</span>}
        </div>
      </div>
    </motion.div>
  );
}
