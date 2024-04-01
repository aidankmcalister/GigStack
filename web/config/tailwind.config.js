/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/react-tailwindcss-datepicker/dist/index.esm.js',
  ],
  theme: {
    extend: {
      colors: {
        'main-white': '#FFF8F0',
        'main-white-brighter': '#FFFEFC',
        'main-gray': '#999590',
        'main-orange': '#FF8811',
        'main-yellow': '#F4D06F',
        'main-blue': '#9DD9D2',
      },
    },
  },
  plugins: [],
}
