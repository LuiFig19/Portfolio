"use client";

// SVG-rendered PCB used when prefers-reduced-motion is set or WebGL is unavailable.
// Captures the same composition (board outline, traces, vias, parts) without animation.

export function PCBStaticFallback() {
  const accent = "#E8A04A";
  return (
    <svg
      viewBox="-4.4 -2.9 8.8 5.8"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden
      role="img"
    >
      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="0.04" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* board substrate */}
      <rect x={-4} y={-2.5} width={8} height={5} rx={0.22} ry={0.22} fill="#0E1014" stroke="#1A1C22" strokeWidth={0.012} />
      <rect x={-3.82} y={-2.32} width={7.64} height={4.64} rx={0.16} ry={0.16} fill="none" stroke={accent} strokeOpacity={0.6} strokeWidth={0.015} />

      {/* trace group */}
      <g
        fill="none"
        stroke={accent}
        strokeOpacity={0.9}
        strokeWidth={0.045}
        strokeLinecap="square"
        strokeLinejoin="miter"
        filter="url(#glow)"
      >
        <polyline points="-1.45,1.35 0.4,1.35 0.8,0.95 1.4,0.95" />
        <polyline points="-1.45,1.15 0.5,1.15 0.9,0.75 1.4,0.75" />
        <polyline points="-1.45,0.7 1.1,0.7 1.6,0.2 2.4,0.2" />
        <polyline points="-1.45,0.55 1.2,0.55 1.7,0.05 2.4,0.05" />
        <polyline points="-1.45,0.35 1.3,0.35 1.8,-0.15 2.4,-0.15" />
        <polyline points="-1.45,0.2 1.4,0.2 1.9,-0.3 2.4,-0.3" />
        <polyline points="-2.85,0.5 -2.85,-1.3 -3.4,-1.85 -3.4,-1.96" />
        <polyline points="-2.45,0.5 -2.45,-1.5 -3.05,-1.85 -3.05,-1.96" />
        <polyline points="0.81,-1.55 0.45,-1.55 0,-1.1 0,0.5 -1.45,0.5" />
        <polyline points="2.65,-1.0 2.65,-1.55" />
        <polyline points="2.85,-1.0 2.85,-1.55" />
        <polyline points="3.05,-1.0 3.05,-1.55" />
        <polyline points="3.25,-1.0 3.25,-1.55" />
      </g>

      {/* vias */}
      <g fill={accent}>
        {[
          [0.4, 1.35], [0.8, 0.95], [1.1, 0.7], [1.6, 0.2],
          [1.3, 0.35], [1.8, -0.15], [-2.85, -1.3], [-3.4, -1.85],
          [-2.45, -1.5], [0, -1.1], [0, 0.5],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={0.055} />
        ))}
      </g>

      {/* components, schematic boxes */}
      <g>
        <rect x={-3.15} y={0.48} width={1.7} height={1.05} fill="#13141A" stroke={accent} strokeWidth={0.012} />
        <text x={-2.3} y={1.75} fill="#9A8970" fontSize={0.12} fontFamily="monospace" textAnchor="middle">U1 ESP32-S3</text>

        <rect x={1.38} y={0.9} width={1.05} height={0.9} fill="#15161A" stroke={accent} strokeWidth={0.012} />
        <text x={1.9} y={2.0} fill="#9A8970" fontSize={0.12} fontFamily="monospace" textAnchor="middle">U2 SEN55</text>

        <rect x={2.33} y={-1.43} width={1.45} height={1.85} fill="#0A0A0C" stroke={accent} strokeWidth={0.012} />
        <text x={3.05} y={0.62} fill="#9A8970" fontSize={0.12} fontFamily="monospace" textAnchor="middle">J1 RJ45</text>

        <rect x={-3.9} y={-2.41} width={1.0} height={0.46} fill="#9CA0AB" stroke={accent} strokeWidth={0.012} />
        <text x={-3.4} y={-1.78} fill="#9A8970" fontSize={0.12} fontFamily="monospace" textAnchor="middle">J2 USB-C</text>

        <rect x={2.025} y={-2.025} width={1.05} height={0.55} fill="#101116" stroke={accent} strokeWidth={0.012} />

        <rect x={-0.825} y={0.61} width={0.55} height={0.28} fill="#9CA0AB" />

        {/* small passives */}
        {[
          [-1, 1.5], [-1, 1.2], [-1, 0.9], [-1, 0.6],
          [-2.3, 1.85], [-2.0, 1.85], [1.9, 0.7], [2.3, 0.7],
        ].map(([x, y], i) => (
          <rect key={i} x={x - 0.09} y={y - 0.045} width={0.18} height={0.09} fill="#1B1C20" stroke="#C8CCD3" strokeWidth={0.006} />
        ))}

        {/* LED */}
        <rect x={0.81} y={-1.6} width={0.18} height={0.1} fill={accent} />
        <rect x={1.21} y={-1.6} width={0.18} height={0.09} fill="#1B1C20" stroke="#C8CCD3" strokeWidth={0.006} />
      </g>

      {/* silkscreen marks at corners */}
      <text x={-3.65} y={2.32} fill="#9A8970" fontSize={0.13} fontFamily="monospace">FN-AIO1 REV.A</text>
      <text x={3.65} y={-2.18} fill="#9A8970" fontSize={0.13} fontFamily="monospace" textAnchor="end">ORLANDO, FL</text>
    </svg>
  );
}
