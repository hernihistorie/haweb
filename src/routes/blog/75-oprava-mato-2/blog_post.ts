import { Temporal } from '@js-temporal/polyfill';

import type { BlogPost } from '$src/types';
import { authors } from '$src/data/authors';

const blogPost: BlogPost = {
    published: true,
    id: 75,
    slug: 'oprava-mato-2',
    image: '/photos/blog-posts/mato_2_1.jpg',
    title: {
        cs: 'Opravili jsme herní verzi počítače Maťo'
    },
    date: new Temporal.PlainDate(2025, 10, 31),
    author: authors.HerniHistorie,
    description_html: `
        Nějakou dobu nazpět jsme sdíleli příspěvek o našem opraveném Maťovi. Opravili jsme však dva - jeden který má v sobě ROMku s Basicem a druhý s hrami. Počítač úspěšně zprovoznil Lukáš Nevařil a nyní je vedle svého brášky uložen v našem archivu.
    `
};

export default blogPost;
