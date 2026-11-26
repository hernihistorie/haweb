import { readFile } from "fs/promises";
import { extname, resolve, sep } from "path";
import { error } from "@sveltejs/kit";

const CONTENT_TYPES: Record<string, string> = {
    ".js": "text/javascript",
    ".json": "application/json",
    ".css": "text/css",
};

/** Files named after a hash of their contents, the rest changes with every build */
const IMMUTABLE_EXTENSIONS = [".pf_fragment", ".pf_index", ".pf_meta"];

/**
 * Serves a file of a Pagefind bundle built outside of `vite build`, which therefore can't be a
 * static file.  Routes serving one need `trailingSlash = "ignore"`, since the bundle refers to
 * its files by their exact names.
 */
export async function servePagefindFile(dir: string, file: string): Promise<Response> {
    const root = resolve(dir);
    const path = resolve(root, file);
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
