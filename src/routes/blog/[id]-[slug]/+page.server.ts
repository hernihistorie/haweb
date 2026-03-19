import { error, redirect } from '@sveltejs/kit';
import { blogPostsById } from '$src/data/blog_posts';
import type { PageServerLoad } from './$types';
import { localizeHref } from '$src/lib/paraglide/runtime';

export const load: PageServerLoad = async ({ params }) => {
	const blogPost = blogPostsById[Number(params.id)];

	if (!blogPost) {
		error(404, {
			message: 'Blog post not found'
		});		
	}

	const expectedSlug = blogPost.slug;
	if (params.slug !== expectedSlug) {
		return redirect(301, localizeHref(`/blog/${blogPost.id}-${expectedSlug}`));
	}

	// TODO handle series

	return {
		blogPost
	};
};