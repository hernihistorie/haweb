import { getPosts } from "$src/data/posts";
import { postKinds } from "#lib/posts.js";
import { loadPost } from "#lib/server/posts.js";
import { dev } from "$app/env";
import type { EntryGenerator, PageServerLoad } from "./$types";
import { seriesByBlogPostId } from "$src/data/series";
import type { Post } from "$src/types";

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
    const post = loadPost(params);

    const series = seriesByBlogPostId[post.id] || null;

    // Neighbouring posts of the same kind, for navigating from one post to the next
    const siblings = getPosts(post.kind, { includeUnpublished: dev });
    const index = siblings.findIndex((sibling) => sibling.id === post.id);
    const summarize = (sibling: Post | undefined) =>
        sibling && { id: sibling.id, slug: sibling.slug, kind: sibling.kind, title: sibling.title };

    // Videos list the other videos in a sidebar instead, newest first
    const related =
        post.kind === "video"
            ? siblings.filter((sibling) => sibling.id !== post.id).toReversed()
            : undefined;

    return {
        post,
        series,
        older: index > 0 ? summarize(siblings[index - 1]) : undefined,
        newer: index >= 0 ? summarize(siblings[index + 1]) : undefined,
        related,
    };
};
