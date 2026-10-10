import { Temporal } from "@js-temporal/polyfill";

import type { Post } from "$src/types";
import { authors } from "$src/data/authors";

const post: Post = {
    published: true,
    id: 35,
    slug: "citov-josef-havelka",
    kind: "news",
    title: {
        cs: "PROJEKT CÍTOV - Rozhovor s Josefem Havelkou, zakladatelem klubu",
    },
    date: new Temporal.PlainDate(2025, 1, 10),
    author: authors.HerniHistorie,
    description_html: `
        První etapu zpracování věcí z Cítovského klubu bychom rádi zakončili rozhoovorem s jeho zakladatelem Josefem Havelkou. Ten povídá o tom, jak klub vznikl, fungoval a jaké jiné aktivity u něj probíhaly.
    `,
};

export default post;
