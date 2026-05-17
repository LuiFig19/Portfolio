"use client";

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { MonoLabel } from "./MonoLabel";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function SectionShell({
  id,
  index,
  eyebrow,
  headline,
  body,
  rightSlot,
  children,
}: {
  id: string;
  index: string;
  eyebrow: string;
  headline: string;
  body: string;
  rightSlot?: ReactNode;
  children?: ReactNode;
}) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el.querySelectorAll("[data-fade]"),
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.07,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className="relative scroll-mt-24 border-t border-border/70 px-6 py-24 md:px-12 md:py-32 lg:py-40"
    >
      <div className="mx-auto w-full max-w-page">
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div data-fade className="mb-6 flex items-center gap-3">
              <span className="font-mono text-mono uppercase tracking-mono text-accent">
                {index}
              </span>
              <span className="h-px w-10 bg-accent/50" aria-hidden />
              <MonoLabel variant="muted" bracket={false}>
                {eyebrow}
              </MonoLabel>
            </div>
            <h2
              data-fade
              className="font-display text-display-md text-fg md:text-display-lg lg:text-balance"
            >
              {headline}
            </h2>
            <p data-fade className="mt-6 max-w-prose text-fg-secondary md:text-lg">
              {body}
            </p>
            <div data-fade className="mt-8">
              {children}
            </div>
          </div>
          <div className="lg:col-span-7">
            <div data-fade>{rightSlot}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
