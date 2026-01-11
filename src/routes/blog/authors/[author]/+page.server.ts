import { authorsBySlug } from '$src/data/authors';
import { error } from '@sveltejs/kit';
import { blogPosts } from '../../blog_posts';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const authorSlug = params.author;
	const author = authorsBySlug[authorSlug];

	if (!author) {
		error(404, {
			message: 'Author not found'
		});		
	}

	const authorBlogPosts = blogPosts.filter(post => post.author.slug === authorSlug).toReversed();

	return {
		author: author,
		authorBlogPosts: authorBlogPosts
	};
};
