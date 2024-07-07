import plugin from "tailwindcss";
import tailwindcssanimate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        iron: {
          50: "#f7f7f7",
          100: "#ededed",
          200: "#dfdfdf",
          300: "#cccccc",
          400: "#adadad",
          500: "#999999",
          600: "#888888",
          700: "#7b7b7b",
          800: "#676767",
          900: "#545454",
          950: "#333333",
          DEFAULT: "#cccccc",
        },
      },
    },
    fontFamily: {
      body: [
        "Inter",
        "Roboto",
        "Helvetica Neue",
        "Arial Nova",
        "Nimbus Sans",
        "Arial",
        "sans-serif",
      ],
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("all-child", "& *");
    }),
    tailwindcssanimate,
  ],
};
