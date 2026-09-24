import { Temporal } from '@js-temporal/polyfill';

import type { BlogPost } from '$src/types';
import { authors } from '$src/data/authors';
import img01 from "./img/01-cela-sestava.jpg";

const blogPost: BlogPost = {
    published: true,
    id: 91,
    slug: 'prototyp-televiznich-her-z-tesly-vust',
    image: img01,
    title: {
        cs: 'Prototyp Televizních her z Tesly VÚST',
        // en: 'Tesla VÚST'
    },
    date: new Temporal.PlainDate(2026, 9, 27),
    // english_translation_date: new Temporal.PlainDate(2026, 9, 27),
    author: authors.JiriBernasek,
    description_html: {
        cs: `
            TODO TODO TODO TODO 
        `,
        en: `
            TODO TODO TODO TODO 
        `
    }
};

export default blogPost;
