import { Temporal } from '@js-temporal/polyfill';

import type { BlogPost } from '$src/types';
import type { Component } from 'svelte';
import type { SeriesSlug } from './series';
import { isDateInPast, toPlainDateTime } from '$src/lib/datetime';

// Auto-discover all blog posts using Vite's glob import
const blogPostModules = import.meta.glob<{ default: BlogPost }>(
	'./blog/*/blog_post.ts',
	{ eager: true }
);

// Extract blog posts from modules, filter unpublished and future posts,
// and sort by publication date ascending (oldest first)
export const blogPosts: BlogPost[] = Object.values(blogPostModules)
	.map((module) => module.default)
	.filter((post) => post.published)
	.filter((post) => !post.date || isDateInPast(post.date))
	.sort((a, b) => {
		if (!a.date) return -1;
		if (!b.date) return 1;
		return Temporal.PlainDateTime.compare(toPlainDateTime(a.date), toPlainDateTime(b.date));
	});

export const blogPostsById: Record<number, BlogPost> = blogPosts.reduce((acc, post) => {
	acc[post.id] = post;
	return acc;
}, {} as Record<number, BlogPost>);