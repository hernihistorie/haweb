import { eventsBySlug } from "$src/data/events";
import { error } from "@sveltejs/kit";
import { getPosts } from "$src/data/posts";
import { prerenderForSearch } from "#lib/prerender.server.js";
import { dev } from "$app/env";
import type { PageServerLoad } from "./$types";

export const prerender = prerenderForSearch;

export const load: PageServerLoad = async ({ params }) => {
    const event = eventsBySlug[params.event];

    if (!event) {
        error(404, "Event not found");
    }

    const eventPosts = getPosts(undefined, { includeUnpublished: dev }).filter(
        (post) => post.talk?.event.slug === event.slug,
    );

    return {
        event,
        eventPosts,
    };
};
