/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bgDarkPrimary: "#2B2D30",
        bgDarkSecondary: "#1F2123",
        bgGrayLighter: "#2B2D30",
        yellowPrimary: "#FDD031",
        grayPrimary: "#A9A585",
        ebonyBlack: "#080402",
        solidsolidWhite: "#F4F5FA"
      }
    }
  },
  plugins: []
};
