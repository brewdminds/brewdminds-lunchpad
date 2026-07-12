import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteLayout } from "../components/SiteLayout";

function NotFoundComponent() {
  return (
    <SiteLayout>
      <section className="container-page py-24 text-center">
        <p className="eyebrow justify-center">Error 404</p>
        <h1 className="mt-4 text-6xl md:text-7xl font-semibold">Page not found</h1>
        <p className="mt-4 text-[color:var(--ink)]/70 max-w-md mx-auto">
          The page you're looking for wandered off. Let's get you back to the good stuff.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Link to="/" className="btn-primary">
            <ion-icon name="arrow-back-outline"></ion-icon> Go home
          </Link>
          <Link to="/contact" className="btn-ghost">Contact us</Link>
        </div>
      </section>
    </SiteLayout>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <SiteLayout>
      <section className="container-page py-24 text-center">
        <h1 className="text-3xl font-semibold">Something didn't load</h1>
        <p className="mt-2 text-[color:var(--ink)]/70">Try refreshing — we're on it.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="btn-primary"
          >
            Try again
          </button>
          <a href="/" className="btn-ghost">Go home</a>
        </div>
      </section>
    </SiteLayout>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Brewdminds — Strategy-first social media & marketing agency" },
      {
        name: "description",
        content:
          "Brewdminds is a strategy-first, craft-obsessed social media and marketing agency. Brand strategy, cinematic content, influencer marketing, performance and AEO.",
      },
      { name: "author", content: "Brewdminds" },
      { property: "og:title", content: "Brewdminds — Strategy-first social & marketing agency" },
      {
        property: "og:description",
        content: "We help ambitious brands show up with strategy and craft — not just posts.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Brewdminds" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "module",
        src: "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js",
      },
      {
        // Fallback nomodule build for older browsers
        src: "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js",
        noModule: true,
      } as any,
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
