import { error } from '@sveltejs/kit';
import { blogPosts, blogYears } from '$src/data/blog_posts';
import type { EntryGenerator, PageServerLoad } from './$types';

export const entries: EntryGenerator = () => {
	return blogYears.map((year) => ({ year: String(year) }));
};

export const load: PageServerLoad = async ({ params }) => {
	const year = Number(params.year);

	if (!blogYears.includes(year)) {
		error(404, { message: 'No blog posts found for this year' });
	}

	const yearBlogPosts = blogPosts
		.filter((post) => post.date?.year === year)
		.toReversed();

	return {
		blogPosts: yearBlogPosts,
		blogYears,
		year
	};
};
