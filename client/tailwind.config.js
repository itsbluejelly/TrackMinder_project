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
        'titleCard': '-2px 5px 15px black',
        'successCard': '0px 0px 50px black',
        'collectionCard': '0px 4px 15px 0px rgba(0, 0, 0, 0.25)',
        'knob': '2px 2px 10px black'
      },

      backgroundImage: {
        'light-theme-gradient': 'linear-gradient(218deg, #D8605B 0%, #F4C27F 100%)',
        'dark-theme-gradient': 'linear-gradient(218deg, #8875FF 0%, rgba(134, 135, 231, 0.50) 100%)'
      },

      animation: { 
        'drop-down': 'drop-down 3s ease-in-out 1 normal forwards',
        'fade-show': 'fade-show 2s ease-in-out 0.5s 1 normal forwards',
        'pop-up': 'pop-up 1.5s ease-in-out 1 normal forwards'
      },

      keyframes: { 
        'drop-down': {
          '0%': { 
            'transform': 'scale(0)',
            'transform': 'translateY(-1000%)'
          },
          
          '25%': { 'transform': 'translateY(-500%)' },
          '50%': { 'transform': 'translateY(-250%)' },
          '50%': { 'transform': 'translateY(-25%)' },
          '100%': { 'transform': 'translateY(-50%)' }
        },

        'fade-show': {
          '0%': { 'transform': 'scale(0)'},
          '25%': { 'transform': 'scale(0)'},
          '50%': { 'transform': 'scale(1.5)'},
          '75%': { 'transform': 'scale(0.75)'},
          '100%': { 'transform': 'scale(1)'}
        },

        'pop-up': {
          '0%': {
            'transform': 'translateY(50%)',
            'transform': 'scale(0)'
          },
          
          '50%': {
            'transform': 'translateY(0%)',
            'transform': 'scale(1.125)'
          },
          
          '75%': {
            'transform': 'scale(1)'
          },

          '100%': {
            'transform': 'scale(1)'
          }
        }
      }
    },
  },
  plugins: [],
}

