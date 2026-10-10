import { Temporal } from "@js-temporal/polyfill";

import type { Post } from "$src/types";
import { authors } from "$src/data/authors";

const post: Post = {
    published: true,
    id: 16,
    slug: "ops2-magazin",
    kind: "news",
    title: {
        cs: "PlayStation2 Oficiální magazín oskenován a doplněn do Databáze časopisů",
    },
    date: new Temporal.PlainDate(2024, 7, 19),
    author: authors.HerniHistorie,
    description_html: `
        Minulý týden jsme doplnili do naší databáze časopisů všechna čísla "PlayStation2 OFICIÁLNÍ MAGAZÍN" a jeho skeny jsme zároveň nahráli na Internet archive, kde si je můžete prohlédnout.
    `,
};

export default post;
