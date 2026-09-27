import { Temporal } from '@js-temporal/polyfill';

import type { BlogPost } from '$src/types';
import { authors } from '$src/data/authors';
import img01 from "./img/01.jpg?w=1200&format=jpg&imagetools";


const blogPost: BlogPost = {
    published: true,
    id: 93,
    slug: 'zverejnili-jsme-rozhovor-a-hry-petra-tucka',
    image: img01,
    title: {
        cs: "Zveřejnili jsme rozhovor a hry Petra Tučka",
        en: "We published an interview with Petr Tuček and his games",
    },
    date: new Temporal.PlainDateTime(2026, 10, 7, 8, 25),
    author: authors.HerniHistorie,
    description_html: {
        cs: "Petr Tuček - narozen roku 1970 v Praze - je tvůrce několika drobných her pro ZX Spectrum z konce 80. let, které jsme v roce 2026 všechny zazálohovali. Rozhovor i samotné hry jsme zveřejnili na našem webu.",
        en: "Petr Tuček - born in 1970 in Prague - is the creator of several small ZX Spectrum games from the late 1980s, all of which we preserved in 2026. We have published both the interview and the games themselves on our website.",
    },
    bufferPostId: '6ab8f916ef37019c7f7eefff',
};

export default blogPost;
