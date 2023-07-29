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
        'button': '0px 6px 10px 0px rgba(0, 0, 0, 0.15)',
        'titleCard': '-2px 5px 15px black'
      },

      backgroundImage: {
        'light-theme-gradient': 'linear-gradient(218deg, #D8605B 0%, #F4C27F 100%)',
        'dark-theme-gradient': 'linear-gradient(218deg, #8875FF 0%, rgba(134, 135, 231, 0.50) 100%)'
      },

      animation: { 'drop-down': 'drop-down 3s ease-in-out 1 normal forwards'},
      keyframes: { 'drop-down': {
        '0%': { 
          'transform': 'scale(0)',
          'transform': 'translateY(-1000%)'
        },
        
        '25%': { 'transform': 'translateY(-500%)' },
        '50%': { 'transform': 'translateY(-250%)' },
        '50%': { 'transform': 'translateY(-25%)' },
        '100%': { 'transform': 'translateY(-50%)' }
      }}
    },
  },
  plugins: [],
}

