/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/src/assets/images/hero.png')",
      },
      colors: {
        'light': '#fff',
        'dark': '#000',
        'primary': '#9D4EDD',
        'border-hero': '#747474',
      }
    },
  },
  plugins: [],
}