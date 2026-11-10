import { Temporal } from "@js-temporal/polyfill";

import type { Post } from "$src/types";
import HerniHistorie from "$src/data/authors/herni-historie/author";
import img01 from "./img/01.jpg?w=1200&format=jpg&imagetools";

const post: Post = {
    published: true,
    id: 106,
    slug: "oskenovali-jsme-oficialni-cesky-playstation-magazin",
    kind: "news",
    image: img01,
    title: {
        cs: "Oskenovali jsme Oficiální český PlayStation magazín",
        en: "We scanned the Official Czech PlayStation Magazine",
    },
    date: new Temporal.PlainDateTime(2026, 11, 18, 8, 25),
    author: HerniHistorie,
    description_html: {
        cs: "Oskenovali jsme Oficiální český PlayStation magazín První číslo Oficiálního českého PlayStation magazínu vyšlo v květnu 1998. Vydávala ho společnost Art Consulting, která vydávala i časopis Score. Celý časopis jsme uveřejnili naskenovaný.",
        en: "The first issue of the Official Czech PlayStation Magazine came out in May 1998. It was published by Art Consulting, which also published Score magazine. We have published scans of the entire magazine.",
    },
    bufferPostId: "6ae90d2ee5f628f5a0f8999f",
};

export default post;
