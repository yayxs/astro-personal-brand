export interface FeatureItem {
  description: string
  icon: string
  title: string
  link?: string
}

export type Site = {
  website: string
  scheduledPostMargin: number
}

export type NavItem = {
  title: string
  href: string
  disabled?: boolean
}

export type MenuItem = NavItem & {
  image?: string
  description?: string
  launched?: boolean
  external?: boolean
  forceReload?: boolean
}

export type SidebarNavItem = {
  title: string
  disabled?: boolean
  external?: boolean
} & (
  | {
      href: string
      items?: never
    }
  | {
      href?: string
      items: MenuItem[]
    }
)
