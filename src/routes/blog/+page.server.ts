import { getBlogPosts, getBlogYears } from '$src/data/blog_posts';
import { prerenderForSearch } from '$lib/prerender.server';
import type { PageServerLoad } from './$types';

export const prerender = prerenderForSearch;

export const load: PageServerLoad = async () => {
	const latestBlogPosts = getBlogPosts().toReversed().slice(0, 3*6);

	return {
		blogPosts: latestBlogPosts,
		blogYears: getBlogYears()
	};
};
