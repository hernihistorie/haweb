import { Temporal } from '@js-temporal/polyfill';

import type { BlogPost } from '$src/types';
import { authors } from '$src/lib/data/authors';

export const blogPost14: BlogPost = {
    id: 14,
    slug: 'zaznam-retrofestu-2024',
    image: '/photos/stream_2024.jpg',
    title: {
        cs: 'Záznam streamu Herní historie: RetroFest 2024'
    },
    date: new Temporal.PlainDate(2024, 7, 5),
    author: authors.HerniHistorie,
    description_html: `
        Už skoro před půl rokem (ten čas letí) jsme pořádali náš nepravidelný stream RetroFest, na kterém jsme oznamovali novinky ohledně naší činnosti a zároveň jsme si zahráli i nějaké RetroHry. Konečně jsme se dostali k sestříhání tohoto stremu, který celý najdete zde.
    `
};
