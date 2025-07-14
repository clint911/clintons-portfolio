import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: {
          50: "#fefce8",
          300: "#fde047",
          400: "#facc15",
        },
        pink: {
          300: "#f9a8d4",
          400: "#f472b6",
          500: "#ec4899",
          600: "#db2777",
        },
        cyan: {
          200: "#a5f3fc",
          300: "#67e8f9",
        },
        green: {
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
        },
        orange: {
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
        },
      },
      fontFamily: {
        sans: ["Kalam", "cursive"],
      },
      boxShadow: {
        brutal: "8px 8px 0px 0px rgba(0,0,0,1)",
        "brutal-sm": "4px 4px 0px 0px rgba(0,0,0,1)",
        "brutal-lg": "12px 12px 0px 0px rgba(0,0,0,1)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
