# Luis Figueroa

**Welder · Hardware engineer · Software engineer** — Orlando, FL

Personal site and project index for production IoT hardware, embedded firmware, and the software stack behind it.

**Live site:** [luifigueroa.com](https://luifigueroa.com) · **Resume:** [PDF](https://luifigueroa.com/Luis_Figueroa_Resume.pdf) · **LinkedIn:** [luis-figueroa19](https://www.linkedin.com/in/luis-figueroa19/)

---

## What I build

| Area | Work |
|------|------|
| **Hardware** | AstraRMM IoT fleet — Air Sensor (custom KiCad PCB), mmWave motion node, network monitor. ESP32-S3, PoE, hand assembly, bring-up. |
| **Firmware** | C / C++ on ESP32-S3 — MQTT, OTA, watchdogs, sensor integration. |
| **Platform** | [AstraRMM](https://luifigueroa.com/#platform) — co-founded RMM: agents, server, alerting, technician dashboard. |
| **SaaS** | TaskChrono — time tracking shipped to a paying customer (Next.js, TypeScript, PostgreSQL). |
| **Day job** | Production lead, Ravens Marine — aluminum structural fabrication and floor leadership. |

This repo is the **portfolio site** — scroll-driven PCB hero, project gallery, and resume download. Built to show hardware and software in one place.

---

## Stack

Next.js 14 · TypeScript · Tailwind · Three.js / R3F · GSAP · Lenis

---

## Quick start

```bash
npm install
npm run dev
```

```bash
npm run build          # production build
npm run build:resume   # regenerate public/Luis_Figueroa_Resume.pdf
```

Deploy: Vercel (Next.js preset, no env vars required).

---

## Repo layout

| Path | Purpose |
|------|---------|
| `src/content/content.ts` | Site copy |
| `src/content/projects.ts` | Hardware project cards |
| `src/components/pcb/` | Procedural PCB hero (Three.js) |
| `scripts/build-resume.mjs` | Resume PDF generator |
| `public/Luis_Figueroa_Resume.pdf` | Downloadable resume |

Design tokens and rationale: [`docs/DESIGN.md`](docs/DESIGN.md)

---

## License

© Luis Figueroa. See [LICENSE](LICENSE).
