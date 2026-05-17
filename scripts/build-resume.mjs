// Generates public/Luis_Figueroa_Resume.pdf.
// Run: node scripts/build-resume.mjs
// Edit the data block below; everything else is layout.

import PDFDocument from "pdfkit";
import fs from "node:fs";
import path from "node:path";

// ─────────────────────────────────────────────────────────────────────────────
// DATA - edit this block to change resume content.
// No em dashes anywhere. Use regular hyphens only.
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
    "Self-taught hardware engineer. Day job in production fabrication, home lab the rest of the time. PCBs in KiCad, firmware in C, full-stack software, field IT on weekends. Four IoT devices designed and brought up, one SaaS product shipped to a paying customer, and a managed-IT venture co-founded with one partner.",
  experience: [
    {
      role: "PRODUCTION LEAD",
      company: "Ravens Marine, Aluminum Structural Fabrication",
      location: "Central Florida",
      dates: "2021 - PRESENT",
      bullets: [
        "Run production on complex fab projects: reading technical drawings, sequencing, troubleshooting fitment under deadline.",
        "Lead and qualify junior welders on the floor.",
        "Own tasks end to end from drawing to delivery without supervision.",
      ],
    },
    {
      role: "CO-FOUNDER & HARDWARE ENGINEER",
      company: "Fanatic Node & AstraRMM (with Jeremiah Rivera)",
      location: "Orlando, FL  /  weekends and free time",
      dates: "2025 - PRESENT",
      bullets: [
        "Co-founded Fanatic Node, an Orlando managed-IT venture, and AstraRMM, the custom RMM platform behind it: agents, server, real-time alerting, technician dashboard.",
        "Designed four IoT PCBs in KiCad: Astra AirSensor, AstraRMM Monitoring Device, Mesh Motion Network, Network Monitoring Appliance. Drawn, routed, fabbed, hand-assembled, flashed, brought up.",
        "Firmware in C and C++ on ESP32-S3. 3D enclosure design and prototyping.",
        "Field IT for small businesses: Windows recovery, BitLocker, drive and RAM swaps, M365 and Entra ID admin, Conditional Access, Huntress EDR, Comet Backup, PoE camera installs.",
      ],
    },
  ],
  shipped:
    "TaskChrono. Solo full-stack SaaS for time tracking and reporting (Next.js, TypeScript, PostgreSQL). Shipped to a paying customer, still in active use.",
  stack: [
    { label: "HARDWARE", value: "KiCad, ESP32-S3, PoE 802.3af, Ethernet PHY, Thread, BLE, OTA, Watchdog" },
    { label: "FIRMWARE", value: "C, C++" },
    { label: "SOFTWARE", value: "Next.js, TypeScript, PostgreSQL, Docker, WebSocket, REST" },
    { label: "IT", value: "Windows 10/11, Microsoft 365, Entra ID, Conditional Access, MFA, Huntress, Comet Backup, UniFi, DNS / DHCP / TCP/IP, VPN" },
    { label: "PRODUCTION", value: "Welding, technical drawing reading, sequencing, floor leadership" },
  ],
  certifications: "CompTIA A+ in progress (Professor Messer). Network+ and Security+ planned.",
  education: "Self-taught technical background. Home lab development, project-based learning, applied field experience.",
};

// ─────────────────────────────────────────────────────────────────────────────
// DESIGN TOKENS - mirror the site.
// ─────────────────────────────────────────────────────────────────────────────

const COLOR = {
  bg: "#F6F4EE",
  fg: "#0B0B0D",
  fgSecondary: "#3A3A3D",
  fgMuted: "#6B6B68",
  border: "#C9C5BC",
  accent: "#B07020",
};

const FONT = {
  display: "Times-Bold",
  body: "Helvetica",
  bodyBold: "Helvetica-Bold",
  mono: "Courier",
  monoBold: "Courier-Bold",
};

const SIZE = {
  name: 26,
  tagline: 9,
  contact: 8.2,
  sectionLabel: 7.8,
  role: 9.5,
  company: 8.8,
  meta: 7.8,
  body: 8.8,
  monoTiny: 7.4,
  versionFoot: 7.4,
};

