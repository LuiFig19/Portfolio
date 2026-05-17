import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Luis Figueroa — Hardware that ships. Networks that stay up.",
  description:
    "Luis Figueroa is a hardware engineer and production lead in Orlando, FL — IoT devices in KiCad, ESP32 firmware, AstraRMM, and software that ships.",
  metadataBase: new URL("https://luisfigueroa.com"),
  openGraph: {
    title: "Luis Figueroa — Hardware & IT, Orlando FL",
    description:
      "Production IoT hardware, AstraRMM platform, and field IT for real clients. Based in Orlando, FL.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = {
  themeColor: "#0B0B0D",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={ibmPlexMono.variable}>
      <body className="min-h-screen bg-bg text-fg antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
