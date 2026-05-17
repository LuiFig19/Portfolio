"use client";

import { useMemo, useRef, type MutableRefObject } from "react";
import { useFrame } from "@react-three/fiber";
import { Group } from "three";
import type { PcbComponent } from "./pcbData";

const BOARD_TOP_Z = 0.1;
const ACCENT = "#E8A04A";

function clamp(v: number, min = 0, max = 1) {
  return Math.max(min, Math.min(max, v));
}

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

export function Component3D({
  comp,
  progressRef,
}: {
  comp: PcbComponent;
  progressRef: MutableRefObject<number>;
}) {
  const groupRef = useRef<Group>(null);
  const duration = 0.05;

  useFrame(() => {
    const g = groupRef.current;
    if (!g) return;
    const local = clamp((progressRef.current - comp.appearAt) / duration, 0, 1);
    const eased = easeOutCubic(local);
    // Extrude upward from board top — scale Z from 0 to 1.
    g.scale.set(1, 1, Math.max(eased, 0.0001));
    g.visible = local > 0;
  });

  const baseColor = comp.color ?? "#1A1B20";
  const [w, h, z] = comp.size;

  const inner = useMemo(() => {
    switch (comp.kind) {
      case "module":
        return <ESP32Module size={[w, h, z]} />;
      case "ic":
        return <IC size={[w, h, z]} color={baseColor} />;
      case "rj45":
        return <RJ45 size={[w, h, z]} />;
      case "usbc":
        return <USBC size={[w, h, z]} />;
      case "magnetics":
        return <Magnetics size={[w, h, z]} />;
      case "crystal":
        return <Crystal size={[w, h, z]} />;
      case "led":
        return <LED size={[w, h, z]} />;
      default:
        return <Passive size={[w, h, z]} />;
    }
  }, [comp.kind, w, h, z, baseColor]);

  return (
    <group
      ref={groupRef}
      position={[comp.position[0], comp.position[1], BOARD_TOP_Z]}
      rotation={[0, 0, comp.rotation ?? 0]}
      scale={[1, 1, 0.0001]}
    >
      {inner}
    </group>
  );
}

// All piece variants assume their base sits at local z=0 and they extrude up in +z.

function ESP32Module({ size }: { size: [number, number, number] }) {
  const [w, h, z] = size;
  return (
    <group>
      <mesh position={[0, 0, z / 2]}>
        <boxGeometry args={[w, h, z]} />
        <meshStandardMaterial color="#13141A" roughness={0.55} metalness={0.15} />
      </mesh>
      {/* RF shield can */}
      <mesh position={[-w * 0.18, h * 0.18, z + 0.06]}>
        <boxGeometry args={[w * 0.5, h * 0.55, 0.12]} />
        <meshStandardMaterial color="#9CA0AB" roughness={0.42} metalness={0.78} />
      </mesh>
      {/* PCB antenna gold-flash area */}
      <mesh position={[w * 0.32, h * 0.3, z + 0.002]}>
        <boxGeometry args={[w * 0.28, h * 0.4, 0.005]} />
        <meshStandardMaterial color={ACCENT} emissive={ACCENT} emissiveIntensity={0.25} roughness={0.4} />
      </mesh>
      {/* castellation pads */}
      {Array.from({ length: 8 }).map((_, i) => (
        <mesh key={`l${i}`} position={[-w / 2, -h / 2 + (i + 0.5) * (h / 8), z * 0.5]}>
          <boxGeometry args={[0.04, h / 12, z * 0.9]} />
          <meshStandardMaterial color={ACCENT} roughness={0.35} metalness={0.6} />
        </mesh>
      ))}
      {Array.from({ length: 8 }).map((_, i) => (
        <mesh key={`r${i}`} position={[w / 2, -h / 2 + (i + 0.5) * (h / 8), z * 0.5]}>
          <boxGeometry args={[0.04, h / 12, z * 0.9]} />
          <meshStandardMaterial color={ACCENT} roughness={0.35} metalness={0.6} />
        </mesh>
      ))}
    </group>
  );
}

