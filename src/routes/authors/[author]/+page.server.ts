import { authorsBySlug } from "$src/data/authors";
import { error } from "@sveltejs/kit";
import { getListedPosts } from "$src/data/posts";
import { prerenderForSearch } from "#lib/prerender.server.js";
import type { PageServerLoad } from "./$types";

export const prerender = prerenderForSearch;

export const load: PageServerLoad = async ({ params }) => {
    const authorSlug = params.author;
    const author = authorsBySlug[authorSlug];

    if (!author) {
        error(404, "Author not found");
    }

    const authorPosts = getListedPosts()
        .filter((post) => post.author.slug === authorSlug)
        .toReversed();

    return {
        author: author,
        authorPosts,
    };
};
