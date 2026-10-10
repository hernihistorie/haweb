import { getPosts } from "$src/data/posts";
import { postKindList } from "#lib/posts.js";
import { prerenderForSearch } from "#lib/prerender.server.js";
import type { Post, PostKind } from "$src/types";
import type { PageServerLoad } from "./$types";

export const prerender = prerenderForSearch;

export const load: PageServerLoad = async () => {
    const latestPosts = Object.fromEntries(
        postKindList.map((kind) => [kind, getPosts(kind).toReversed().slice(0, 3)]),
    ) as Record<PostKind, Post[]>;

    return {
        latestPosts,
    };
};
