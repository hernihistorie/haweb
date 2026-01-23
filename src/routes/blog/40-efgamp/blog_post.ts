import { Temporal } from '@js-temporal/polyfill';

import type { BlogPost } from '$src/types';
import { authors } from '$src/data/authors';

const blogPost: BlogPost = {
    published: true,
    id: 40,
    slug: 'efgamp',
    image: '/photos/efgamp.jpg',
    title: {
        cs: 'Stali jsme se členy EFGAMP',
        en: 'We have become a member of EFGAMP'
    },
    date: new Temporal.PlainDate(2025, 2, 19),
    english_translation_date: new Temporal.PlainDate(2025, 12, 18),
    author: authors.HerniHistorie,
    description_html: {
        cs: `
            Oficiálně oznamujeme, že jsme se stali členy European Federation of Game Archives, Museums and Preservation Projects (EFGAMP), který reprezentuje a propojuje více než 20 evropských institucí a organizací, jež se zaměřují na záchranu evropské herní kultury.
        `,
        en: `
            We officially announce that we have become a member of the European Federation of Video Game Archives, Museums and Preservation Projects (EFGAMP), which represents and connects more than 20 European institutions and organizations focused on preserving European gaming culture.
        `
    }
};

export default blogPost;
