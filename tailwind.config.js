/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#2749DE",
        navy: "#152C5B",
        gray: "#969696",
        pink: "#FF498B",
        teal: "#1ABC9C",
        red: "#E74C3C",
        white: "#F5F6F8",
        darkgray: "#898989",
        lightgray: "#E5E5E5",
        mediumgray: "#B2B2B2",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
