// Procedural PCB definition. Edit positions/paths to re-route the board.
// All coordinates are in board space — origin at center, X right, Y up.
// Board: 8 wide x 5 tall. Z is the extrusion direction (out of board).

export type Vec2 = [number, number];

export type PcbComponent = {
  id: string;
  kind: "module" | "ic" | "rj45" | "usbc" | "passive" | "crystal" | "magnetics" | "led";
  position: Vec2;
  size: [number, number, number]; // x, y, z (extrusion height)
  rotation?: number; // radians, around Z
  label?: string;
  appearAt: number; // scroll progress 0..1
  color?: string;
};

export type PcbTrace = {
  id: string;
  points: Vec2[]; // polyline, 45° / 90° angles only
  width?: number; // line pixel width
  appearAt: number;
  duration?: number;
};

export type PcbVia = {
  position: Vec2;
  appearAt: number;
};

export type PcbPad = {
  position: Vec2;
  size: Vec2;
  appearAt: number;
};

export const BOARD = {
  width: 8,
  height: 5,
  cornerRadius: 0.22,
  thickness: 0.1,
  // FR4 substrate — very dark slate, faintly warm
  color: "#0E1014",
  // Soldermask sheen on edge bevel
  edgeColor: "#1A1C22",
  // Silkscreen marks color
  silkColor: "#9A8970",
};

export const components: PcbComponent[] = [
  {
    id: "esp32",
    kind: "module",
    position: [-2.3, 1.0],
    size: [1.7, 1.05, 0.42],
    label: "U1",
    appearAt: 0.46,
    color: "#1E1E22",
  },
  {
    id: "sen55",
    kind: "ic",
    position: [1.9, 1.35],
    size: [1.05, 0.9, 0.32],
    label: "U2",
    appearAt: 0.5,
    color: "#15161A",
  },
  {
    id: "rj45",
    kind: "rj45",
    position: [3.05, -0.5],
    size: [1.45, 1.85, 0.95],
    label: "J1",
    appearAt: 0.6,
    color: "#0A0A0C",
  },
  {
    id: "magnetics",
    kind: "magnetics",
    position: [2.55, -1.75],
    size: [1.05, 0.55, 0.32],
    label: "T1",
    appearAt: 0.62,
    color: "#101116",
  },
  {
    id: "usbc",
    kind: "usbc",
    position: [-3.4, -2.18],
    size: [1.0, 0.46, 0.38],
    label: "J2",
    appearAt: 0.66,
    color: "#1B1C20",
  },
  {
    id: "crystal",
    kind: "crystal",
    position: [-0.55, 0.75],
    size: [0.55, 0.28, 0.18],
    label: "Y1",
    appearAt: 0.52,
    color: "#202126",
  },
  // decoupling caps around ESP32
  { id: "c1", kind: "passive", position: [-1.0, 1.5], size: [0.18, 0.09, 0.05], appearAt: 0.54 },
  { id: "c2", kind: "passive", position: [-1.0, 1.2], size: [0.18, 0.09, 0.05], appearAt: 0.55 },
  { id: "c3", kind: "passive", position: [-1.0, 0.9], size: [0.18, 0.09, 0.05], appearAt: 0.56 },
  { id: "c4", kind: "passive", position: [-1.0, 0.6], size: [0.18, 0.09, 0.05], appearAt: 0.57 },
  // status LED + series resistor
  { id: "led1", kind: "led", position: [0.9, -1.55], size: [0.18, 0.1, 0.06], appearAt: 0.7 },
  { id: "r1", kind: "passive", position: [1.3, -1.55], size: [0.18, 0.09, 0.05], appearAt: 0.71 },
  // pull-ups near ESP32
  { id: "r2", kind: "passive", position: [-2.3, 1.85], size: [0.16, 0.08, 0.05], appearAt: 0.58 },
  { id: "r3", kind: "passive", position: [-2.0, 1.85], size: [0.16, 0.08, 0.05], appearAt: 0.59 },
  // SEN55 support caps
  { id: "c5", kind: "passive", position: [1.9, 0.7], size: [0.18, 0.09, 0.05], appearAt: 0.6 },
  { id: "c6", kind: "passive", position: [2.3, 0.7], size: [0.18, 0.09, 0.05], appearAt: 0.61 },
];

