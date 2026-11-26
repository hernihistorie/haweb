import { eventsBySlug } from "$src/data/events";
import { error, redirect } from "@sveltejs/kit";
import { getPosts } from "$src/data/posts";
import { postHref } from "#lib/posts.js";
import { localizeHref } from "#lib/paraglide/runtime.js";
import { dev } from "$app/env";
import type { PageServerLoad } from "./$types";

// Lists what is published, so it is rendered on demand (scripts/build_search_index.ts
// still adds it to the search index)
export const prerender = false;

export const load: PageServerLoad = async ({ params }) => {
    const event = eventsBySlug[params.event];

    if (!event) {
        error(404, "Event not found");
    }

    // A stream's page covers the whole event
    const stream = getPosts("video").find((post) => post.stream?.event.slug === event.slug);
    if (stream) {
        redirect(301, localizeHref(postHref(stream)));
    }

    const eventPosts = getPosts("video", { includeUnpublished: dev }).filter(
        (post) => post.talk?.event.slug === event.slug,
    );

    return {
        event,
        eventPosts,
    };
};
