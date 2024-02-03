import defaultTheme from "tailwindcss/defaultTheme";
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ed6e4d",
      },
    },
    screens: {
      xs: "480px",
      ...defaultTheme.screens,
    },
  },

  plugins: [
    require("daisyui"),
    require('@tailwindcss/forms')({ strategy: 'class' }),
    require("tailwind-scrollbar"),
  ],

  daisyui: {
    themes: false,
    base: false,
  },
};
