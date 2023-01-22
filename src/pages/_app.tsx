import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

import { AnimatePresence } from 'framer-motion';

import siteMetadata from '@/data/siteMetadata';
import LayoutWrapper from '@/components/Wrapper/LayoutWrapper';

import '@/styles/globals.css';

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <LayoutWrapper>
        <AnimatePresence initial={true} mode={'wait'}>
          <Component key={router.pathname} {...pageProps} />
        </AnimatePresence>
      </LayoutWrapper>
    </ThemeProvider>
  );
}
