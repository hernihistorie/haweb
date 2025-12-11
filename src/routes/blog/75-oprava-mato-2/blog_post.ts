import { Temporal } from '@js-temporal/polyfill';

import type { BlogPost } from '$src/types';

export const blogPost75: BlogPost = {
    id: 75,
    slug: 'oprava-mato-2',
    image: '/photos/blog-posts/mato_2_1.jpg',
    title: {
        cs: 'Opravili jsme herní verzi počítače Maťo'
    },
    date: new Temporal.PlainDate(2025, 10, 31),
    author_name: 'Herní historie',
    description_html: `
        Nějakou dobu nazpět jsme sdíleli příspěvek o našem opraveném Maťovi. Opravili jsme však dva - jeden který má v sobě ROMku s Basicem a druhý s hrami. Počítač úspěšně zprovoznil Lukáš Nevařil a nyní je vedle svého brášky uložen v našem archivu.
    `
};
