import type { Metadata } from 'next';

import { ThemeProvider } from '~/app/(main)/ThemeProvider';
import { sansFont } from '~/lib/font';
import { seo } from '~/lib/seo';

import './globals.css';
import './prism-one-dark.css';
import './prism-plus.css';

export const metadata: Metadata = {
  description: seo.description,
  keywords: 'CofCat,廖浩安',
  manifest: '/favicons/site.webmanifest',
  metadataBase: seo.url,
  openGraph: {
    description: seo.description,
    locale: 'zh_CN',
    siteName: 'CofCat',
    title: {
      default: seo.title,
      template: '%s | CofCat',
    },
    type: 'website',
    url: 'https://cofcat.com',
  },
  robots: {
    follow: true,
    googleBot: {
      follow: true,
      index: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
    index: true,
  },
  themeColor: [
    { color: '#1d1d1fb8', media: '(prefers-color-scheme: dark)' },
    { color: '#ffffffb8', media: '(prefers-color-scheme: light)' },
  ],
  title: {
    default: seo.title,
    template: '%s | CofCat',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={`${sansFont.variable} m-0 h-full p-0 font-sans antialiased`}
      lang="zh-CN"
      suppressHydrationWarning
    >
      <head>
        <link
          href="/favicons/apple-touch-icon.png"
          rel="apple-touch-icon"
          sizes="180x180"
        />
        <link
          href="/favicons/favicon-32x32.png"
          rel="icon"
          sizes="32x32"
          type="image/png"
        />
        <link
          href="/favicons/favicon-16x16.png"
          rel="icon"
          sizes="16x16"
          type="image/png"
        />
        <link href="/favicons/site.webmanifest" rel="manifest" />
        <link
          color="#5bbad5"
          href="/favicons/safari-pinned-tab.svg"
          rel="mask-icon"
        />{' '}
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
          enableSystem
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
