import { Temporal } from '@js-temporal/polyfill';

import type { BlogPost } from '$src/types';
import { authors } from '$src/data/authors';

const blogPost: BlogPost = {
    published: false,
    id: 83,
    slug: 'vylepseni-magdb',
    image: '/photos/homepage/magaziny.jpg',
    title: {
        cs: 'Udělali jsme novou Databázi herních časopisů'
        },
    date: new Temporal.PlainDate(2026, 3, 4),
    // english_translation_date: new Temporal.PlainDate(2026, 1, 22),
    author: authors.HerniHistorie,
    description_html: {
        cs: `
            Vylepšili jsme naši databázi herních časopisů. Nová databáze má samozřejmě lepší a přehlednější uživatelské rozhraní, ale hlavně v ni najdete odkaz na oskenované časopisy (a to jak od nás, tak od jiných subjektů).
        `
    }
};

export default blogPost;
