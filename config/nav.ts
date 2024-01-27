import type { ReactNode } from 'react';

import { createElement as h } from 'react';

import { MoonIcon } from '~/assets';

export interface NavigationItem {
  icon?: ReactNode;
  path: string;
  subMenu?: NavigationItem[];
  title: string;
  type?: string;
}

export const navigationItems: NavigationItem[] = [
  {
    icon: h(MoonIcon),
    path: '/',
    title: '首頁',
    type: 'Home',
  },
  {
    icon: h(MoonIcon),
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
    path: '/projects',
    title: '專案',
    type: 'Project',
  },
];
