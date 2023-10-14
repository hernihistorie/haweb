import { writable } from 'svelte/store'

/** 
  * writable store for handling a string variable.
  * @type {import('svelte/store').Writable<'cs' | 'en'>}
*/
export const lang = writable('cs')