import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sketch: ["'Caveat'", "cursive"],
        mono: ["'DM Mono'", "monospace"],
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'DM Sans'", "sans-serif"],
      },
      colors: {
        paper: "#f5f0e8",
        ink: "#1a1510",
        "ink-light": "#3d3530",
        "ink-faint": "#8b7d6b",
        "ink-ghost": "#c4b8a8",
        blueprint: "#1a3a5c",
        "blue-line": "#4a7fb5",
        "blue-faint": "#d0e4f5",
        accent: "#c4420a",
        "accent-warm": "#e85d1a",
        "accent-muted": "#f2c4aa",
        grid: "rgba(74,127,181,0.15)",
      },
      backgroundImage: {
        "grid-paper":
          "repeating-linear-gradient(rgba(74,127,181,0.12) 0px, transparent 1px, transparent 24px), repeating-linear-gradient(90deg, rgba(74,127,181,0.12) 0px, transparent 1px, transparent 24px)",
        "dot-paper":
          "radial-gradient(circle, rgba(74,127,181,0.25) 1px, transparent 1px)",
      },
      animation: {
        "draw-line": "drawLine 1.2s ease forwards",
        "fade-sketch": "fadeSketch 0.6s ease forwards",
        wiggle: "wiggle 3s ease-in-out infinite",
        "cursor-blink": "cursorBlink 1s step-end infinite",
      },
      keyframes: {
        drawLine: {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" },
        },
        fadeSketch: {
          "0%": { opacity: "0", transform: "translateY(8px) rotate(-0.5deg)" },
          "100%": { opacity: "1", transform: "translateY(0) rotate(0deg)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-1deg)" },
          "50%": { transform: "rotate(1deg)" },
        },
        cursorBlink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
