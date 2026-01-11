import { Temporal } from '@js-temporal/polyfill';

import type { BlogPost } from '$src/types';
import { authors } from '$src/data/authors';

export const blogPost27: BlogPost = {
    id: 27,
    slug: 'nabidkovy-katalog',
    title: {
        cs: 'Oskenovali jsme nabídkový katalog z počátku 90. let'
    },
    date: new Temporal.PlainDate(2024, 9, 20),
    author: authors.HerniHistorie,
    description_html: `
        Nedávno se nám dostala do rukou sbírka návodů (a jiné literatury) pro ZX Spectrum. Mezi těmito návody byl i drobný sešítek nadepsaný "Nabídkový katalog pro počítače ZX SPECTRUM a kompatibilní" z konce roku roku 1990.
    `
};
