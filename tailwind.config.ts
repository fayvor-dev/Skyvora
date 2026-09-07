import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "#07070A",
        midnight: "#0B0C12",
        graphite: "#14151C",
        charcoal: "#1B1C24",
        pearl: "#F4F3EF",
        gold: {
          DEFAULT: "#C9A768",
          light: "#E4D3A8",
          dim: "#8B7647",
        },
        silver: {
          DEFAULT: "#AEB4BE",
          light: "#D6D9DE",
        },
      },
      fontFamily: {
        display: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          '"Helvetica Neue"',
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          '"Helvetica Neue"',
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      backgroundImage: {
        "radial-fade": "radial-gradient(circle at 50% 0%, rgba(201,167,104,0.08), transparent 60%)",
      },
      boxShadow: {
        glass: "0 20px 60px rgba(0,0,0,0.35)",
        "glass-sm": "0 8px 30px rgba(0,0,0,0.25)",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        shimmer: "shimmer 3s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
