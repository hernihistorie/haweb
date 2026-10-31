import { error, redirect } from "@sveltejs/kit";
import { dev } from "$app/env";
import { getPostsById, allPostsById } from "$src/data/posts";
import { postHref, postKinds } from "#lib/posts.js";
import { localizeHref } from "$src/lib/paraglide/runtime";
import type { Post } from "$src/types";

/**
 * Looks up the post for a `[section]/[id]-[slug]` route, or its `subpath` subpage.
 * Requests under the wrong section or slug, e.g. an article under /news, are redirected.
 */
export function loadPost(
    params: { section: string; id: string; slug: string },
    subpath = "",
): Post {
    const lookup = dev ? allPostsById : getPostsById();
    const post = lookup[Number(params.id)];

    if (!post) {
        error(404, "Post not found");
    }

    if (params.section !== postKinds[post.kind].section || params.slug !== post.slug) {
        redirect(301, localizeHref(postHref(post) + subpath));
    }

    return post;
}