// ─────────────────────────────────────────────────────────────────────────────
// LAYOUT
// ─────────────────────────────────────────────────────────────────────────────

const PAGE_W = 612;
const PAGE_H = 792;
const MARGIN_X = 44;
const MARGIN_TOP = 42;
const MARGIN_BOTTOM = 42;
const COL_W = PAGE_W - MARGIN_X * 2;

const outPath = path.resolve(process.cwd(), "public/Luis_Figueroa_Resume.pdf");
fs.mkdirSync(path.dirname(outPath), { recursive: true });

const doc = new PDFDocument({
  size: "LETTER",
  // Disable pdfkit's automatic page wrapping; we keep content to one page.
  autoFirstPage: false,
  margins: { top: MARGIN_TOP, bottom: MARGIN_BOTTOM, left: MARGIN_X, right: MARGIN_X },
  info: {
    Title: "Luis Figueroa - Resume",
    Author: "Luis Figueroa",
    Subject: "Resume",
    Keywords: "hardware, IoT, firmware, full-stack, welding, IT",
  },
});

const stream = fs.createWriteStream(outPath);
doc.pipe(stream);
stream.on("finish", () => {
  const stat = fs.statSync(outPath);
  console.log(`Wrote ${outPath} - ${stat.size} bytes`);
});

doc.addPage({
  size: "LETTER",
  margins: { top: MARGIN_TOP, bottom: MARGIN_BOTTOM, left: MARGIN_X, right: MARGIN_X },
});

// Warm background
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
  doc.font(FONT.mono).fontSize(SIZE.sectionLabel).fillColor(COLOR.accent);
  doc.text(`[ ${index} ]`, MARGIN_X, y, { lineBreak: false });
  doc.fillColor(COLOR.fgMuted);
  doc.text(`  ${label}`, MARGIN_X + 26, y, { lineBreak: false });
  y += 9;
  hairline(y);
  y += 6;
}

// Bullet writer (text wraps within column width). Uses small amber tick.
function bulletLine(text) {
  doc.font(FONT.body).fontSize(SIZE.body);
  doc.fillColor(COLOR.accent).text("›", MARGIN_X, y, { lineBreak: false });
  doc.fillColor(COLOR.fg);
  doc.text(text, MARGIN_X + 10, y, { width: COL_W - 10, lineGap: 0.8 });
  y = doc.y + 1.5;
}

// ── HEADER ───────────────────────────────────────────────────────────────────

monoLabel(`[ ${resume.version} ]`, MARGIN_X, y);
const rightLabel = "ORLANDO, FL  /  28.5N";
const rightW = doc.widthOfString(rightLabel);
monoLabel(rightLabel, PAGE_W - MARGIN_X - rightW, y);
y += 14;

// Wordmark
doc.font(FONT.display).fontSize(SIZE.name).fillColor(COLOR.fg);
doc.text(resume.name, MARGIN_X, y, { characterSpacing: -0.3 });
y += SIZE.name + 2;

// Tagline
doc.font(FONT.body).fontSize(SIZE.tagline).fillColor(COLOR.fgSecondary);
doc.text(resume.tagline, MARGIN_X, y);
y += SIZE.tagline + 7;

// Contact (mono, separated by " . " - just a period and spaces, no middle dot)
doc.font(FONT.mono).fontSize(SIZE.contact).fillColor(COLOR.fgSecondary);
const contactLine = resume.contact.join("   ");
doc.text(contactLine, MARGIN_X, y, { characterSpacing: 0.3 });
y += SIZE.contact + 9;

hairline(y, { color: COLOR.fg });
y += 9;

// ── SUMMARY ──────────────────────────────────────────────────────────────────

sectionHeader("SUMMARY", "000");
doc.font(FONT.body).fontSize(SIZE.body).fillColor(COLOR.fg);
doc.text(resume.summary, MARGIN_X, y, { width: COL_W, lineGap: 1.2 });
y = doc.y + 10;

// ── EXPERIENCE ───────────────────────────────────────────────────────────────

