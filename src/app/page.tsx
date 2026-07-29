"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-base">
        {/* Hero Section */}
        <Hero />

        {/* Stats Section */}
        <Stats />

        {/* Components Showcase / Features Section */}
        <section id="features" className="py-24 md:py-32 container-section">
          <SectionHeading
            title="Operational Capabilities"
            eyebrow="Our Platform Services"
            align="center"
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card interactive className="flex flex-col gap-4">
              <div className="flex justify-between items-start">
                <Badge variant="glow">Smart Tech</Badge>
                <span className="text-2xs text-ink-muted">Active</span>
              </div>
              <h3 className="text-xl font-bold font-display text-ink mt-2">
                IoT Asset Management
              </h3>
              <p className="text-sm text-ink-muted leading-relaxed">
                Connect and monitor building HVAC, power systems, and physical security real-time telemetry pipelines.
              </p>
              <div className="mt-auto pt-4">
                <Button variant="ghost" size="sm" className="w-full">
                  Learn More
                </Button>
              </div>
            </Card>

            <Card interactive className="flex flex-col gap-4">
              <div className="flex justify-between items-start">
                <Badge variant="primary">Sustainability</Badge>
                <span className="text-2xs text-ink-muted">New</span>
              </div>
              <h3 className="text-xl font-bold font-display text-ink mt-2">
                Net-Zero Architecture
              </h3>
              <p className="text-sm text-ink-muted leading-relaxed">
                Leverage advanced thermal insulation designs and smart micro-grid integration to achieve operational net-zero.
              </p>
              <div className="mt-auto pt-4">
                <Button variant="ghost" size="sm" className="w-full">
                  Learn More
                </Button>
              </div>
            </Card>

            <Card interactive className="flex flex-col gap-4">
              <div className="flex justify-between items-start">
                <Badge variant="outline">Enterprise</Badge>
                <span className="text-2xs text-ink-subtle">Ready</span>
              </div>
              <h3 className="text-xl font-bold font-display text-ink mt-2">
                Compliance Auditing
              </h3>
              <p className="text-sm text-ink-muted leading-relaxed">
                Automate facility checks, OSHA safety documentation, and local environmental standards validation reports.
              </p>
              <div className="mt-auto pt-4">
                <Button variant="ghost" size="sm" className="w-full">
                  Learn More
                </Button>
              </div>
            </Card>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section id="about" className="py-20 md:py-28 bg-surface-raised/40 border-t border-surface-border">
          <div className="container-section max-w-4xl text-center flex flex-col items-center gap-6">
            <SectionHeading
              title="Ready to Elevate Your Spaces?"
              eyebrow="Get in Touch"
              align="center"
            />
            <p className="text-base text-ink-muted max-w-xl leading-relaxed mt-2">
              Speak with our senior facilities engineering team to learn how we can optimize your operational budget and building longevity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
              <Button variant="primary" size="md" className="w-full sm:w-auto">
                Schedule a Consultation
              </Button>
              <Button variant="secondary" size="md" className="w-full sm:w-auto">
                Download Brochure
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-surface-border bg-base text-center">
        <div className="container-section text-xs text-ink-subtle flex flex-col sm:flex-row justify-between items-center gap-4">
          <span>&copy; {new Date().getFullYear()} Dacitos Inc. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </>
  );
}
