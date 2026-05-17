"use client";

import { useEffect, useState } from "react";
import { sections } from "@/content/content";
import { SectionShell } from "./SectionShell";
import { MonoLabel } from "./MonoLabel";

// Stylized network topology - workstations / servers / cloud / security tools,
// with a subtle pulse along edges to show traffic.
function Topology() {
  const [t, setT] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setT((v) => (v + 1) % 200), 60);
    return () => clearInterval(id);
  }, []);

  const nodes = [
    { id: "wks1", label: "WKS-OR-01", x: 80, y: 60, kind: "endpoint" },
    { id: "wks2", label: "WKS-OR-02", x: 80, y: 130, kind: "endpoint" },
    { id: "wks3", label: "WKS-OR-03", x: 80, y: 200, kind: "endpoint" },
    { id: "sw", label: "CORE SW", x: 250, y: 130, kind: "switch" },
    { id: "fw", label: "EDGE FW", x: 400, y: 130, kind: "fw" },
    { id: "m365", label: "M365 / ENTRA", x: 560, y: 70, kind: "cloud" },
    { id: "rmm", label: "ASTRARMM", x: 560, y: 130, kind: "cloud" },
    { id: "huntress", label: "HUNTRESS", x: 560, y: 190, kind: "cloud" },
    { id: "backup", label: "COMET BACKUP", x: 560, y: 250, kind: "cloud" },
  ];

  const edges = [
    ["wks1", "sw"],
    ["wks2", "sw"],
    ["wks3", "sw"],
    ["sw", "fw"],
    ["fw", "m365"],
    ["fw", "rmm"],
    ["fw", "huntress"],
    ["fw", "backup"],
  ] as const;

  const nodeOf = (id: string) => nodes.find((n) => n.id === id)!;

  return (
    <div className="relative overflow-hidden border border-border bg-bg-elevated">
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-accent" aria-hidden />
          <MonoLabel variant="muted" bracket={false}>
            CLIENT TOPOLOGY / TYPICAL DEPLOYMENT
          </MonoLabel>
        </div>
        <MonoLabel variant="muted">PASSIVE</MonoLabel>
      </div>

      <svg viewBox="0 0 640 320" className="block h-auto w-full" aria-hidden>
        {/* edges */}
        <g stroke="#25252A" strokeWidth={1}>
          {edges.map(([a, b], i) => {
            const A = nodeOf(a);
            const B = nodeOf(b);
            return <line key={i} x1={A.x} y1={A.y} x2={B.x} y2={B.y} />;
          })}
        </g>
        {/* animated pulses */}
        <g fill="#E8A04A">
          {edges.map(([a, b], i) => {
            const A = nodeOf(a);
            const B = nodeOf(b);
            const phase = ((t + i * 14) % 100) / 100;
            const x = A.x + (B.x - A.x) * phase;
            const y = A.y + (B.y - A.y) * phase;
            return <circle key={`p${i}`} cx={x} cy={y} r={1.6} opacity={0.85} />;
          })}
        </g>
        {/* nodes */}
        <g>
          {nodes.map((n) => (
            <g key={n.id} transform={`translate(${n.x},${n.y})`}>
              {n.kind === "endpoint" && (
                <rect x={-22} y={-12} width={44} height={24} fill="#13141A" stroke="#34343A" />
              )}
              {n.kind === "switch" && (
                <rect x={-30} y={-10} width={60} height={20} fill="#13141A" stroke="#E8A04A" />
              )}
              {n.kind === "fw" && (
                <rect x={-30} y={-14} width={60} height={28} fill="#13141A" stroke="#E8A04A" />
              )}
              {n.kind === "cloud" && (
                <ellipse cx={0} cy={0} rx={42} ry={14} fill="#13141A" stroke="#34343A" />
              )}
              <circle cx={0} cy={0} r={2} fill="#E8A04A" />
              <text
                x={0}
                y={n.kind === "endpoint" ? 26 : n.kind === "cloud" ? 28 : 28}
                fill="#6B6B68"
                fontFamily="ui-monospace, monospace"
                fontSize={9}
                letterSpacing={0.8}
                textAnchor="middle"
              >
                {n.label}
              </text>
            </g>
          ))}
        </g>
      </svg>

      <div className="grid grid-cols-3 divide-x divide-border border-t border-border">
        <Foot label="ENDPOINTS" value="3 WKS" />
        <Foot label="EDGE" value="MERAKI / UNIFI" />
        <Foot label="UPLINK" value="500/500 Mbps" />
      </div>
    </div>
  );
}

function Foot({ label, value }: { label: string; value: string }) {
  return (
    <div className="px-4 py-3">
      <MonoLabel variant="muted" bracket={false}>
        {label}
      </MonoLabel>
      <div className="mt-0.5 font-mono text-mono text-fg-secondary">{value}</div>
    </div>
  );
}

export function SectionField() {
  const s = sections.field;
  return (
    <SectionShell
      id={s.id}
      index={s.index}
      eyebrow={s.eyebrow}
      headline={s.headline}
      body={s.body}
      rightSlot={<Topology />}
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
