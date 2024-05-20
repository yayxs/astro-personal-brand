import type { Site } from './types'

export const SITE: Site = {
  website: '', // replace this with your deployed domain

  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
}

export const docsConfig = {
  mainNav: [],
  sidebarNav: [
    {
      title: '快速开始',
      items: [
        {
          title: '介绍',
          href: '/docs/getting-started/',
        },
      ],
    },
  ],
}
