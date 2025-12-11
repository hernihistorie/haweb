import { Temporal } from '@js-temporal/polyfill';

import type { BlogPost } from '$src/types';

export const blogPost61: BlogPost = {
    id: 61,
    slug: 'oral-history-cost',
    image: '/photos/blog-posts/cost_1.jpg',
    title: {
        cs: 'Spolupořádáme workshop o Orální historii'
    },
    date: new Temporal.PlainDate(2025, 8, 29),
    author_name: 'Herní historie',
    description_html: `
        Včera a dnes spolupořádáme workshop na půdě FSV věnovaný metodám orální historie. Na něm vystoupilo odbornictvo na Apple II a vývojáře Sierra On-Line Laine Nooney.
    `
};
