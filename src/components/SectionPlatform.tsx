"use client";

import { useEffect, useRef, useState } from "react";
import { sections } from "@/content/content";
import { SectionShell } from "./SectionShell";
import { MonoLabel } from "./MonoLabel";

// Stylized dashboard mockup — fake telemetry that ticks on a timer so the section
// feels live without pulling real data.
function DashboardMock() {
  return (
    <div className="relative overflow-hidden border border-border bg-bg-elevated">
      {/* dashboard chrome */}
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-status-ok" aria-hidden />
          <MonoLabel variant="muted" bracket={false}>
            ASTRARMM / FLEET OVERVIEW
          </MonoLabel>
        </div>
        <MonoLabel variant="muted">LIVE — 5s POLL</MonoLabel>
      </div>

      {/* stat row */}
      <div className="grid grid-cols-3 divide-x divide-border border-b border-border">
        <Stat label="ENDPOINTS" value="284" trend="+2" />
        <Stat label="ALERTS / 24H" value="12" trend="-4" />
        <Stat label="UPTIME" value="99.97%" trend="±0.01" tone="ok" />
      </div>

      {/* sparkline grid */}
      <div className="px-4 pb-4 pt-3">
        <div className="flex items-center justify-between">
          <MonoLabel variant="muted" bracket={false}>
            CPU / SITE CLUSTER
          </MonoLabel>
          <MonoLabel variant="muted">CH.1</MonoLabel>
        </div>
        <Sparkline />
      </div>

      {/* event log */}
      <div className="border-t border-border">
        <div className="flex items-center justify-between px-4 py-2.5">
          <MonoLabel variant="muted" bracket={false}>
            EVENT FEED
          </MonoLabel>
          <MonoLabel variant="muted">AGT/ALL</MonoLabel>
        </div>
        <ul className="divide-y divide-border/60 border-t border-border">
          {[
            { t: "12:04:11", host: "HOST-OR-04", msg: "agent heartbeat OK", tone: "ok" },
            { t: "12:04:08", host: "HOST-OR-09", msg: "patch deployed: KB504X", tone: "ok" },
            { t: "12:03:57", host: "HOST-MI-02", msg: "disk pressure warn 86%", tone: "warn" },
            { t: "12:03:42", host: "HOST-OR-12", msg: "agent heartbeat OK", tone: "ok" },
          ].map((row) => (
            <li key={row.t} className="grid grid-cols-12 items-center gap-2 px-4 py-2 font-mono text-mono">
              <span className="col-span-3 text-fg-tertiary">{row.t}</span>
              <span className="col-span-3 text-fg-secondary">{row.host}</span>
              <span
                className={
                  row.tone === "warn"
                    ? "col-span-6 text-accent"
                    : "col-span-6 text-status-ok"
                }
              >
                {row.msg}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Stat({
  label,
  value,
  trend,
  tone,
}: {
  label: string;
  value: string;
  trend: string;
  tone?: "ok" | "accent";
}) {
  return (
    <div className="px-4 py-4">
      <MonoLabel variant="muted" bracket={false}>
        {label}
      </MonoLabel>
      <div className="mt-1 font-display text-3xl text-fg">{value}</div>
      <div
        className={
          tone === "ok"
            ? "mt-1 font-mono text-mono text-status-ok"
            : "mt-1 font-mono text-mono text-fg-tertiary"
        }
      >
        {trend}
      </div>
    </div>
  );
}

function Sparkline() {
  const [phase, setPhase] = useState(0);
  const reqRef = useRef<number | null>(null);

  useEffect(() => {
    let last = performance.now();
    const tick = (t: number) => {
      if (t - last > 80) {
        setPhase((p) => (p + 1) % 240);
        last = t;
      }
      reqRef.current = requestAnimationFrame(tick);
    };
    reqRef.current = requestAnimationFrame(tick);
    return () => {
      if (reqRef.current) cancelAnimationFrame(reqRef.current);
    };
  }, []);

  // 48 sample points
  const points = Array.from({ length: 48 }, (_, i) => {
    const x = i;
    const y =
      45 +
      Math.sin((i + phase) * 0.32) * 18 +
      Math.sin((i + phase) * 0.07) * 8 +
      Math.cos((i + phase) * 0.5) * 4;
    return `${x * (480 / 47)},${y}`;
  }).join(" ");

  return (
    <div className="mt-3">
      <svg viewBox="0 0 480 90" className="h-24 w-full" preserveAspectRatio="none" aria-hidden>
        <g stroke="#25252A" strokeWidth={0.6}>
          {Array.from({ length: 5 }).map((_, i) => (
            <line key={i} x1={0} y1={i * 22 + 2} x2={480} y2={i * 22 + 2} />
          ))}
        </g>
        <polyline
          fill="none"
          stroke="#E8A04A"
          strokeWidth={1.4}
          strokeLinejoin="round"
          strokeLinecap="round"
          points={points}
        />
      </svg>
    </div>
  );
}

export function SectionPlatform() {
  const s = sections.platform;
  return (
    <SectionShell
      id={s.id}
      index={s.index}
      eyebrow={s.eyebrow}
      headline={s.headline}
      body={s.body}
      rightSlot={<DashboardMock />}
    >
      <div className="space-y-4">
        {s.products.map((p) => (
          <div key={p.name} className="border-l border-accent/60 pl-4">
            <div className="flex items-baseline gap-2">
              <span className="font-display text-xl text-fg">{p.name}</span>
              <MonoLabel variant="muted" bracket={false}>
                {p.line}
              </MonoLabel>
            </div>
            <p className="mt-1 text-fg-secondary">{p.detail}</p>
          </div>
        ))}
        <ul className="flex flex-wrap gap-2 pt-2">
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
    </SectionShell>
  );
}
