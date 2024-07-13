import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'paua': {
          '50': '#f1f1ff',
          '100': '#e7e5ff',
          '200': '#d0ceff',
          '300': '#aea7ff',
          '400': '#8876ff',
          '500': '#623fff',
          '600': '#4f18ff',
          '700': '#4007fa',
          '800': '#3505d2',
          '900': '#2d06ac',
          '950': '#12005b',
        }
      }
    },
  },
  plugins: [],
};
export default config;
