import { postKinds } from "#lib/posts.js";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ data }) => {
    const { post } = data;
    const postComponent = await import(
        `$src/data/${postKinds[post.kind].section}/${post.id}-${post.slug}/+page.svelte`
    ).then((module) => module.default);

    return {
        ...data,
        postComponent,
    };
};
