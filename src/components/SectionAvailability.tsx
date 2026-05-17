"use client";

import { sections } from "@/content/content";
import { SectionShell } from "./SectionShell";
import { MonoLabel } from "./MonoLabel";

function CheckMark() {
  return (
    <span className="mt-1 inline-flex h-4 w-4 flex-none items-center justify-center border border-accent/60" aria-hidden>
      <span className="block h-1.5 w-1.5 bg-accent" />
    </span>
  );
}

export function SectionAvailability() {
  const s = sections.availability;
  return (
    <SectionShell
      id={s.id}
      index={s.index}
      eyebrow={s.eyebrow}
      headline={s.headline}
      body={s.body}
      rightSlot={
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className="border border-border bg-bg-elevated p-6">
            <MonoLabel variant="muted">OPEN TO</MonoLabel>
            <ul className="mt-5 space-y-3">
              {s.openTo.map((line) => (
                <li key={line} className="flex items-start gap-3 text-fg">
                  <CheckMark />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-border bg-bg-elevated p-6">
            <MonoLabel variant="muted">WHAT I BRING</MonoLabel>
            <ul className="mt-5 space-y-3">
              {s.bring.map((line) => (
                <li key={line} className="flex items-start gap-3 text-fg">
                  <CheckMark />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      }
    >
      <div className="space-y-3 text-fg-secondary">
        <div className="flex items-center gap-3">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-status-ok" aria-hidden />
          <MonoLabel variant="muted" bracket={false}>
            AVAILABILITY - OPEN TO INBOUND
          </MonoLabel>
        </div>
        <div className="flex items-center gap-3">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
          <MonoLabel variant="muted" bracket={false}>
            LOCATION - ORLANDO, FL · REMOTE OK
          </MonoLabel>
        </div>
      </div>
    </SectionShell>
  );
}
