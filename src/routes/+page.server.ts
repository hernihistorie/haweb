import { blogPosts } from '$src/data/blog_posts';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const latestBlogPosts = blogPosts.toReversed().slice(0, 3);

	return {
		latestBlogPosts
	};
};
