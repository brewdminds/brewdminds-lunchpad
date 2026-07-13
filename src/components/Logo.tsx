import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="inline-flex items-center" aria-label="Brewdminds home">
      {/* eslint-disable-next-line @next/next/no-img-element -- static brand SVG, no next/image optimization needed */}
      <img src="/brewd-color.svg" alt="" width={368} height={100} className="h-9 w-auto" />
    </Link>
  );
}
