/*
    Based on skeletonlabs/skeleton
    License: MIT
    URL: https://github.com/skeletonlabs/skeleton/blob/1e3d182fefbaefb89912d57213a2320daf7a87dc/packages/skeleton/src/lib/utilities/TableOfContents/crawler.ts
*/
// Action: Table of Contents Crawler

import slugify from 'slugify';
import { tocStore, tocActiveId } from './stores.ts';
import type { TOCHeadingLink } from './types.ts';

interface TOCCrawlerArgs {
	/** Set generate mode to automatically set heading IDs. */
	mode?: 'generate' | undefined;
	/** Provide query list of elements. Defaults h2-h6. */
	queryElements?: string;
	/** Reload the action when this key value changes. */
	key?: unknown;
	/* Provide a prefix for ToC links, to help keep them unique. */
	prefix?: string;
	/* Provide a suffix for ToC links, to help keep them unique. */
	suffix?: string;
}

export function tocCrawler(node: HTMLElement, args?: TOCCrawlerArgs) {
	let queryElements = 'h2, h3, h4, h5, h6';
	let headings: NodeListOf<HTMLElement> | undefined;
	let permalinks: TOCHeadingLink[] = [];

	function init(): void {
		// Set accepted list of query elements
		// (IMPORTANT: must proceed resetting `headings` below)
		if (args?.queryElements) queryElements = args.queryElements;

		// Reset local values
		headings = node.querySelectorAll(queryElements);
		permalinks = [];

		// Query and process the headings
		queryHeadings();
	}

	function queryHeadings(): void {
		headings?.forEach((elemHeading) => {
			// If heading has ignore attribute, skip it
			if (elemHeading.hasAttribute('data-toc-ignore')) return;
			// If generate mode and heading ID not present, assign one
			if (args?.mode === 'generate' && !elemHeading.id) {
				const newHeadingId = slugify(elemHeading.firstChild?.textContent)
				const prefix = args.prefix ? `${args.prefix}-` : '';
				const suffix = args.suffix ? `-${args.suffix}` : '';
				elemHeading.id = prefix + newHeadingId + suffix;
			}
			// Push heading data to the permalink array
			permalinks.push({
				element: elemHeading.nodeName.toLowerCase(),
				id: elemHeading.id,
				text: elemHeading.firstChild?.textContent?.trim() || ''
			});
		});
		// Set the store with the permalink array
		tocStore.set(permalinks);
	}

	// Listens to scroll event, determines top-most heading, provides that to the `tocActiveId` store
    // Simplified from the Skeleton implementation
	function onWindowScroll(e: WindowEventMap['scroll']): void {
		if (!headings?.length) return;
		const targetElem = document.querySelector('main');
        
        // Iterate backwards
        for (let i = headings.length - 1; i >= 0; i--) {
            const elemHeading = headings[i];
            const headerBoundTop = elemHeading.getBoundingClientRect().top;
            const offsetTop = headerBoundTop;
            // 1 is needed to properly detect target scrolls
            if (offsetTop < 1) return tocActiveId.set(elemHeading.id);
        }
	}

	// Lifecycle
	init();
    addEventListener('scroll', onWindowScroll);

	return {
		update(newArgs: TOCCrawlerArgs) {
			args = newArgs;
			init();
		},
		destroy() {
			
		}
	};
}