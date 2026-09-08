import { error } from '@sveltejs/kit';
import { getBlogPosts, getBlogYears } from '$src/data/blog_posts';
import { prerenderForSearch } from '$lib/prerender.server';
import type { PageServerLoad } from './$types';

export const prerender = prerenderForSearch;

export const load: PageServerLoad = async ({ params }) => {
	const year = Number(params.year);
	const blogYears = getBlogYears();

	if (!blogYears.includes(year)) {
		error(404, { message: 'No blog posts found for this year' });
	}

	const yearBlogPosts = getBlogPosts()
		.filter((post) => post.date?.year === year)
		.toReversed();

	return {
		blogPosts: yearBlogPosts,
		blogYears,
		year
	};
};
