// Projects list. Add new builds here.

export type ProjectStatus = "in-production" | "pilot" | "prototype" | "shipped";

export type Project = {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  blurb: string;
  tech: string[];
  status: ProjectStatus;
  build: "custom-pcb" | "module-build";
  images: string[]; // first is the lead/poster image
  link?: { label: string; href: string };
  highlights: string[];
};

export const projects: Project[] = [
  {
    id: "mesh-motion",
    index: "H-03",
    title: "Mesh Motion Network",
    subtitle: "mmWave + Thread presence mesh",
    blurb:
      "Distributed presence-sensing network using commercial mmWave radar modules on a Thread mesh. Sub-second occupancy detection across whole-floor coverage without PIR blind spots. Built from COTS dev boards; firmware and 3D-printed enclosures by me.",
    tech: ["mmWave module", "ESP32", "Thread", "Border Router", "Matter"],
    status: "pilot",
    build: "module-build",
    images: [
      "/images/project-motion-2.png",
      "/images/project-motion-1.png",
      "/images/project-motion-3.png",
    ],
    highlights: [
      "Thread mesh — no hub-and-spoke choke points",
      "Radar instead of PIR, so no warm-body false negatives",
      "Roadmap: integrate with AstraRMM for facility analytics",
    ],
  },
  {
    id: "network-monitor",
    index: "H-04",
    title: "Network Monitoring Appliance",
    subtitle: "Drop-in MSP visibility box",
    blurb:
      "Compact appliance for MSP sites: passive uplink monitor, latency probes, and a heartbeat back to AstraRMM. Plug in, get visibility, page on degradation. ESP32-S3 module build with a 3D-printed enclosure.",
    tech: ["ESP32-S3", "Gigabit PHY", "ICMP probes", "AstraRMM", "Alerting"],
    status: "pilot",
    build: "module-build",
    images: [
      "/images/project-network-3.png",
      "/images/project-network-2.png",
      "/images/project-network-1.png",
    ],
    highlights: [
      "Detects upstream brownouts before users notice",
      "Pages the on-call technician via AstraRMM",
      "Reuses the AstraRMM firmware base",
    ],
  },
];
