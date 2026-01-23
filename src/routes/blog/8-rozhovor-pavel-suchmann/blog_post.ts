import { Temporal } from '@js-temporal/polyfill';

import type { BlogPost } from '$src/types';
import { authors } from '$src/data/authors';

const blogPost: BlogPost = {
    published: true,
    id: 8,
    slug: 'rozhovor-pavel-suchmann',
    image: '/photos/pavel_suchmann.jpg',
    title: {
        cs: 'Rozhovor s Pavlem Šuchmannem a Nabídka spolupráce!'
    },
    date: new Temporal.PlainDate(2024, 4, 19),
    author: authors.HerniHistorie,
    description_html: `
        Včera jsme udělali rozhovor s Pavlem Šuchmannem - tvůrcem her na počítač Sharp - ke kterému jsme se dostali skrze blog Herního Archeologa. Povídali jsme si o jeho vzpomínkách na počítačový klub v Kutné Hoře, o studiu na ČVUTu, o revoluci a samozřejmě o jeho hrách a herních zkušenostech. Záznam rozhovoru je dostupný na zažádání.
    `
};

export default blogPost;
