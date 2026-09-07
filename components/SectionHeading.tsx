import { clsx } from "clsx";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={clsx("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && <p className="eyebrow mb-4 text-gold">{eyebrow}</p>}
      <h2 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] leading-[1.1] text-pearl text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-silver-light/80 text-base md:text-lg leading-relaxed">{description}</p>
      )}
    </div>
  );
}
