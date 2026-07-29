"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  initials: string;
  color: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Dacitos transformed our 400,000 sq ft campus operations. Response times dropped by 60%, and our energy costs fell by 22% in the first year. The team's professionalism is unmatched.",
    author: "Ananya Sharma",
    role: "VP Real Estate & Facilities",
    company: "GlobalTech India",
    initials: "AS",
    color: "from-cyan-500 to-blue-500",
  },
  {
    quote: "We've worked with multiple FM partners across our 12 facilities. Dacitos stands apart — their CAFM reporting gives us visibility we never had before, and the compliance track record is exemplary.",
    author: "Rajiv Mehta",
    role: "Head of Operations",
    company: "Prestige Commercial",
    initials: "RM",
    color: "from-violet-500 to-purple-600",
  },
  {
    quote: "From soft services to critical MEP maintenance, everything is handled seamlessly. Our occupant satisfaction scores hit an all-time high of 94% last quarter, directly attributed to the Dacitos team.",
    author: "Priya Nair",
    role: "Senior Director – Corporate Services",
    company: "Axiom Financial Group",
    initials: "PN",
    color: "from-emerald-500 to-teal-600",
  },
];

const clientLogos = [
  "GlobalTech", "Prestige", "Axiom", "InfraCore", "NovaMed", "PrimeREIT",
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative w-full py-24 md:py-32 bg-surface/30 border-y border-surface-border overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(0,212,255,0.4) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container-section relative z-10 flex flex-col gap-20">
        {/* Heading */}
        <SectionHeading
          title="Trusted by Leading Enterprises"
          eyebrow="Client Stories"
          align="center"
        />

        {/* Testimonial Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-5%" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="relative flex flex-col gap-6 rounded-2xl border border-surface-border bg-surface/60 backdrop-blur-sm p-7 group hover:border-accent/25 transition-colors duration-300 overflow-hidden"
            >
              {/* Gradient orb behind card */}
              <div className={`absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br ${t.color} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500 pointer-events-none`} />

              {/* Quote mark */}
              <svg
                className="w-8 h-8 text-accent/30 shrink-0"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              {/* Quote text */}
              <p className="text-sm text-ink-muted leading-relaxed flex-1 italic">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Divider */}
              <div className="h-px w-full bg-surface-border" />

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-xs font-bold shrink-0`}>
                  {t.initials}
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-sm font-semibold text-ink truncate">{t.author}</span>
                  <span className="text-2xs text-ink-muted truncate">
                    {t.role} · {t.company}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Client Logo Strip */}
        <div className="flex flex-col items-center gap-6">
          <p className="text-xs font-semibold tracking-widest text-ink-subtle uppercase">
            Trusted by Industry Leaders
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {clientLogos.map((logo) => (
              <motion.span
                key={logo}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-base font-display font-bold text-ink-subtle/50 tracking-widest uppercase hover:text-ink-muted transition-colors duration-300 cursor-default select-none"
              >
                {logo}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
