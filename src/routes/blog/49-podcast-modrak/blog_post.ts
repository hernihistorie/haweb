import { Temporal } from '@js-temporal/polyfill';

import type { BlogPost } from '$src/types';
import { authors } from '$src/lib/data/authors';

export const blogPost49: BlogPost = {
    id: 49,
    slug: 'podcast-modrak',
    image: '/photos/homepage/sbirka.jpg',
    title: {
        cs: 'Předseda našeho spolku byl v Modrák & Friends'
    },
    date: new Temporal.PlainDate(2025, 6, 10),
    author: authors.HerniHistorie,
    description_html: `
        Předseda našeho spolku Vojtěch Straka byl v podcastu Jan Modrák. Zde povídal zejména o počátcích naší herní tvorby u nás a o tom, jak v podnicích jako je Tesla vznikaly československé telvizní tenisy.
    `
};
