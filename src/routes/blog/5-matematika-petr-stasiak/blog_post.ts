import { Temporal } from '@js-temporal/polyfill';

import type { BlogPost } from '$src/types';
import { authors } from '$src/data/authors';

export const blogPost5: BlogPost = {
    id: 5,
    slug: 'matematika-petr-stasiak',
    image: '/photos/matematika.jpg',
    title: {
        cs: 'Nově zachráněný program MATEMATIKA od Petra Stasiaka'
    },
    date: new Temporal.PlainDate(2024, 3, 11),
    author: authors.HerniHistorie,
    description_html: `
        Jeden z programů/her, které se nám v rámci digitalizační činnosti spolku povedlo zachránit je výukový program Matematika pro ZX Spectrum/Didaktik/Delta. Program na programoval Petr Stasiak a distribuovala firma Pelos.
    `
};
