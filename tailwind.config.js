/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainColor: '#e84142'
      },
      width: {
        contain: '1200px'
      },
    },
  },
  plugins: [],
}