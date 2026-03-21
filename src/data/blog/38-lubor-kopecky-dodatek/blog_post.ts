import { Temporal } from '@js-temporal/polyfill';

import type { BlogPost } from '$src/types';
import { authors } from '$src/data/authors';

const blogPost: BlogPost = {
    published: true,
    id: 38,
    slug: 'lubor-kopecky-dodatek',
    title: {
        cs: 'Doplňkové otázky k rozhovoru s Luborem Kopeckým, autorem prvních Bulánků'
    },
    date: new Temporal.PlainDate(2025, 2, 4),
    author: authors.HerniHistorie,
    description_html: `
        Lubor Kopecký, s kterým jsme dělali rozhovor před necelýma dvěma lety, jsme se doptali na vzpomínky ohledně prvních Bulánků - jak byli propagovaný, jak autorstvo komunikovalo s komunitou a jakým způsobem ji podporovalo a jaký měla hra úspěch v zahraničí.
    `
};

export default blogPost;
