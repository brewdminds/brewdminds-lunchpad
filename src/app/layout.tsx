import type { Metadata } from "next";
import { Bricolage_Grotesque, Poppins } from "next/font/google";
import Script from "next/script";
import type { ReactNode } from "react";

import { SiteLayout } from "@/components/SiteLayout";
import { SiteLoader } from "@/components/SiteLoader";

import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-bricolage",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Brewdminds — Strategy-first social media & marketing agency",
  description:
    "Brewdminds is a strategy-first, craft-obsessed social media and marketing agency. Brand strategy, cinematic content, influencer marketing, performance and AEO.",
  authors: [{ name: "Brewdminds" }],
  icons: {
    icon: "/brew-favicon.svg",
  },
  openGraph: {
    title: "Brewdminds — Strategy-first social & marketing agency",
    description: "We help ambitious brands show up with strategy and craft — not just posts.",
    type: "website",
    siteName: "Brewdminds",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${bricolage.variable}`} suppressHydrationWarning>
      <body>
        <SiteLoader />
        <SiteLayout>{children}</SiteLayout>
        <Script type="module" src="/ionicons/ionicons.esm.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
