/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        FtcPrimary: "#3e9bcf",
        FtcSecondary: "#f3f4f6",
        FtcAccent: "#fc972e",
        FtcDBlue: "#2a82b2",
        FtcDYellow: "#d98417",
        FtcLYellow: "#ffbd66",
        FtcBrown: "#3b3b37",
      },
      fontFamily: {
        'lato': ["Lato", "sans-serif"],
        'poppins': ["Poppins", "sans-serif"],
      }
    },
  },
  plugins: [],
}

