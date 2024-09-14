import { gthoughts } from '$lib/game_thoughts.js'
import { error } from '@sveltejs/kit'

export function load({ params }) {
  const thought = gthoughts.find((thought) => thought.slug === params.slug)

  if (!thought) throw error(404)

  return thought
}