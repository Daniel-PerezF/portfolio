/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: '#364652',
        darker: '#1F2937',
        orange: '#FB904D',
      },
      extend: {
        outline: {
          dark: ['2px solid #1F2937'],
        },
      },
    
    },
  },
  plugins: [],
}

