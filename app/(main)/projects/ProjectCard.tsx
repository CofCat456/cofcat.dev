'use client'

import { useCallback, useState } from 'react'
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
} from 'framer-motion'
import Image from 'next/image'
import type { MouseEvent } from 'react'

import { ExternalLinkIcon } from '~/assets'
import { Card } from '~/components/ui/Card'
import { type Link, type Project } from '~/config/projects'

export function ProjectCard({ project }: { project: Project }) {
  const {
    description,
    image: { alt: imgAlt, src: imgLogo },
    links,
    title,
  } = project

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const radius = useMotionValue(0)
  const handleMouseMove = useCallback(
    ({ clientX, clientY, currentTarget }: MouseEvent) => {
      const bounds = currentTarget.getBoundingClientRect()
      mouseX.set(clientX - bounds.left)
      mouseY.set(clientY - bounds.top)
      radius.set(Math.sqrt(bounds.width ** 2 + bounds.height ** 2) / 2)
    },
    [mouseX, mouseY, radius],
  )
  const maskBackground = useMotionTemplate`radial-gradient(circle ${radius}px at ${mouseX}px ${mouseY}px, black 40%, transparent)`
  const [isHovering, setIsHovering] = useState(false)

  const getLink = (links: Link) => {
    const { github, post, site } = links

    if (post) return post
    if (site) return site
    if (github) return github

    return 'https://cofcat.com'
  }

  return (
    <Card
      as="li"
      key={title}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onMouseMove={handleMouseMove}
    >
      <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image
          alt={imgAlt}
          className="h-9 w-9 rounded-full object-contain"
          height={36}
          src={imgLogo}
          unoptimized
          width={36}
        />
      </div>
      <h2 className="mt-6 text-base font-bold text-zinc-800 dark:text-zinc-100">
        <Card.Link href={getLink(links)} target="_blank">
          {title}
        </Card.Link>
      </h2>
      <Card.Description className="flex-1">{description}</Card.Description>
      <p className="pointer-events-none relative z-40 mt-6 flex items-center text-sm font-medium text-zinc-400 transition group-hover:-translate-y-0.5 group-hover:text-sky-600 dark:text-zinc-200 dark:group-hover:text-sky-400">
        <span className="mr-2">
          {links.post
            ? '前往內文觀看'
            : links.site
              ? new URL(links.site).host
              : '查看原碼'}
        </span>
        <ExternalLinkIcon className="h-4 w-4 flex-none" />
      </p>

      <AnimatePresence>
        {isHovering && (
          <motion.footer
            animate={{ opacity: 1 }}
            className="pointer-events-none absolute -inset-x-4 -inset-y-6 z-30 select-none px-4 py-6 sm:-inset-x-6 sm:rounded-2xl sm:px-6"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            style={{
              WebkitMaskImage: maskBackground,
            }}
          >
            <div className="absolute inset-x-px inset-y-px rounded-2xl border border-dashed border-zinc-900/30 dark:border-zinc-100/20" />
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-dashed border-zinc-900/20 bg-white dark:border-zinc-100/20 dark:bg-zinc-800">
              <div className="h-9 w-9 rounded-full border border-dashed border-zinc-900/40 dark:border-zinc-100/60 dark:bg-zinc-900/20" />
            </div>
            <h2 className="mt-6 text-base font-bold text-zinc-50 [text-shadow:rgb(0,0,0)_-0.5px_0.5px_0px,rgb(0,0,0)_0.5px_0.5px_0px,rgb(0,0,0)_0.5px_-0.5px_0px,rgb(0,0,0)_-0.5px_-0.5px_0px] dark:text-zinc-900 dark:[text-shadow:rgb(255,255,255)_-0.5px_0.5px_0px,rgb(255,255,255)_0.5px_0.5px_0px,rgb(255,255,255)_0.5px_-0.5px_0px,rgb(255,255,255)_-0.5px_-0.5px_0px]">
              {title}
            </h2>
            <p className="mt-2 text-sm text-zinc-600 opacity-50 dark:text-zinc-400">
              {description}
            </p>
          </motion.footer>
        )}
      </AnimatePresence>
    </Card>
  )
}
