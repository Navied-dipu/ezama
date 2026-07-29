"use client";

import { forwardRef } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

export interface CardProps extends HTMLMotionProps<"div"> {
  /** If true, adds subtle scale-up and enhanced glow hover animation using Framer Motion */
  interactive?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, interactive = false, children, ...rest }, ref) => {
    return (
      <motion.div
        ref={ref}
        initial={interactive ? "rest" : undefined}
        whileHover={interactive ? "hover" : undefined}
        whileTap={interactive ? "tap" : undefined}
        variants={
          interactive
            ? {
                rest: { scale: 1, y: 0, boxShadow: "0 4px 24px rgba(0, 0, 0, 0.4)" },
                hover: {
                  scale: 1.02,
                  y: -4,
                  boxShadow: "0 12px 40px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 212, 255, 0.1)",
                  borderColor: "rgba(0, 212, 255, 0.2)",
                },
                tap: { scale: 0.99, y: -1 },
              }
            : undefined
        }
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
        className={cn(
          "relative overflow-hidden rounded-2xl border border-surface-border bg-surface/60 p-6 backdrop-blur-md",
          "before:absolute before:inset-0 before:pointer-events-none before:rounded-2xl",
          "before:bg-[linear-gradient(135deg,rgba(255,255,255,0.05)_0%,transparent_50%)]",
          "shadow-card transition-colors duration-300",
          interactive && "cursor-pointer",
          className
        )}
        {...rest}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = "Card";

export { Card };
