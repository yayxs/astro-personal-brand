import type { CollectionEntry } from 'astro:content'
import { slugifyStr } from '~/utils/slugify'

export interface Props {
  href?: string
  frontmatter: CollectionEntry<'blog'>['data']
  secHeading?: boolean
}
export default function Card({ href, frontmatter, secHeading = true }: Props) {
  const { title, pubDatetime, modDatetime, description } = frontmatter

  const props = {
    className: 'text-lg font-medium decoration-dashed hover:underline',
  }

  return (
    <li className="my-6">
      <a
        href={href}
        className="inline-block text-lg font-medium decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0"
      >
        {secHeading ? <h2 {...props}>{title}</h2> : <h3 {...props}>{title}</h3>}
      </a>
      <p>{description}</p>
    </li>
  )
}
