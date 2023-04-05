/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#024059',
        'dark-brown': '#401F14',
        orange: '#D98C4A',
        yellow: '#D9B589',
        'medium-blue': '#6B98BF',
        'light-blue': '#D5EDF2',
        black: '#282828',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('./src/assets/herobistest.svg')",
        'line-pattern': "url('./src/assets/surfDrawLine.svg')",
        'blob-pattern': "url('./src/assets/blob-pattern.svg')",
      },
      backgroundSize: {
        '50%': '50%',
      },
      gridTemplateRows: {
        9: 'repeat(9, minmax(0, 1fr))',
      },
      gridRowStart: {
        8: '8',
        9: '9',
        10: '10',
      },
      gridRowEnd: {
        8: '8',
        9: '9',
        10: '10',
      },
    },
  },
  plugins: [],
};
