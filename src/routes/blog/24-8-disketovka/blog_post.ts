import { Temporal } from '@js-temporal/polyfill';

import type { BlogPost } from '$src/types';
import { authors } from '$src/data/authors';

const blogPost: BlogPost = {
    published: true,
    id: 24,
    slug: '8-disketovka',
    image: '/photos/8disketovka.jpg',
    title: {
        cs: 'Opravili jsme osmipalcovou disketovku!'
    },
    date: new Temporal.PlainDate(2024, 8, 19),
    author: authors.HerniHistorie,
    description_html: `
        Podařilo se nám sehnat a opravit 8" disketovku! Hurá!
    `
};

export default blogPost;
