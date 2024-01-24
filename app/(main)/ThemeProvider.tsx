'use client';

import type { ThemeProviderProps } from 'next-themes/dist/types';

import { ThemeProvider as NextThemesProvider } from 'next-themes';

// https://github.com/pacocoursey/next-themes/issues/152#issuecomment-1364280564

export function ThemeProvider(props: ThemeProviderProps) {
  return <NextThemesProvider {...props} />;
}
