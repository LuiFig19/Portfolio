"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { MonoLabel } from "./MonoLabel";

export type SlideshowImage = {
  src: string;
  alt: string;
  caption: string; // e.g. "TOP VIEW"
};

type Props = {
  index: string;       // e.g. "FEATURED — H-01"
  title: string;       // e.g. "AstraRMM Air Sensor — Custom KiCad PCB"
  blurb: string;
  spec: { label: string; value: string }[];
  images: SlideshowImage[];
  autoplayMs?: number; // default 4500
};

export function PCBSlideshow({
  index,
  title,
  blurb,
  spec,
  images,
  autoplayMs = 4500,
}: Props) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const advance = useCallback(() => {
    setActive((i) => (i + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (paused || images.length < 2) return;
    timerRef.current = setTimeout(advance, autoplayMs);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [active, paused, advance, autoplayMs, images.length]);

  return (
    <section className="relative">
      <div className="mb-5 flex items-center gap-3">
        <span className="font-mono text-mono uppercase tracking-mono text-accent">{index}</span>
        <span className="h-px w-10 bg-accent/50" aria-hidden />
        <MonoLabel variant="muted" bracket={false}>
          CUSTOM PCB · SCHEMATIC · LAYOUT · FAB · ASSEMBLY
        </MonoLabel>
      </div>

      <div className="grid grid-cols-1 gap-x-10 gap-y-6 lg:grid-cols-12">
        {/* Image stage */}
        <div className="lg:col-span-8">
          <div
            className="group relative aspect-[16/10] w-full overflow-hidden border border-border bg-bg-elevated"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
          >
            {/* corner ticks */}
            <span className="pointer-events-none absolute left-0 top-0 z-10 h-3 w-3 border-l border-t border-accent/60" aria-hidden />
            <span className="pointer-events-none absolute right-0 top-0 z-10 h-3 w-3 border-r border-t border-accent/60" aria-hidden />
            <span className="pointer-events-none absolute bottom-0 left-0 z-10 h-3 w-3 border-b border-l border-accent/60" aria-hidden />
            <span className="pointer-events-none absolute bottom-0 right-0 z-10 h-3 w-3 border-b border-r border-accent/60" aria-hidden />

            {images.map((img, i) => (
              <button
                key={img.src}
                type="button"
                aria-label={`Show ${img.caption}`}
                onClick={advance}
                className={clsx(
                  "absolute inset-0 transition-opacity duration-700 ease",
                  i === active ? "z-[1] opacity-100" : "z-0 opacity-0",
                )}
                tabIndex={i === active ? 0 : -1}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 1024px) 720px, 100vw"
                  className="object-contain"
                  priority={i === 0}
                />
              </button>
            ))}

            {/* top-left caption */}
            <div className="pointer-events-none absolute left-3 top-3 z-20">
              <MonoLabel variant="muted">
                {String(active + 1).padStart(2, "0")}/{String(images.length).padStart(2, "0")} · {images[active]?.caption ?? ""}
              </MonoLabel>
            </div>

            {/* bottom indicators */}
            <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
              {images.map((img, i) => (
                <button
                  key={`dot-${img.src}`}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={`Show image ${i + 1}`}
                  className={clsx(
                    "h-1.5 rounded-full transition-all duration-300",
                    i === active ? "w-8 bg-accent" : "w-2 bg-fg-tertiary/50 hover:bg-fg-tertiary",
                  )}
                />
              ))}
            </div>
          </div>

          {/* below-image caption row */}
          <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
            <MonoLabel variant="muted">RENDERED — KICAD 3D VIEW</MonoLabel>
            <MonoLabel variant="muted">FN-AIO1 · REV.A</MonoLabel>
          </div>
        </div>

        {/* Side panel */}
        <div className="lg:col-span-4">
          <h3 className="font-display text-2xl tracking-tight text-fg md:text-3xl">{title}</h3>
          <p className="mt-3 text-fg-secondary">{blurb}</p>

          <dl className="mt-6 divide-y divide-border border-y border-border">
            {spec.map((s) => (
              <div key={s.label} className="grid grid-cols-2 items-center gap-4 py-2.5">
                <dt className="font-mono text-mono uppercase tracking-mono text-fg-tertiary">{s.label}</dt>
                <dd className="text-right font-mono text-mono uppercase tracking-mono text-fg">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
