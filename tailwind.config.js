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
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

    },
    extend: {}
  },
  plugins: [
    require('flowbite/plugin'),
    require('@tailwindcss/forms'),
    require('tailwindcss-animated')
  ],
}
