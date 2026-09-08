import { error, redirect } from '@sveltejs/kit';
import { getBlogPosts, getBlogPostsById, allBlogPostsById } from '$src/data/blog_posts';
import { dev } from '$app/environment';
import type { EntryGenerator, PageServerLoad } from './$types';
import { localizeHref } from '$src/lib/paraglide/runtime';
import { seriesByBlogPostId, seriesBySlug } from '$src/data/series';

// 'auto': posts that are already published at build time get prerendered (which is what
// pagefind indexes), while posts scheduled for later are rendered on demand once their
// publish time passes.
export const prerender = 'auto';

export const entries: EntryGenerator = () => {
	return getBlogPosts().map((post) => ({ id: String(post.id), slug: post.slug }));
};

export const load: PageServerLoad = async ({ params }) => {
	const lookup = dev ? allBlogPostsById : getBlogPostsById();
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
