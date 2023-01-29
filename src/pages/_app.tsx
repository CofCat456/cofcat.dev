import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

import { PageSEO } from '@/components/SEO';
import LayoutWrapper from '@/components/Wrapper/LayoutWrapper';

import siteMetadata from '@/data/siteMetadata';

import '@/styles/globals.css';
import '@/styles/prism-plus.css';
import '@/styles/prism-dracula.css';

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <PageSEO />
      <LayoutWrapper>
        <Component key={router.pathname} {...pageProps} />
      </LayoutWrapper>
    </ThemeProvider>
  );
}
