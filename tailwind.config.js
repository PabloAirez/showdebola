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
          DEFAULT: '#37ca00'
        },
        secondary: {
          DEFAULT: '#4d7094'

        },
      },
    },
  },
  plugins: [],
}