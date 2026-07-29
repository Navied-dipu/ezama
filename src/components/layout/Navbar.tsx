"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Features", href: "#features" },
  { label: "About", href: "#about" },
  { label: "Pricing", href: "#pricing" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Monitor scroll height to trigger glassmorphism background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on Esc key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Framer Motion variants for staggered mobile link entries
  const menuVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.15,
        duration: 0.4,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
    exit: { opacity: 0, y: 15, transition: { duration: 0.2 } },
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-smooth w-full",
          isScrolled
            ? "bg-base/70 backdrop-blur-md border-b border-surface-border py-4 shadow-card"
            : "bg-transparent py-6"
        )}
      >
        <div className="container-section flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            aria-label="Dacitos home"
            className="flex items-center gap-2 font-display text-xl font-bold tracking-tight text-ink hover:text-accent transition-colors duration-200"
          >
            <span className="h-6 w-6 rounded bg-accent-gradient inline-block shadow-glow-sm" />
            <span>Dacitos</span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1.5" aria-label="Main Navigation">
            {navItems.map((item, idx) => (
              <Link
                key={item.label}
                href={item.href}
                className="relative px-4 py-2 text-sm font-medium text-ink-muted hover:text-ink transition-colors duration-300 rounded-lg select-none"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {hoveredIndex === idx && (
                  <motion.span
                    layoutId="navbar-hover"
                    className="absolute inset-0 bg-white/5 rounded-lg border border-white/5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </Link>
            ))}
          </nav>

          {/* CTA / Right Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Button variant="primary" size="sm">
              Get Started
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-xl bg-white/5 border border-surface-border focus:outline-none focus-visible:outline-2 focus-visible:outline-accent"
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            <span
              className={cn(
                "h-0.5 w-5 bg-ink rounded-full transition-all duration-300 ease-out-expo",
                isOpen ? "rotate-45 translate-y-[3px]" : "-translate-y-1"
              )}
            />
            <span
              className={cn(
                "h-0.5 w-5 bg-ink rounded-full transition-all duration-300 ease-out-expo mt-0.5",
                isOpen ? "-rotate-45 -translate-y-[3px]" : "translate-y-1"
              )}
            />
          </button>
        </div>
      </header>

      {/* Mobile Animated Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-base/95 backdrop-blur-lg md:hidden flex flex-col justify-center pt-24 pb-12"
          >
            <motion.nav
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex flex-col items-center justify-center gap-8 w-full flex-grow text-center"
              aria-label="Mobile Navigation"
            >
              {navItems.map((item) => (
                <motion.div key={item.label} variants={itemVariants}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-2xl font-display font-medium text-ink hover:text-accent transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div variants={itemVariants} className="flex flex-col gap-4 w-full max-w-[280px] mt-4 px-6">
                <Button variant="ghost" onClick={() => setIsOpen(false)} fullWidth>
                  Sign In
                </Button>
                <Button variant="primary" onClick={() => setIsOpen(false)} fullWidth>
                  Get Started
                </Button>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
