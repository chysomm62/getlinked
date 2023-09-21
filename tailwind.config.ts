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
        clashDisplay: ["var(--font-clashDisplay)"],
        montserrat: ["montserrat"],
      },
      fontWeight: {
        light: "300",
        book: "400",
        medium: "500",
        bold: "700",
        xtrabold: "800",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "rgba(255, 255, 255, 1)",
        blue: {
          1: "rgba(0, 77, 179, 1)",
        },
        black: {
          1: "rgba(0, 0, 0, 1)", //black header texts
        },
        gray: {
          1: "rgba(231, 231, 231, 1)",
        },
        purple: {
          1: "rgba(212, 52, 254, 1)", //light
          2: "rgba(21, 14, 40, 1)", //dark
        },
      },
      boxShadow: {
        default: "0px 64px 64px -48px rgba(15, 15, 15, 0.1)",
      },
    },
  },
  plugins: [],
};
export default config;
