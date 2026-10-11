import { getPosts } from "$src/data/posts";
import { postKindList } from "#lib/posts.js";
import { getLatestPublishedInterview } from "./interviews/interviews";
import { prerenderForSearch } from "#lib/prerender.server.js";
import { getInventoryStats } from "#lib/server/inventory_stats.js";
import type { Post, PostKind } from "$src/types";
import type { PageServerLoad } from "./$types";

export const prerender = prerenderForSearch;

export const load: PageServerLoad = async () => {
    const latestPosts = Object.fromEntries(
        postKindList.map((kind) => [kind, getPosts(kind).toReversed().slice(0, 3)]),
    ) as Record<PostKind, Post[]>;

    const interview = getLatestPublishedInterview();
    const latestInterview = interview && {
        slug: interview.slug,
        name: interview.narrator.name,
        blurb: interview.blurb,
    };

    return {
        latestPosts,
        latestInterview,
        inventoryStats: await getInventoryStats(),
    };
};
