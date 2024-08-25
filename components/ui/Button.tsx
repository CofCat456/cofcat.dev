/* eslint-disable @typescript-eslint/no-explicit-any */

import clsx from 'clsx'

import Link from '~/components/ui/Link'

const variantStyles = {
  primary:
    'bg-zinc-800 font-semibold text-zinc-100 hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 dark:bg-zinc-200 dark:text-black dark:hover:bg-zinc-300 dark:active:bg-zinc-300/70',
  secondary:
    'group rounded-full bg-gradient-to-b from-zinc-50/50 to-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:from-zinc-900/50 dark:to-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20',
}

type NativeButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: string
}
type NativeLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>
type SharedProps = {
  className?: string
  variant?: keyof typeof variantStyles
}
type ButtonProps = SharedProps & (NativeButtonProps | NativeLinkProps)
export default function Button({
  className,
  href,
  variant = 'primary',
  ...props
}: ButtonProps) {
  const cn = clsx(
    'inline-flex items-center gap-2 justify-center rounded-lg py-2 px-3 text-sm outline-offset-2 transition active:transition-none',
    variantStyles[variant],
    className,
  )

  return href ? (
    <Link className={cn} href={href} {...(props as any)} />
  ) : (
    <button className={cn} {...(props as any)} />
  )
}
