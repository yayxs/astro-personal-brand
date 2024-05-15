import { CollectionEntry } from 'astro:content'
import { slug as slugger } from 'github-slugger'
import { SITE } from '~/config'
/**
 * posts [                                       
  {                                           
    id: 'adding-new-post.md',                 
    slug: 'vite ssr slug',                    
    body: '',                                 
    collection: 'blog',                       
    data: {                                   
      author: 'vanlee',                       
      pubDatetime: 2024-04-14T16:00:00.000Z,  
      modDatetime: 2024-04-14T16:00:00.000Z,  
      title: 'vite ssr',                      
      slug: 'vite ssr slug',                  
      featured: true,                         
      draft: false,                           
      tags: [Array],                          
      description: 'vite 服务端渲染'               
    },                                        
    render: [AsyncFunction: render]           
  }                                           
]                                             
 */

interface Tag {
  tag: string
  tagName: string
}

const postFilter = (post: CollectionEntry<'blog'>) => {
  // 15 min
  const isPublishTimePassed =
    Date.now() >
    new Date(post.data.pubDatetime).getTime() - SITE.scheduledPostMargin
  return !post.data.draft && (import.meta.env.DEV || isPublishTimePassed)
}

const sluggerStr = (str: string) => slugger(str)

const getUniqueTags = (posts: CollectionEntry<'blog'>[]) => {
  console.log('posts')

  const tags: Tag[] = posts
    .filter(postFilter)
    .flatMap((post) => post.data.tags)
    .map((tag) => ({ tag: sluggerStr(tag), tagName: tag }))

  return tags
}

export default getUniqueTags
