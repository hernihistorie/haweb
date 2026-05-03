import { Temporal } from '@js-temporal/polyfill';

import type { BlogPost } from '$src/types';
import { authors } from '$src/data/authors';

const blogPost: BlogPost = {
    published: true,
    id: 87,
    slug: 'vytvorili-jsme-cistici-mechanismus-na-3-5-diskety',
    image: '/photos/blog-posts/vytvorili-jsme-cistici-mechanismus-na-3-5-diskety/vytvorili-jsme-cistici-mechanismus-na-3-5-diskety.jpg',
    title: {
        cs: "Vytvořili jsme čistící mechanismus na 3,5″ diskety",
    },
    date: new Temporal.PlainDateTime(2026, 5, 3, 8, 15),
    author: authors.HerniHistorie,
    description_html: "Vytvořili jsme čistící mechanismus na 3,5″ diskety Stejně jako u 8″ disketovek tak i k 3,5″ disketetám jsme ve spolupráci s Birdbrain vytvořili mechanismus na jejich čištění.",
    bufferPostId: '69f3eb99639a311a400956a2',
};

export default blogPost;
