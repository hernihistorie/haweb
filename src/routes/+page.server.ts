import { getListedPosts } from "$src/data/posts";
import { postKindList } from "#lib/posts.js";
import { getLatestPublishedInterview } from "./interviews/interviews";
import { getInventoryStats, getMagazineStats } from "#lib/server/inventory_stats.js";
import type { Post, PostKind } from "$src/types";
import type { PageServerLoad } from "./$types";

// Lists what is published, so it is rendered on demand (scripts/build_search_index.ts
// still adds it to the search index)
export const prerender = false;

export const load: PageServerLoad = async () => {
    const latestPosts = Object.fromEntries(
        postKindList.map((kind) => [kind, getListedPosts(kind).toReversed().slice(0, 3)]),
    ) as Record<PostKind, Post[]>;

    const interview = getLatestPublishedInterview();
    const latestInterview = interview && {
        slug: interview.slug,
        name: interview.narrator.name,
        blurb: interview.blurb,
    };

    const [inventoryStats, magazineStats] = await Promise.all([
        getInventoryStats(),
        getMagazineStats(),
    ]);

    return {
        latestPosts,
        latestInterview,
        inventoryStats,
        magazineStats,
    };
};
