import { resolve } from "path";
import { servePagefindFile } from "#lib/server/pagefind.js";

export const prerender = false;
export const trailingSlash = "ignore";

/**
 * Serves the index of the collection built by scripts/build_asset_index.ts.  It's rebuilt
 * outside of the deployed image, so it can't be a static file.
 */
export function GET({ params }) {
    return servePagefindFile(
        resolve(process.env.ASSET_INDEX_DIR || "asset-index", "current"),
        params.file,
    );
}
