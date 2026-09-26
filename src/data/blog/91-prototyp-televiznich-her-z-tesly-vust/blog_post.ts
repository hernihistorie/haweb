import { Temporal } from '@js-temporal/polyfill';

import type { BlogPost } from '$src/types';
import { authors } from '$src/data/authors';
import img01 from "./img/01-cela-sestava.jpg?w=1600;800&enhanced";


const blogPost: BlogPost = {
    published: true,
    id: 91,
    slug: 'prototyp-televiznich-her-z-tesly-vust',
    image: img01,
    title: {
        cs: 'Prototyp Televizních her z Tesly VÚST',
        en: 'Television game prototype from Czechoslovak Tesla VÚST'
    },
    date: new Temporal.PlainDateTime(2026, 9, 26, 14, 0),
    // english_translation_date: new Temporal.PlainDate(2026, 9, 27),
    author: authors.JiriBernasek,
    description_html: {
        cs: `
             V roce 1977 zažilo Československo příchod atraktivní novinky - takzvaných Televizních her. V tomto článku se zaměříme na přístroj TV HRY od Tesly VÚST, nejpokročilejší dobovou tuzemskou hru a dnes patřící mezi nejstarší dochované. Bez využití mikroprocesoru nebo herního čipu nabízí čtyři hry na motivy pongu.
        `,
        en: `
            In 1977, Czechoslovakia saw the arrival of an exciting novelty - the so-called Television games. In this article we focus on the TV HRY machine from Tesla VÚST, the most advanced contemporary local game and today one of the oldest surviving. Without the use of a microprocessor or game chip it offers four pong-like games.
        `
    }
};

export default blogPost;
