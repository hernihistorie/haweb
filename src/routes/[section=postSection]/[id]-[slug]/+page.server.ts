import { error, redirect } from "@sveltejs/kit";
import { getPosts, getPostsById, allPostsById } from "$src/data/posts";
import { postHref, postKinds } from "#lib/posts.js";
import { dev } from "$app/env";
import type { EntryGenerator, PageServerLoad } from "./$types";
import { localizeHref } from "$src/lib/paraglide/runtime";
import { seriesByBlogPostId } from "$src/data/series";

// 'auto': posts that are already published at build time get prerendered (which is what
// pagefind indexes), while posts scheduled for later are rendered on demand once their
// publish time passes.
export const prerender = "auto";

export const entries: EntryGenerator = () => {
    return getPosts().map((post) => ({
        section: postKinds[post.kind].section,
        id: String(post.id),
        slug: post.slug,
    }));
};

export const load: PageServerLoad = async ({ params }) => {
    const lookup = dev ? allPostsById : getPostsById();
    const post = lookup[Number(params.id)];

    if (!post) {
        error(404, "Post not found");
    }

    // Also redirects posts requested under the wrong section, e.g. an article under /news
    if (params.section !== postKinds[post.kind].section || params.slug !== post.slug) {
        return redirect(301, localizeHref(postHref(post)));
    }

    const series = seriesByBlogPostId[post.id] || null;

    return {
        post,
        series,
    };
};
