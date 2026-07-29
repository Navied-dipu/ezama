"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  tags: string[];
}

const services: Service[] = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
      </svg>
    ),
    title: "Building Operations & Maintenance",
    description: "End-to-end preventive and corrective maintenance programs for MEP systems, civil structures, and critical infrastructure across multi-site portfolios.",
    tags: ["HVAC", "Electrical", "Plumbing", "Civil"],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
    title: "Integrated Security Management",
    description: "Comprehensive physical security programs encompassing CCTV surveillance, access control systems, manned guarding and emergency response protocols.",
    tags: ["CCTV", "Access Control", "Guarding", "Emergency"],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    ),
    title: "Sustainability & Energy Management",
    description: "Data-driven sustainability programs targeting energy reduction, carbon footprint minimization, and green certification compliance across your estate.",
    tags: ["LEED", "ISO 50001", "Carbon Net-Zero", "Smart Metering"],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    title: "Workspace & Soft Services",
    description: "Professional housekeeping, landscaping, pantry management, and front-office services designed to deliver a world-class occupant experience.",
    tags: ["Housekeeping", "Landscaping", "Pantry", "Reception"],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 1-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    title: "Health, Safety & Compliance",
    description: "Robust HSE frameworks aligned with ISO 45001, local statutory regulations, and client-specific EHS policy requirements for zero-incident operations.",
    tags: ["ISO 45001", "OSHA", "Fire Safety", "Risk Audit"],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
      </svg>
    ),
    title: "Asset & Space Planning",
    description: "Strategic space utilization analytics, churn management, and CAFM-backed asset lifecycle planning to maximize your real estate ROI.",
    tags: ["CAFM", "BIM", "Space Analytics", "Move Management"],
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

export function Services() {
  return (
    <section id="services" className="relative w-full py-24 md:py-32 bg-base overflow-hidden">
      {/* Background accent blobs */}
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-accent/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-accent/4 blur-3xl pointer-events-none" />

      <div className="container-section relative z-10">
        <SectionHeading
          title="End-to-End Facilities Services"
          eyebrow="What We Do"
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-5%" }}
              className={cn(
                "group relative flex flex-col gap-5 p-6 rounded-2xl border border-surface-border",
                "bg-surface/40 backdrop-blur-sm",
                "hover:border-accent/30 hover:bg-surface/70 transition-all duration-300",
                "before:absolute before:inset-0 before:rounded-2xl",
                "before:bg-[linear-gradient(135deg,rgba(255,255,255,0.04)_0%,transparent_60%)]",
                "before:pointer-events-none overflow-hidden"
              )}
            >
              {/* Hover glow top-left */}
              <div className="absolute -top-16 -left-16 w-40 h-40 rounded-full bg-accent/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Icon */}
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 text-accent shrink-0 group-hover:shadow-glow-sm transition-shadow duration-300">
                {service.icon}
              </div>

              {/* Text */}
              <div className="flex flex-col gap-2">
                <h3 className="text-base font-bold font-display text-ink leading-snug">
                  {service.title}
                </h3>
                <p className="text-sm text-ink-muted leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-2 py-0.5 rounded-md text-2xs font-semibold tracking-wide bg-base-200 border border-base-300 text-ink-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
