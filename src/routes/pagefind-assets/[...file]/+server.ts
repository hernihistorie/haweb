import { readFile } from "fs/promises";
import { extname, resolve, sep } from "path";
import { error } from "@sveltejs/kit";

export const prerender = false;
// The bundle refers to its files by their exact names
export const trailingSlash = "ignore";

const CONTENT_TYPES: Record<string, string> = {
    ".js": "text/javascript",
    ".json": "application/json",
    ".css": "text/css",
};

/** Files named after a hash of their contents, the rest changes with every build */
const IMMUTABLE_EXTENSIONS = [".pf_fragment", ".pf_index", ".pf_meta"];

/**
 * Serves the index of the collection built by scripts/build_asset_index.ts.  It's rebuilt
 * outside of the deployed image, so it can't be a static file.
 */
export async function GET({ params }) {
    const root = resolve(process.env.ASSET_INDEX_DIR || "asset-index", "current");
    const path = resolve(root, params.file);
    if (!path.startsWith(root + sep)) error(404);

    const contents = await readFile(path).catch(() => error(404));
    const extension = extname(path);
    return new Response(contents, {
        headers: {
            "Content-Type": CONTENT_TYPES[extension] ?? "application/octet-stream",
            "Cache-Control": IMMUTABLE_EXTENSIONS.includes(extension)
                ? "public, max-age=31536000, immutable"
                : "no-cache",
        },
    });
}
