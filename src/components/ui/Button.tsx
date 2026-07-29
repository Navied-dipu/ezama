"use client";

import { forwardRef } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

// ─── Types ────────────────────────────────────────────────────────────────────

export type ButtonVariant = "primary" | "secondary" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends Omit<HTMLMotionProps<"button">, "size" | "children"> {
  /** Visual style variant */
  variant?: ButtonVariant;
  /** Size preset */
  size?: ButtonSize;
  /** Optional leading icon */
  leftIcon?: React.ReactNode;
  /** Optional trailing icon */
  rightIcon?: React.ReactNode;
  /** Renders the button as a full-width block */
  fullWidth?: boolean;
  /** Show loading spinner and disable interaction */
  isLoading?: boolean;
  children?: React.ReactNode;
}

// ─── Variant Maps ─────────────────────────────────────────────────────────────

const variantClasses: Record<ButtonVariant, string> = {
  primary: [
    "relative inline-flex items-center justify-center gap-2",
    "bg-accent-gradient text-base font-semibold",
    "rounded-xl border border-transparent",
    "shadow-glow-sm",
    // inner highlight shimmer line
    "before:absolute before:inset-0 before:rounded-xl",
    "before:bg-[linear-gradient(135deg,rgba(255,255,255,0.18)_0%,transparent_60%)]",
    "before:pointer-events-none",
  ].join(" "),

  secondary: [
    "relative inline-flex items-center justify-center gap-2",
    "bg-surface-raised text-ink font-semibold",
    "rounded-xl border border-white/10",
    "shadow-card",
  ].join(" "),

  ghost: [
    "inline-flex items-center justify-center gap-2",
    "bg-transparent text-ink font-semibold",
    "rounded-xl border border-surface-border",
    "hover:border-accent/40 hover:text-accent hover:bg-accent/5",
  ].join(" "),
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-xs tracking-wide",
  md: "px-6 py-3 text-sm tracking-wide",
  lg: "px-8 py-4 text-base tracking-wide",
};

// ─── Framer Motion variants ───────────────────────────────────────────────────

const motionVariants = {
  primary: {
    rest: { scale: 1, boxShadow: "0 0 10px rgba(0, 212, 255, 0.20)" },
    hover: {
      scale: 1.04,
      boxShadow: "0 0 24px rgba(0, 212, 255, 0.50), 0 0 60px rgba(0, 212, 255, 0.15)",
    },
    tap: { scale: 0.97 },
  },
  secondary: {
    rest: { scale: 1, boxShadow: "0 4px 24px rgba(0,0,0,0.40)" },
    hover: {
      scale: 1.03,
      boxShadow: "0 8px 32px rgba(0,0,0,0.55), 0 0 12px rgba(0,212,255,0.10)",
    },
    tap: { scale: 0.97 },
  },
  ghost: {
    rest: { scale: 1 },
    hover: { scale: 1.03 },
    tap: { scale: 0.97 },
  },
};

// ─── Spinner ──────────────────────────────────────────────────────────────────

function Spinner() {
  return (
    <svg
      className="animate-spin h-4 w-4"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      leftIcon,
      rightIcon,
      fullWidth = false,
      isLoading = false,
      disabled,
      className,
      children,
      ...rest
    },
    ref
  ) => {
    const mv = motionVariants[variant];
    const isDisabled = disabled || isLoading;

    return (
      <motion.button
        ref={ref}
        initial="rest"
        whileHover={isDisabled ? undefined : "hover"}
        whileTap={isDisabled ? undefined : "tap"}
        variants={mv}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        className={cn(
          variantClasses[variant],
          sizeClasses[size],
          fullWidth && "w-full",
          isDisabled && "opacity-50 cursor-not-allowed pointer-events-none",
          "transition-colors duration-200 select-none focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2",
          className
        )}
        {...rest}
      >
        {isLoading ? <Spinner /> : leftIcon}
        {children}
        {!isLoading && rightIcon}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export { Button };
