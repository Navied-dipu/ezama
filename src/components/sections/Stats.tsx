"use client";

import React, { useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  formatFn: (val: number) => string;
}

const statsData: StatItem[] = [
  {
    value: 15000,
    suffix: "+",
    label: "Workforce Professionals",
    formatFn: (val) => Math.floor(val).toLocaleString(),
  },
  {
    value: 200,
    suffix: "+",
    label: "Clients Served",
    formatFn: (val) => Math.floor(val).toString(),
  },
  {
    value: 20,
    suffix: "M+",
    label: "Sq Ft Managed",
    formatFn: (val) => Math.floor(val).toString(),
  },
  {
    value: 20,
    suffix: "+",
    label: "Years of Experience",
    formatFn: (val) => Math.floor(val).toString(),
  },
];

export function Stats() {
  const containerRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<(HTMLSpanElement | null)[]>([]);

  useGSAP(
    () => {
      // Loop over each stat item and build a ScrollTrigger-triggered timeline
      statsData.forEach((stat, index) => {
        const el = elementsRef.current[index];
        if (!el) return;

        const countObj = { val: 0 };

        gsap.to(countObj, {
          val: stat.value,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          onUpdate: () => {
            el.innerText = stat.formatFn(countObj.val);
          },
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full py-16 md:py-24 bg-base-50/50 border-y border-surface-border overflow-hidden"
    >
      {/* Decorative light glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-72 h-72 rounded-full bg-accent/5 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-72 h-72 rounded-full bg-accent/5 blur-3xl pointer-events-none" />

      <div className="container-section relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 divide-y sm:divide-y-0 sm:divide-x divide-surface-border">
          {statsData.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center p-6 lg:p-8 text-center"
            >
              {/* Stat number with suffix */}
              <div className="flex items-baseline font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-ink select-none tracking-tight">
                <span
                  ref={(el) => {
                    elementsRef.current[idx] = el;
                  }}
                >
                  0
                </span>
                <span className="text-accent ml-0.5">{stat.suffix}</span>
              </div>

              {/* Label */}
              <span className="mt-3 text-xs sm:text-sm font-semibold tracking-wider text-ink-muted uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Stats;
