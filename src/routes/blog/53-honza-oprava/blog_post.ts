import { Temporal } from '@js-temporal/polyfill';

import type { BlogPost } from '$src/types';
import { authors } from '$src/data/authors';

export const blogPost53: BlogPost = {
    id: 53,
    slug: 'honza-oprava',
    image: '/photos/blog-posts/honza_oprava.jpg',
    title: {
        cs: 'Opravujeme počítač HONZA'
    },
    date: new Temporal.PlainDate(2025, 7, 15),
    author: authors.HerniHistorie,
    description_html: `
        Dnes jsme vytáhli náš nerozbalený počítač PC16NB "Honza" s účelem jej repasovat na případné výjezdy nebo jiné účely. Honzu jsme vybalili z letitého kartonu a začali diagnostikovat potenciální problémy, abychom mohli počítač po 35 letech konečně spustit.
    `
};
