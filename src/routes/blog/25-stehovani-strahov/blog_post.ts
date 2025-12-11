import { Temporal } from '@js-temporal/polyfill';

import type { BlogPost } from '$src/types';

export const blogPost25: BlogPost = {
    id: 25,
    slug: 'stehovani-strahov',
    image: '/photos/stehovani_strahov.jpg',
    title: {
        cs: 'Odstěhovali jsme se ze Školíhcího centra na Strahově'
    },
    date: new Temporal.PlainDate(2024, 8, 23),
    author_name: 'Herní historie',
    description_html: `
        Minulý týden jsme konečně odstěhovali poslední věci z našeho (již bývalého) skladu ve strahovském školítku.
    `
};
