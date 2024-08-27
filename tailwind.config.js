/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      '500':['Raleway', 'sans-serif'],
      '600':['Raleway', 'sans-serif'],
      '700':['Raleway', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}