sectionHeader("EXPERIENCE", "001");

for (let i = 0; i < resume.experience.length; i++) {
  const exp = resume.experience[i];

  doc.font(FONT.bodyBold).fontSize(SIZE.role).fillColor(COLOR.fg);
  doc.text(exp.role, MARGIN_X, y, { lineBreak: false, width: COL_W * 0.72 });
  doc.font(FONT.mono).fontSize(SIZE.meta).fillColor(COLOR.accent);
  const dW = doc.widthOfString(exp.dates);
  doc.text(exp.dates, PAGE_W - MARGIN_X - dW, y + 1, { lineBreak: false });
  y += SIZE.role + 2;

  doc.font(FONT.body).fontSize(SIZE.company).fillColor(COLOR.fgSecondary);
  doc.text(exp.company, MARGIN_X, y, { width: COL_W * 0.78, lineBreak: false });
  y += SIZE.company + 1;

  doc.font(FONT.mono).fontSize(SIZE.meta).fillColor(COLOR.fgMuted);
  doc.text(exp.location, MARGIN_X, y, { width: COL_W, lineBreak: false });
  y += SIZE.meta + 4;

  for (const b of exp.bullets) {
    bulletLine(b);
  }

  if (i < resume.experience.length - 1) y += 4;
}
y += 6;

// ── SHIPPED ──────────────────────────────────────────────────────────────────

sectionHeader("SHIPPED", "002");
doc.font(FONT.body).fontSize(SIZE.body).fillColor(COLOR.fg);
doc.text(resume.shipped, MARGIN_X, y, { width: COL_W, lineGap: 1.2 });
y = doc.y + 8;

// ── STACK ────────────────────────────────────────────────────────────────────

sectionHeader("STACK", "003");

const labelColW = 72;
for (const row of resume.stack) {
  doc.font(FONT.monoBold).fontSize(SIZE.body).fillColor(COLOR.accent);
  doc.text(row.label, MARGIN_X, y, { lineBreak: false, width: labelColW });
  doc.font(FONT.body).fontSize(SIZE.body).fillColor(COLOR.fg);
  doc.text(row.value, MARGIN_X + labelColW, y, { width: COL_W - labelColW, lineGap: 0.8 });
  y = doc.y + 2;
}
y += 4;

// ── CERTIFICATIONS + EDUCATION ───────────────────────────────────────────────

sectionHeader("CERTIFICATIONS & EDUCATION", "004");

doc.font(FONT.monoBold).fontSize(SIZE.body).fillColor(COLOR.accent);
doc.text("CERTS", MARGIN_X, y, { lineBreak: false, width: labelColW });
doc.font(FONT.body).fontSize(SIZE.body).fillColor(COLOR.fg);
doc.text(resume.certifications, MARGIN_X + labelColW, y, { width: COL_W - labelColW, lineGap: 0.8 });
y = doc.y + 2;

doc.font(FONT.monoBold).fontSize(SIZE.body).fillColor(COLOR.accent);
doc.text("EDU", MARGIN_X, y, { lineBreak: false, width: labelColW });
doc.font(FONT.body).fontSize(SIZE.body).fillColor(COLOR.fg);
doc.text(resume.education, MARGIN_X + labelColW, y, { width: COL_W - labelColW, lineGap: 0.8 });
y = doc.y + 6;

// ── FOOTER ───────────────────────────────────────────────────────────────────

const footY = PAGE_H - MARGIN_BOTTOM + 8;
hairline(footY - 8, { color: COLOR.border });

doc.font(FONT.mono).fontSize(SIZE.versionFoot).fillColor(COLOR.fgMuted);
doc.text(`[ ${resume.version} ]`, MARGIN_X, footY, { lineBreak: false });
const center = "FN-AIO1  REV.A";
const centerW = doc.widthOfString(center);
doc.text(center, PAGE_W / 2 - centerW / 2, footY, { lineBreak: false });
const right = "ORLANDO, FL";
const rightW2 = doc.widthOfString(right);
doc.text(right, PAGE_W - MARGIN_X - rightW2, footY, { lineBreak: false });

doc.end();
