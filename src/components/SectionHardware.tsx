"use client";

import { sections } from "@/content/content";
import { projects } from "@/content/projects";
import { SectionShell } from "./SectionShell";
import { ProjectCard } from "./ProjectCard";

export function SectionHardware() {
  const s = sections.hardware;
  return (
    <SectionShell
      id={s.id}
      index={s.index}
      eyebrow={s.eyebrow}
      headline={s.headline}
      body={s.body}
      rightSlot={
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      }
    >
      <ul className="flex flex-wrap gap-2">
        {s.stack.map((t) => (
          <li
            key={t}
            className="border border-border px-2.5 py-1 font-mono text-mono uppercase tracking-mono text-fg-secondary"
          >
            {t}
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}
