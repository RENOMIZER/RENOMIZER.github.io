import { posts } from '$lib/blog_posts.js'
import { error } from '@sveltejs/kit'

export function load({ params }) {
  const post = posts.find((post) => post.date === params.date)

  if (!post) throw error(404)

  return post
}