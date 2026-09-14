/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        evo: {
          bgMain: '#080B12',
          bgSec: '#0F141D',
          card: '#151B26',
          border: '#242C3A',
          green: '#00D68F',
          red: '#FF4D67',
          blueMain: '#3B82F6',
          blueSec: '#2563EB',
          textMain: '#F8FAFC',
          textSec: '#94A3B8'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], 
      }
    },
  },
  plugins: [],
}