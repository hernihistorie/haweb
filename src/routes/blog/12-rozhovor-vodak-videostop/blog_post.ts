import { Temporal } from '@js-temporal/polyfill';

import type { BlogPost } from '$src/types';
import { authors } from '$src/lib/data/authors';

export const blogPost12: BlogPost = {
    id: 12,
    slug: 'rozhovor-vodak-videostop',
    image: '/photos/vodak_blog.jpg',
    title: {
        cs: 'Rozhovor se Zdeňkem Vodákem, autorem hry z pořadu Videostop'
    },
    date: new Temporal.PlainDate(2024, 6, 28),
    author: authors.HerniHistorie,
    description_html: `
        Po asi dvou měsíčním hledáním se nám zadařilo nejen získat kontakt na autora slavné hry z pořadu Videostop, ale také se nám povedlo s ním včera udělat rozhovor a DOKONCE od něj i získat kazetu (nebo přesněji dvě) se samotnou hrou na ZX Spectrum (kterou za nedlouho najdete buď v našem inventáři nebo na cs.speccy).
    `
};
