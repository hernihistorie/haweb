import { Temporal } from "@js-temporal/polyfill";

import type { Post } from "$src/types";
import HerniHistorie from "$src/data/authors/herni-historie/author";

const post: Post = {
    published: true,
    id: 17,
    slug: "rozhovor-vladimir-bezdek",
    kind: "news",
    image: "/photos/vladimir_bezdek_blogpost.jpg",
    title: {
        cs: "Rozhovor s Vladimírem Bezděkem st., autorem pořadu Videostop",
    },
    date: new Temporal.PlainDate(2024, 7, 15),
    author: HerniHistorie,
    description_html: `
        Vzhledem k tomu, že už máme za sebou digitalizaci hry z pořadu ,,Videostop" i rozhovor s autorem hry z pořadu ,,Videostop", tak jsme to třetice všeho dobrého i zlého udělali rozhovor i se samotným vynálezcem pořadu, Vladimírem Bezděkem. Ten v rozhovoru povídal zejména o tom, jak probíhalo natáčení pořadu, jak přišel k samotnému jeho konceptu apod.
    `,
};

export default post;
