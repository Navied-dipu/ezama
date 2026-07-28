/**
 * constants.ts – App-wide constants and config values.
 */

/** Site metadata */
export const SITE = {
  name: "Dacitos",
  url: "https://dacitos.com",
  description: "Premium Next.js application.",
  twitterHandle: "@dacitos",
} as const;

/** Navigation links */
export const NAV_LINKS = [
  { label: "Home",     href: "/" },
  { label: "About",    href: "/about" },
  { label: "Work",     href: "/work" },
  { label: "Contact",  href: "/contact" },
] as const;

/** Breakpoints (mirrors Tailwind defaults) */
export const BREAKPOINTS = {
  sm:  640,
  md:  768,
  lg:  1024,
  xl:  1280,
  "2xl": 1536,
} as const;

/** Animation durations (seconds) */
export const DURATION = {
  fast:    0.2,
  normal:  0.4,
  slow:    0.7,
  slower:  1.0,
} as const;

/** Animation easing curves */
export const EASE = {
  smooth: [0.4, 0, 0.2, 1] as const,
  spring: [0.34, 1.56, 0.64, 1] as const,
  expo:   [0.19, 1, 0.22, 1] as const,
} as const;
