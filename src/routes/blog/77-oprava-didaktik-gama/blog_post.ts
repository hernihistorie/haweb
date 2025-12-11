import { Temporal } from '@js-temporal/polyfill';

import type { BlogPost } from '$src/types';

export const blogPost77: BlogPost = {
    id: 77,
    slug: 'oprava-didaktik-gama',
    image: '/photos/blog-posts/oprava-gama_1.jpg',
    title: {
        cs: 'Opravili jsme počítač Didaktik Gama'
    },
    date: new Temporal.PlainDate(2025, 11, 7),
    author_name: 'Herní historie',
    description_html: `
        Ačkoliv je v naší sbírce Didaktiků Gama a Didaktiků M celá řada, tak smutnou pravdou je, že většina z nich se k nám dostala již v nefunkčním stavu. Proto jsme rádi, že Lukáš Nevařil při své návštěvě začal naše Didaktiky opravovat. Toto je jeden z nich.
    `
};
