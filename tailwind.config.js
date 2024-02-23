/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bgDarkPrimary: "#26282C",
        bgDarkSecondary: "#1F2123",
        yellowPrimary: "#FDD031",
        grayPrimary: "#A9A585",
        ebonyBlack: "#080402",
        solidsolidWhite: "#F4F5FA"
      }
    }
  },
  plugins: []
};
