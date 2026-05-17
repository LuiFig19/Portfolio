"use client";

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

export function ProjectCard({ project }: { project: Project }) {
  const status = statusCopy[project.status];
  return (
    <article className="group relative flex h-full flex-col border border-border bg-bg-elevated/60 p-6 transition-colors duration-500 hover:border-border-strong md:p-7">
      {/* corner ticks */}
      <span className="pointer-events-none absolute left-0 top-0 h-3 w-3 border-l border-t border-accent/60" aria-hidden />
      <span className="pointer-events-none absolute right-0 top-0 h-3 w-3 border-r border-t border-accent/60" aria-hidden />
      <span className="pointer-events-none absolute bottom-0 left-0 h-3 w-3 border-b border-l border-accent/60" aria-hidden />
      <span className="pointer-events-none absolute bottom-0 right-0 h-3 w-3 border-b border-r border-accent/60" aria-hidden />

      <div className="flex items-center justify-between">
        <MonoLabel variant="muted">{`${project.index} — ${project.title.toUpperCase()}`}</MonoLabel>
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

      {project.image && (
        <div className="relative mt-5 aspect-[16/10] w-full overflow-hidden border border-border bg-bg-subtle">
          <Image
            src={project.image}
            alt={`${project.title} — ${project.subtitle}`}
            fill
            sizes="(min-width: 1024px) 480px, (min-width: 768px) 50vw, 100vw"
            className="object-cover opacity-80 mix-blend-luminosity transition-all duration-700 group-hover:opacity-100 group-hover:mix-blend-normal"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,11,13,0)_55%,rgba(11,11,13,0.55)_100%)]"
          />
        </div>
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
