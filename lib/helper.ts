import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const clsxm = (...args: (string | undefined)[]) => {
  return twMerge(clsx(args));
};
