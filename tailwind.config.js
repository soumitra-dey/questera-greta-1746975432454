/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cafe-brown': '#2C1810',
        'cafe-cream': '#121212',
        'cafe-accent': '#C67C4E',
        'cafe-light': '#E5E5E5',
        'cafe-dark': '#1A1A1A',
        'cafe-darker': '#141414',
        'cafe-text': '#FFFFFF',
        'cafe-text-light': '#E0E0E0',
        'cafe-card': '#1E1E1E',
        'cafe-border': '#2A2A2A'
      },
      fontFamily: {
        'playfair': ['"Playfair Display"', 'serif'],
        'lato': ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}