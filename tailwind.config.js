/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      body: ['"Inter","sans-serif"'],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: ".5rem",
        xl: "2rem",
        "2xl": "4rem",
      },
    },
    extend: {
      colors: {
        primary: {
          light: "#9e9ea7",
          DEFAULT: "#6e6d7a",
          dark: "#0d0c22",
        },
        secondary: {
          DEFAULT: "#ea4c89",
          dark: "#BAEFAD",
        },
        neutral: colors.Neutral,
      },
    },
  },

  plugins: [],
};
