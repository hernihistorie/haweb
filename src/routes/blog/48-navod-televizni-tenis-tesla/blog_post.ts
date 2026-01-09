import { Temporal } from '@js-temporal/polyfill';

import type { BlogPost } from '$src/types';
import { authors } from '$src/lib/data/authors';

export const blogPost48: BlogPost = {
    id: 48,
    slug: 'navod-televizni-tenis-tesla',
    title: {
        cs: 'Oskenovali jsme návod k Televiznímu tenisu z Tesly'
    },
    date: new Temporal.PlainDate(2025, 5, 27),
    author: authors.HerniHistorie,
    description_html: `
        ong byl na počátcích digitálních her defacto synonymem pro videohru - mnoho západních barů a restaurací si pořídilo do svých prostor arkádu a mnozí si pořizovali televizní tenisy do svých domácností. Domácí Pongy se ale nevyráběly jen na Západě, ale i u nás za železnou oponou a to třeba v závodech Tesla Piešťany.
    `
};
