"use client";

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const headlineLines = [
  { text: "Brands built on", accent: false },
  { text: "strategy & craft", accent: true },
  { text: "Not just trends.", accent: false },
];

export default function HeroClient() {
  const prefersReducedMotion = useReducedMotion();

  // Mouse parallax on the background image, capped well under 10px.
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 60, damping: 20, mass: 0.5 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20, mass: 0.5 });
  const imageX = useTransform(springX, [-1, 1], [-8, 8]);
  const imageY = useTransform(springY, [-1, 1], [-6, 6]);

  useEffect(() => {
    if (prefersReducedMotion) return;
    function handlePointerMove(e: PointerEvent) {
      mouseX.set((e.clientX / window.innerWidth) * 2 - 1);
      mouseY.set((e.clientY / window.innerHeight) * 2 - 1);
    }
    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [prefersReducedMotion, mouseX, mouseY]);

  return (
    <section className="relative isolate -mt-24 flex min-h-screen items-center overflow-hidden pt-24">
      {/* Background image — Ken Burns zoom + subtle mouse parallax + a soft reveal wipe on load.
          -mt-24/pt-24 pulls the image up behind the (transparent-until-scroll) fixed nav, so it
          reaches the true top of the page instead of leaving a gap of plain white under the nav. */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 -z-20"
        style={{ x: imageX, y: imageY, willChange: "transform" }}
        initial={prefersReducedMotion ? false : { clipPath: "inset(0 0 100% 0)" }}
        animate={{ clipPath: "inset(0 0 0% 0)" }}
        transition={{ duration: 1.1, ease: [0.65, 0, 0.35, 1] }}
      >
        <motion.div
          className="absolute inset-0"
          style={{ willChange: "transform" }}
          animate={prefersReducedMotion ? undefined : { scale: [1, 1.04] }}
          transition={{ duration: 13, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
        >
          <Image
            src="/brew-hero-final.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-right"
          />
        </motion.div>
      </motion.div>

      {/* Overlay — brighter on the left for content, image stays visible on the right */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white/92 via-white/55 to-transparent" />

      {/* Soft spotlight glow behind the content for readability */}
      <div className="absolute top-1/2 left-[2%] -z-10 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-white/70 blur-3xl" />

      {/* Bottom fade — dissolves the photo's floor tone into the page's white background
          instead of ending on a hard color seam right where the trust-strip section begins. */}
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent to-white" />

      <div className="container-page">
        <div className="w-full max-w-xl">
          <div className="flex items-center gap-3">
            <motion.span
              initial={prefersReducedMotion ? false : { scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              style={{ transformOrigin: "left" }}
              className="h-px w-8 bg-[color:var(--ember)]"
            />
            <motion.p
              initial={prefersReducedMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="eyebrow"
            >
              Social · Strategy · Craft
            </motion.p>
          </div>

          <h1 className="mt-5 text-5xl leading-[1.05] tracking-tight md:text-6xl">
            {headlineLines.map((line, i) => (
              <span key={line.text} className="block overflow-hidden">
                <motion.span
                  initial={prefersReducedMotion ? false : { y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.7, delay: 0.35 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  className={
                    line.accent
                      ? "inline-block bg-gradient-to-r from-[color:var(--ember)] to-[color:var(--ember-deep)] bg-clip-text text-transparent"
                      : "inline-block"
                  }
                >
                  {line.text}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
            className="mt-6 max-w-lg text-lg text-[color:var(--ink)]/75"
          >
            We combine sharp strategy with cinematic craft to help ambitious brands show up
            right — everywhere it matters.
          </motion.p>

          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9, ease: "easeOut" }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <motion.div whileHover={prefersReducedMotion ? undefined : { y: -3 }} transition={{ duration: 0.2 }}>
              <Link href="/contact" className="btn-primary">
                Let's Talk Strategy
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </Link>
            </motion.div>
            <motion.div whileHover={prefersReducedMotion ? undefined : { y: -3 }} transition={{ duration: 0.2 }}>
              <Link href="/services" className="btn-ghost bg-white/70 backdrop-blur-md">
                See Our Thinking
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
