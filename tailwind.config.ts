import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "blue-80": "#0F1035",
        "blue-60": "#365486",
        "blue-40": "#7FC7D9",
        "blue-20": "#DCF2F1",
        "yello-20": "#F0EFC8",
        "pink-20": "#F2DCDF",
      },
      fontFamily: { libre: ["var(--font-libre-baskerville)", "serif"] },
      keyframes: {
        slideInRight: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": {
            transform: "translateX(30%) translateY(-20%)",
            opacity: "1",
          },
        },
        slideInTop: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": {
            transform: "translateX(-10%) translateY(10%)",
            opacity: "1",
          },
        },
      },
      animation: {
        slideInRight: "slideInRight 1s ease-out forwards",
        slideInTop: "slideInTop 1s ease-out forwards",
        slideInLeft: "slideInLeft 1s ease-out forwards",
      },
    },
  },
  plugins: [],
} satisfies Config;
