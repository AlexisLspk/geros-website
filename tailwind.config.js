/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'geros-light': '#E8F4F8',
        'geros-medium': '#4A90E2',
        'geros-dark': '#2C3E50',
      },
    },
  },
  plugins: [],
} 