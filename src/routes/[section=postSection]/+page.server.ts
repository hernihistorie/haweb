import { getListedPosts, getPostYears } from "$src/data/posts";
import { postKindBySection, postKinds } from "#lib/posts.js";
import { dev } from "$app/env";
import type { PageServerLoad } from "./$types";

// Lists what is published, so it is rendered on demand (scripts/build_search_index.ts
// still adds it to the search index)
export const prerender = false;

export const load: PageServerLoad = async ({ params }) => {
    const kind = postKindBySection[params.section];
    const posts = getListedPosts(kind, { includeUnpublished: dev }).toReversed();

    if (!postKinds[kind].hasYears) {
        return { kind, posts, years: null };
    }

    return {
        kind,
        posts: posts.slice(0, 3 * 6),
        years: getPostYears(kind),
    };
};
