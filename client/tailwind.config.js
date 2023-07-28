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
        'dark-theme': '#121212',
        'dark-theme-text': 'rgba(255, 255, 255, 0.87)'
      },

      boxShadow: {
        'popup': '10px 5px 10px black',
        'button': '0px 6px 10px 0px rgba(0, 0, 0, 0.15)'
      },

      backgroundImage: {
        'light-theme-gradient': 'linear-gradient(218deg, #D8605B 0%, #F4C27F 100%)',
        'dark-theme-gradient': 'linear-gradient(218deg, #8875FF 0%, rgba(134, 135, 231, 0.50) 100%)'
      }
    },
  },
  plugins: [],
}

