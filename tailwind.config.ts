import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        // Zenvest brand palette derived from the logo
        navy: {
          50: "#eaf0f7",
          100: "#c9d6e8",
          200: "#94aecf",
          300: "#5f86b6",
          400: "#365f95",
          500: "#1b3e75",
          600: "#132f5c",
          700: "#0e2447",
          800: "#0a1a33",
          900: "#061020",
          DEFAULT: "#0e2447"
        },
        gold: {
          50: "#fdf6e3",
          100: "#f8e6b2",
          200: "#f0cf74",
          300: "#e8b840",
          400: "#d9a521",
          500: "#c08d13",
          DEFAULT: "#d9a521"
        },
        moss: {
          50: "#eaf7ec",
          100: "#bfe7c5",
          200: "#8fd39a",
          300: "#5cbf6f",
          400: "#37a94b",
          500: "#228b37",
          DEFAULT: "#228b37"
        }
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 20px 60px -20px rgba(14,36,71,0.20)",
        glow: "0 0 0 4px rgba(217,165,33,0.15)"
      },
      backgroundImage: {
        "grid-navy":
          "linear-gradient(to right, rgba(14,36,71,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(14,36,71,0.06) 1px, transparent 1px)"
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        float: "float 6s ease-in-out infinite"
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" }
        }
      }
    }
  },
  plugins: []
};

export default config;
