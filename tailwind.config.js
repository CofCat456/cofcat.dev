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
        'cc-bg': '#f5f5f5',
        'cc-header': '#f5f5f5',
        'cc-text': '#111827',
        'cc-dark-bg': '#050505',
        'cc-dark-header-bg': '#181818',
        'cc-dark-text': '#fafafa',
      },
    },
  },
  plugins: [],
};
