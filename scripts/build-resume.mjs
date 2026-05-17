// Generates public/Luis_Figueroa_Resume.pdf.
// Run: node scripts/build-resume.mjs
// Edit the data block below; everything else is layout.

import PDFDocument from "pdfkit";
import fs from "node:fs";
import path from "node:path";

// ─────────────────────────────────────────────────────────────────────────────
// DATA — edit this block to change resume content.
// ─────────────────────────────────────────────────────────────────────────────

const resume = {
  name: "LUIS FIGUEROA",
  tagline: "Welder, hardware engineer, software engineer. In that order.",
  contact: [
    "Orlando, FL",
    "luifig19@gmail.com",
    "(407) 861-2231",
    "github.com/LuiFig19",
    "luifigueroa.com",
  ],
  version: "V.2026.01",
  summary:
    "Self-taught hardware engineer working out of a fabrication shop by day and a home lab the rest of the time. " +
    "Designs PCBs in KiCad, writes firmware in C, ships full-stack software, and runs field IT on weekends. " +
    "Four production-ready IoT devices. One SaaS product with a paying customer. " +
    "Co-founded a managed-IT operation and its custom RMM platform with one partner.",
  experience: [
    {
      role: "PRODUCTION LEAD",
      company: "Ravens Marine — Aluminum Structural Fabrication",
      location: "Central Florida",
      dates: "2021 — PRESENT",
      bullets: [
        "Run production workflows on complex fab projects — reading technical drawings, managing sequencing, troubleshooting fitment under deadline.",
        "Lead and direct junior welders on the floor — answering technical questions, correcting process issues, bringing crew up to qualified.",
        "End-to-end ownership of tasks from drawing to delivery without supervision.",
      ],
    },
    {
      role: "CO-FOUNDER & HARDWARE ENGINEER",
      company: "Fanatic Node & AstraRMM (with Jeremiah Rivera) — Side venture",
      location: "Orlando, FL",
      dates: "2025 — PRESENT (weekends, evenings, free time)",
      bullets: [
        "Co-founded Fanatic Node, an Orlando-based managed IT operation, and AstraRMM — the custom remote monitoring + management platform we built for it (agents, server, real-time alerting, technician dashboard).",
        "Designed four IoT PCBs in KiCad — Astra AirSensor (SEN55 + PoE), AstraRMM Monitoring Device (ESP32-S3 + PoE), Mesh Motion Network (mmWave + Thread), and a Network Monitoring Appliance. Drawn, routed, fabricated, hand-assembled, flashed, and brought up.",
        "Firmware in C / C++ on ESP32-S3. 3D enclosure design and prototyping.",
        "Field IT for small-business clients: Windows 10/11 recovery, drive and RAM swaps, BitLocker resets, admin-password recovery, PoE camera installs, Microsoft 365 + Entra ID administration, Conditional Access, Huntress EDR, Comet Backup.",
      ],
    },
  ],
  shipped: [
    {
      name: "TaskChrono",
      detail:
        "SaaS time-tracking and reporting platform. Built solo in Next.js, TypeScript, and PostgreSQL — hosting, database administration, authentication, and bug resolution. Shipped to a paying customer; still in active use.",
    },
    {
      name: "Home Lab",
      detail:
        "Always-on Windows administration, virtualization, Active Directory, DNS, and M365 practice environment. Where the PCBs above actually run today.",
    },
  ],
  stack: [
    { label: "HARDWARE", value: "KiCad · ESP32-S3 · PoE 802.3af · Ethernet PHY · Thread · BLE · OTA · Watchdog" },
    { label: "FIRMWARE", value: "C / C++" },
    { label: "SOFTWARE", value: "Next.js · TypeScript · PostgreSQL · Docker · WebSocket · REST" },
    { label: "IT", value: "Windows 10/11 · Microsoft 365 · Entra ID · Conditional Access · MFA · Huntress · Comet Backup · UniFi · DNS / DHCP / TCP/IP · VPN" },
    { label: "PRODUCTION", value: "Welding · Technical drawing reading · Sequencing · Floor leadership" },
  ],
  certifications: [
    "CompTIA A+ — In progress (Professor Messer)",
    "CompTIA Network+ — Planned",
    "CompTIA Security+ — Planned",
  ],
  education:
    "Self-taught technical background — home lab development, project-based learning, applied field experience.",
};

// ─────────────────────────────────────────────────────────────────────────────
// DESIGN TOKENS — mirror the site.
// ─────────────────────────────────────────────────────────────────────────────

const COLOR = {
  bg: "#F6F4EE",        // warm off-white print background
  fg: "#0B0B0D",        // near-black text
  fgSecondary: "#3A3A3D",
  fgMuted: "#6B6B68",
  border: "#C9C5BC",
  accent: "#B07020",    // amber, darkened slightly so it reads on white
};

const FONT = {
  display: "Times-Bold",      // closest editorial-serif feel from PDF built-ins
  body: "Helvetica",
  bodyBold: "Helvetica-Bold",
  mono: "Courier",
  monoBold: "Courier-Bold",
};

