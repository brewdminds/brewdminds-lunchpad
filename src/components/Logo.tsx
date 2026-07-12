import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="inline-flex items-center" aria-label="Brewdminds home">
      {/* eslint-disable-next-line @next/next/no-img-element -- static brand SVG, no next/image optimization needed */}
      <img src="/logo-colored.svg" alt="" width={160} height={108} className="h-14 w-auto" />
    </Link>
  );
}
