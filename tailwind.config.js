/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["index.html","node_modules/flowbite/dist/flowbite.min.js"],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}

