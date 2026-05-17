"use client";

import { useMemo, useRef, type MutableRefObject } from "react";
import { useFrame } from "@react-three/fiber";
import { Line } from "@react-three/drei";
import type { PcbTrace } from "./pcbData";

const TRACE_Z = 0.105; // sits just above board top surface
const ACCENT = "#E8A04A";

function clamp(v: number, min = 0, max = 1) {
  return Math.max(min, Math.min(max, v));
}

export function Trace({
  trace,
  progressRef,
}: {
  trace: PcbTrace;
  progressRef: MutableRefObject<number>;
}) {
  const lineRef = useRef<any>(null);

  const { points3, totalLength } = useMemo(() => {
    const points3 = trace.points.map((p) => [p[0], p[1], TRACE_Z] as [number, number, number]);
    let total = 0;
    for (let i = 1; i < points3.length; i++) {
      const dx = points3[i][0] - points3[i - 1][0];
      const dy = points3[i][1] - points3[i - 1][1];
      total += Math.hypot(dx, dy);
    }
    return { points3, totalLength: total };
  }, [trace.points]);

  useFrame(() => {
    const duration = trace.duration ?? 0.06;
    const local = clamp((progressRef.current - trace.appearAt) / duration, 0, 1);
    const mat = lineRef.current?.material;
    if (!mat) return;
    // dashSize grows from 0 to totalLength; gapSize shrinks to 0.
    // dashOffset stays at 0 so the single visible dash starts at the trace head.
    const drawn = local * totalLength;
    mat.dashSize = Math.max(drawn, 0.0001);
    mat.gapSize = Math.max(totalLength - drawn, 0.0001);
    mat.opacity = local > 0 ? 1 : 0;
    mat.needsUpdate = true;
  });

  return (
    <Line
      ref={lineRef}
      points={points3}
      color={ACCENT}
      lineWidth={trace.width ?? 2.2}
      dashed
      dashScale={1}
      dashSize={0.0001}
      gapSize={totalLength}
      transparent
      toneMapped={false}
    />
  );
}
