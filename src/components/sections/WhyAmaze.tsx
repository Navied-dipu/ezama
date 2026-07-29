"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { motion, Variants } from "framer-motion";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Point {
  number: string;
  badge: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const POINTS: Point[] = [
  {
    number: "01",
    badge: "100% In-House",
    title: "In-House Teams, No Subcontracting",
    description:
      "Every technician, security guard, and housekeeper on your premises is a direct Dacitos employee — trained under our own certification programme, accountable to our internal SLA benchmarks, and covered under our quality guarantee.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
      </svg>
    ),
  },
  {
    number: "02",
    badge: "Monthly Audits",
    title: "Regular Site Audits & Optimisation",
    description:
      "Our dedicated Quality Assurance team conducts unannounced site audits, generating real-time digital inspection reports with photographic evidence — driving continuous service improvement that keeps your facility performing at its peak.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" />
      </svg>
    ),
  },
  {
    number: "03",
    badge: "20+ Cities",
    title: "Pan-India Coverage",
    description:
      "From metro CBDs to tier-2 industrial hubs, our operational footprint and rapid deployment capability spans more than 20 cities across every major Indian region — delivering the same standard of excellence whether you operate in Mumbai or Mangalore.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    number: "04",
    badge: "Since 2004",
    title: "20+ Years of Trusted Service",
    description:
      "Two decades of consistent delivery for blue-chip clients has given us deep operational playbooks, industry relationships, and institutional knowledge that newcomers simply cannot replicate. Our legacy is your assurance.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
      </svg>
    ),
  },
];

