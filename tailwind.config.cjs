/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/src/assets/images/MainPageImages/hero.png')",
        'cta': "linear-gradient(180deg, rgba(2, 2, 2, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%), url('/src/assets/images/MainPageImages/cta.jpg')",
      },
      colors: {
        'light': '#fff',
        'dark': '#000',
        'primary': '#9D4EDD',
        'border-hero': '#747474',
        'gray': {
            100: '#DDDDDD',
            200: '#AAAAAA',
            300: '#848484',
        },
        'border-input': '#EBEBEB',
        'button-hover': '#AF70E2',
        'project': "rgba(0, 0, 0, 0.8)",
      },
      fontFamily: {
        "Raleway": [
            'Raleway',
            ...defaultTheme.fontFamily.sans
        ],
        "Poppins": [
            'Poppins',
            ...defaultTheme.fontFamily.sans
        ],
        "OpenSans": [
            'Open Sans',
            ...defaultTheme.fontFamily.sans
        ]
      },
      container: false
    },
  },
  darkMode: 'class',
  plugins: [],
}

