import { Temporal } from '@js-temporal/polyfill';

import type { BlogPost } from '$src/types';
import { authors } from '$src/data/authors';

export const blogPost70: BlogPost = {
    id: 70,
    slug: 'pong-mas601-pod-mikroskopem',
    image: '/photos/pong/blog-post-2/01-vybaleny-MAS601.jpg',
    title: {
        cs: 'Obvody MAS601-603 pro televizní hry pod mikroskopem'
    },
    date: new Temporal.PlainDate(2025, 10, 14),
    author: authors.JiriBernasek,
    description_html: `
        V minulém článku jsme si představili zvenku i zevnitř televizní hru XD-8001, kterou od roku 1979 vyráběla Piešťanská Tesla. Hra je založena na specializovaných čipech MAS601-603, navržených a vyráběných přímo v Piešťanech, což je v rámci tehdejšího východního bloku herní unikát, a i ve světovém měřítku vzácnost. Tento článek je určen pro obzvláště zvídavého a trpělivého čtenáře, neboť půjdeme ještě hlouběji: Nahlédneme přímo do vnitřní struktury zmíněných čipů a pokusíme se rozluštit jejich fungování.
    `
};
