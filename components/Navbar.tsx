"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search } from "lucide-react";
import { clsx } from "clsx";

const links = [
  { href: "/", label: "Home" },
  { href: "/aircraft", label: "Aircraft" },
  { href: "/destinations", label: "Destinations" },
  { href: "/services", label: "Services" },
  { href: "/membership", label: "Membership" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-4 sm:px-6 pt-4">
      <div
        className={clsx(
          "mx-auto max-w-6xl flex items-center justify-between rounded-full px-5 sm:px-6 transition-all duration-500",
          scrolled ? "glass-3 glass-edge py-2.5" : "bg-transparent border border-transparent py-3"
        )}
      >
        <Link href="/" className="font-display text-lg tracking-[0.18em] text-pearl">
          SKYVORA
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "relative text-sm transition-colors",
                  active ? "text-pearl" : "text-silver-light/75 hover:text-pearl"
                )}
              >
                {link.label}
                {active && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute -bottom-1.5 left-0 right-0 h-px bg-gold"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <button
            aria-label="Search"
            className="hidden sm:flex h-9 w-9 items-center justify-center rounded-full text-silver-light/80 hover:text-gold transition-colors"
          >
            <Search size={17} strokeWidth={1.5} />
          </button>
          <Link
            href="/charter"
            className="hidden sm:inline-flex items-center rounded-full bg-gold/95 hover:bg-gold text-obsidian text-sm font-medium px-5 py-2 transition-colors"
          >
            Request Charter
          </Link>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden h-9 w-9 flex items-center justify-center text-pearl"
          >
            {open ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden mx-auto mt-3 max-w-6xl glass-3 glass-edge rounded-3xl px-6 py-6"
          >
            <nav className="flex flex-col gap-5">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={clsx(
                    "text-base",
                    pathname === link.href ? "text-gold" : "text-pearl/90"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/charter"
                className="mt-2 inline-flex items-center justify-center rounded-full bg-gold text-obsidian text-sm font-medium px-5 py-2.5"
              >
                Request Charter
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
