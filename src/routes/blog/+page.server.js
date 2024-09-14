import { posts } from '$lib/blog_posts.js'

export function load() {
  return {
    summaries: posts.map(e => ({
      date: e.date,
      title: e.title
    }))
  }
}