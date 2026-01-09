import { blogPosts } from './blog_posts';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	// Return all blog posts in reverse order (newest first)
	const allBlogPosts = blogPosts.toReversed();

	return {
		blogPosts: allBlogPosts
	};
};
