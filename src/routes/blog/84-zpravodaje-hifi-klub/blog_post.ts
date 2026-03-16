import { Temporal } from '@js-temporal/polyfill';

import type { BlogPost } from '$src/types';
import { authors } from '$src/data/authors';

const blogPost: BlogPost = {
    published: true,
    id: 84,
    slug: 'zpravodaje-hifi-klub',
    image: '/photos/blog-posts/zpravodaje_hifi.jpg',
    title: {
        cs: 'Zdigitalizovali jsme zpravodaje pražského Hi-Fi klubu',
        en: 'We digitized journals of the Prague Hi-Fi club'
        },
    date: new Temporal.PlainDate(2026, 3, 16),
    english_translation_date: new Temporal.PlainDate(2026, 3, 16),
    author: authors.HerniHistorie,
    description_html: {
        cs: `
            Nějakou dobu nezpět jsme k digitalizaci dostali zapůjčené zpravodaje pražského Hi-Fi klubu z let 1972-1997. Díky zaměření na spotřební elektroniku obsahuje občas zajímavé postřehy o výpočetní technice a zároveň hrál klub malou roli v prehistorii televizních her u nás.
        `,
        en: `
            Some time ago, we received on loan for digitization the journals of the Prague Hi-Fi club from 1972-1997. Thanks to its focus on consumer electronics, it occasionally contains interesting observations about computing technology, and the club also played a small role in the prehistory of video games in Czechoslovakia.
        `
    }
};

export default blogPost;
