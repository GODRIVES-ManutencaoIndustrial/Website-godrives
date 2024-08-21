import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    colors: {
      backgroundNavBar: "#0C2E48",
      primaryWhite: "#F4F5F5",
      primaryBlack: "#0E1011",
      secondary: {
        50: "#C0C8CE",
        200: "#A0AFBB",
        300: "#708CA4",
        500: "#094472",
        700: "#0C2E48",
        900: "#061724",
      },
      blue: {
        DEFAULT: "#0C8DC0",
        50: "#CEE1E9",
        100: "#ADD2E1",
        200: "#80C1DB",
        300: "#63B4D5",
        400: "#46A7CE",
        500: "#0C8DC0",
        600: "#0B6B92",
        700: "#0A5A7B",
        800: "#094963",
        900: "#072734",
        950: "#061724",
      },
      red: {
        DEFAULT: "#EB4C50",
        50: "#F5D1D2",
        100: "#F2BFC0",
        200: "#F0A1A3",
        300: "#FA868A",
        400: "#ED6C70",
        500: "#EB4C50",
        600: "#CF4447",
        700: "#B23B3E",
        800: "#78292B",
        900: "#3F1718",
        950: "#240A0A",
      },
      gray: {
        50: "#F4F5F5",
        100: "#ECEEEE",
        200: "#D9DCDE",
        300: "#B3BBBF",
        400: "#738187",
        500: "#5B676B",
        600: "#3F474A",
        700: "#2A2F32",
        800: "#1C2021",
        900: "#0E1011",
        950: "#080707",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "spin-slow": "spin 12s linear infinite",
      },
      dropShadow: {
        "3xl": "0 14px 14px rgba(0, 0, 0, 0.65)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
