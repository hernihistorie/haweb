import { Temporal } from '@js-temporal/polyfill';

import type { BlogPost } from '$src/types';
import { authors } from '$src/data/authors';

const blogPost: BlogPost = {
    published: true,
    id: 31,
    slug: 'citov-dat-kazety',
    image: '/photos/dat_kazety_1.jpg',
    title: {
        cs: 'PROJEKT CÍTOV - Digitalizace DAT kazet'
    },
    date: new Temporal.PlainDate(2024, 12, 2),
    author: authors.HerniHistorie,
    description_html: `
        Povedlo se nám dát dohromady funkční sestavu na zálohování DAT kazet.
    `
};

export default blogPost;
