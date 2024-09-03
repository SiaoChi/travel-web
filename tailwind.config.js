/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [],
  theme: {
    extend: {
      colors:{
        'bg-yellow':'#FFFAF1',
        'c-blue':'#2496F0',
        'c-orange':'#FED430'
      }
    },
  },
  plugins: [],
}

