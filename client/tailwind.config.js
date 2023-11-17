/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // Enable dark mode using the 'class' strategy
  theme: {
    extend: {
      // Define custom colors, fonts, etc., here if needed
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
