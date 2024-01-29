import type { Config } from 'tailwindcss';

import { fontFamily } from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/typography'),
    require('@headlessui/tailwindcss'),
  ],
  theme: {
    extend: {
      colors: {
        'cc-primary': 'rgba(0, 201, 255, 1)',
        dark: {
          900: 'rgba(29, 29, 31, 0.72)',
        },
        light: {
          100: 'rgba(255, 255, 255, 0.72)',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
      },
      fontSize: {
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '3.5rem' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
        base: ['1rem', { lineHeight: '1.75rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        sm: ['0.875rem', { lineHeight: '1.5rem' }],
        xl: ['1.25rem', { lineHeight: '2rem' }],
        xs: ['0.8125rem', { lineHeight: '1.5rem' }],
      },
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      typography: (theme) => ({
        DEFAULT: {
          css: {
            ':is(h2, h3) + *': {
              marginTop: 0,
            },
            ':is(h2, h3) code': {
              fontWeight: theme('fontWeight.bold'),
            },
            ':is(tbody, tfoot) td': {
              paddingBottom: theme('spacing.2'),
              paddingTop: theme('spacing.2'),
            },
            ':is(tbody, tfoot) td:not(:first-child)': {
              paddingLeft: theme('spacing.2'),
            },
            ':is(tbody, tfoot) td:not(:last-child)': {
              paddingRight: theme('spacing.2'),
            },
            '--tw-prose-blockquote': theme('colors.zinc.500'),
            '--tw-prose-body': theme('colors.zinc.600'),
            '--tw-prose-bold': theme('colors.zinc.900'),
            '--tw-prose-bullets': theme('colors.zinc.900'),
            '--tw-prose-captions': theme('colors.zinc.400'),
            '--tw-prose-code': theme('colors.zinc.700'),
            '--tw-prose-code-bg': theme('colors.zinc.300 / 0.2'),
            '--tw-prose-counters': theme('colors.zinc.900'),
            '--tw-prose-dark-blockquote': theme('colors.zinc.300'),
            '--tw-prose-dark-body': '#FFFFFFCC',
            '--tw-prose-dark-bold': theme('colors.zinc.200'),
            '--tw-prose-dark-bullets': theme('colors.zinc.200'),
            '--tw-prose-dark-captions': theme('colors.zinc.500'),
            '--tw-prose-dark-code': theme('colors.zinc.300'),
            '--tw-prose-dark-code-bg': theme('colors.zinc.200 / 0.05'),

            '--tw-prose-dark-counters': theme('colors.zinc.200'),
            '--tw-prose-dark-headings': theme('colors.zinc.200'),
            '--tw-prose-dark-hr': theme('colors.zinc.700 / 0.4'),
            '--tw-prose-dark-links': theme('colors.teal.400'),
            '--tw-prose-dark-links-hover': theme('colors.teal.400'),
            '--tw-prose-dark-pre-bg': 'rgb(0 0 0 / 0.4)',
            '--tw-prose-dark-pre-border': theme('colors.zinc.200 / 0.1'),
            '--tw-prose-dark-pre-code': theme('colors.zinc.100'),
            '--tw-prose-dark-quote-borders': theme('colors.sky.600'),
            '--tw-prose-dark-td-borders': theme('colors.zinc.800'),
            '--tw-prose-dark-th-borders': theme('colors.zinc.700'),
            '--tw-prose-dark-underline': theme('colors.teal.400 / 0.3'),
            '--tw-prose-dark-underline-hover': theme('colors.teal.400'),
            '--tw-prose-headings': theme('colors.zinc.900'),
            '--tw-prose-hr': theme('colors.zinc.100'),
            '--tw-prose-links': theme('colors.teal.500'),
            '--tw-prose-links-hover': theme('colors.teal.600'),
            '--tw-prose-pre-bg': theme('colors.zinc.900'),
            '--tw-prose-pre-border': theme('colors.zinc.200'),
            '--tw-prose-pre-code': theme('colors.zinc.100'),

            '--tw-prose-quote-borders': theme('colors.sky.300'),
            '--tw-prose-td-borders': theme('colors.zinc.100'),
            '--tw-prose-th-borders': theme('colors.zinc.200'),

            '--tw-prose-underline': theme('colors.teal.500 / 0.2'),
            '--tw-prose-underline-hover': theme('colors.teal.500'),
            // Inline elements
            a: {
              color: 'var(--tw-prose-links)',
              fontWeight: theme('fontWeight.semibold'),
              textDecoration: 'underline',
              textDecorationColor: 'var(--tw-prose-underline)',
              transitionDuration: theme('transitionDuration.150'),
              transitionProperty: 'color, text-decoration-color',
              transitionTimingFunction: theme(
                'transitionTimingFunction.in-out'
              ),
            },
            'a code': {
              color: 'inherit',
            },
            'a:hover': {
              color: 'var(--tw-prose-links-hover)',
              textDecorationColor: 'var(--tw-prose-underline-hover)',
            },
            // Quotes
            blockquote: {
              borderLeftColor: 'var(--tw-prose-quote-borders)',
              borderLeftWidth: theme('borderWidth.2'),
              color: 'var(--tw-prose-blockquote)',
              fontStyle: 'italic',
              paddingLeft: theme('spacing.6'),
            },
            code: {
              backgroundColor: 'var(--tw-prose-code-bg)',
              borderRadius: theme('borderRadius.lg'),
              color: 'var(--tw-prose-code)',
              display: 'inline-block',
              fontSize: theme('fontSize.sm')[0],
              fontWeight: theme('fontWeight.semibold'),
              paddingLeft: theme('spacing.1'),
              paddingRight: theme('spacing.1'),
            },
            // Base
            color: 'var(--tw-prose-body)',
            // Figures
            figcaption: {
              color: 'var(--tw-prose-captions)',
              fontSize: theme('fontSize.sm')[0],
              lineHeight: theme('lineHeight.6'),
              marginTop: theme('spacing.3'),
            },
            'figcaption > p': {
              margin: 0,
            },

            h2: {
              fontSize: theme('fontSize.xl')[0],
              lineHeight: theme('lineHeight.7'),
              marginBottom: theme('spacing.4'),
              marginTop: theme('spacing.20'),
            },

            // Headings
            'h2, h3': {
              color: 'var(--tw-prose-headings)',
              fontWeight: theme('fontWeight.semibold'),
            },
            h3: {
              fontSize: theme('fontSize.base')[0],
              lineHeight: theme('lineHeight.7'),
              marginBottom: theme('spacing.4'),
              marginTop: theme('spacing.16'),
            },

            // Horizontal rules
            hr: {
              '@screen lg': {
                marginLeft: `calc(${theme('spacing.12')} * -1)`,
                marginRight: `calc(${theme('spacing.12')} * -1)`,
              },
              borderColor: 'var(--tw-prose-hr)',
              borderTopWidth: '1px',
              marginBottom: theme('spacing.20'),
              marginTop: theme('spacing.20'),
            },
            li: {
              marginBottom: theme('spacing.0'),
              marginTop: theme('spacing.0'),
              paddingLeft: theme('spacing[3.5]'),
            },
            'li :is(li, a)': {
              marginBottom: theme('spacing.3'),
              marginTop: theme('spacing.3'),
            },
            'li :is(li, p)': {
              marginBottom: theme('spacing.3'),
              marginTop: theme('spacing.3'),
            },
            'li :is(ol, ul)': {
              marginBottom: theme('spacing.4'),
              marginTop: theme('spacing.4'),
            },
            'li::marker': {
              fontSize: theme('fontSize.sm')[0],
              fontWeight: theme('fontWeight.semibold'),
            },
            lineHeight: theme('lineHeight.7'),
            ol: {
              listStyleType: 'decimal',
            },
            'ol > li::marker': {
              color: 'var(--tw-prose-counters)',
            },
            p: {
              marginBottom: theme('spacing.7'),
              marginTop: theme('spacing.7'),
            },

            // Code blocks
            pre: {
              backgroundColor: 'var(--tw-prose-pre-bg)',
              borderRadius: theme('borderRadius.3xl'),
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
              color: 'var(--tw-prose-pre-code)',
              fontSize: theme('fontSize.sm')[0],
              fontWeight: theme('fontWeight.medium'),
              overflowX: 'auto',
              padding: theme('spacing.4'),
            },
            'pre code': {
              backgroundColor: 'transparent',
              borderRadius: 0,
              color: 'inherit',
              display: 'inline',
              fontSize: 'inherit',
              fontWeight: 'inherit',
              padding: 0,
            },

            strong: {
              color: 'var(--tw-prose-bold)',
              fontWeight: theme('fontWeight.semibold'),
            },

            // Tables
            table: {
              fontSize: theme('fontSize.sm')[0],
              tableLayout: 'auto',
              textAlign: 'left',
              width: '100%',
            },
            'tbody td': {
              verticalAlign: 'baseline',
            },
            'tbody tr': {
              borderBottomColor: 'var(--tw-prose-td-borders)',
              borderBottomWidth: '1px',
            },
            'tbody tr:last-child': {
              borderBottomWidth: 0,
            },
            tfoot: {
              borderTopColor: 'var(--tw-prose-th-borders)',
              borderTopWidth: '1px',
            },
            'tfoot td': {
              verticalAlign: 'top',
            },
            thead: {
              borderBottomColor: 'var(--tw-prose-th-borders)',
              borderBottomWidth: '1px',
            },
            'thead th': {
              color: 'var(--tw-prose-headings)',
              fontWeight: theme('fontWeight.semibold'),
              paddingBottom: theme('spacing.2'),
              verticalAlign: 'bottom',
            },
            'thead th:not(:first-child)': {
              paddingLeft: theme('spacing.2'),
            },
            'thead th:not(:last-child)': {
              paddingRight: theme('spacing.2'),
            },
            // Lists
            ul: {
              listStyleType: 'disc',
            },
            'ul > li::marker': {
              color: 'var(--tw-prose-bullets)',
            },
            'ul, ol': {
              paddingLeft: theme('spacing.6'),
            },
          },
        },
        dark: {
          css: {
            '--tw-prose-body': 'var(--tw-prose-dark-body)',
            '--tw-prose-bold': 'var(--tw-prose-dark-bold)',
            '--tw-prose-bullets': 'var(--tw-prose-dark-bullets)',
            '--tw-prose-captions': 'var(--tw-prose-dark-captions)',
            '--tw-prose-code': 'var(--tw-prose-dark-code)',
            '--tw-prose-code-bg': 'var(--tw-prose-dark-code-bg)',
            '--tw-prose-counters': 'var(--tw-prose-dark-counters)',
            '--tw-prose-headings': 'var(--tw-prose-dark-headings)',
            '--tw-prose-hr': 'var(--tw-prose-dark-hr)',
            '--tw-prose-links': 'var(--tw-prose-dark-links)',
            '--tw-prose-links-hover': 'var(--tw-prose-dark-links-hover)',
            '--tw-prose-pre-bg': 'var(--tw-prose-dark-pre-bg)',
            '--tw-prose-pre-border': 'var(--tw-prose-dark-pre-border)',
            '--tw-prose-pre-code': 'var(--tw-prose-dakr-pre-code)',
            '--tw-prose-quote-borders': 'var(--tw-prose-dark-quote-borders)',
            '--tw-prose-th-borders': 'var(--tw-prose-dark-th-borders)',
            '--tw-prose-underline': 'var(--tw-prose-dark-underline)',
            '--tw-prose-underline-hover':
              'var(--tw-prose-dark-underline-hover)',
          },
        },
      }),
    },
  },
};
export default config;
