const theme = require("./constants/theme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: theme.colors.primary,
        secondary: theme.colors.secondary,
        light: {
          100: theme.colors.light.l100,
          200: theme.colors.light.l200,
          300: theme.colors.light.l300,
        },
        dark: {
          100: theme.colors.dark.d100,
          200: theme.colors.dark.d200,
        },
        accent: theme.colors.accent,
      },
    },
  },
  plugins: [],
};
