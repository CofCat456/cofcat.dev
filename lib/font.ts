import { Manrope } from 'next/font/google';

const sansFont = Manrope({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600', '700', '800'],
});

export { sansFont };
