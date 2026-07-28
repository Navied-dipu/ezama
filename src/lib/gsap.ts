/**
 * gsap.ts – Centralised GSAP setup / plugin registration.
 *
 * Import this file once (e.g. inside a client component or custom hook)
 * to ensure plugins are registered before use.
 */

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
}

export { gsap, ScrollTrigger, ScrollToPlugin };

/**
 * Default GSAP animation presets for consistent motion across the app.
 */
export const GSAP_DEFAULTS = {
  ease: "expo.out",
  duration: 0.7,
};

/**
 * Fade-in-up preset for ScrollTrigger entrance animations.
 */
export function createFadeInUp(
  target: string | Element | Element[],
  options: {
    delay?: number;
    duration?: number;
    y?: number;
    trigger?: string | Element;
    start?: string;
  } = {}
) {
  const { delay = 0, duration = 0.8, y = 40, trigger, start = "top 85%" } = options;

  return gsap.from(target, {
    opacity: 0,
    y,
    duration,
    delay,
    ease: "expo.out",
    scrollTrigger: trigger
      ? {
          trigger,
          start,
          once: true,
        }
      : undefined,
  });
}
