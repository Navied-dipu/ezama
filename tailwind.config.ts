import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // ─── Color Palette ───────────────────────────────────────────────────────
      colors: {
        // Base surfaces
        base: {
          DEFAULT: "#0A0F1D", // deep space navy
          50:  "#0d1426",
          100: "#111827",
          200: "#1a2236",
          300: "#243047",
          400: "#2e3f5c",
        },
        // Accent – Electric Blue / Cyan
        accent: {
          DEFAULT: "#00D4FF",
          dim:    "#0095B3",
          bright: "#7FFFFD",
          glow:   "rgba(0, 212, 255, 0.15)",
        },
        // Text
        ink: {
          DEFAULT: "#E8EDF5",  // off-white primary
          muted:  "#8B97AE",  // muted secondary
          subtle: "#4A566B",  // subtle tertiary
        },
        // Surface / Card layers
        surface: {
          DEFAULT: "#111827",
          raised:  "#172031",
          border:  "rgba(255,255,255,0.06)",
        },
      },

      // ─── Typography ──────────────────────────────────────────────────────────
      fontFamily: {
        sans:    ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-syne)",  "system-ui", "sans-serif"],
        mono:    ["var(--font-mono)",  "monospace"],
      },
      fontSize: {
        "2xs": ["0.625rem",  { lineHeight: "1rem" }],
        xs:    ["0.75rem",   { lineHeight: "1.125rem" }],
        sm:    ["0.875rem",  { lineHeight: "1.375rem" }],
        base:  ["1rem",      { lineHeight: "1.625rem" }],
        lg:    ["1.125rem",  { lineHeight: "1.75rem" }],
        xl:    ["1.25rem",   { lineHeight: "1.875rem" }],
        "2xl": ["1.5rem",    { lineHeight: "2rem" }],
        "3xl": ["1.875rem",  { lineHeight: "2.375rem" }],
        "4xl": ["2.25rem",   { lineHeight: "2.75rem" }],
        "5xl": ["3rem",      { lineHeight: "1.1" }],
        "6xl": ["3.75rem",   { lineHeight: "1.05" }],
        "7xl": ["4.5rem",    { lineHeight: "1" }],
        "8xl": ["6rem",      { lineHeight: "1" }],
        "9xl": ["8rem",      { lineHeight: "1" }],
      },
      letterSpacing: {
        tightest: "-0.05em",
        tighter:  "-0.025em",
        tight:    "-0.015em",
        normal:   "0em",
        wide:     "0.025em",
        wider:    "0.05em",
        widest:   "0.15em",
        display:  "0.2em",
      },

      // ─── Generous Spacing Scale ───────────────────────────────────────────────
      spacing: {
        "4.5":   "1.125rem",
        "13":    "3.25rem",
        "15":    "3.75rem",
        "17":    "4.25rem",
        "18":    "4.5rem",
        "19":    "4.75rem",
        "21":    "5.25rem",
        "22":    "5.5rem",
        "25":    "6.25rem",
        "26":    "6.5rem",
        "28":    "7rem",
        "30":    "7.5rem",
        "34":    "8.5rem",
        "36":    "9rem",
        "38":    "9.5rem",
        "42":    "10.5rem",
        "46":    "11.5rem",
        "50":    "12.5rem",
        "54":    "13.5rem",
        "58":    "14.5rem",
        "62":    "15.5rem",
        "66":    "16.5rem",
        "70":    "17.5rem",
        "74":    "18.5rem",
        "78":    "19.5rem",
        "82":    "20.5rem",
        "86":    "21.5rem",
        "90":    "22.5rem",
        "94":    "23.5rem",
        "98":    "24.5rem",
        "100":   "25rem",
        "108":   "27rem",
        "112":   "28rem",
        "120":   "30rem",
        "128":   "32rem",
        "136":   "34rem",
        "144":   "36rem",
        "160":   "40rem",
        "176":   "44rem",
        "192":   "48rem",
        "208":   "52rem",
        "224":   "56rem",
        "240":   "60rem",
        "256":   "64rem",
      },

      // ─── Border Radius ────────────────────────────────────────────────────────
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },

      // ─── Box Shadow (glow effects) ────────────────────────────────────────────
      boxShadow: {
        "glow-accent": "0 0 20px rgba(0, 212, 255, 0.25), 0 0 60px rgba(0, 212, 255, 0.10)",
        "glow-sm":     "0 0 10px rgba(0, 212, 255, 0.20)",
        "glow-lg":     "0 0 40px rgba(0, 212, 255, 0.30), 0 0 120px rgba(0, 212, 255, 0.10)",
        "card":        "0 4px 24px rgba(0, 0, 0, 0.40), 0 1px 4px rgba(0, 0, 0, 0.30)",
        "card-hover":  "0 8px 40px rgba(0, 0, 0, 0.50), 0 2px 8px rgba(0, 0, 0, 0.40)",
        "inner-glow":  "inset 0 1px 0 rgba(255, 255, 255, 0.06)",
      },

      // ─── Background gradients ─────────────────────────────────────────────────
      backgroundImage: {
        "gradient-radial":  "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":   "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "noise":            "url('/noise.svg')",
        "hero-gradient":    "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(0,212,255,0.12) 0%, transparent 70%)",
        "accent-gradient":  "linear-gradient(135deg, #00D4FF 0%, #0072FF 100%)",
      },

      // ─── Keyframe animations ──────────────────────────────────────────────────
      keyframes: {
        "fade-in": {
          "0%":   { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-up": {
          "0%":   { opacity: "0", transform: "translateY(32px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%":      { opacity: "0.4" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-12px)" },
        },
        spin: {
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "fade-in":     "fade-in 0.6s ease forwards",
        "fade-in-up":  "fade-in-up 0.7s ease forwards",
        shimmer:       "shimmer 2.5s linear infinite",
        float:         "float 5s ease-in-out infinite",
      },

      // ─── Transitions ─────────────────────────────────────────────────────────
      transitionTimingFunction: {
        spring:  "cubic-bezier(0.34, 1.56, 0.64, 1)",
        smooth:  "cubic-bezier(0.4, 0, 0.2, 1)",
        expo:    "cubic-bezier(0.19, 1, 0.22, 1)",
      },

      // ─── Backdrop blur ────────────────────────────────────────────────────────
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
