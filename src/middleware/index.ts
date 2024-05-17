import { defineMiddleware } from 'astro:middleware'
export const onRequest = defineMiddleware(async (context, next) => {
  console.log('2222222222')
  const response = await next()
  response.headers.set('Content-Type', 'text/html; charset=utf-8')

  return response
})
