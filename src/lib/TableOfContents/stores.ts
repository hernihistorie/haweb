/*
    Based on skeletonlabs/skeleton
    License: MIT
    URL: https://github.com/skeletonlabs/skeleton/blob/1e3d182fefbaefb89912d57213a2320daf7a87dc/packages/skeleton/src/lib/utilities/TableOfContents/crawler.ts
*/
import { writable } from 'svelte/store';
import type { TOCHeadingLink } from './types.ts';

/** Contains the set of table of contents link data. */
export const tocStore = writable<TOCHeadingLink[]>([]);

/** Contains the ID of the top-most visible heading when scrolling.  */
export const tocActiveId = writable<string>(undefined);