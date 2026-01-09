import { Temporal } from '@js-temporal/polyfill';

import type { BlogPost } from '$src/types';
import { authors } from '$src/lib/data/authors';

export const blogPost47: BlogPost = {
    id: 47,
    slug: 'ceske-arkady',
    image: '/photos/blog-posts/arkady_orna.jpg',
    title: {
        cs: 'Získali jsme dvě arkády české výroby'
    },
    date: new Temporal.PlainDate(2025, 4, 29),
    author: authors.HerniHistorie,
    description_html: `
        Arkádové kabinety pravděpodobně české výroby jsme získali díky spolupráci s Honzou Ornou a jeho skvělým projektem Arcade Hry. Ten určitě nemusíme představovat a jsme rádi, že tak skvělou a veřejně dostupnou sbírku máme v Čechách k dispozici.
    `
};
