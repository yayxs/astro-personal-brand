import * as React from 'react'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from '~/components/ui/NavigationMenu'
import { navMenuConfig } from '~/config/navMenu'
import type { MenuItem } from '~/types'
import { cn } from '~/utils/cls'

const html = navMenuConfig.htmlNav[0]
const css = navMenuConfig.cssNav[0]

export function MainNavigationMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>{html.title}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {html.items?.map((item) => (
                <ListItem key={item.title} {...item} />
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>{css.title}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {css.items?.map((item) => (
                <ListItem key={item.title} {...item} />
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem: React.FC<MenuItem> = ({
  title,
  href,
  description,
  launched,
  disabled,
  external,
  forceReload,
}) => {
  const target = external ? '_blank' : undefined
  return (
    <li>
      <a
        href={disabled ? undefined : href}
        className={cn(
          'hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors',
        )}
      >
        <div className="flex items-center text-sm font-medium leading-none">
          <span className="mr-2">{title}</span>
        </div>
        <p className="line-clamp-2 text-sm leading-snug">{description}</p>
      </a>
    </li>
  )
}

ListItem.displayName = 'ListItem'
