import { Temporal } from '@js-temporal/polyfill';

import type { BlogPost } from '$src/types';

export const blogPost40: BlogPost = {
    id: 40,
    slug: 'efgamp',
    image: '/photos/efgamp.jpg',
    title: {
        cs: 'Stali jsme se členy EFGAMP'
    },
    date: new Temporal.PlainDate(2025, 2, 19),
    author_name: 'Herní historie',
    description_html: `
        Oficiálně oznamujeme, že jsme se stali členy European Federation of Game Archives, Museums and Preservation Projects (EFGAMP), který reprezentuje a propojuje více než 20 evropských institucí a organizací, jež se zaměřují na záchranu evropské herní kultury.
    `
};
