import type { Config } from "tailwindcss";
const colorClasses = [
  "#ff0000",
  "#ff94b2",
  "#000000",
  "#0033ff",
  "#ffaa00",
  "#DBDCDD",
  "#ffff00",
  "#00ff00",
  "#A1A1A5",
  "#f200ff",
  "#f5a496",
  "#f0edf0",
  "#b05b2e",
  "#00ccff",
];

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  purge: {
    safelist: [...colorClasses.map((color) => `bg-[${color}]`)],
  },
  theme: {
    colors: {
      redAccent: "#FE0000",
      white: "#FFFFFF",
      green: "#1B7019",
      regular: "#2E424D",
      disabled: "#B3BBBD",
      "regal-blue": "#243c5a",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