const SIZE = {
  name: 28,
  tagline: 9.5,
  contact: 8.5,
  sectionLabel: 8,
  role: 10.5,
  company: 9.5,
  meta: 8,
  body: 9.5,
  monoTiny: 7.5,
  versionFoot: 7.5,
};

// ─────────────────────────────────────────────────────────────────────────────
// LAYOUT
// ─────────────────────────────────────────────────────────────────────────────

const PAGE_W = 612;     // US Letter, 8.5in @ 72dpi
const PAGE_H = 792;     // 11in
const MARGIN_X = 48;
const MARGIN_TOP = 52;
const MARGIN_BOTTOM = 52;
const COL_W = PAGE_W - MARGIN_X * 2;

const outPath = path.resolve(process.cwd(), "public/Luis_Figueroa_Resume.pdf");
fs.mkdirSync(path.dirname(outPath), { recursive: true });

const doc = new PDFDocument({
  size: "LETTER",
  margins: { top: MARGIN_TOP, bottom: MARGIN_BOTTOM, left: MARGIN_X, right: MARGIN_X },
  info: {
    Title: "Luis Figueroa — Resume",
    Author: "Luis Figueroa",
    Subject: "Resume",
    Keywords: "hardware, IoT, firmware, full-stack, welding, IT",
  },
});

const stream = fs.createWriteStream(outPath);
doc.pipe(stream);
stream.on("finish", () => {
  const stat = fs.statSync(outPath);
  console.log(`Wrote ${outPath} — ${stat.size} bytes`);
});

// Paint warm background (full page)
doc.rect(0, 0, PAGE_W, PAGE_H).fill(COLOR.bg);
doc.fillColor(COLOR.fg);

let y = MARGIN_TOP;

function hairline(yPos, opts = {}) {
  const x1 = opts.x1 ?? MARGIN_X;
  const x2 = opts.x2 ?? PAGE_W - MARGIN_X;
  const color = opts.color ?? COLOR.border;
  doc.save();
  doc.strokeColor(color).lineWidth(0.5).moveTo(x1, yPos).lineTo(x2, yPos).stroke();
  doc.restore();
}

function monoLabel(text, x, yPos, opts = {}) {
  const color = opts.color ?? COLOR.fgMuted;
  const size = opts.size ?? SIZE.sectionLabel;
  doc.font(FONT.mono).fontSize(size).fillColor(color).text(text, x, yPos, { lineBreak: false });
}

function sectionHeader(label, index) {
  // Index + eyebrow + hairline
  doc.font(FONT.mono).fontSize(SIZE.sectionLabel).fillColor(COLOR.accent);
  doc.text(`[ ${index} ]`, MARGIN_X, y, { lineBreak: false });
  doc.fillColor(COLOR.fgMuted);
  doc.text(`  ${label}`, MARGIN_X + 26, y, { lineBreak: false });
  y += 11;
  hairline(y);
  y += 9;
}

// ── HEADER BLOCK ─────────────────────────────────────────────────────────────

// Top corner mono labels (silkscreen-style)
monoLabel(`[ ${resume.version} ]`, MARGIN_X, y, { color: COLOR.fgMuted });
const rightLabel = "ORLANDO, FL · 28.5° N";
const rightW = doc.widthOfString(rightLabel);
monoLabel(rightLabel, PAGE_W - MARGIN_X - rightW, y, { color: COLOR.fgMuted });
y += 16;

// Wordmark
doc.font(FONT.display).fontSize(SIZE.name).fillColor(COLOR.fg);
doc.text(resume.name, MARGIN_X, y, { characterSpacing: -0.4 });
y += SIZE.name + 4;

// Tagline
doc.font(FONT.body).fontSize(SIZE.tagline).fillColor(COLOR.fgSecondary);
doc.text(resume.tagline, MARGIN_X, y);
y += SIZE.tagline + 10;

// Contact row, dot-separated
doc.font(FONT.mono).fontSize(SIZE.contact).fillColor(COLOR.fgSecondary);
const contactLine = resume.contact.join("  ·  ");
doc.text(contactLine, MARGIN_X, y, { characterSpacing: 0.4 });
y += SIZE.contact + 12;

hairline(y, { color: COLOR.fg });
y += 14;

// ── SUMMARY ──────────────────────────────────────────────────────────────────

sectionHeader("SUMMARY", "000");

doc.font(FONT.body).fontSize(SIZE.body).fillColor(COLOR.fg);
doc.text(resume.summary, MARGIN_X, y, { width: COL_W, align: "left", lineGap: 2 });
y = doc.y + 14;

// ── EXPERIENCE ───────────────────────────────────────────────────────────────

sectionHeader("EXPERIENCE", "001");

