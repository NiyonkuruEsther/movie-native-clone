/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bgDarkPrimary: "#26282C",
        bgDarkSecondary: "#1F2123",
        yellowPrimary: "#FDD130"
      }
    }
  },
  plugins: []
};
