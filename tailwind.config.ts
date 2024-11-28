import type {Config} from "tailwindcss";
import {fontFamily} from "tailwindcss/defaultTheme";
const flowbite = require("flowbite-react/tailwind");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      lineHeight: {
        4.5: "1.125rem",
      },
      spacing: {
        0.25: "0.0625rem",
        10.5: "2.625rem",
        168: "42rem",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
export default config;
