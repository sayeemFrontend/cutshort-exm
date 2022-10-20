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
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
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
