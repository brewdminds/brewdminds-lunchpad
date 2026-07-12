import { Link } from "@tanstack/react-router";

export function Logo({ tone = "ink" }: { tone?: "ink" | "cream" }) {
  const color = tone === "cream" ? "text-[color:var(--ink)]" : "text-[color:var(--ink)]";
  return (
    <Link to="/" className={`inline-flex items-center gap-2 ${color}`} aria-label="Brewdminds home">
      <span
        aria-hidden
        className="grid h-9 w-9 place-items-center rounded-full bg-[color:var(--ember)] text-white font-semibold text-sm"
      >
        B
      </span>
      <span className="text-xl font-semibold tracking-tight">
        Brewd<span className="text-[color:var(--ember)]">minds</span>
      </span>
    </Link>
  );
}