export const traces: PcbTrace[] = [
  // ESP32 → SEN55 I²C bus
  { id: "i2c-sda", points: [[-1.45, 1.35], [0.4, 1.35], [0.8, 0.95], [1.4, 0.95]], appearAt: 0.06, duration: 0.07 },
  { id: "i2c-scl", points: [[-1.45, 1.15], [0.5, 1.15], [0.9, 0.75], [1.4, 0.75]], appearAt: 0.09, duration: 0.07 },
  // ESP32 → RJ45 Ethernet pairs
  { id: "eth-tx-p", points: [[-1.45, 0.7], [1.1, 0.7], [1.6, 0.2], [2.4, 0.2]], appearAt: 0.13, duration: 0.08 },
  { id: "eth-tx-n", points: [[-1.45, 0.55], [1.2, 0.55], [1.7, 0.05], [2.4, 0.05]], appearAt: 0.16, duration: 0.08 },
  { id: "eth-rx-p", points: [[-1.45, 0.35], [1.3, 0.35], [1.8, -0.15], [2.4, -0.15]], appearAt: 0.19, duration: 0.08 },
  { id: "eth-rx-n", points: [[-1.45, 0.2], [1.4, 0.2], [1.9, -0.3], [2.4, -0.3]], appearAt: 0.22, duration: 0.08 },
  // USB-C VBUS + GND
  { id: "vbus", points: [[-2.85, 0.5], [-2.85, -1.3], [-3.4, -1.85], [-3.4, -1.96]], appearAt: 0.26, duration: 0.09 },
  { id: "usb-gnd", points: [[-2.45, 0.5], [-2.45, -1.5], [-3.05, -1.85], [-3.05, -1.96]], appearAt: 0.29, duration: 0.09 },
  // USB-C data D+/D-
  { id: "dp", points: [[-3.0, 0.5], [-3.0, -1.6], [-3.25, -1.85], [-3.25, -1.96]], appearAt: 0.32, duration: 0.08 },
  { id: "dn", points: [[-3.15, 0.5], [-3.15, -1.62], [-3.4, -1.87]], appearAt: 0.34, duration: 0.08 },
  // Crystal to ESP32
  { id: "xtal-1", points: [[-0.85, 0.75], [-1.45, 0.75]], appearAt: 0.37, duration: 0.05 },
  { id: "xtal-2", points: [[-0.25, 0.75], [-0.0, 1.0], [-0.0, 1.15]], appearAt: 0.38, duration: 0.05 },
  // Decoupling cap stubs
  { id: "dc1", points: [[-1.09, 1.5], [-1.45, 1.5]], appearAt: 0.4, duration: 0.04 },
  { id: "dc2", points: [[-1.09, 1.2], [-1.45, 1.2]], appearAt: 0.41, duration: 0.04 },
  { id: "dc3", points: [[-1.09, 0.9], [-1.45, 0.9]], appearAt: 0.42, duration: 0.04 },
  { id: "dc4", points: [[-1.09, 0.6], [-1.45, 0.6]], appearAt: 0.43, duration: 0.04 },
  // RJ45 → Magnetics
  { id: "mag-1", points: [[2.65, -1.0], [2.65, -1.55]], appearAt: 0.36, duration: 0.05 },
  { id: "mag-2", points: [[2.85, -1.0], [2.85, -1.55]], appearAt: 0.37, duration: 0.05 },
  { id: "mag-3", points: [[3.05, -1.0], [3.05, -1.55]], appearAt: 0.38, duration: 0.05 },
  { id: "mag-4", points: [[3.25, -1.0], [3.25, -1.55]], appearAt: 0.39, duration: 0.05 },
  // LED indicator
  { id: "led-trace", points: [[0.81, -1.55], [0.45, -1.55], [0.0, -1.1], [0.0, 0.5], [-1.45, 0.5]], appearAt: 0.44, duration: 0.08 },
  // SEN55 support cap stubs
  { id: "sen-c1", points: [[1.9, 0.79], [1.9, 0.95]], appearAt: 0.45, duration: 0.03 },
  { id: "sen-c2", points: [[2.3, 0.79], [2.3, 0.95]], appearAt: 0.45, duration: 0.03 },
];

// Vias are the small drilled dots at trace bends / layer transitions.
export const vias: PcbVia[] = [
  { position: [0.4, 1.35], appearAt: 0.06 },
  { position: [0.8, 0.95], appearAt: 0.07 },
  { position: [1.1, 0.7], appearAt: 0.14 },
  { position: [1.6, 0.2], appearAt: 0.15 },
  { position: [1.3, 0.35], appearAt: 0.2 },
  { position: [1.8, -0.15], appearAt: 0.21 },
  { position: [-2.85, -1.3], appearAt: 0.27 },
  { position: [-3.4, -1.85], appearAt: 0.28 },
  { position: [-2.45, -1.5], appearAt: 0.3 },
  { position: [0.0, -1.1], appearAt: 0.45 },
  { position: [0.0, 0.5], appearAt: 0.46 },
];

// Silkscreen text marks (rendered as tiny mono labels next to components).
export const silkscreens: { position: Vec2; text: string; appearAt: number }[] = [
  { position: [-2.3, 1.7], text: "U1  ESP32-S3", appearAt: 0.48 },
  { position: [1.9, 2.0], text: "U2  SEN55", appearAt: 0.52 },
  { position: [3.05, 0.6], text: "J1  RJ45 — POE", appearAt: 0.62 },
  { position: [-3.4, -1.78], text: "J2  USB-C", appearAt: 0.68 },
  { position: [-3.65, 2.25], text: "FN-AIO1  REV.A", appearAt: 0.0 },
  { position: [3.65, -2.25], text: "ORLANDO, FL", appearAt: 0.0 },
];
