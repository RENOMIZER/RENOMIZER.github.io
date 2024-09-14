import { obs } from '$lib/current_obs.js'
import { pfps } from '$lib/pfp_list.js'

export function load() {
  return {
    obs,
    pfps
  }
}