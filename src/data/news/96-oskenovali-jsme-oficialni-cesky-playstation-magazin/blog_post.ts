import { Temporal } from '@js-temporal/polyfill';

import type { Post } from '$src/types';
import { authors } from '$src/data/authors';
import img01 from "./img/01.jpg?w=1200&format=jpg&imagetools";


const post: Post = {
    published: true,
    id: 96,
    slug: 'oskenovali-jsme-oficialni-cesky-playstation-magazin',
    kind: 'news',
    image: img01,
    title: {
        cs: "Oskenovali jsme Oficiální český PlayStation magazín",
    },
    date: new Temporal.PlainDateTime(2026, 11, 18, 8, 25),
    author: authors.HerniHistorie,
    description_html: "Oskenovali jsme Oficiální český PlayStation magazín První číslo Oficiálního českého PlayStation magazínu vyšlo v květnu 1998. Vydávala ho společnost Art Consulting, která vydávala i časopis Score. Šlo o licencovanou českou mutaci britského Official PlayStation Magazine a za 230 Kč dostali čtenáři ka",
    bufferPostId: '6ae90d2ee5f628f5a0f8999f',
};

export default post;
