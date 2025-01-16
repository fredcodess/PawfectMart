/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brown: {
          500: "#f2f0ec",
          800: "#4D2E26",
        },
        gold: {
          600: "#D4A373",
          700: "#B88955",
        },
      },
    },
  },
  plugins: [],
};
