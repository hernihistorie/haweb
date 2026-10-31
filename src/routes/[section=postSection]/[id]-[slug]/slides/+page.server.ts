import { error } from "@sveltejs/kit";
import { getPosts } from "$src/data/posts";
import { hasSlidesViewer, postKinds } from "#lib/posts.js";
import { loadPost } from "#lib/server/posts.js";
import type { EntryGenerator, PageServerLoad } from "./$types";

export const prerender = "auto";

export const entries: EntryGenerator = () => {
    return getPosts()
        .filter((post) => hasSlidesViewer(post.talk))
        .map((post) => ({
            section: postKinds[post.kind].section,
            id: String(post.id),
            slug: post.slug,
        }));
};

export const load: PageServerLoad = async ({ params }) => {
    const post = loadPost(params, "/slides");

    if (!post.talk?.slides || !hasSlidesViewer(post.talk)) {
        error(404, "This post has no slides");
    }

    return { post, slides: post.talk.slides };
};
