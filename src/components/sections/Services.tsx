"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

// ─── Service Data ─────────────────────────────────────────────────────────────

interface Service {
  slug: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  accentClass: string; // tailwind gradient for icon bg
}

const services: Service[] = [
  {
    slug: "housekeeping",
    name: "Housekeeping",
    description:
      "Daily and periodic cleaning programmes ensuring spotless, hygienic environments across commercial and industrial facilities.",
    accentClass: "from-cyan-500/20 to-blue-600/10",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 1-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
  {
    slug: "mep",
    name: "MEP Services",
    description:
      "Preventive and corrective maintenance of Mechanical, Electrical, and Plumbing systems to maximise uptime and safety compliance.",
    accentClass: "from-yellow-500/20 to-orange-500/10",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l5.654-4.654m5.879-4.82a3.975 3.975 0 0 0-5.651 0l-1.35 1.35a3.975 3.975 0 0 0 0 5.651" />
      </svg>
    ),
  },
  {
    slug: "security",
    name: "Security Management",
    description:
      "24/7 manned guarding, CCTV surveillance, access control and emergency response services protecting people and assets.",
    accentClass: "from-red-500/20 to-rose-600/10",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
  },
  {
    slug: "pest-control",
    name: "Pest Control",
    description:
      "Science-backed integrated pest management programmes eliminating infestations while safeguarding occupant health and the environment.",
    accentClass: "from-green-500/20 to-emerald-600/10",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
      </svg>
    ),
  },
  {
    slug: "gardening",
    name: "Gardening & Landscaping",
    description:
      "Professional horticulture and landscape management creating vibrant, well-maintained green spaces for every facility type.",
    accentClass: "from-lime-500/20 to-green-600/10",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
      </svg>
    ),
  },
  {
    slug: "stp-wtp",
    name: "STP & WTP Management",
    description:
      "Expert operation and maintenance of Sewage Treatment Plants and Water Treatment Plants ensuring regulatory compliance and zero discharge violations.",
    accentClass: "from-blue-500/20 to-indigo-600/10",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c-4.444 4.417-6.75 7.98-6.75 10.5a6.75 6.75 0 0 0 13.5 0C18.75 10.98 16.444 7.417 12 3Z" />
      </svg>
    ),
  },
  {
    slug: "parking",
    name: "Parking Management",
    description:
      "Efficient parking operations including ANPR, valet services, EV charging bay management and seamless visitor flow coordination.",
    accentClass: "from-violet-500/20 to-purple-600/10",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
  },
  {
    slug: "swimming-pool",
    name: "Swimming Pool Maintenance",
    description:
      "Complete pool care including chemical dosing, filtration servicing, lifeguard deployment and regular water quality certification.",
    accentClass: "from-sky-500/20 to-cyan-600/10",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25c-3.183 0-5.683-.787-7.25-2.022V19.5a.75.75 0 0 0 1.067.68L12 18l5.183 2.18A.75.75 0 0 0 18.25 19.5v-4.272C16.683 16.463 14.183 17.25 12 17.25Z" />
      </svg>
    ),
  },
];

// ─── Animation Variants ───────────────────────────────────────────────────────

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.05,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const iconVariants: Variants = {
  rest: { scale: 1, rotate: 0 },
  hover: {
    scale: 1.18,
    rotate: -6,
    transition: { type: "spring", stiffness: 400, damping: 15 },
  },
};

// ─── Component ────────────────────────────────────────────────────────────────

export function Services() {
  return (
    <section
      id="services"
      className="relative w-full py-24 md:py-32 bg-base overflow-hidden"
    >
      {/* Background accent blobs */}
      <div className="absolute -top-48 -right-48 w-[480px] h-[480px] rounded-full bg-accent/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-accent/4 blur-3xl pointer-events-none" />

      <div className="container-section relative z-10 flex flex-col gap-14">
        {/* Heading */}
        <SectionHeading
          title="Our Core Services"
          eyebrow="What We Deliver"
          align="center"
        />

        {/* Card Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-6%" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.slug}
              variants={cardVariants}
              initial="rest"
              whileHover="hover"
              className="group relative flex flex-col gap-5 p-6 rounded-2xl overflow-hidden cursor-default
                bg-surface/50 backdrop-blur-md
                border border-surface-border
                hover:border-accent/30
                shadow-card hover:shadow-[0_8px_40px_rgba(0,0,0,0.45),0_0_24px_rgba(0,212,255,0.10)]
                hover:-translate-y-1.5
                transition-[transform,box-shadow,border-color,background-color] duration-300 ease-smooth"
            >
              {/* Inner glass sheen */}
              <div className="absolute inset-0 rounded-2xl bg-[linear-gradient(135deg,rgba(255,255,255,0.05)_0%,transparent_60%)] pointer-events-none" />

              {/* Hover glow orb */}
              <div className="absolute -top-10 -left-10 w-36 h-36 rounded-full bg-accent/8 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Icon */}
              <motion.div
                variants={iconVariants}
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.accentClass} border border-white/10 flex items-center justify-center text-accent shrink-0 group-hover:shadow-glow-sm transition-shadow duration-300`}
              >
                {service.icon}
              </motion.div>

              {/* Text */}
              <div className="flex flex-col gap-1.5 relative z-10">
                <h3 className="text-base font-bold font-display text-ink leading-snug">
                  {service.name}
                </h3>
                <p className="text-sm text-ink-muted leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Arrow indicator */}
              <div className="mt-auto flex items-center gap-1.5 text-2xs font-semibold text-accent/60 group-hover:text-accent transition-colors duration-300 relative z-10">
                <span>Learn more</span>
                <motion.svg
                  variants={{
                    rest: { x: 0 },
                    hover: { x: 4, transition: { type: "spring", stiffness: 400, damping: 20 } },
                  }}
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </motion.svg>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center"
        >
          <Button variant="secondary" size="lg" rightIcon={
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          }>
            View All Services
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
