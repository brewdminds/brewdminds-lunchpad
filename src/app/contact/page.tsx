import type { Metadata } from "next";

import { ContactClient } from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact — Brewdminds",
  description: "Tell us about your brand. We reply within 24 hours.",
  openGraph: {
    title: "Contact Brewdminds",
    description: "Start a conversation with a strategy-first creative agency.",
  },
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <ContactClient />;
}
