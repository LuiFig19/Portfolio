# Design rationale

**Why the PCB autorouter for a hardware-IT dual practitioner?**
The visual is the thesis statement. The page enacts the work — you watch a board get routed (hardware) inside an editorial scroll surface (platform polish). Most dev portfolios tell; this one shows.

## Type pairing

| Role | Family | Source | Use |
|------|--------|--------|-----|
| Display | **Tasa Orbiter Display** (500/600) | Fontshare | Wordmark, hero headline, section headlines |
| Body | **Supreme** (300/400/500/600) | Fontshare | Prose, UI text, buttons |
| Mono | **IBM Plex Mono** (400/500) | next/font/google | Mono labels, specs, dashboard rows |

## Color tokens

```
--bg-primary    #0B0B0D
--bg-elevated   #131316
--bg-subtle     #1A1A1D
--fg-primary    #F5F4F1
--fg-secondary  #A8A8A5
--fg-tertiary   #6B6B68
--border        #25252A
--border-strong #34343A
--accent        #E8A04A
--accent-bright #FFB86B
--accent-dim    #8C6230
--status-ok     #7DD46F
```

Warm amber on near-black reads workbench at night and ENIG gold pad finish. No gradients on UI chrome; amber glow is limited to the WebGL canvas.

## Performance

- Procedural geometry in `pcbData.ts` — no GLB imports
- `prefers-reduced-motion` swaps to SVG fallback; Lenis disabled
- Mobile below 768px uses SVG fallback (no WebGL pin)
- R3F canvas `dpr={[1, 1.75]}`
- `PCBHero` is dynamically imported with `ssr: false`
