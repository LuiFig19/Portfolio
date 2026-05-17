"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { sections } from "@/content/content";
import { projects } from "@/content/projects";
import { ProjectCard } from "./ProjectCard";
import { PCBSlideshow } from "./PCBSlideshow";
import { MonoLabel } from "./MonoLabel";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const airSensorSlides = [
  {
    src: "/images/astrarmm-airsensor-bottom.png",
    alt: "AstraRMM Air Sensor — bottom of board, showing capacitors, push buttons, and connector",
    caption: "BOTTOM VIEW",
  },
  {
    src: "/images/astrarmm-airsensor-top.png",
    alt: "AstraRMM Air Sensor — top of board, ESP32-S3, regulators, and antenna trace",
    caption: "TOP VIEW",
  },
];

const airSensorSpec = [
  { label: "STATUS", value: "PILOT" },
  { label: "MCU", value: "ESP32-S3" },
  { label: "POWER", value: "PoE 802.3af" },
  { label: "SENSOR", value: "Sensirion SEN55" },
  { label: "DESIGN", value: "KiCad · 2-LAYER" },
  { label: "FAB", value: "BUILT · BROUGHT UP" },
];

export function SectionHardware() {
  const s = sections.hardware;
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
      id={s.id}
      ref={ref}
      className="relative scroll-mt-24 border-t border-border/70 px-6 py-24 md:px-12 md:py-32 lg:py-40"
    >
      <div className="mx-auto w-full max-w-page">
        {/* Header row */}
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div data-fade className="mb-6 flex items-center gap-3">
              <span className="font-mono text-mono uppercase tracking-mono text-accent">
                {s.index}
              </span>
              <span className="h-px w-10 bg-accent/50" aria-hidden />
              <MonoLabel variant="muted" bracket={false}>
                {s.eyebrow}
              </MonoLabel>
            </div>
            <h2
              data-fade
              className="font-display text-display-md text-fg md:text-display-lg lg:text-balance"
            >
              {s.headline}
            </h2>
            <p data-fade className="mt-6 max-w-prose text-fg-secondary md:text-lg">
              {s.body}
            </p>
          </div>
          <div className="lg:col-span-5">
            <div data-fade className="lg:pt-2">
              <MonoLabel variant="muted">STACK</MonoLabel>
              <ul className="mt-4 flex flex-wrap gap-2">
                {s.stack.map((t) => (
                  <li
                    key={t}
                    className="border border-border px-2.5 py-1 font-mono text-mono uppercase tracking-mono text-fg-secondary"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Featured PCB slideshow — full width */}
        <div data-fade className="mt-16 md:mt-20">
          <PCBSlideshow
            index="FEATURED · H-01"
            title="Astra Air Sensor — custom KiCad PCB"
            blurb="Two-layer board designed end to end: schematic, layout, fab, hand assembly, bring-up. ESP32-S3 next to a Sensirion SEN55 air-quality sensor; the whole thing runs off a single PoE 802.3af drop."
            spec={airSensorSpec}
            images={airSensorSlides}
          />
        </div>

        {/* Project grid — the rest of the builds */}
        <div data-fade className="mt-16 md:mt-20">
          <div className="mb-6 flex items-center gap-3">
            <MonoLabel variant="muted">MORE BUILDS</MonoLabel>
            <span className="h-px flex-1 bg-border" aria-hidden />
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {projects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
