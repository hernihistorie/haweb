import { Temporal } from '@js-temporal/polyfill';

import type { BlogPost } from '$src/types';
import { authors } from '$src/data/authors';

export const blogPost36: BlogPost = {
    id: 36,
    slug: 'skeny-tipstation',
    image: '/photos/tipstation_casopis.jpg',
    title: {
        cs: 'Časopis TipStation zcela oskenován a doplněn do naší databáze časopisů'
    },
    date: new Temporal.PlainDate(2025, 1, 14),
    author: authors.HerniHistorie,
    description_html: `
        Po nějaké době jsme oskenovali další časopis který zde vycházel. Časopis Tipstation se objevil na trhu v prosinci 2001 a stojí za ním redakce OPSM, která si po úspěchu "Top secret speciálu" zřejmě uvědomila, že na trhu je dostatek místa pro samostatný časopis specializující se na tipy, návody a cheaty do her pro Playstation.
    `
};
