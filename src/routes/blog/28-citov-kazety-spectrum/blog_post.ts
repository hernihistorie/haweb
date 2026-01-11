import { Temporal } from '@js-temporal/polyfill';

import type { BlogPost } from '$src/types';
import { authors } from '$src/data/authors';

export const blogPost28: BlogPost = {
    id: 28,
    slug: 'citov-kazety-spectrum',
    title: {
        cs: 'PROJEKT CÍTOV - Kazety s výukovými hrami na ZX Spectrum'
    },
    date: new Temporal.PlainDate(2024, 9, 23),
    author: authors.HerniHistorie,
    description_html: `
        V rámci činnosti Cítovského klubu začal v 90. letech vznikat komerčně distribuovaný výukový software, který právě v současnosti digitalizujeme. První várka tohoto softwaru, kterou se nám povedlo zachránit, je 10 výukových her na ZX Spectrum distribuovaných na kazetách.
    `
};
