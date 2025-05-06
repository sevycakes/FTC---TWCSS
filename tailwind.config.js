/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        etim: "#000",
        lebag: "#44362b",
        poti: "#fff",
        pote: "#f3f4f6",
        asol: "#3e9bcf",
        blo: "#2a82b2",
        delaw: "#fc972e",
        dewaw: "#d98417",
        yilo: "#ffbd66",
      },
      fontFamily: {
        'lato': ["Lato", "sans-serif"],
        'poppins': ["Poppins", "sans-serif"],
      }
    },
  },
  plugins: [],
}