for (let i = 0; i < resume.experience.length; i++) {
  const exp = resume.experience[i];

  // Role + dates row
  doc.font(FONT.bodyBold).fontSize(SIZE.role).fillColor(COLOR.fg);
  doc.text(exp.role, MARGIN_X, y, { lineBreak: false, width: COL_W * 0.7 });
  // dates right-aligned
  doc.font(FONT.mono).fontSize(SIZE.meta).fillColor(COLOR.accent);
  const dW = doc.widthOfString(exp.dates);
  doc.text(exp.dates, PAGE_W - MARGIN_X - dW, y + 1, { lineBreak: false });
  y += SIZE.role + 3;

  // Company
  doc.font(FONT.body).fontSize(SIZE.company).fillColor(COLOR.fgSecondary);
  doc.text(exp.company, MARGIN_X, y, { width: COL_W * 0.78 });
  y = doc.y + 1;

  // Location
  doc.font(FONT.mono).fontSize(SIZE.meta).fillColor(COLOR.fgMuted);
  doc.text(exp.location, MARGIN_X, y, { width: COL_W });
  y = doc.y + 6;

  // Bullets
  doc.font(FONT.body).fontSize(SIZE.body).fillColor(COLOR.fg);
  for (const b of exp.bullets) {
    // amber bullet mark
    doc.fillColor(COLOR.accent).text("›", MARGIN_X, y, { lineBreak: false });
    doc.fillColor(COLOR.fg);
    doc.text(b, MARGIN_X + 12, y, { width: COL_W - 12, lineGap: 1.6 });
    y = doc.y + 3;
  }

  if (i < resume.experience.length - 1) {
    y += 8;
  }
}
y += 8;

// ── SHIPPED ──────────────────────────────────────────────────────────────────

sectionHeader("SHIPPED & SELF-DIRECTED", "002");

for (const s of resume.shipped) {
  doc.font(FONT.bodyBold).fontSize(SIZE.role).fillColor(COLOR.fg);
  doc.text(s.name, MARGIN_X, y, { lineBreak: false });
  y += SIZE.role + 2;

  doc.font(FONT.body).fontSize(SIZE.body).fillColor(COLOR.fgSecondary);
  doc.text(s.detail, MARGIN_X, y, { width: COL_W, lineGap: 1.6 });
  y = doc.y + 8;
}

// ── STACK ────────────────────────────────────────────────────────────────────

sectionHeader("STACK", "003");

const labelColW = 78;
for (const row of resume.stack) {
  doc.font(FONT.monoBold).fontSize(SIZE.body).fillColor(COLOR.accent);
  doc.text(row.label, MARGIN_X, y, { lineBreak: false, width: labelColW });
  doc.font(FONT.body).fontSize(SIZE.body).fillColor(COLOR.fg);
  doc.text(row.value, MARGIN_X + labelColW, y, { width: COL_W - labelColW, lineGap: 1.4 });
  y = doc.y + 4;
}
y += 6;

// ── CERTIFICATIONS + EDUCATION (compact, two columns) ────────────────────────

sectionHeader("CERTIFICATIONS & EDUCATION", "004");

const colA_x = MARGIN_X;
const colA_w = COL_W * 0.48;
const colB_x = MARGIN_X + COL_W * 0.52;
const colB_w = COL_W * 0.48;
const certStartY = y;

doc.font(FONT.mono).fontSize(SIZE.monoTiny).fillColor(COLOR.fgMuted);
doc.text("CERTIFICATIONS", colA_x, certStartY, { lineBreak: false });
let aY = certStartY + 12;
doc.font(FONT.body).fontSize(SIZE.body).fillColor(COLOR.fg);
for (const c of resume.certifications) {
  doc.fillColor(COLOR.accent).text("·", colA_x, aY, { lineBreak: false });
  doc.fillColor(COLOR.fg).text(c, colA_x + 8, aY, { width: colA_w - 8, lineGap: 1.4 });
  aY = doc.y + 2;
}

doc.font(FONT.mono).fontSize(SIZE.monoTiny).fillColor(COLOR.fgMuted);
doc.text("EDUCATION", colB_x, certStartY, { lineBreak: false });
doc.font(FONT.body).fontSize(SIZE.body).fillColor(COLOR.fg);
doc.text(resume.education, colB_x, certStartY + 12, { width: colB_w, lineGap: 1.4 });

y = Math.max(aY, doc.y) + 10;

// ── FOOTER ───────────────────────────────────────────────────────────────────

const footY = PAGE_H - MARGIN_BOTTOM + 8;
hairline(footY - 8, { color: COLOR.border });

doc.font(FONT.mono).fontSize(SIZE.versionFoot).fillColor(COLOR.fgMuted);
doc.text(`[ ${resume.version} ]`, MARGIN_X, footY, { lineBreak: false });
const center = "FN-AIO1 · REV.A";
const centerW = doc.widthOfString(center);
doc.text(center, PAGE_W / 2 - centerW / 2, footY, { lineBreak: false });
const right = "ORLANDO, FL";
const rightW2 = doc.widthOfString(right);
doc.text(right, PAGE_W - MARGIN_X - rightW2, footY, { lineBreak: false });

doc.end();
