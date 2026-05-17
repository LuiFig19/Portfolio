# Luis Figueroa — Personal Site

A Next.js 14 personal site for an IT field technician and hardware/IoT engineer.
The signature element is a scroll-driven Three.js hero that procedurally routes a
PCB on the canvas — traces draw, vias appear, SMD components populate, and the
board tilts from top-down to a 3/4 iso view as you scroll.

---

## Design rationale

**Why the PCB autorouter for a hardware-IT dual practitioner?**
The visual *is* the thesis statement. The page literally enacts the work — you
watch a board get routed (the hardware practitioner) while sitting inside an
editorial scroll surface (the IT/platform polish). Most "dev portfolios" tell;
this one shows.

**Type pairing**

| Role | Family | Source | Use |
|---|---|---|---|
| Display | **Tasa Orbiter Display** (500/600) | Fontshare | Wordmark, hero headline, section headlines |
| Body | **Supreme** (300/400/500/600) | Fontshare | Prose, UI text, buttons |
| Mono | **IBM Plex Mono** (400/500) | next/font/google | Mono labels, specs, dashboard rows |

Tasa Orbiter has sharp engineering-document terminals; Supreme is a neutral
grotesque that disappears into prose; Plex Mono is the IBM hardware-docs
default for the silkscreen-style labels (`[ 001 — HARDWARE ]`).

**Color tokens (exact)**

```
--bg-primary    #0B0B0D   near-black, faint cool cast
--bg-elevated   #131316   cards, panels
--bg-subtle     #1A1A1D   inset surfaces
--fg-primary    #F5F4F1   warm off-white body
--fg-secondary  #A8A8A5   muted prose
--fg-tertiary   #6B6B68   mono labels, captions
--border        #25252A   hairlines
--border-strong #34343A   active borders
--accent        #E8A04A   warm amber (traces, links, focused chrome)
--accent-bright #FFB86B   hover / glow peak
--accent-dim    #8C6230   rake light dim
--status-ok     #7DD46F   status dots only
```

Warm amber on near-black reads "workbench at night" and "ENIG gold pad finish"
— it sidesteps the generic developer green/teal/purple palette and matches the
hardware-first identity. No gradients on UI chrome; amber is only allowed to
glow inside the WebGL canvas.

---

## Stack

- **Next.js 14** (App Router) + **TypeScript** + **Tailwind CSS**
- **three** + **@react-three/fiber** + **@react-three/drei** for the PCB hero
- **gsap** + **ScrollTrigger** for scroll-bound pinning and reveal timelines
- **lenis** for inertial smooth scroll (gated on `prefers-reduced-motion`)
- Deployable to **Vercel** out of the box — no env vars required

---

## Run locally

```bash
npm install
npm run dev
# → http://localhost:3000
```

Build and serve a production bundle:

```bash
npm run build
npm run start
```

Type-check only:

```bash
npm run type-check
```

---

## Deploy to Vercel

1. Push this repo to GitHub.
2. In Vercel, **New Project → Import** the repo.
3. Framework preset: **Next.js** (auto-detected). No env vars required.
4. Click **Deploy**.

The site is fully static-renderable; Vercel's default output will work without
any additional configuration. If you wire a custom domain, drop your domain
name into the `CNAME` file (preserved at the repo root).

---

## File tree

```
.
├── public/
│   ├── images/
│   │   ├── project-motion-1.png   ← preserved from existing site
│   │   ├── project-motion-2.png
│   │   └── project-motion-3.png
│   ├── favicon.svg
│   └── Luis_Figueroa_Resume.pdf   ← replace with your real PDF
├── src/
│   ├── app/
│   │   ├── globals.css            ← tokens, font imports, Lenis classes
│   │   ├── layout.tsx             ← root layout, fonts, SmoothScroll
│   │   └── page.tsx               ← composition of all sections
│   ├── components/
│   │   ├── pcb/
│   │   │   ├── pcbData.ts         ← board outline + traces + components
│   │   │   ├── Board.tsx          ← extruded substrate + outline
│   │   │   ├── Trace.tsx          ← dashed-mask scroll-drawn trace
│   │   │   ├── Components3D.tsx   ← ESP32 / RJ45 / USB-C / passives
│   │   │   ├── Scene.tsx          ← lights, rake light, camera rig
│   │   │   └── PCBHero.tsx        ← <Canvas> wrapper
│   │   ├── PCBStaticFallback.tsx  ← SVG fallback for reduced-motion / mobile
│   │   ├── Hero.tsx               ← GSAP pin + overlay copy
│   │   ├── Nav.tsx                ← sticky nav
│   │   ├── SectionShell.tsx       ← shared two-column section frame
│   │   ├── SectionHardware.tsx    ← 001 — silicon & solder
│   │   ├── SectionPlatform.tsx    ← 002 — software stack (dashboard mock)
│   │   ├── SectionField.tsx       ← 003 — on the ground (topology)
│   │   ├── SectionAvailability.tsx← 004 — what's next
│   │   ├── ClosingCTA.tsx         ← email / linkedin / github / resume
│   │   ├── Footer.tsx
│   │   ├── MonoLabel.tsx          ← shared mono-bracket label primitive
│   │   ├── ProjectCard.tsx
│   │   └── SmoothScroll.tsx       ← Lenis provider, wired to GSAP ticker
│   ├── content/
│   │   ├── content.ts             ← every line of copy on the site
│   │   └── projects.ts            ← project list — add new builds here
│   └── lib/
│       ├── useReducedMotion.ts
│       └── useIsMobile.ts
├── tailwind.config.ts
├── next.config.mjs
├── postcss.config.mjs
├── tsconfig.json
├── package.json
└── README.md
```

---

## Editing copy or projects

All copy lives in **`src/content/content.ts`**. Edit text there without touching
any component:

- Hero headline + subhead + CTAs → `hero`
- Four section bodies + stacks + lists → `sections.hardware`, `.platform`, `.field`, `.availability`
- Closing CTAs + email/social handles → `closing` and `site`
- Footer + version tag → `footer` and `site.version`

All projects live in **`src/content/projects.ts`** as a typed `Project[]`. Add a
new build by appending an object — the card renders automatically.

To re-route the PCB hero (change components, traces, or positions), edit
**`src/components/pcb/pcbData.ts`**. The geometry is procedural — no GLB
imports, no asset pipeline.

---

## Performance + craft notes

- **No heavy GLBs.** The board, traces, components, and vias are all generated
  from `pcbData.ts`. Bundle weight stays small and the hero loads instantly.
- **Reduced-motion respect.** If a visitor has `prefers-reduced-motion: reduce`,
  the Three.js canvas is swapped for `PCBStaticFallback` (an SVG of the same
  board) and Lenis smooth scroll is disabled. Animations elsewhere collapse to
  near-zero duration via `globals.css`.
- **Mobile fallback below 768px.** Phones get the same SVG fallback so the
  device doesn't try to drive WebGL + ScrollTrigger pinning. Saves battery and
  guarantees consistent layout.
- **DPR clamp.** The R3F canvas is `dpr={[1, 1.75]}` — full Retina would push
  pixel counts past what the hero needs.
- **Suspense + dynamic import.** `PCBHero` is `next/dynamic` with `ssr: false`,
  so three.js never enters the server bundle.

---

## Updating the resume

Drop your real PDF at `public/Luis_Figueroa_Resume.pdf` (overwriting the
placeholder). The hero and closing CTA buttons already link to that path.

---

## License

Personal site. © Luis Figueroa.
