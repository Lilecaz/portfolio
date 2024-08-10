/** @type {import('tailwindcss').Config} */
/* tailwind.config.js */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#192A56', // Bleu nuit profond
        secondary: '#F9F7F7',
        accent: '#193E57', // Jaune
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
