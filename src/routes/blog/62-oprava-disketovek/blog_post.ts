import { Temporal } from '@js-temporal/polyfill';

import type { BlogPost } from '$src/types';

export const blogPost62: BlogPost = {
    id: 62,
    slug: 'oprava-disketovek',
    image: '/photos/blog-posts/disketovky_1.jpg',
    title: {
        cs: 'Opravili jsme hromadu 5,25" disketovek'
    },
    date: new Temporal.PlainDate(2025, 9, 2),
    author_name: 'Herní historie',
    description_html: `
        Pro zálohování disket se starými hrami nebo nezazálohovanými daty je v první řadě potřeba mít disketovku. Ačkoliv 5,25" disketovky nejsou zdaleka tak nedostatkové zboží jako ty 8", tak už shání daleko hůře než pár let nazpět.
    `
};
