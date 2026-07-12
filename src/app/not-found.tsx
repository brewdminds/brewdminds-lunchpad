import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-page py-24 text-center">
      <p className="eyebrow justify-center">Error 404</p>
      <h1 className="mt-4 text-6xl md:text-7xl">Page not found</h1>
      <p className="mt-4 text-[color:var(--ink)]/70 max-w-md mx-auto">
        The page you're looking for wandered off. Let's get you back to the good stuff.
      </p>
      <div className="mt-8 flex items-center justify-center gap-3">
        <Link href="/" className="btn-primary">
          <ion-icon name="arrow-back-outline"></ion-icon> Go home
        </Link>
        <Link href="/contact" className="btn-ghost">
          Contact us
        </Link>
      </div>
    </section>
  );
}
