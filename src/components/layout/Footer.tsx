"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

const footerColumns: FooterColumn[] = [
  {
    title: "Services",
    links: [
      { label: "Housekeeping", href: "#services" },
      { label: "MEP Services", href: "#services" },
      { label: "Security Management", href: "#services" },
      { label: "STP & WTP Management", href: "#services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#about" },
      { label: "Why Amaze", href: "#why-amaze" },
      { label: "Operational Blueprint", href: "#how-we-work" },
      { label: "Client Stories", href: "#testimonials" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "SLA Framework", href: "#" },
      { label: "Compliance Standards", href: "#" },
    ],
  },
];

const socialLinks = [
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="relative w-full bg-base border-t border-surface-border py-16 overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-accent/3 blur-3xl pointer-events-none" />

      <div className="container-section relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 pb-16">
          {/* Logo & Tagline column */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <Link
              href="/"
              aria-label="Dacitos home"
              className="flex items-center gap-2 font-display text-xl font-bold tracking-tight text-ink hover:text-accent transition-colors duration-200"
            >
              <span className="h-6 w-6 rounded bg-accent-gradient inline-block shadow-glow-sm" />
              <span>Dacitos</span>
            </Link>
            <p className="text-sm text-ink-muted leading-relaxed max-w-sm">
              Optimising operations, reducing overhead, and building resilient environments for enterprise real estate and premium corporate spaces.
            </p>
            {/* Social icons */}
            <div className="flex gap-3 mt-2">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  whileHover={{ scale: 1.1, color: "#00D4FF" }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center w-9 h-9 rounded-lg bg-surface border border-surface-border text-ink-muted hover:border-accent/40 transition-colors duration-300"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links columns */}
          {footerColumns.map((col) => (
            <div key={col.title} className="flex flex-col gap-4">
              <h3 className="text-xs font-semibold tracking-widest text-ink uppercase">
                {col.title}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group relative inline-block text-sm text-ink-muted hover:text-ink transition-colors duration-300 pb-1"
                    >
                      <span>{link.label}</span>
                      <span className="absolute bottom-0 left-0 h-px w-full bg-accent scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-surface-border flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-ink-subtle">
          <span>&copy; {new Date().getFullYear()} Dacitos Inc. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent transition-colors">Security Audit</a>
            <a href="#" className="hover:text-accent transition-colors">Vendor Login</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
