"use client";

import { forwardRef } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

export interface SectionHeadingProps extends HTMLMotionProps<"div"> {
  /** The small uppercase tag/label appearing above the title */
  eyebrow?: string;
  /** Alignment of the text and underline */
  align?: "left" | "center" | "right";
  /** Level of heading tag to use (default: h2) */
  as?: "h1" | "h2" | "h3" | "h4";
  title: string;
}

const SectionHeading = forwardRef<HTMLDivElement, SectionHeadingProps>(
  ({ className, eyebrow, align = "left", as: Component = "h2", title, ...rest }, ref) => {
    const alignClasses = {
      left: "text-left items-start",
      center: "text-center items-center",
      right: "text-right items-end",
    };

    const underlineAlignClasses = {
      left: "origin-left left-0",
      center: "origin-center left-1/2 -translate-x-1/2",
      right: "origin-right right-0",
    };

    return (
      <motion.div
        ref={ref}
        className={cn("flex flex-col gap-2 md:gap-3", alignClasses[align], className)}
        {...rest}
      >
        {eyebrow && (
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-2xs font-semibold tracking-widest uppercase text-accent"
          >
            {eyebrow}
          </motion.span>
        )}

        <div className="relative pb-4 select-none">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            <Component className="text-3xl font-bold tracking-tight text-ink md:text-4xl lg:text-5xl">
              {title}
            </Component>
          </motion.div>

          {/* Underline container */}
          <motion.span
            className={cn(
              "absolute bottom-0 h-1 rounded-full bg-accent-gradient",
              underlineAlignClasses[align]
            )}
            initial={{ scaleX: 0, width: 0 }}
            whileInView={{ scaleX: 1, width: "80px" }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>
      </motion.div>
    );
  }
);

SectionHeading.displayName = "SectionHeading";

export { SectionHeading };
