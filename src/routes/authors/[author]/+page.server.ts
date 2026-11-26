import { authorsBySlug } from "$src/data/authors";
import { error } from "@sveltejs/kit";
import { getListedPosts } from "$src/data/posts";
import type { PageServerLoad } from "./$types";

// Lists what is published, so it is rendered on demand (scripts/build_search_index.ts
// still adds it to the search index)
export const prerender = false;

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
