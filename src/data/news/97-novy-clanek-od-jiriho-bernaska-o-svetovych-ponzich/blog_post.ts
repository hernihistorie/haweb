import { Temporal } from '@js-temporal/polyfill';

import type { Post } from '$src/types';
import { authors } from '$src/data/authors';
import img01 from "./img/01.jpg?w=1200&format=jpg&imagetools";


const post: Post = {
    published: true,
    id: 97,
    slug: 'novy-clanek-od-jiriho-bernaska-o-svetovych-ponzich',
    kind: 'news',
    image: img01,
    title: {
        cs: "️ Nový článek od Jiřího Bernáška o světových ponzích",
    },
    date: new Temporal.PlainDateTime(2026, 11, 25, 8, 25),
    author: authors.HerniHistorie,
    description_html: "️ Nový článek od Jiřího Bernáška o světových ponzích Jiří Bernášek - autor několika článků o československých televizních tenisech - přispěl dalším článkem, tentokrát o světových ponzích.",
    bufferPostId: '6ae9119c90977bcae555714f',
};

export default post;
