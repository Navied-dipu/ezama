"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/Button";

// Headline Options for the user:
// 1. "Managing Excellence Across 20 Million Sq Ft" (Default)
// 2. "Engineered to Elevate Your Spaces & Operations"
// 3. "Architecting the Future of Premium Facilities"

export function Hero() {
  const words = "Managing Excellence Across 20 Million Sq Ft".split(" ");

  // Framer Motion animation containers
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 18,
      },
    },
  };

  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-base py-24">
      {/* ─── Blueprint Grid Background ─── */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        {/* Subtle grid base */}
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0, 212, 255, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 212, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Diagonal architectural drawing grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(45deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(-45deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "120px 120px",
          }}
        />

        {/* Radial dark mask to vignette the grid */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-base/80 to-base" />

        {/* Abstract Architectural blueprint lines (Slowly drifting SVG layers) */}
        <svg
          className="absolute right-0 bottom-0 w-full md:w-3/4 lg:w-2/3 h-full text-accent/10 opacity-30 mix-blend-screen"
          viewBox="0 0 800 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Animated Building Wireframes */}
          <motion.path
            d="M100 700 V300 H300 V400 H500 V200 H700 V700"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="8 8"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.path
            d="M 50 700 L 250 500 H 450 L 650 300 V 700"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="4 4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 6, ease: "easeInOut", delay: 1, repeat: Infinity, repeatType: "reverse" }}
          />
          {/* Drifting measurement crosshairs */}
          <motion.circle
            cx="300"
            cy="400"
            r="6"
            stroke="currentColor"
            strokeWidth="1.5"
            animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.circle
            cx="500"
            cy="200"
            r="6"
            stroke="currentColor"
            strokeWidth="1.5"
            animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
          />
        </svg>
      </div>

      {/* ─── Hero Content ─── */}
      <div className="container-section relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto px-6">
        {/* Eyebrow Label */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/20 bg-accent/5 text-2xs font-semibold tracking-widest text-accent uppercase mb-6"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
          Premium Facilities Management
        </motion.div>

        {/* Staggered Word Reveal Headline */}
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-ink leading-[1.1] mb-6 font-display"
        >
          {words.map((word, index) => (
            <span key={index} className="inline-block overflow-hidden mr-2 md:mr-3 py-1">
              <motion.span variants={wordVariants} className="inline-block">
                {word}
              </motion.span>
            </span>
          ))}
        </motion.h1>

        {/* Subheadline value proposition */}
        <motion.p
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
          className="text-base sm:text-lg md:text-xl text-ink-muted max-w-2xl mb-10 leading-relaxed font-sans"
        >
          Optimizing operations, reducing overhead, and building resilient environments for enterprise real estate and premium corporate spaces.
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <Button variant="primary" size="lg" className="w-full sm:w-auto">
            Get Started
          </Button>
          <Button variant="ghost" size="lg" className="w-full sm:w-auto">
            Explore Services
          </Button>
        </motion.div>
      </div>

      {/* ─── Scroll-Down Indicator ─── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-ink-subtle hover:text-accent transition-colors duration-300"
        >
          <span className="text-2xs font-semibold tracking-widest uppercase">Scroll</span>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
