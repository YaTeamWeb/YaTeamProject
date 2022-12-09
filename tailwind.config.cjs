/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light': '#fff',
        'dark': '#000',
        'primary': '#9D4EDD',
      }
    },
  },
  plugins: [],
}