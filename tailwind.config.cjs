/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    "./src/**/*.jsx",
    "./src/**/*.js",
  ],
  theme: {
    colors: {
      'white': '#ffffff',
      'gray1' : '#EDEDED',
      'purple1' : '#7903C1',
      'purple2' : '#E4B8FF',
      'red1' : '#FF0000',
      'gray2' : '#4A4A4A',
      'gray3' : '#D9D9D9'
    },
    fontFamily: {
      'main' : "'Montserrat', sans-serif",
      'numbers' : 'IBM Plex Mono'
    },
    extend: {
      screens: {
        'notTall': { 'raw': '(max-height: 900px)' }
      }
    },
  },
  plugins: [],
}
