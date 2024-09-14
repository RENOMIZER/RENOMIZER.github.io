import { mthoughts } from '$lib/music_thoughts.js'
import { gthoughts } from '$lib/game_thoughts.js'

export function load() {
  return {
    mthoughts: mthoughts.map(e => ({
      slug: e.slug,
      title: e.title
    })),
    gthoughts: gthoughts.map(e => ({
      slug: e.slug,
      title: e.title
    }))
  }
}