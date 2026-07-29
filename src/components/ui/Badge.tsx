"use client";

import { forwardRef } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

export type BadgeVariant = "primary" | "secondary" | "outline" | "glow";

export interface BadgeProps extends Omit<HTMLMotionProps<"span">, "children"> {
  variant?: BadgeVariant;
  /** If provided, renders an interactive tag with hover and tap states using Framer Motion */
  interactive?: boolean;
  children: React.ReactNode;
}

const variantClasses: Record<BadgeVariant, string> = {
  primary: "bg-accent/10 border border-accent/20 text-accent",
  secondary: "bg-base-200 border border-base-300 text-ink-muted",
  outline: "bg-transparent border border-surface-border text-ink-muted",
  glow: "bg-accent-gradient/10 border border-accent text-accent shadow-glow-sm",
};

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "primary", interactive = false, children, ...rest }, ref) => {
    return (
      <motion.span
        ref={ref}
        initial={interactive ? "rest" : undefined}
        whileHover={interactive ? "hover" : undefined}
        whileTap={interactive ? "tap" : undefined}
        variants={
          interactive
            ? {
                rest: { scale: 1 },
                hover: {
                  scale: 1.05,
                  borderColor: "rgba(0, 212, 255, 0.4)",
                  backgroundColor: "rgba(0, 212, 255, 0.15)",
                },
                tap: { scale: 0.95 },
              }
            : undefined
        }
        transition={{ type: "spring", stiffness: 500, damping: 15 }}
        className={cn(
          "inline-flex items-center justify-center rounded-full px-2.5 py-0.5 text-2xs font-semibold tracking-wider uppercase select-none transition-colors duration-200",
          variantClasses[variant],
          interactive && "cursor-pointer",
          className
        )}
        {...rest}
      >
        {children}
      </motion.span>
    );
  }
);

Badge.displayName = "Badge";

export { Badge };
