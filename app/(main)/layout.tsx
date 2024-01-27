import { type ReactNode } from 'react';
import { Provider as BalancerProvider } from 'react-wrap-balancer';

import Footer from '~/app/(main)/Footer';
import Header from '~/app/(main)/Header';

export default function BlogLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <BalancerProvider>
      <div className="flex min-h-[100dvh] w-full flex-col justify-between font-sans antialiased">
        <Header />
        <main className="mb-auto flex flex-1 items-stretch px-4 pt-8 sm:p-10 md:py-0">
          <div className="mx-auto max-w-full md:max-w-7xl lg:px-8">
            {children}
          </div>
        </main>
        <Footer />
      </div>
    </BalancerProvider>
  );
}
