/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        noto: ['"Noto Sans TC"', 'sans-serif'],
        mplus: ['"M PLUS Rounded 1c"', 'sans-serif'],
      },
      colors: {
        'light-bg': 'rgb(245 245 245);',
        'light-text': 'rgb(17 24 39);',
        'dark-header-bg': 'rgba(24,24,24,8)',
        'dark-bg': 'rgb(32, 32, 35)',
        'dark-text': 'rgb(250 250 250);',
      },
    },
  },
  plugins: [],
};
