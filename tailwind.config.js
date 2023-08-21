/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pinkest: "#f9cdcd",
        blackest: "#252422",
        whitest: "#f4f4f4",
      },
      fontFamily: {
        Montserrat: ['"Montserrat"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
