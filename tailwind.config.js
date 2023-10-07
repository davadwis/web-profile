/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#19A7CE",
        secondary: "#146C94",
        stroke: "#19A7CE",
        primary_bg: "#FFFFFF",
        secondary_bg: "#F6F1F1"
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('flowbite/plugin')
  ],
  darkMode: 'class'
}

