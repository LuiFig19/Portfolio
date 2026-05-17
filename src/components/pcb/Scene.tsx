"use client";

import { useRef, type MutableRefObject } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { SpotLight, Group, Vector3 } from "three";
import { Line } from "@react-three/drei";
import { Board } from "./Board";
import { Trace } from "./Trace";
import { Component3D } from "./Components3D";
import { traces, components, vias } from "./pcbData";

const ACCENT = "#E8A04A";

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}
function smoothstep(t: number) {
  return t * t * (3 - 2 * t);
}
function clamp(v: number, min = 0, max = 1) {
  return Math.max(min, Math.min(max, v));
}

function Vias({ progressRef }: { progressRef: MutableRefObject<number> }) {
  const groupRef = useRef<Group>(null);
  useFrame(() => {
    const g = groupRef.current;
    if (!g) return;
    g.children.forEach((child, i) => {
      const appear = vias[i].appearAt;
      const local = clamp((progressRef.current - appear) / 0.04, 0, 1);
      child.scale.setScalar(local);
      child.visible = local > 0;
    });
  });
  return (
    <group ref={groupRef}>
      {vias.map((v, i) => (
        <mesh key={i} position={[v.position[0], v.position[1], 0.108]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.045, 0.045, 0.008, 16]} />
          <meshStandardMaterial
            color={ACCENT}
            emissive={ACCENT}
            emissiveIntensity={0.35}
            roughness={0.35}
            metalness={0.55}
            toneMapped={false}
          />
        </mesh>
      ))}
    </group>
  );
}

function RakeLight({ progressRef }: { progressRef: MutableRefObject<number> }) {
  const lightRef = useRef<SpotLight>(null);
  const targetRef = useRef<Group>(null);
  useFrame(() => {
    const l = lightRef.current;
    const t = targetRef.current;
    if (!l || !t) return;
    // Rake moves across X over the full scroll, with a small Y lift.
    const p = progressRef.current;
    const x = lerp(-6, 6, p);
    l.position.set(x, 3.5, 4);
    t.position.set(x, 0, 0);
    l.target = t;
    l.intensity = 30 + 20 * Math.sin(p * Math.PI);
  });
  return (
    <>
      <spotLight
        ref={lightRef}
        color={ACCENT}
        intensity={28}
        angle={0.5}
        penumbra={0.85}
        distance={14}
        decay={1.6}
        castShadow={false}
      />
      <group ref={targetRef} />
    </>
  );
}

function CameraRig({ progressRef }: { progressRef: MutableRefObject<number> }) {
  const { camera } = useThree();
  const lookAt = useRef(new Vector3(0, 0, 0));

  useFrame(() => {
    const raw = progressRef.current;
    // Camera tilt: top-down from p=0 to ~0.55, then ease into 3/4 iso by p=1.
    const tiltT = smoothstep(clamp((raw - 0.45) / 0.55, 0, 1));
    const y = lerp(0.01, -4.8, tiltT);
    const z = lerp(8.4, 6.6, tiltT);
    camera.position.set(0, y, z);
    camera.lookAt(lookAt.current);
  });

  return null;
}

function BoardOutlineDraw({ progressRef }: { progressRef: MutableRefObject<number> }) {
  // Subtle accent rim that traces around the board on initial scroll.
  const ref = useRef<any>(null);
  // perimeter of rounded rect ~ 2(w + h)
  const perimeter = 2 * (8 + 5) - 0.4;
  useFrame(({ clock }) => {
    const mat = ref.current?.material;
    if (!mat) return;
    // intro draw - first 1.5 seconds of mount
    const introT = clamp(clock.elapsedTime / 1.5, 0, 1);
    const intro = smoothstep(introT);
    // fade based on scroll - disappear past 0.6
    const fade = clamp(1 - (progressRef.current - 0.55) / 0.2, 0, 1);
    const drawn = intro * perimeter;
    mat.dashSize = Math.max(drawn, 0.0001);
    mat.gapSize = Math.max(perimeter - drawn, 0.0001);
    mat.opacity = fade * 0.85;
    mat.needsUpdate = true;
  });

  // rounded rect outline points - simplified to a thin inset rectangle
  const inset = 0.18;
  const w = 8 - inset * 2;
  const h = 5 - inset * 2;
  const pts: [number, number, number][] = [
    [-w / 2, -h / 2, 0.106],
    [w / 2, -h / 2, 0.106],
    [w / 2, h / 2, 0.106],
    [-w / 2, h / 2, 0.106],
    [-w / 2, -h / 2, 0.106],
  ];

  return (
    <Line
      ref={ref}
      points={pts}
      color={ACCENT}
      lineWidth={1.2}
      dashed
      dashScale={1}
      dashSize={0.0001}
      gapSize={perimeter}
      transparent
      toneMapped={false}
    />
  );
}

export function Scene({ progressRef }: { progressRef: MutableRefObject<number> }) {
  return (
    <>
      <CameraRig progressRef={progressRef} />

      <ambientLight intensity={0.42} color="#FFE9D2" />
      <directionalLight position={[6, 8, 6]} intensity={0.55} color="#FFD9B0" />
      <directionalLight position={[-6, -2, 4]} intensity={0.18} color="#7A86A0" />
      <RakeLight progressRef={progressRef} />

      <Board />
      <BoardOutlineDraw progressRef={progressRef} />

      <group>
        {traces.map((t) => (
          <Trace key={t.id} trace={t} progressRef={progressRef} />
        ))}
      </group>

      <Vias progressRef={progressRef} />

      <group>
        {components.map((c) => (
          <Component3D key={c.id} comp={c} progressRef={progressRef} />
        ))}
      </group>
    </>
  );
}
