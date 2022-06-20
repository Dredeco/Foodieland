/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    fontFamily:{
      inter: [ "Inter", "sans-serif"],
      lobster: ["Lobster", "cursive"],
    },
    extend: {
      dropShadow: {
        'xxl': '8 10px 5px rgba(150, 150, 150, 1)',
      }
    },
  },
  plugins: [],
}
