import { Temporal } from '@js-temporal/polyfill';

import type { BlogPost } from '$src/types';

// Auto-discover all blog posts using Vite's glob import
const blogPostModules = import.meta.glob<{ default: BlogPost }>(
	'./*/blog_post.ts',
	{ eager: true }
);

// Extract blog posts from modules and sort by publication date ascending (oldest first)
export const blogPosts: BlogPost[] = Object.values(blogPostModules)
	.map((module) => module.default)
	.filter((post) => post.published)
	.sort((a, b) => {
		if (!a.date) return -1;
		if (!b.date) return 1;
		return Temporal.PlainDate.compare(a.date, b.date);
	});
