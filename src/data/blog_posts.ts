import { Temporal } from '@js-temporal/polyfill';

import type { BlogPost } from '$src/types';
import { isDateInPast, toPlainDateTime } from '$src/lib/datetime';

// Auto-discover all blog posts using Vite's glob import
const blogPostModules = import.meta.glob<{ default: BlogPost }>(
	'./blog/*/blog_post.ts',
	{ eager: true }
);

// All blog posts, including unpublished and future ones,
// sorted by publication date ascending (oldest first)
const allBlogPosts: BlogPost[] = Object.values(blogPostModules)
	.map((module) => module.default)
	.sort((a, b) => {
		if (!a.date) return -1;
		if (!b.date) return 1;
		return Temporal.PlainDateTime.compare(toPlainDateTime(a.date), toPlainDateTime(b.date));
	});

// The published set depends on the current time, so it has to be computed per request.
export function getBlogPosts(): BlogPost[] {
	return allBlogPosts
		.filter((post) => post.published)
		.filter((post) => !post.date || isDateInPast(post.date));
}

export function getBlogPostsById(): Record<number, BlogPost> {
	return getBlogPosts().reduce((acc, post) => {
		acc[post.id] = post;
		return acc;
	}, {} as Record<number, BlogPost>);
}

// All blog posts including unpublished/future, for dev preview
export const allBlogPostsById: Record<number, BlogPost> = allBlogPosts
	.reduce((acc, post) => {
		acc[post.id] = post;
		return acc;
	}, {} as Record<number, BlogPost>);

export function getBlogYears(): number[] {
	return [...new Set(
		getBlogPosts()
			.filter((post) => post.date)
			.map((post) => post.date!.year)
	)].sort((a, b) => b - a);
}
