"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { MonoLabel } from "./MonoLabel";
import type { Project } from "@/content/projects";

const statusCopy: Record<Project["status"], { label: string; tone: "ok" | "accent" | "muted" }> = {
  "in-production": { label: "IN PRODUCTION", tone: "ok" },
  pilot: { label: "PILOT", tone: "accent" },
  prototype: { label: "PROTOTYPE", tone: "muted" },
  shipped: { label: "SHIPPED", tone: "ok" },
};

function CardSlideshow({ images, alt }: { images: string[]; alt: string }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (paused || images.length < 2) return;
    timerRef.current = setTimeout(() => {
      setActive((i) => (i + 1) % images.length);
    }, 5500);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [active, paused, images.length]);

  if (images.length === 0) return null;

  return (
    <div
      className="group relative mt-5 aspect-[16/10] w-full overflow-hidden border border-border bg-bg-subtle"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {images.map((src, i) => (
        <div
          key={src}
          className={clsx(
            "absolute inset-0 transition-opacity duration-700 ease",
            i === active ? "opacity-100" : "opacity-0",
          )}
        >
          <Image
            src={src}
            alt={`${alt} - ${i + 1} of ${images.length}`}
            fill
            sizes="(min-width: 1024px) 480px, (min-width: 768px) 50vw, 100vw"
            className="object-cover"
            priority={i === 0}
          />
        </div>
      ))}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(11,11,13,0)_55%,rgba(11,11,13,0.55)_100%)]"
      />

      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1.5">
          {images.map((src, i) => (
            <button
              key={`dot-${src}`}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Image ${i + 1} of ${images.length}`}
              className={clsx(
                "h-1 rounded-full transition-all duration-300",
                i === active ? "w-6 bg-accent" : "w-1.5 bg-fg-tertiary/60 hover:bg-fg-tertiary",
              )}
            />
          ))}
        </div>
      )}

      {images.length > 1 && (
        <div className="pointer-events-none absolute right-3 top-3 z-10">
          <span className="font-mono text-[10px] uppercase tracking-mono text-fg-tertiary">
            {String(active + 1).padStart(2, "0")}/{String(images.length).padStart(2, "0")}
          </span>
        </div>
      )}
    </div>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  const status = statusCopy[project.status];
  return (
    <article className="group relative flex h-full flex-col border border-border bg-bg-elevated/60 p-6 transition-colors duration-500 hover:border-border-strong md:p-7">
      {/* corner ticks */}
      <span className="pointer-events-none absolute left-0 top-0 h-3 w-3 border-l border-t border-accent/60" aria-hidden />
      <span className="pointer-events-none absolute right-0 top-0 h-3 w-3 border-r border-t border-accent/60" aria-hidden />
      <span className="pointer-events-none absolute bottom-0 left-0 h-3 w-3 border-b border-l border-accent/60" aria-hidden />
      <span className="pointer-events-none absolute bottom-0 right-0 h-3 w-3 border-b border-r border-accent/60" aria-hidden />

      <div className="flex items-center justify-between gap-3">
        <MonoLabel variant="muted">{`${project.index} · ${project.title.toUpperCase()}`}</MonoLabel>
        <div className="flex items-center gap-3">
          <MonoLabel variant="muted" bracket={false}>
            {project.build === "custom-pcb" ? "CUSTOM PCB" : "MODULE BUILD"}
          </MonoLabel>
          <span
            className={clsx(
              "inline-flex items-center gap-1.5 font-mono text-mono uppercase tracking-mono",
              status.tone === "ok" && "text-status-ok",
              status.tone === "accent" && "text-accent",
              status.tone === "muted" && "text-fg-tertiary",
            )}
          >
            <span
              className={clsx(
                "inline-block h-1.5 w-1.5 rounded-full",
                status.tone === "ok" && "bg-status-ok",
                status.tone === "accent" && "bg-accent",
                status.tone === "muted" && "bg-fg-tertiary",
              )}
            />
            {status.label}
          </span>
        </div>
      </div>

      {project.images.length > 0 && (
        <CardSlideshow images={project.images} alt={`${project.title} - ${project.subtitle}`} />
      )}

      <h3 className="mt-5 font-display text-2xl tracking-tight text-fg md:text-3xl">
        {project.title}
      </h3>
      <p className="mt-1 font-mono text-mono uppercase tracking-mono text-fg-tertiary">
        {project.subtitle}
      </p>

      <p className="mt-4 text-fg-secondary">{project.blurb}</p>

      <ul className="mt-5 space-y-1.5">
        {project.highlights.map((h) => (
          <li key={h} className="flex items-start gap-2 text-sm text-fg-secondary">
            <span className="mt-2 inline-block h-px w-3 flex-none bg-accent/70" aria-hidden />
            <span>{h}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap items-center gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="border border-border px-2 py-1 font-mono text-mono uppercase tracking-mono text-fg-tertiary"
          >
            {t}
          </span>
        ))}
      </div>
    </article>
  );
}
