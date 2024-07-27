/* eslint-env node */

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./index.html",
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
    extend: {
      backgroundImage: {
        "checkbox-checked": "url(/src/assets/checkbox/checked.png)",
        "checkbox-checked-hover": "url(/src/assets/checkbox/checked-hover.png)",
        "checkbox-unchecked": "url(/src/assets/checkbox/unchecked.png)",
        "checkbox-unchecked-hover":
          "url(/src/assets/checkbox/unchecked-hover.png)",
      },
      listStyleImage: {
        dot2: "url(/src/assets/dot2_12x12.png)",
        dot3: "url(/src/assets/dot3_12x12.png)",
      },
      boxShadow: {
        tab: "0px 1px 0px 0px rgba(255,255,255,0.1) inset,1px 0px 0px 0px rgba(255,255,255,0.1) inset,-1px 0px 0px 0px rgba(0,0,0,0.1) inset",
        card: "0px 0px 0px 1px rgba(0,0,0,0.25) inset,0px 1px 4px 0px rgba(0,0,0,0.25)",
        button:
          "0px 1px 0px 0px rgba(255,255,255,0.1) inset,0px -1px 0px 0px rgba(0,0,0,0.1) inset,1px 0px 0px 0px rgba(255,255,255,0.1) inset,-1px 0px 0px 0px rgba(0,0,0,0.1) inset",
      },
      colors: {
        neutral: {
          725: "#3a3a3a",
          750: "#333333",
          775: "#2c2c2c",
        },
      },
      transitionDuration: {
        DEFAULT: "200ms",
      },
      transitionTimingFunction: {
        DEFAULT: "cubic-bezier(0.55, 0.055, 0.675, 0.19)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        fadein: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "late-fade-in": "fadein 300ms ease 700ms forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
