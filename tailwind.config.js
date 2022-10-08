/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#d9be11",
        secondary: "#ff8c42",
        disabled: "#fc9351",
      },
    },
  },
  plugins: [require("@headlessui/tailwindcss")],
};