// Deterministic window lit pattern (no Math.random — avoids hydration mismatch)
const LIT_WINDOWS: boolean[][] = [
  [true, false, true],
  [false, true, true],
  [true, true, false],
  [false, false, true],
  [true, false, false],
  [true, true, true],
  [false, true, false],
  [true, false, true],
  [false, true, true],
  [true, false, false],
  [false, true, true],
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function PointCard({ point, index }: { point: Point; index: number }) {
  return (
    <div className="flex flex-col gap-6">
      {/* Number + Badge */}
      <div className="flex items-center gap-4">
        <span className="text-6xl lg:text-8xl font-display font-extrabold text-accent/15 leading-none select-none tabular-nums">
          {point.number}
        </span>
        <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-2xs font-bold tracking-widest text-accent uppercase">
          {point.badge}
        </span>
      </div>

      {/* Icon + Title */}
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 shrink-0 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
          {point.icon}
        </div>
        <h3 className="text-2xl lg:text-3xl font-extrabold font-display text-ink leading-tight pt-1.5">
          {point.title}
        </h3>
      </div>

      {/* Description */}
      <p className="text-base text-ink-muted leading-relaxed max-w-lg pl-16">
        {point.description}
      </p>

      {/* Step dots */}
      <div className="flex gap-2 pl-16 mt-1">
        {POINTS.map((_, i) => (
          <span
            key={i}
            className={`h-1 rounded-full transition-all duration-300 ${
              i === index ? "w-8 bg-accent" : "w-2.5 bg-ink-subtle/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function ArchitecturalGraphic() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Concentric ring pulse */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-72 h-72 rounded-full border border-accent/8 animate-[pulse_4s_ease-in-out_infinite]" />
        <div className="absolute w-56 h-56 rounded-full border border-accent/12 animate-[pulse_4s_ease-in-out_infinite_0.5s]" />
        <div className="absolute w-40 h-40 rounded-full border border-accent/18 animate-[pulse_4s_ease-in-out_infinite_1s]" />
      </div>

      {/* Blueprint Building SVG */}
      <svg
        viewBox="0 0 360 440"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 w-[260px] h-[320px] lg:w-[300px] lg:h-[370px]"
      >
        {/* Ground line */}
        <line x1="20" y1="400" x2="340" y2="400" stroke="rgba(0,212,255,0.25)" strokeWidth="1.5" />

        {/* Left wing */}
        <rect x="48" y="190" width="72" height="210" fill="rgba(0,212,255,0.025)" stroke="rgba(0,212,255,0.2)" strokeWidth="1.5" />
        {[0, 1, 2, 3, 4, 5].map((row) =>
          [0, 1].map((col) => (
            <rect
              key={`lw-${row}-${col}`}
              x={58 + col * 28}
              y={205 + row * 30}
              width="16" height="18" rx="1"
              fill={row % 2 === col % 2 ? "rgba(0,212,255,0.12)" : "rgba(0,212,255,0.04)"}
              stroke="rgba(0,212,255,0.15)" strokeWidth="0.75"
            />
          ))
        )}

        {/* Main tower */}
        <rect x="118" y="80" width="124" height="320" fill="rgba(0,212,255,0.04)" stroke="rgba(0,212,255,0.35)" strokeWidth="1.5" />

        {/* Tower top cap */}
        <rect x="138" y="58" width="84" height="28" fill="rgba(0,212,255,0.06)" stroke="rgba(0,212,255,0.45)" strokeWidth="1.5" />
        <rect x="158" y="38" width="44" height="24" fill="rgba(0,212,255,0.06)" stroke="rgba(0,212,255,0.55)" strokeWidth="1.5" />

        {/* Antenna */}
        <line x1="180" y1="38" x2="180" y2="16" stroke="rgba(0,212,255,0.65)" strokeWidth="1.5" />
        <circle cx="180" cy="13" r="4.5" fill="rgba(0,212,255,0.9)" />
        <circle cx="180" cy="13" r="8" stroke="rgba(0,212,255,0.3)" strokeWidth="1" fill="none" />

        {/* Tower windows */}
        {LIT_WINDOWS.map((row, rowIdx) =>
          row.map((lit, colIdx) => (
            <rect
              key={`tw-${rowIdx}-${colIdx}`}
              x={130 + colIdx * 34}
              y={96 + rowIdx * 26}
              width="20" height="16" rx="1.5"
              fill={lit ? "rgba(0,212,255,0.18)" : "rgba(0,212,255,0.04)"}
              stroke="rgba(0,212,255,0.22)" strokeWidth="0.75"
            />
          ))
        )}

        {/* Right wing */}
        <rect x="240" y="220" width="72" height="180" fill="rgba(0,212,255,0.02)" stroke="rgba(0,212,255,0.18)" strokeWidth="1.5" />
        {[0, 1, 2, 3, 4].map((row) =>
          [0, 1].map((col) => (
            <rect
              key={`rw-${row}-${col}`}
              x={250 + col * 28}
              y={235 + row * 30}
              width="16" height="18" rx="1"
              fill={row % 2 !== col % 2 ? "rgba(0,212,255,0.10)" : "rgba(0,212,255,0.04)"}
              stroke="rgba(0,212,255,0.12)" strokeWidth="0.75"
            />
          ))
        )}

        {/* Ground lobby */}
        <rect x="100" y="368" width="160" height="32" fill="rgba(0,212,255,0.07)" stroke="rgba(0,212,255,0.28)" strokeWidth="1.5" />
        <rect x="153" y="352" width="54" height="48" fill="rgba(0,212,255,0.09)" stroke="rgba(0,212,255,0.32)" strokeWidth="1.5" />
        {/* Door */}
        <rect x="168" y="375" width="24" height="25" rx="1" fill="rgba(0,212,255,0.15)" stroke="rgba(0,212,255,0.4)" strokeWidth="1" />

        {/* Blueprint measurement guides */}
        <line x1="106" y1="80" x2="106" y2="400" stroke="rgba(0,212,255,0.1)" strokeWidth="0.75" strokeDasharray="5 7" />
        <line x1="254" y1="80" x2="254" y2="400" stroke="rgba(0,212,255,0.1)" strokeWidth="0.75" strokeDasharray="5 7" />

        {/* Crosshair centre */}
        <circle cx="180" cy="240" r="3" fill="rgba(0,212,255,0.6)" />
        <line x1="162" y1="240" x2="198" y2="240" stroke="rgba(0,212,255,0.25)" strokeWidth="0.75" strokeDasharray="3 4" />
        <line x1="180" y1="222" x2="180" y2="258" stroke="rgba(0,212,255,0.25)" strokeWidth="0.75" strokeDasharray="3 4" />
      </svg>

      {/* Floating stat badges */}
      <div className="absolute top-[12%] right-0 lg:right-[-10px]">
        <div className="px-3 py-1.5 rounded-lg bg-surface/80 backdrop-blur-sm border border-surface-border shadow-card text-xs font-semibold text-ink whitespace-nowrap">
          📐 20M+ Sq Ft
        </div>
      </div>
      <div className="absolute bottom-[18%] left-0 lg:left-[-10px]">
        <div className="px-3 py-1.5 rounded-lg bg-surface/80 backdrop-blur-sm border border-surface-border shadow-card text-xs font-semibold text-ink whitespace-nowrap">
          🏢 200+ Clients
        </div>
      </div>
      <div className="absolute top-[55%] right-[-5px] lg:right-[-15px]">
        <div className="px-3 py-1.5 rounded-lg bg-accent/10 backdrop-blur-sm border border-accent/20 text-xs font-semibold text-accent whitespace-nowrap">
          ✦ 20+ Years
        </div>
      </div>
    </div>
  );
}

// Mobile fade variants
const mobileVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] },
  }),
};

// ─── Main Export ──────────────────────────────────────────────────────────────

export function WhyAmaze() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const pts = gsap.utils.toArray<Element>(".why-point-desktop");
        if (pts.length < 2) return;

        // Hide all but first
        gsap.set(pts.slice(1), { autoAlpha: 0, y: 60 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: `+=${(pts.length - 1) * 700}`,
            pin: true,
            scrub: 1,
            anticipatePin: 1,
          },
        });

        pts.forEach((pt, i) => {
          if (i === pts.length - 1) return;
          tl.to(pt, { autoAlpha: 0, y: -70, duration: 1 })
            .fromTo(
              pts[i + 1],
              { autoAlpha: 0, y: 70 },
              { autoAlpha: 1, y: 0, duration: 1 },
              "<0.3"
            );
        });

        return () => {
          ScrollTrigger.getAll().forEach((t) => t.kill());
        };
      });

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="why-amaze"
      className="relative w-full bg-base overflow-hidden"
    >
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right,rgba(0,212,255,0.4) 1px,transparent 1px),
            linear-gradient(to bottom,rgba(0,212,255,0.4) 1px,transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* ─── Desktop: Pinned two-column layout ─── */}
      <div className="hidden lg:grid lg:grid-cols-2 lg:h-screen lg:items-center container-section gap-16">
        {/* Left: pinned graphic */}
        <div className="relative h-full flex flex-col justify-center py-20">
          <div className="absolute top-10 left-0">
            <span className="inline-flex items-center gap-2 text-2xs font-semibold tracking-widest text-accent uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              Why Amaze
            </span>
          </div>
          <div className="h-[420px]">
            <ArchitecturalGraphic />
          </div>
          <h2 className="text-3xl font-extrabold font-display text-ink leading-tight mt-6">
            Why Leading Enterprises<br />
            <span className="text-gradient">Choose Amaze</span>
          </h2>
        </div>

        {/* Right: absolute-stacked points for GSAP */}
        <div className="relative h-full flex items-center">
          <div className="relative w-full" style={{ height: "340px" }}>
            {POINTS.map((point, i) => (
              <div
                key={point.number}
                className="why-point-desktop absolute inset-0 flex items-start pt-4"
              >
                <PointCard point={point} index={i} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── Mobile: Stacked section with Framer Motion ─── */}
      <div className="lg:hidden container-section py-20 flex flex-col gap-12">
        {/* Heading */}
        <div className="flex flex-col gap-2">
          <span className="inline-flex items-center gap-2 text-2xs font-semibold tracking-widest text-accent uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            Why Amaze
          </span>
          <h2 className="text-3xl font-extrabold font-display text-ink leading-tight">
            Why Leading Enterprises
            <br />
            <span className="text-gradient">Choose Amaze</span>
          </h2>
        </div>

        {/* Graphic */}
        <div className="h-72 relative">
          <ArchitecturalGraphic />
        </div>

        {/* Points stacked */}
        <div className="flex flex-col gap-10">
          {POINTS.map((point, i) => (
            <motion.div
              key={point.number}
              custom={i}
              variants={mobileVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-5%" }}
              className="border-t border-surface-border pt-10 first:border-t-0 first:pt-0"
            >
              <PointCard point={point} index={i} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
