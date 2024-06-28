import {
  type ComponentPropsWithoutRef,
  type HTMLAttributes,
  type PropsWithChildren,
} from 'react'
import Link from 'next/link'
import type { LinkProps } from 'next/link'

import { ArrowRightIcon } from '~/assets'
import { clsxm } from '~/lib/helper'

export function Card({
  as: Component = 'div',
  children,
  className,
  ...props
}: PropsWithChildren<{
  as?: keyof JSX.IntrinsicElements
  className?: string
  onMouseEnter?: React.MouseEventHandler
  onMouseLeave?: React.MouseEventHandler
  onMouseMove?: React.MouseEventHandler
}>) {
  return (
    <Component
      className={clsxm(className, 'group relative flex flex-col items-start')}
      {...props}
    >
      {children}
    </Component>
  )
}

Card.Link = function CardLink({
  children,
  ...props
}: PropsWithChildren<ComponentPropsWithoutRef<'a'> & LinkProps>) {
  return (
    <>
      <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-200/30 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-700/20 sm:-inset-x-6 sm:rounded-2xl" />
      <Link {...props}>
        <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl" />
        <span className="relative z-10">{children}</span>
      </Link>
    </>
  )
}

Card.Title = function CardTitle({
  as: Component = 'h2',
  children,
  href,
}: PropsWithChildren<{
  as?: keyof JSX.IntrinsicElements
  href?: string
}>) {
  return (
    <Component className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
      {href ? <Card.Link href={href}>{children}</Card.Link> : children}
    </Component>
  )
}

Card.Description = function CardDescription({
  children,
  className,
}: PropsWithChildren<{
  className?: string
}>) {
  return (
    <p
      className={clsxm(
        'relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400',
        className,
      )}
    >
      {children}
    </p>
  )
}

Card.Cta = function CardCta({ children }: PropsWithChildren) {
  return (
    <div
      aria-hidden="true"
      className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500"
    >
      {children}
      <ArrowRightIcon className="ml-1 h-4 w-4 stroke-current" />
    </div>
  )
}

Card.Eyebrow = function CardEyebrow({
  as: Component = 'p',
  children,
  className,
  decorate = false,
  ...props
}: PropsWithChildren<{
  as?: keyof JSX.IntrinsicElements
  className?: string
  decorate?: boolean
}> &
  HTMLAttributes<unknown>) {
  return (
    <Component
      className={clsxm(
        className,
        'relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500',
        decorate ? 'pl-3.5' : '',
      )}
      {...props}
    >
      {decorate && (
        <span
          aria-hidden="true"
          className="absolute inset-y-0 left-0 flex items-center"
        >
          <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
        </span>
      )}
      {children}
    </Component>
  )
}
