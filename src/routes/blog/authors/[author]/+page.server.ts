import { authorsBySlug } from '$src/data/authors';
import { error } from '@sveltejs/kit';
import { getBlogPosts } from '$src/data/blog_posts';
import { prerenderForSearch } from '$lib/prerender.server';
import type { PageServerLoad } from './$types';

export const prerender = prerenderForSearch;

export const load: PageServerLoad = async ({ params }) => {
	const authorSlug = params.author;
	const author = authorsBySlug[authorSlug];

	if (!author) {
		error(404, {
			message: 'Author not found'
		});
	}

	const authorBlogPosts = getBlogPosts().filter(post => post.author.slug === authorSlug).toReversed();

	return {
		author: author,
		authorBlogPosts: authorBlogPosts
	};
};
