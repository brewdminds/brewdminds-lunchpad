import type { Metadata } from "next";

import { BlogsClient } from "./BlogsClient";

export const metadata: Metadata = {
  title: "Journal — Brewdminds",
  description:
    "Sharp writing on brand, content, influence, performance and the next era of search (AEO).",
  openGraph: {
    title: "Journal — Brewdminds",
    description: "Field notes from a strategy-first, craft-obsessed agency.",
  },
  alternates: { canonical: "/blogs" },
};

export default function BlogsPage() {
  return <BlogsClient />;
}
