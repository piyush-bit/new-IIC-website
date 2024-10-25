/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'heinch': ['Heinch' , 'cursive'], // Use "sans-serif" as a fallback
      },
      colors: {
        'primary': '#1d2a42', // You can name it as you like
      },
    },
  },
  plugins: [],
}

