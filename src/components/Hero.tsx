"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { hero, site } from "@/content/content";
import { MonoLabel } from "./MonoLabel";
import { PCBStaticFallback } from "./PCBStaticFallback";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { useIsMobile } from "@/lib/useIsMobile";

const PCBHero = dynamic(() => import("./pcb/PCBHero").then((m) => m.PCBHero), {
  ssr: false,
  loading: () => null,
});

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const stickyRef = useRef<HTMLDivElement | null>(null);
  const progressRef = useRef(0);
  const headlineLine1Ref = useRef<HTMLSpanElement | null>(null);
  const headlineLine2Ref = useRef<HTMLSpanElement | null>(null);
  const [mounted, setMounted] = useState(false);

  const reduced = useReducedMotion();
  const isMobile = useIsMobile(768);
  const useStatic = reduced || isMobile;

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mounted || useStatic) return;
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const trigger = ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "+=2400",
        pin: stickyRef.current ?? section,
        scrub: 0.6,
        anticipatePin: 1,
        onUpdate: (self) => {
          progressRef.current = self.progress;
        },
      });

      // Subtle headline reveal as scroll begins.
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=600",
          scrub: 0.4,
        },
      });
      tl.fromTo(
        [headlineLine1Ref.current, headlineLine2Ref.current],
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.12, ease: "power2.out" },
        0,
      );

      return () => trigger.kill();
    }, section);

    return () => ctx.revert();
  }, [mounted, useStatic]);

  return (
    <section ref={sectionRef} className="relative" id="top">
      <div
        ref={stickyRef}
        className="relative h-[100svh] w-full overflow-hidden bg-bg"
      >
        {/* canvas / fallback layer */}
        <div className="absolute inset-0">
          {useStatic ? (
            <div className="flex h-full w-full items-center justify-center px-6">
              <div className="aspect-[8/5] w-full max-w-[min(86vw,1080px)]">
                <PCBStaticFallback />
              </div>
            </div>
          ) : (
            <PCBHero progressRef={progressRef} />
          )}
          {/* vignette to keep type legible */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(120% 80% at 50% 30%, rgba(11,11,13,0) 30%, rgba(11,11,13,0.5) 75%, rgba(11,11,13,0.85) 100%)",
            }}
          />
        </div>

        {/* overlay UI */}
        <div className="relative z-10 flex h-full w-full flex-col">
          <div className="flex items-start justify-between px-6 pt-6 md:px-12 md:pt-8">
            <MonoLabel variant="muted">{hero.topLabel.replace(/^\[\s|\s\]$/g, "")}</MonoLabel>
            <MonoLabel variant="muted" className="hidden md:inline">
              ORLANDO, FL · 28.5384° N
            </MonoLabel>
          </div>

          <div className="mt-auto px-6 pb-12 md:px-12 md:pb-16">
            <div className="max-w-page">
              <h1 className="font-display text-display-xl font-medium text-fg">
                <span ref={headlineLine1Ref} className="block">
                  {hero.headline[0]}
                </span>
                <span ref={headlineLine2Ref} className="block text-fg-secondary">
                  {hero.headline[1]}
                </span>
              </h1>

              <p className="mt-6 max-w-[58ch] text-base leading-relaxed text-fg-secondary md:text-lg">
                {hero.subhead}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                {hero.ctas.map((cta) => (
                  <a
                    key={cta.label}
                    href={cta.href}
                    {...("download" in cta && cta.download ? { download: "" } : {})}
                    className={
                      cta.variant === "primary"
                        ? "group inline-flex items-center gap-2 border border-accent bg-accent/15 px-5 py-3 font-mono text-mono uppercase tracking-mono text-accent transition-colors duration-300 hover:bg-accent hover:text-bg"
                        : "group inline-flex items-center gap-2 border border-border px-5 py-3 font-mono text-mono uppercase tracking-mono text-fg-secondary transition-colors duration-300 hover:border-fg hover:text-fg"
                    }
                  >
                    <span>{cta.label}</span>
                    <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-0.5">
                      →
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute bottom-4 left-6 md:left-12">
            <MonoLabel variant="muted">{hero.label.replace(/^\[\s|\s\]$/g, "")}</MonoLabel>
          </div>
          <div className="absolute bottom-4 right-6 hidden md:block md:right-12">
            <MonoLabel variant="muted">SCROLL TO ROUTE ↓</MonoLabel>
          </div>
        </div>
      </div>

      {/* spacer that gives ScrollTrigger room when not pinned (e.g. mobile). */}
      {useStatic && <div className="h-0" aria-hidden />}
    </section>
  );
}
