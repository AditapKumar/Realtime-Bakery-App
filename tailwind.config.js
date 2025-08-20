const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './resources/views/**/*.ejs',
    './resources/js/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FE5F1E',
        'primary-hover': '#b23301',
        'secondary': '#F8F8F8',
      },
      fontFamily: {
        poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}