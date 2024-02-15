/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      mono: ["VT323", "monospace"],
      sans: ["Sixtyfour", "sans-serif"],
    },
  },
  plugins: [],
};
