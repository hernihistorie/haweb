import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params, data }) => {
    const blogPostComponent = await import(`$src/data/blog/${data.blogPost.id}-${data.blogPost.slug}/+page.svelte`).then(module => module.default);

    return {
        ...data,
        blogPostComponent
    };
}