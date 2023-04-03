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
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
