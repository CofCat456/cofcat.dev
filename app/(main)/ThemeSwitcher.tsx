'use client'

import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useTheme } from 'next-themes'

import { LightningIcon, MoonIcon, SunIcon } from '~/assets'
import { Tooltip } from '~/components/ui/Tooltip'

const themes = [
  {
    icon: SunIcon,
    label: '淺色模式',
    value: 'light',
  },
  {
    icon: MoonIcon,
    label: '深色模式',
    value: 'dark',
  },
]

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false)
  const [open, setOpen] = useState(false)
  const { resolvedTheme, setTheme, theme } = useTheme()
  const ThemeIcon = useMemo(
    () => themes.find((t) => t.value === theme)?.icon ?? LightningIcon,
    [theme],
  )

  useEffect(() => setMounted(true), [])

  function toggleTheme() {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  if (!mounted) {
    return null
  }

  return (
    <Tooltip.Provider disableHoverableContent>
      <Tooltip.Root onOpenChange={setOpen} open={open}>
        <Tooltip.Trigger asChild>
          <button
            aria-label="切换颜色主题"
            className="group rounded-full bg-gradient-to-b from-zinc-50/50 to-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:from-zinc-900/50 dark:to-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
            onClick={toggleTheme}
            type="button"
          >
            <ThemeIcon className="h-6 w-6 stroke-zinc-500 p-0.5 transition group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-200" />
          </button>
        </Tooltip.Trigger>
        <AnimatePresence>
          {open && (
            <Tooltip.Portal forceMount>
              <Tooltip.Content asChild>
                <motion.div
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0.96 }}
                >
                  {themes.find((t) => t.value === theme)?.label || '系统模式'}
                </motion.div>
              </Tooltip.Content>
            </Tooltip.Portal>
          )}
        </AnimatePresence>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}

export default ThemeSwitcher
