import Link from "next/link";
import { Instagram, Linkedin, Twitter } from "lucide-react";

const columns = [
  {
    title: "Explore",
    links: [
      { href: "/aircraft", label: "Aircraft" },
      { href: "/destinations", label: "Destinations" },
      { href: "/services", label: "Services" },
      { href: "/charter", label: "Charter" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/about#safety", label: "Safety" },
      { href: "/contact", label: "Careers" },
      { href: "/contact", label: "Press" },
    ],
  },
  {
    title: "Support",
    links: [
      { href: "/contact", label: "Contact" },
      { href: "/services#faq", label: "FAQ" },
      { href: "/charter", label: "Charter Support" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "#", label: "Privacy" },
      { href: "#", label: "Terms" },
      { href: "#", label: "Cookies" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 mt-24">
      <div className="glass-1 border-x-0 border-b-0">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-10">
            <div className="col-span-2">
              <p className="font-display text-xl tracking-[0.18em] text-pearl">SKYVORA</p>
              <p className="eyebrow mt-3 text-gold">Beyond the Ordinary</p>
              <div className="flex items-center gap-4 mt-6">
                <Link href="#" aria-label="Instagram" className="text-silver hover:text-gold transition-colors">
                  <Instagram size={17} strokeWidth={1.5} />
                </Link>
                <Link href="#" aria-label="LinkedIn" className="text-silver hover:text-gold transition-colors">
                  <Linkedin size={17} strokeWidth={1.5} />
                </Link>
                <Link href="#" aria-label="Twitter" className="text-silver hover:text-gold transition-colors">
                  <Twitter size={17} strokeWidth={1.5} />
                </Link>
              </div>
            </div>

            {columns.map((col) => (
              <div key={col.title}>
                <p className="text-sm text-pearl mb-4">{col.title}</p>
                <ul className="space-y-3">
                  {col.links.map((link, i) => (
                    <li key={col.title + link.label + i}>
                      <Link
                        href={link.href}
                        className="text-sm text-silver-light/70 hover:text-gold transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-xs text-silver/60">© {new Date().getFullYear()} SKYVORA Private Aviation. All rights reserved.</p>
            <p className="text-xs text-silver/60">Charters arranged through vetted operator partners.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
