import { Temporal } from '@js-temporal/polyfill';

import type { BlogPost } from '$src/types';
import { authors } from '$src/data/authors';

const blogPost: BlogPost = {
    published: true,
    id: 18,
    slug: 'projekt-citov',
    image: '/photos/citov_blogpost.jpg',
    title: {
        cs: 'Úvod k PROJEKTU CÍTOV'
    },
    date: new Temporal.PlainDate(2024, 5, 20),
    author: authors.HerniHistorie,
    description_html: `
        Rádi bychom Vám oznámili nový projekt na kterém se podílíme a který si na začátek vyžaduje drobný historický kontext: Jak jistě víte, tak v 80. letech zde byla relativně rozšířená kultura tzv. počítačových klubů. Jedním takovým klubem byl i počítačový klub z Cítova, který byl spoluzaložen Josefem Havelkou a který fungoval pří místním JZD. Tento klub byl otevřen prakticky každý den, jednou za čas pořádal tzv. „Atari bály" nebo akce pro pedagogy a zároveň vydával vlastní software pro ZX Spectrum a Atari.
    `
};

export default blogPost;
