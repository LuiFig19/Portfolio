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
  image?: string;
  link?: { label: string; href: string };
  highlights: string[];
};

export const projects: Project[] = [
  {
    id: "astra-airsensor",
    index: "H-01",
    title: "Astra Air Sensor",
    subtitle: "Custom KiCad PCB · PoE air-quality",
    blurb:
      "Indoor air-quality sensor pulling PM, VOC, CO₂, temperature, and humidity off a Sensirion SEN55. Single PoE drop powers and reports the device. Two-layer PCB designed in KiCad start to finish, hand-assembled and brought up.",
    tech: ["KiCad", "ESP32-S3", "SEN55", "PoE 802.3af", "C / C++", "MQTT"],
    status: "pilot",
    build: "custom-pcb",
    image: "/images/project-motion-1.png",
    highlights: [
      "Two-layer PCB designed end to end in KiCad",
      "Active PoE PD with isolated 3.3V rail",
      "Reports to AstraRMM and any MQTT broker",
    ],
  },
  {
    id: "astrarmm-device",
    index: "H-02",
    title: "AstraRMM Monitoring Device",
    subtitle: "ESP32-S3 PoE telemetry node",
    blurb:
      "Always-on telemetry node designed to live inside a network rack. Reports power, temperature, network reachability, and door state back to the AstraRMM platform. Module build — firmware, integration, and enclosure by me.",
    tech: ["ESP32-S3", "PoE", "Ethernet PHY", "AstraRMM", "OTA", "Watchdog"],
    status: "pilot",
    build: "module-build",
    image: "/images/project-motion-2.png",
    highlights: [
      "Hardware watchdog + remote OTA from AstraRMM",
      "Reports to the same dashboard the technicians already use",
      "Sized to fit a 1U side mount in existing racks",
    ],
  },
  {
    id: "mesh-motion",
    index: "H-03",
    title: "Mesh Motion Network",
    subtitle: "mmWave + Thread presence mesh",
    blurb:
      "Distributed presence-sensing network using commercial mmWave radar modules on a Thread mesh. Sub-second occupancy detection across whole-floor coverage without PIR blind spots. Built from COTS dev boards; firmware and integration by me.",
    tech: ["mmWave module", "Thread", "Border Router", "Matter", "Low-power MCU"],
    status: "pilot",
    build: "module-build",
    image: "/images/project-motion-3.png",
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
      "Compact appliance for MSP sites: passive uplink monitor, latency probes, and a heartbeat back to AstraRMM. Plug in, get visibility, page on degradation. ESP32-S3 module build.",
    tech: ["ESP32-S3", "Gigabit PHY", "ICMP probes", "AstraRMM", "Alerting"],
    status: "pilot",
    build: "module-build",
    highlights: [
      "Detects upstream brownouts before users notice",
      "Pages the on-call technician via AstraRMM",
      "Reuses the AstraRMM device firmware base",
    ],
  },
];
