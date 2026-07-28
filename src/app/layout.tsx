import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/animations/SmoothScroll";

/* ─── Fonts ──────────────────────────────────────────────────────────────── */

/**
 * Inter – body text. Premium, neutral, highly legible at all sizes.
 */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

/**
 * Syne – display / headings. Geometric and contemporary, feels high-end.
 */
const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

/* ─── Metadata ───────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: {
    default: "Dacitos",
    template: "%s | Dacitos",
  },
  description: "Premium Next.js application.",
  metadataBase: new URL("https://dacitos.com"),
  openGraph: {
    title: "Dacitos",
    description: "Premium Next.js application.",
    type: "website",
  },
};

/* ─── Root Layout ────────────────────────────────────────────────────────── */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${syne.variable}`}
    >
      <body className="bg-base text-ink font-sans antialiased overflow-x-hidden">
        {/* Lenis smooth scroll + GSAP ScrollTrigger sync */}
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
