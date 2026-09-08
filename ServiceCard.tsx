import * as Icons from "lucide-react";
import { Service } from "@/lib/services";

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[service.icon] ?? Icons.Sparkles;

  return (
    <div className="glass-1 glass-edge rounded-2xl p-7 h-full">
      <div className="h-11 w-11 rounded-full glass-2 flex items-center justify-center text-gold">
        <Icon size={18} strokeWidth={1.5} />
      </div>
      <h3 className="font-display text-lg text-pearl mt-5">{service.name}</h3>
      <p className="text-sm text-silver-light/60 mt-2 leading-relaxed">{service.description}</p>
    </div>
  );
}
