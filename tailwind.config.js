/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'gray': '#161B23',
        'dark': '#0D1116',
        'blue': '#58A6FD',
        'text': '#B2BAC2',
        'green': '#58F1AE',
        'd-gray':'#0C1116'

      }
    },
  },
  plugins: [],
}
