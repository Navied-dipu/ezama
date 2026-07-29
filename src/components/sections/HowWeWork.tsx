"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { motion, Variants } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface Step {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const steps: Step[] = [
  {
    number: "01",
    title: "Site Assessment",
    description: "Our engineering experts perform a comprehensive review of your facilities, assets, and operational logs to map efficiencies.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-3-10.5h.008v.008H12.75V7.5Zm0 3h.008v.008H12.75v-.008Zm0 3h.008v.008H12.75v-.008Zm3.188 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm-3.188 3h.008v.008H12.75v-.008Zm-3.188 0h.008v.008H9.563v-.008Zm-3.188 0h.008v.008H6.375v-.008Zm-3.187 0h.008v.008H3.188v-.008Zm12-12.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm-3-3h.008v.008H12.75v-.008Zm-3-3h.008v.008H9.563V4.5Zm0 3h.008v.008H9.563v-.008Zm-3-3h.008v.008H6.375V4.5Zm0 3h.008v.008H6.375v-.008Z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Custom Plan",
    description: "We design a tailor-made service levels agreement (SLA), preventative schedules, and resource rosters mapped to your budget.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Deployment",
    description: "Our certified in-house teams are deployed on-site, implementing modern management protocols and activating real-time CAFM systems.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.63 8.41m5.96 5.96a14.962 14.962 0 0 1-10.72 10.72M9.63 8.41a14.939 14.939 0 0 0-6.16 12.119 14.94 14.94 0 0 0 12.12-6.16m-5.96-5.96a14.96 14.96 0 0 1 10.72-10.72M9.63 8.41A14.98 14.98 0 0 0 3.47 20.53m0 0a14.98 14.98 0 0 0 12.12-6.16" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Ongoing Audit",
    description: "Continuous site assessments, predictive asset tracking, and detailed performance reporting ensure optimal building longevity.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
      </svg>
    ),
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.15,
      ease: "easeOut",
    },
  }),
};

export function HowWeWork() {
  const containerRef = useRef<HTMLDivElement>(null);
  const linePathRef = useRef<SVGPathElement>(null);

  useGSAP(
    () => {
      const linePath = linePathRef.current;
      if (!linePath) return;

      const pathLength = linePath.getTotalLength();
      gsap.set(linePath, { strokeDasharray: pathLength, strokeDashoffset: pathLength });

      gsap.to(linePath, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
          end: "bottom 80%",
          scrub: 1.2,
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="how-we-work"
      className="relative w-full py-24 md:py-32 bg-base overflow-hidden"
    >
      <div className="container-section relative z-10">
        <SectionHeading
          title="Our Operational Blueprint"
          eyebrow="How We Work"
          align="center"
          className="mb-20"
        />

        {/* ─── Desktop Horizontal Timeline ─── */}
        <div className="hidden lg:block relative w-full px-6">
          {/* Animated Connecting Line */}
          <div className="absolute top-1/2 left-0 right-0 -translate-y-[80px] pointer-events-none select-none">
            <svg
              className="w-full h-8"
              viewBox="0 0 1200 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              {/* Background solid path */}
              <path
                d="M 50 15 L 1150 15"
                stroke="rgba(255, 255, 255, 0.05)"
                strokeWidth="4"
                strokeLinecap="round"
              />
              {/* Animated active path */}
              <path
                ref={linePathRef}
                d="M 50 15 L 1150 15"
                stroke="url(#line-grad)"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="line-grad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#00D4FF" />
                  <stop offset="100%" stopColor="#0072FF" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Timeline Nodes Grid */}
          <div className="grid grid-cols-4 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                custom={idx}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-10%" }}
                className="flex flex-col items-center text-center"
              >
                {/* Node circle */}
                <div className="relative mb-8 flex items-center justify-center w-14 h-14 rounded-full bg-surface border border-surface-border group-hover:border-accent text-accent shadow-card transition-all duration-300">
                  {step.icon}
                  {/* Step counter tag */}
                  <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-base shadow-glow-sm">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-lg font-bold font-display text-ink mb-3 select-none">
                  {step.title}
                </h3>
                <p className="text-sm text-ink-muted leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ─── Mobile / Tablet Vertical Timeline ─── */}
        <div className="lg:hidden relative pl-6 sm:pl-10 md:max-w-2xl mx-auto flex flex-col gap-12">
          {/* Vertical connecting line */}
          <div className="absolute top-4 bottom-4 left-[31px] sm:left-[47px] w-0.5 bg-surface-border" />

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10%" }}
              className="flex gap-6 relative"
            >
              {/* Step counter / icon on left */}
              <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-xl bg-surface border border-surface-border text-accent shrink-0 shadow-card">
                {step.icon}
                <span className="absolute -top-1.5 -right-1.5 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-accent text-[9px] font-bold text-base shadow-glow-sm">
                  {step.number}
                </span>
              </div>

              {/* Text content on right */}
              <div className="flex flex-col pt-1">
                <h3 className="text-base font-bold font-display text-ink mb-1.5">
                  {step.title}
                </h3>
                <p className="text-sm text-ink-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default HowWeWork;
