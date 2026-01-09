import { Temporal } from '@js-temporal/polyfill';

import type { BlogPost } from '$src/types';
import { authors } from '$src/lib/data/authors';

export const blogPost76: BlogPost = {
    id: 76,
    slug: 'oprava-jaguar',
    image: '/photos/blog-posts/oprava-jaguar_1_1.jpg',
    title: {
        cs: 'Opravili jsme naše Atari Jaguary'
    },
    date: new Temporal.PlainDate(2025, 11, 4),
    author: authors.HerniHistorie,
    description_html: `
        Ačkoliv jde o jednu z těch obskurnějších konzolí, tak v naší výjezdové výbavě RetroHerny je dlouho konzole Atari Jaguar. Bohužel oba kousky které vlastníme se nám rozbily a bylo potřeba, aby je opravil šikovný Lukáš Nevařil.
    `
};
