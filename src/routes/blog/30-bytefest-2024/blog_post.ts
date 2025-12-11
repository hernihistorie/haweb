import { Temporal } from '@js-temporal/polyfill';

import type { BlogPost } from '$src/types';

export const blogPost30: BlogPost = {
    id: 30,
    slug: 'bytefest-2024',
    image: '/photos/prednaska.jpg',
    title: {
        cs: 'Na ByteFestu jsme zachránili hru na ZX Spectrum (mimojiné)'
    },
    date: new Temporal.PlainDate(2024, 11, 1),
    author_name: 'Herní historie',
    description_html: `
        Podobně jako na minulém ByteFestu, tak i na tomto nám byla donesena kazety s nezazálohovanou hrou na ZX Spectru. Tu nám přinesl Martin Kadlcik a z ni se nám povedlo zdigitalizovat hru jménem "das ADLERNEST".
    `
};
