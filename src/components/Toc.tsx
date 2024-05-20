import { useActiveItem } from '~/hooks/useActiveItem'
import { cn } from '~/utils/cls'
import type { TableOfContents } from '~/utils/toc'

interface TocProps {
  toc: TableOfContents
}

export function DashboardTableOfContents({ toc }: TocProps) {
  // console.log('toc111111111', JSON.stringify(toc, null, 2))
  /**
   * toc111111111 {
  "items": [
    {
      "url": "#features",
      "title": "Features",
      "items": [
        {
          "url": "#documentation",
          "title": "Documentation"
        },
        {
          "url": "#test",
          "title": "test"
        }
      ]
    }
  ]
}
   */

  const itemIds = toc.items
    ? toc.items
        .flatMap((item) => [item.url, item?.items?.map((item) => item.url)])
        .flat()
        .filter(Boolean)
        .map((id) => id?.split('#')[1])
    : []

  console.log('2', itemIds)

  const activeHeading = useActiveItem(itemIds)

  console.log('activeHeading', activeHeading)

  if (!toc?.items) {
    return null
  }
  // [ 'features', 'documentation', 'test' ]

  return (
    <div className="space-y-2">
      <p className="font-medium">On This Page</p>
      <Tree tree={toc} activeItem={activeHeading} />
    </div>
  )
}

interface treeProps {
  tree: TableOfContents
  level?: number
  activeItem?: string | null
}

function Tree({ tree, level = 1, activeItem }: treeProps) {
  console.log('tree comp', tree)
  return tree?.items?.length && level < 3 ? (
    <ul className={cn('m-0 list-none', { 'pl-4': level !== 1 })}>
      {tree.items.map((item, index) => {
        return (
          <li key={index} className={cn('mt-0 pt-2')}>
            <a
              href={item.url}
              className={cn(
                'inline-block no-underline',
                item.url === `#${activeItem}` ? ' font-medium' : 'text-sm ',
              )}
            >
              {item.title}
            </a>
            {item.items?.length ? (
              <>
                <Tree
                  tree={item}
                  level={level + 1}
                  activeItem={activeItem}
                ></Tree>
              </>
            ) : null}
          </li>
        )
      })}
    </ul>
  ) : null
}
