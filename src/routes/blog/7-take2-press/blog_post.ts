import { Temporal } from '@js-temporal/polyfill';

import type { BlogPost } from '$src/types';
import { authors } from '$src/data/authors';

export const blogPost7: BlogPost = {
    id: 7,
    slug: 'take2-press',
    image: '/photos/mafia_poster.jpg',
    title: {
        cs: 'Dumpy press CD firmy Take2'
    },
    date: new Temporal.PlainDate(2024, 4, 1),
    author: authors.HerniHistorie,
    description_html: `
        Nedávno jsme se dostali k CDčkám z daleké Austrálie s press materiály firmy Take 2. Kromě materiálů k hrám jako je např. Tropico mezi nima byly věci k českým klasikám Mafia a Vietcong!
    `
};
