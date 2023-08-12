/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  darkMode: 'class',
  theme: {
    colors: {
      primary: colors.blue,
      secondary: colors.yellow,
      dark: colors.gray,
      light: colors.zinc,
      red: colors.red,
    },
    extend: {},
  },
  plugins: [],
}
