import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      {/* <body className="bg-cc-bg text-cc-text transition-colors duration-500 dark:bg-cc-dark-bg dark:text-cc-dark-text"> */}
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
