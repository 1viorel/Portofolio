/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js" // add this line
  ],
  theme: {
    colors: {
      coolblack: '#000814',
      cooldeepblue: '#001d3d',
      coolblue: '#003566',
      coolorange: '#ffc300',
      coolyellow: '#ffd60a'
    },
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
      'md': '1024px',
      'sm': '640px',

    },
    extend: {}
  },
  plugins: [
    require('flowbite/plugin'),
    require('@tailwindcss/forms')
  ],
}
