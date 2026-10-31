import { getPosts, getPostYears } from "$src/data/posts";
import { postKindBySection, postKinds } from "#lib/posts.js";
import { prerenderForSearch } from "#lib/prerender.server.js";
import { dev } from "$app/env";
import type { PageServerLoad } from "./$types";

export const prerender = prerenderForSearch;

export const load: PageServerLoad = async ({ params }) => {
    const kind = postKindBySection[params.section];
    const posts = getPosts(kind, { includeUnpublished: dev }).toReversed();

    if (!postKinds[kind].hasYears) {
        return { kind, posts, years: null };
    }

    return {
        kind,
        posts: posts.slice(0, 3 * 6),
        years: getPostYears(kind),
    };
};