function IC({ size, color }: { size: [number, number, number]; color: string }) {
  const [w, h, z] = size;
  return (
    <group>
      <mesh position={[0, 0, z / 2]}>
        <boxGeometry args={[w, h, z]} />
        <meshStandardMaterial color={color} roughness={0.45} metalness={0.12} />
      </mesh>
      <mesh position={[-w * 0.4, h * 0.32, z + 0.005]}>
        <cylinderGeometry args={[0.025, 0.025, 0.01, 16]} />
        <meshStandardMaterial color="#3A3B40" />
      </mesh>
      <mesh position={[0, 0, z + 0.005]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.13, 0.13, 0.01, 24]} />
        <meshStandardMaterial color="#06070A" />
      </mesh>
    </group>
  );
}

function RJ45({ size }: { size: [number, number, number] }) {
  const [w, h, z] = size;
  return (
    <group>
      <mesh position={[0, 0, z / 2]}>
        <boxGeometry args={[w, h, z]} />
        <meshStandardMaterial color="#0A0A0C" roughness={0.7} metalness={0.05} />
      </mesh>
      <mesh position={[0, h * 0.1, z - 0.02]}>
        <boxGeometry args={[w * 0.94, h * 0.78, z * 0.7]} />
        <meshStandardMaterial color="#B5B8BF" roughness={0.5} metalness={0.65} />
      </mesh>
      <mesh position={[-w * 0.25, -h * 0.45, z * 0.4]}>
        <boxGeometry args={[0.12, 0.06, 0.08]} />
        <meshStandardMaterial color={ACCENT} emissive={ACCENT} emissiveIntensity={0.6} toneMapped={false} />
      </mesh>
      <mesh position={[w * 0.25, -h * 0.45, z * 0.4]}>
        <boxGeometry args={[0.12, 0.06, 0.08]} />
        <meshStandardMaterial color="#7DD46F" emissive="#7DD46F" emissiveIntensity={0.6} toneMapped={false} />
      </mesh>
    </group>
  );
}

function USBC({ size }: { size: [number, number, number] }) {
  const [w, h, z] = size;
  return (
    <group>
      <mesh position={[0, 0, z / 2]}>
        <boxGeometry args={[w, h, z]} />
        <meshStandardMaterial color="#9CA0AB" roughness={0.45} metalness={0.7} />
      </mesh>
      <mesh position={[0, -h * 0.5, z * 0.5]}>
        <boxGeometry args={[w * 0.7, 0.06, z * 0.45]} />
        <meshStandardMaterial color="#06070A" />
      </mesh>
    </group>
  );
}

function Magnetics({ size }: { size: [number, number, number] }) {
  const [w, h, z] = size;
  return (
    <mesh position={[0, 0, z / 2]}>
      <boxGeometry args={[w, h, z]} />
      <meshStandardMaterial color="#101116" roughness={0.6} metalness={0.1} />
    </mesh>
  );
}

function Crystal({ size }: { size: [number, number, number] }) {
  const [w, h, z] = size;
  return (
    <mesh position={[0, 0, z / 2]}>
      <boxGeometry args={[w, h, z]} />
      <meshStandardMaterial color="#9CA0AB" roughness={0.4} metalness={0.75} />
    </mesh>
  );
}

function Passive({ size }: { size: [number, number, number] }) {
  const [w, h, z] = size;
  return (
    <group>
      <mesh position={[0, 0, z / 2]}>
        <boxGeometry args={[w * 0.65, h, z]} />
        <meshStandardMaterial color="#1B1C20" roughness={0.6} />
      </mesh>
      <mesh position={[-w * 0.4, 0, z / 2]}>
        <boxGeometry args={[w * 0.2, h, z * 1.05]} />
        <meshStandardMaterial color="#C8CCD3" roughness={0.42} metalness={0.7} />
      </mesh>
      <mesh position={[w * 0.4, 0, z / 2]}>
        <boxGeometry args={[w * 0.2, h, z * 1.05]} />
        <meshStandardMaterial color="#C8CCD3" roughness={0.42} metalness={0.7} />
      </mesh>
    </group>
  );
}

function LED({ size }: { size: [number, number, number] }) {
  const [w, h, z] = size;
  return (
    <group>
      <mesh position={[0, 0, z / 2]}>
        <boxGeometry args={[w * 0.7, h, z]} />
        <meshStandardMaterial color="#EAEAEA" roughness={0.4} />
      </mesh>
      <mesh position={[0, 0, z + 0.005]}>
        <boxGeometry args={[w * 0.45, h * 0.6, 0.005]} />
        <meshStandardMaterial color={ACCENT} emissive={ACCENT} emissiveIntensity={0.9} toneMapped={false} />
      </mesh>
    </group>
  );
}
