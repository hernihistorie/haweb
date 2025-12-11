import { Temporal } from '@js-temporal/polyfill';

import type { BlogPost } from '$src/types';

export const blogPost32: BlogPost = {
    id: 32,
    slug: 'citov-zpravodaj',
    title: {
        cs: 'PROJEKT CÍTOV - Skeny cítovského zpravodaje'
    },
    date: new Temporal.PlainDate(2024, 12, 9),
    author_name: 'Herní historie',
    description_html: `
        Oskenovali jsme počítačový zpravodaj, který vznikal v 80. letech v rámci činnosti cítovského atari klubu.
    `
};
