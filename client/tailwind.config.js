/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'light-theme': 'rgba(244, 194, 127, 0.67)',
        'dark-theme': '#121212'
      },

      boxShadow: {
        'popup': '10px 5px 10px black',
        'button': '0px 6px 10px 0px rgba(0, 0, 0, 0.15)'
      }
    },
  },
  plugins: [],
}

