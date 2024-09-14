import { mthoughts } from '$lib/music_thoughts.js'
import { error } from '@sveltejs/kit'

export function load({ params }) {
  const thought = mthoughts.find((thought) => thought.slug === params.slug)

  if (!thought) throw error(404)

  return thought
}