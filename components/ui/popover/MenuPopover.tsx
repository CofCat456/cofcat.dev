'use clint'

import { memo, useId, useMemo, useState } from 'react'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import Link from 'next/link'
import type { PropsWithChildren } from 'react'

import { type NavigationItem } from '~/config/nav'

import FloatPopover from './index'

const MenuPopover = memo(
  ({
    children,
    path,
    subMenu,
  }: PropsWithChildren<{
    path: NavigationItem['path']
    subMenu: NavigationItem['subMenu']
  }>) => {
    const currentId = useId()
    const TriggerComponent = useMemo(() => () => children, [children])
    if (!subMenu) return children

    return (
      <FloatPopover
        TriggerComponent={TriggerComponent}
        offset={10}
        placement="bottom"
        popoverClassNames={clsx([
          'select-none rounded-xl bg-white/60 outline-none dark:bg-neutral-900/60',
          'shadow-lg shadow-zinc-800/5 border border-zinc-900/5 backdrop-blur-md',
          'dark:from-zinc-900/70 dark:to-zinc-800/90 dark:border-zinc-100/10',
          'relative flex w-[130px] flex-col py-1',
          'focus-visible:!ring-0',
        ])}
        popoverWrapperClassNames="z-[19] relative"
        strategy="fixed"
      >
        {!!subMenu.length &&
          subMenu.map((item) => {
            return (
              <Item
                currentId={currentId}
                icon={item.icon}
                key={item.title}
                path={path + item.path}
                title={item.title}
              />
            )
          })}
      </FloatPopover>
    )
  },
)
MenuPopover.displayName = 'MenuPopover'

const Item = memo(
  ({
    currentId,
    icon,
    path,
    title,
  }: NavigationItem & { currentId: string }) => {
    const [isEnter, setIsEnter] = useState(false)

    return (
      <Link
        className="relative flex w-full items-center justify-around space-x-2 px-3 py-2 text-xs duration-200 hover:text-cc-primary"
        href={path}
        key={title}
        onMouseEnter={() => {
          setIsEnter(true)
        }}
        onMouseLeave={() => {
          setIsEnter(false)
        }}
        role="button"
      >
        {!!icon && <span>{icon}</span>}
        <span>{title}</span>

        {isEnter && (
          <motion.span
            className={clsx(
              'absolute bottom-0 left-0 right-2 top-0 z-[-1] rounded-md',
              'bg-zinc-50 dark:bg-neutral-900',
              'border border-zinc-200 dark:border-zinc-800',
            )}
            layoutId={currentId}
          />
        )}
      </Link>
    )
  },
)
Item.displayName = 'Item'

export default MenuPopover
