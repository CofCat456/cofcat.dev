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
        'cc-bg': 'rgb(255, 255, 255)',
        'cc-header': '#ffffff40',
        'cc-text': '#111827',
        'cc-dark-bg': 'rgb(32, 32, 35)',
        'cc-dark-header-bg': '#20202380',
        'cc-dark-text': 'rgba(255, 255, 255, .92)',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.cc-text'),
            a: {
              color: theme('colors.sky.500'),
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
              },
              code: { color: theme('colors.sky.400') },
            },
            h1: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.cc-text'),
            },
            h2: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.cc-text'),
            },
            h3: {
              fontWeight: '600',
              color: theme('colors.cc-text'),
            },
            'h4,h5,h6': {
              color: theme('colors.cc-text'),
            },
            pre: {
              backgroundColor: theme('colors.neutral.800'),
            },
            code: {
              color: theme('colors.pink.500'),
              backgroundColor: theme('colors.neutral.100'),
              paddingLeft: '4px',
              paddingRight: '4px',
              paddingTop: '2px',
              paddingBottom: '2px',
              borderRadius: '0.25rem',
            },
            'code::before': {
              content: 'none',
            },
            'code::after': {
              content: 'none',
            },
            details: {
              backgroundColor: theme('colors.neutral.100'),
              paddingLeft: '4px',
              paddingRight: '4px',
              paddingTop: '2px',
              paddingBottom: '2px',
              borderRadius: '0.25rem',
            },
            hr: { borderColor: theme('colors.neutral.300') },
            'ol li::marker': {
              fontWeight: '600',
              color: theme('colors.neutral.500'),
            },
            'ul li::marker': {
              backgroundColor: theme('colors.neutral.500'),
            },
            strong: { color: theme('colors.neutral.600') },
            blockquote: {
              color: theme('colors.neutral.900'),
              borderLeftColor: theme('colors.neutral.200'),
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.cc-dark-text'),
            a: {
              color: theme('colors.sky.400'),
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
              },
              code: { color: theme('colors.sky.400') },
            },
            h1: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.cc-dark-text'),
            },
            h2: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.cc-dark-text'),
            },
            h3: {
              fontWeight: '600',
              color: theme('colors.cc-dark-text'),
            },
            'h4,h5,h6': {
              color: theme('colors.cc-dark-text'),
            },
            pre: {
              backgroundColor: theme('colors.neutral.800'),
            },
            code: {
              backgroundColor: theme('colors.neutral.800'),
            },
            details: {
              backgroundColor: theme('colors.neutral.800'),
            },
            hr: { borderColor: theme('colors.neutral.500') },
            'ol li::marker': {
              fontWeight: '600',
              color: theme('colors.neutral.400'),
            },
            'ul li::marker': {
              backgroundColor: theme('colors.neutral.400'),
            },
            strong: { color: theme('colors.neutral.100') },
            thead: {
              th: {
                color: theme('colors.neutral.100'),
              },
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.neutral.700'),
              },
            },
            blockquote: {
              color: theme('colors.neutral.100'),
              borderLeftColor: theme('colors.neutral.700'),
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
