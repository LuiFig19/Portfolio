"use client";

import { useMemo } from "react";
import { Shape, ExtrudeGeometry, EdgesGeometry } from "three";
import { BOARD } from "./pcbData";

function roundedRectShape(w: number, h: number, r: number) {
  const s = new Shape();
  const x = -w / 2;
  const y = -h / 2;
  s.moveTo(x + r, y);
  s.lineTo(x + w - r, y);
  s.quadraticCurveTo(x + w, y, x + w, y + r);
  s.lineTo(x + w, y + h - r);
  s.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  s.lineTo(x + r, y + h);
  s.quadraticCurveTo(x, y + h, x, y + h - r);
  s.lineTo(x, y + r);
  s.quadraticCurveTo(x, y, x + r, y);
  return s;
}

export function Board() {
  const { boardGeom, edgeGeom } = useMemo(() => {
    const shape = roundedRectShape(BOARD.width, BOARD.height, BOARD.cornerRadius);
    const boardGeom = new ExtrudeGeometry(shape, {
      depth: BOARD.thickness,
      bevelEnabled: true,
      bevelThickness: 0.008,
      bevelSize: 0.008,
      bevelSegments: 2,
      curveSegments: 12,
    });
    // Re-center on Z so top surface is at thickness
    boardGeom.translate(0, 0, 0);
    const edgeGeom = new EdgesGeometry(boardGeom, 30);
    return { boardGeom, edgeGeom };
  }, []);

  return (
    <group>
      <mesh geometry={boardGeom} castShadow receiveShadow>
        <meshStandardMaterial
          color={BOARD.color}
          roughness={0.72}
          metalness={0.05}
          envMapIntensity={0.4}
        />
      </mesh>
      <lineSegments geometry={edgeGeom} position={[0, 0, 0]}>
        <lineBasicMaterial color={BOARD.edgeColor} transparent opacity={0.65} />
      </lineSegments>
    </group>
  );
}
