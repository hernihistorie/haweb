import { Temporal } from '@js-temporal/polyfill';

import type { BlogPost } from '$src/types';
import { authors } from '$src/data/authors';

const blogPost: BlogPost = {
    published: true,
    id: 61,
    slug: 'oral-history-cost',
    image: '/photos/blog-posts/cost_1.jpg',
    title: {
        cs: 'Spolupořádáme workshop o Orální historii',
        en: 'We are co-organizing a workshop on Oral History'
    },
    date: new Temporal.PlainDate(2025, 8, 29),
    english_translation_date: new Temporal.PlainDate(2025, 12, 18),
    author: authors.HerniHistorie,
    description_html: {
        cs: `
            Včera a dnes spolupořádáme workshop na půdě FSV věnovaný metodám orální historie. Na něm vystoupilo odbornictvo na Apple II a vývojáře Sierra On-Line Laine Nooney.
        `,
        en: `
            Yesterday and today we are co-organizing a workshop at the Faculty of Social Studies dedicated to oral history methods. The event features Laine Nooney, expert on Apple II and Sierra On-Line developers.
        `
    }
};

export default blogPost;
