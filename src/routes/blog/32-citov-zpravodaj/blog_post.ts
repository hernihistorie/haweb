import { Temporal } from '@js-temporal/polyfill';

import type { BlogPost } from '$src/types';
import { authors } from '$src/data/authors';

const blogPost: BlogPost = {
    published: true,
    id: 32,
    slug: 'citov-zpravodaj',
    title: {
        cs: 'PROJEKT CÍTOV - Skeny cítovského zpravodaje'
    },
    date: new Temporal.PlainDate(2024, 12, 9),
    author: authors.HerniHistorie,
    description_html: `
        Oskenovali jsme počítačový zpravodaj, který vznikal v 80. letech v rámci činnosti cítovského atari klubu.
    `
};

export default blogPost;
