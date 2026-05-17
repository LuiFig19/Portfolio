// All site copy lives here. Edit text without touching components.

export const site = {
  name: "Luis Figueroa",
  shortName: "L. Figueroa",
  role: "IT Field Technician & Hardware Engineer",
  location: "Orlando, FL",
  version: "V.2026.01",
  silkscreen: "FN-AIO1 — REV.A — ORLANDO, FL",
  email: "Luifig19@gmail.com",
  linkedin: "https://www.linkedin.com/in/luis-figueroa19/",
  linkedinHandle: "luis-figueroa19",
  github: "https://github.com/LuiFig19",
  githubHandle: "LuiFig19",
  resumePath: "/Luis_Figueroa_Resume.pdf",
} as const;

export const hero = {
  label: "[ FN-AIO1 — REV.A — ORLANDO, FL ]",
  topLabel: "[ INDEX — 2026.01 ]",
  headline: ["Hardware that ships.", "Code that runs."],
  subhead:
    "I'm Luis — a welder by day in Orlando, and a self-taught hardware engineer the rest of the time. I design PCBs in KiCad, write firmware in C, and ship the software the devices report to. Out of a home lab.",
  ctas: [
    { label: "SEE THE WORK", href: "#hardware", variant: "primary" as const },
    { label: "DOWNLOAD RESUME", href: site.resumePath, variant: "ghost" as const, download: true },
  ],
} as const;

export const sections = {
  hardware: {
    id: "hardware",
    index: "001",
    eyebrow: "SILICON & SOLDER",
    headline: "Boards I designed and brought up.",
    body:
      "Two custom KiCad PCBs - the Air Sensor and a drone flight controller - drawn from schematic to bring-up by me. The mmWave Motion node and Network Monitor are ESP32-S3 builds on commercial modules and dev boards, firmware and enclosure work mine. Everything runs today in a home lab.",
    stack: ["KiCad", "ESP32-S3", "C / C++", "PoE", "mmWave", "Thread", "BLE"],
  },
  platform: {
    id: "platform",
    index: "002",
    eyebrow: "SOFTWARE STACK",
    headline: "The software the hardware reports to — also mine.",
    body:
      "AstraRMM is a remote monitoring and management platform I built for MSP-style ops: agent deployment, endpoint telemetry, alerting, and a technician dashboard. TaskChrono is a SaaS tool for time tracking and reporting — shipped to a paying customer and still in active use. The devices on this page don't sit on a shelf; they report to software I also wrote.",
    stack: ["Next.js", "TypeScript", "Postgres", "WebSocket", "Docker", "REST"],
    products: [
      {
        name: "AstraRMM",
        line: "Remote monitoring & management",
        detail: "Agent deployment, endpoint telemetry, alerting, technician dashboard. Drives the hardware above.",
      },
      {
        name: "TaskChrono",
        line: "SaaS — shipped",
        detail: "Time tracking and reporting. Delivered to a paying customer, still in use.",
      },
    ],
  },
  field: {
    id: "field",
    index: "003",
    eyebrow: "ON THE GROUND",
    headline: "Production lead by day. Builder the rest of the time.",
    body:
      "Production lead at Ravens Marine — running the welding floor and bringing junior welders up to qualified. Evenings and weekends: contract field IT for Fanatic Node — Windows recovery, drive and RAM upgrades, BitLocker resets, admin-password recovery, PoE camera installs. The home lab in the background is where the PCBs above actually live.",
    stack: [
      "Production leadership",
      "Welding",
      "Windows recovery",
      "BitLocker",
      "Drive / RAM upgrades",
      "PoE camera installs",
      "UniFi",
      "Home lab",
    ],
  },
  availability: {
    id: "availability",
    index: "004",
    eyebrow: "WHAT'S NEXT",
    headline: "Open to hardware, IoT, and infrastructure roles.",
    body:
      "Actively seeking roles in hardware/IoT engineering, embedded systems, hardware test & validation, field deployment, or IT infrastructure. Remote or Central Florida. Based in Orlando, FL.",
    openTo: [
      "Hardware / IoT engineering",
      "Embedded systems (firmware + low-level)",
      "Hardware test & validation",
      "Field deployment engineering",
      "IT infrastructure",
    ],
    bring: [
      "Four PCBs designed in KiCad, fabricated, and brought up",
      "Firmware in C / C++ on ESP32-S3",
      "Full-stack software for the devices I design — agents, server, dashboard",
      "Production-floor leadership at Ravens Marine — bringing junior welders to qualified",
      "Hands-on field IT: Windows recovery, networks, camera installs",
    ],
  },
} as const;

export const closing = {
  eyebrow: "[ CONTACT — INBOUND OPEN ]",
  headline: ["Let's build something", "that actually works."],
  ctas: [
    { label: "EMAIL", value: site.email, href: `mailto:${site.email}` },
    { label: "LINKEDIN", value: site.linkedinHandle, href: site.linkedin },
    { label: "GITHUB", value: site.githubHandle, href: site.github },
  ],
  resume: { label: "RESUME — PDF", href: site.resumePath },
} as const;

export const footer = {
  location: site.location,
  version: `[ ${site.version} ]`,
  copy: `© ${new Date().getFullYear()} ${site.name}.`,
  note: "Welder, hardware engineer, software engineer. In that order.",
} as const;

export const nav = {
  links: [
    { label: "Hardware", href: "#hardware", index: "001" },
    { label: "Platform", href: "#platform", index: "002" },
    { label: "Field", href: "#field", index: "003" },
    { label: "Availability", href: "#availability", index: "004" },
  ],
  cta: { label: "RESUME", href: site.resumePath, download: true },
} as const;
