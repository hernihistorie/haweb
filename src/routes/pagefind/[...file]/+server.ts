import { servePagefindFile } from "#lib/server/pagefind.js";

export const prerender = false;
export const trailingSlash = "ignore";

/**
 * Serves the index of the website built by scripts/build_search_index.ts.  It's built after
 * `vite build`, whose server only serves the static files it was built with.
 */
export function GET({ params }) {
    return servePagefindFile("build/search-index", params.file);
}
