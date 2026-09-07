import { clsx } from "clsx";
import { HTMLAttributes, forwardRef } from "react";

type GlassLevel = 1 | 2 | 3;

interface LiquidGlassProps extends HTMLAttributes<HTMLDivElement> {
  level?: GlassLevel;
  rounded?: string;
  edge?: boolean;
}

const LiquidGlass = forwardRef<HTMLDivElement, LiquidGlassProps>(
  ({ level = 1, rounded = "rounded-2xl", edge = true, className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx(
          `glass-${level}`,
          rounded,
          edge && "glass-edge",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

LiquidGlass.displayName = "LiquidGlass";

export default LiquidGlass;
