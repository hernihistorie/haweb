import { Temporal } from '@js-temporal/polyfill';

import type { BlogPost } from '$src/types';
import { authors } from '$src/data/authors';

const blogPost: BlogPost = {
    published: true,
    id: 81,
    slug: 'digitalizace-psm2',
    image: '/photos/blog-posts/psm2_magazin.jpg',
    title: {
        cs: 'Zdigitalizovali jsme celý časopis PSM2'
        },
    date: new Temporal.PlainDate(2026, 2, 11),
    // english_translation_date: new Temporal.PlainDate(2026, 1, 22),
    author: authors.HerniHistorie,
    description_html: {
        cs: `
            PSM2 u nás začal vycházet v únoru 2002 ve stejném vydavatelství jako Oficiální PS Magazín a Score. Šéfredaktor byl, stejně jako v OPSM, Jan Bludr Modrák. Cena byla 99Kč, ale chyběl demodisk. PSM2 vyšlo jen 16 čísel, poslední v květnu 2003. Celý časopis jsme zdigitalizovali
        `
    }
};

export default blogPost;
