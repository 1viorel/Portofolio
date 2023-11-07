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
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
    require('@tailwindcss/forms')
  ],
}
