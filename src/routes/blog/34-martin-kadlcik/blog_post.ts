import { Temporal } from '@js-temporal/polyfill';

import type { BlogPost } from '$src/types';

export const blogPost34: BlogPost = {
    id: 34,
    slug: 'martin-kadlcik',
    title: {
        cs: 'Rozhovor s Martinem Kadlčíkem, autorem hry das ADLERNEST'
    },
    date: new Temporal.PlainDate(2024, 12, 27),
    author_name: 'Herní historie',
    description_html: `
        Po záchraně hry das ADLERNEST na ZX Spectrum jsme položili jeho autorovi - Martinu Kadlčíkovi - i několik otázek ohledně toho, jak hru tvořil, jak se k hrám a počítačům vůbec dostal a co dělá v současnosti.
    `
};
