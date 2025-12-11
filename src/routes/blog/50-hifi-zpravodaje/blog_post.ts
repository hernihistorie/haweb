import { Temporal } from '@js-temporal/polyfill';

import type { BlogPost } from '$src/types';

export const blogPost50: BlogPost = {
    id: 50,
    slug: 'hifi-zpravodaje',
    image: '/photos/blog-posts/hifi_zpravodaje.jpg',
    title: {
        cs: 'Digitalizujeme zpravodaje pražského HiFi klubu'
    },
    date: new Temporal.PlainDate(2025, 6, 13),
    author_name: 'Herní historie',
    description_html: `
        K digitalizaci jsme dostali zapůjčenou slušnou hromádku zpravodajů pražského HiFi klubu z let 1972-1997. Přestože s hrami příliš nesouvisí, je to i tak zajímavý a vzácný materiál. Díky zaměření na spotřební elektroniku obsahuje občas zajímavé postřehy o výpočetní technice a zároveň hrál klub malou roli v prehistorii televizních her u nás.
    `
};
