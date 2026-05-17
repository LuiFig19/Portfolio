import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#0B0B0D",
          elevated: "#131316",
          subtle: "#1A1A1D",
        },
        fg: {
          DEFAULT: "#F5F4F1",
          secondary: "#A8A8A5",
          tertiary: "#6B6B68",
        },
        border: {
          DEFAULT: "#25252A",
          strong: "#34343A",
        },
        accent: {
          DEFAULT: "#E8A04A",
          bright: "#FFB86B",
          dim: "#8C6230",
        },
        status: {
          ok: "#7DD46F",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-serif", "Georgia", "serif"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      letterSpacing: {
        mono: "0.08em",
        wide: "0.04em",
        tight: "-0.02em",
        tighter: "-0.035em",
      },
      fontSize: {
        "display-xl": ["clamp(3.5rem, 9vw, 8.5rem)", { lineHeight: "0.92", letterSpacing: "-0.035em" }],
        "display-lg": ["clamp(2.5rem, 6vw, 5.5rem)", { lineHeight: "0.96", letterSpacing: "-0.03em" }],
        "display-md": ["clamp(1.875rem, 4vw, 3.25rem)", { lineHeight: "1.04", letterSpacing: "-0.02em" }],
        mono: ["0.6875rem", { lineHeight: "1", letterSpacing: "0.08em" }],
      },
      maxWidth: {
        page: "1440px",
        prose: "62ch",
      },
      transitionTimingFunction: {
        ease: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
