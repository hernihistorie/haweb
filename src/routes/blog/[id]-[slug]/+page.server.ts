import { error, redirect } from '@sveltejs/kit';
import { blogPostsById, allBlogPostsById } from '$src/data/blog_posts';
import { dev } from '$app/environment';
import type { PageServerLoad } from './$types';
import { localizeHref } from '$src/lib/paraglide/runtime';
import { seriesByBlogPostId, seriesBySlug } from '$src/data/series';

export const load: PageServerLoad = async ({ params }) => {
	const lookup = dev ? allBlogPostsById : blogPostsById;
	const blogPost = lookup[Number(params.id)];

	if (!blogPost) {
		error(404, {
			message: 'Blog post not found'
		});		
	}

	const expectedSlug = blogPost.slug;
	if (params.slug !== expectedSlug) {
		return redirect(301, localizeHref(`/blog/${blogPost.id}-${expectedSlug}`));
	}

	const series = seriesByBlogPostId[blogPost.id] || null;

	return {
		blogPost,
		series
	};
};