import { Temporal } from '@js-temporal/polyfill';

import type { BlogPost } from '$src/types';
import { authors } from '$src/data/authors';

const blogPost: BlogPost = {
    published: true,
    id: 42,
    slug: 'ondra-pocitace',
    image: '/photos/blog-posts/ondra_1.jpg',
    title: {
        cs: 'Sehnali jsme dva počítače Ondra s nezazálohovanýma hrama!'
    },
    date: new Temporal.PlainDate(2025, 3, 11),
    author: authors.HerniHistorie,
    description_html: `
        Ačkoliv náš archiv obsahuje mnoho strojů, které sehráli měnší či větší roli v rámci československé herní a počítačové historie, tak zde dlouhodobě chyběl zcela zásadní počítač československé výroby - Ondra SPO 186. Nedávno jsme tento nedostatek napravili a nejenže jsme si konečně dva Ondry pořídili, ale dokonce jsme k nim dostali několik kazet s nikde nezazálohovaným softwarem.
    `
};

export default blogPost;
