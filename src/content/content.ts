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
  headline: ["Hardware that ships.", "Networks that stay up."],
  subhead:
    "I'm Luis — an IT field technician and hardware engineer in Orlando, building production IoT devices and running managed IT for real clients.",
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
    headline: "Production hardware, designed end to end.",
    body:
      "PCB design in KiCad. Firmware in C and C++. Enclosure prototyping, BOM sourcing, and pilot deployments in real MSP environments. Every device on this page has been built, flashed, and run in production — not just rendered.",
    stack: ["KiCad", "ESP32-S3", "STM32", "C / C++", "PoE", "Thread", "BLE"],
  },
  platform: {
    id: "platform",
    index: "002",
    eyebrow: "SOFTWARE STACK",
    headline: "The software that the hardware reports to.",
    body:
      "AstraRMM is a custom remote monitoring and management platform built for MSP operations — agent deployment, endpoint telemetry, real-time alerting, technician dashboards. TaskChrono is a delivered SaaS product for time tracking and reporting. The hardware doesn't sit on a shelf; it reports to software I also wrote.",
    stack: ["Next.js", "TypeScript", "Postgres", "WebSocket", "Docker", "REST"],
    products: [
      {
        name: "AstraRMM",
        line: "Remote monitoring & management",
        detail: "Agent deployment, endpoint telemetry, real-time alerting, technician dashboards.",
      },
      {
        name: "TaskChrono",
        line: "Delivered SaaS product",
        detail: "Time tracking and reporting — shipped, paid, in production.",
      },
    ],
  },
  field: {
    id: "field",
    index: "003",
    eyebrow: "ON THE GROUND",
    headline: "Tier 2 escalation. Real client environments.",
    body:
      "Co-founder and field technician at Fanatic Node, an Orlando-based MSP. Microsoft 365 administration, Entra ID, Conditional Access, endpoint monitoring with Huntress and AstraRMM, Comet Backup, on-site assessments, and documentation that holds up under audit.",
    stack: [
      "Microsoft 365",
      "Entra ID",
      "Conditional Access",
      "Huntress",
      "AstraRMM",
      "Comet Backup",
      "Meraki",
      "UniFi",
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
      "IT infrastructure & MSP operations",
    ],
    bring: [
      "PCB design and bring-up in production",
      "Firmware across ESP32, STM32, RP2040",
      "Full-stack software for the devices I design",
      "Field experience with real clients, real downtime, real audits",
      "Documentation that an outside team can actually pick up",
    ],
  },
} as const;

export const closing = {
  eyebrow: "[ CONTACT — INBOUND OPEN ]",
  headline: ["Let's build something", "that works."],
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
  note: "Built in KiCad, then in Next.js.",
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
