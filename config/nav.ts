import { createElement as h } from 'react'
import type { ReactNode } from 'react'

import { FileIcon, HomeIcon, SparkleIcon } from '~/assets'

export interface NavigationItem {
  icon?: ReactNode
  path: string
  subMenu?: NavigationItem[]
  title: string
  type?: string
}

export const navigationItems: NavigationItem[] = [
  {
    icon: h(HomeIcon),
    path: '/',
    title: '首頁',
    type: 'Home',
  },
  {
    icon: h(SparkleIcon),
    path: '/posts',
    subMenu: [
      {
        path: '/timeline',
        title: '生活',
      },
    ],
    title: '部落格',
    type: 'Post',
  },
  {
    icon: h(FileIcon),
    path: '/projects',
    title: '專案',
    type: 'Project',
  },
]
