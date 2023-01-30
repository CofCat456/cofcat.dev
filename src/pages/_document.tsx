import { Html, Head, Main, NextScript } from 'next/document';

import siteMetadata from '@/data/siteMetadata';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon/favicon.ico" />
        <script
                dangerouslySetInnerHTML={{
                  __html: `${siteMetadata.EasterEgg}`,
                }}
              />
      </Head>
      <body className="bg-cc-bg text-cc-text antialiased transition-colors duration-500 dark:bg-cc-dark-bg dark:text-cc-dark-text">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
