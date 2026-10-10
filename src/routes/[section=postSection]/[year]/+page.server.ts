import { error } from "@sveltejs/kit";
import { getPosts, getPostYears } from "$src/data/posts";
import { postKindBySection, postKinds } from "#lib/posts.js";
import { prerenderForSearch } from "#lib/prerender.server.js";
import type { PageServerLoad } from "./$types";

export const prerender = prerenderForSearch;

export const load: PageServerLoad = async ({ params }) => {
    const kind = postKindBySection[params.section];
    const year = Number(params.year);
    const years = postKinds[kind].hasYears ? getPostYears(kind) : [];

    if (!years.includes(year)) {
        error(404, "No posts found for this year");
    }

    const posts = getPosts(kind)
        .filter((post) => post.date?.year === year)
        .toReversed();

    return { kind, posts, years, year };
};
