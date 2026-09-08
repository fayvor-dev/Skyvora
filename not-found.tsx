import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80svh] flex items-center justify-center px-6">
      <div className="glass-2 glass-edge rounded-3xl px-10 py-16 text-center max-w-lg">
        <p className="font-display text-7xl text-gold">404</p>
        <h1 className="font-display text-2xl sm:text-3xl text-pearl mt-6">Lost above the clouds.</h1>
        <p className="text-silver-light/70 mt-3 leading-relaxed">
          The page you&rsquo;re looking for doesn&rsquo;t exist.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-gold hover:bg-gold-light text-obsidian text-sm font-medium px-6 py-3 mt-8 transition-colors"
        >
          Return to SKYVORA
          <ArrowRight size={15} strokeWidth={1.5} />
        </Link>
      </div>
    </div>
  );
}
