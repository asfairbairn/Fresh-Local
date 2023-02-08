/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      serif: ['Judson', 'serif', defaultTheme.fontFamily.serif],
    },
    extend: {
      backgroundImage: {
        'hero': "url('../public/images/hero.jpg')",
      },
      colors: {
        clover: '#6BAA6A',
        steel: '#404040',
        ivory: '#FFFFFF',
      },
    },
  },
  plugins: [],
}
