import plugin from "tailwindcss";
import tailwindcssanimate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      body: [
        "Seravek",
        "Gill Sans Nova",
        "Ubuntu",
        "Calibri",
        "DejaVu Sans",
        "source-sans-pro",
        "sans-serif",
      ],
    },
    extend: {},
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("all-child", "& *");
    }),
    tailwindcssanimate,
  ],
};
