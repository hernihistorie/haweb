import { redirect } from "@sveltejs/kit";
import { allPostsById } from "$src/data/posts";
import { postKindHref } from "#lib/posts.js";
import { localizeHref } from "#lib/paraglide/runtime.js";
import type { RequestHandler } from "./$types";

// The blog used to live under /blog; it is now split into /news and /articles.
function newPath(path: string): string {
    const authorMatch = path.match(/^authors\/(.*)$/);
    if (authorMatch) {
        return `/authors/${authorMatch[1]}`;
    }

    // Post URLs are `<id>-<slug>`.  Keep the rest of the path as-is and let the
    // post page redirect to the canonical slug if needed.
    const postMatch = path.match(/^(\d+)-/);
    const post = postMatch ? allPostsById[Number(postMatch[1])] : undefined;
    const kind = post?.kind ?? "news";

    return path ? `${postKindHref(kind)}/${path}` : postKindHref(kind);
}

// Old links may or may not have a trailing slash; redirect both in a single hop
export const trailingSlash = "ignore";

export const GET: RequestHandler = ({ params }) => {
    redirect(301, localizeHref(`${newPath(params.path.replace(/\/$/, ""))}/`));
};
