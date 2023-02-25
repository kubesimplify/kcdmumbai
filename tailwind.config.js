/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'main-color': '#00002C',
      },
      screens: {
        md: '750px',
      },
    },
  },
  plugins: [],
};
