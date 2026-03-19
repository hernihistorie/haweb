import { Temporal } from '@js-temporal/polyfill';

import type { BlogPost } from '$src/types';
import { authors } from '$src/data/authors';

const blogPost: BlogPost = {
    published: true,
    id: 69,
    slug: 'pixelarchiv-zeny',
    image: '/photos/blog-posts/pixelarchiv_zeny.jpg',
    title: {
        cs: 'Příští čtvrtek proběhne akce Pixelarchiv v kině: Ženy v herní kultuře'
    },
    date: new Temporal.PlainDate(2025, 10, 6),
    author: authors.HerniHistorie,
    description_html: `
        Spřátelený projekt Pixelarchiv.cz pořádá příští čtvrtek (9. října) akci věnovanou ženám v herní kultuře. Na toto téma budou u jednoho stolu diskutovat ženy, které se v herní kultuře pohybují – ať už jde o herní vývojářky, manažerky nebo novinářky. O svých zkušenostech promluví ženy různých generací, s rozmanitým zázemím a odlišnými profesními drahami.
    `
};

export default blogPost;
