/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0d0b2b',
        navyLight: '#120f35',
        navyCard: '#1a1740',
        purple: {
          DEFAULT: '#7c3aed',
          dark: '#6d28d9',
          footer: '#2d1b69',
          border: '#2e2a5e',
        },
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        dmSans: ['"DM Sans"', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
