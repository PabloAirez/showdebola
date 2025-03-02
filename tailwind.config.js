/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#37ca00',
          hover:'#32960d'
        },
        secondary: {
          DEFAULT: '#4d7094'

        },
        bgCard:{
          DEFAULT: "#f3fcf5f5"
        }
      },
      height: {
        '72': '18rem', 
        '84': '21rem',
        '96': '24rem',
        '100': '3-rem'
      },
      keyframes: {
        fadeIn: {
          '0%': {
            opacity: 0,
            transform: 'translateY(-20px)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
      },
    },
  },
  plugins: [],
}