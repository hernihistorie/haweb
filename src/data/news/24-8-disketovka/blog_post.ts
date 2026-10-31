import { Temporal } from "@js-temporal/polyfill";

import type { Post } from "$src/types";
import HerniHistorie from "$src/data/authors/herni-historie/author";

const post: Post = {
    published: true,
    id: 24,
    slug: "8-disketovka",
    kind: "news",
    image: "/photos/8disketovka.jpg",
    title: {
        cs: "Opravili jsme osmipalcovou disketovku!",
    },
    date: new Temporal.PlainDate(2024, 8, 19),
    author: HerniHistorie,
    description_html: `
        Podařilo se nám sehnat a opravit 8" disketovku! Hurá!
    `,
};

export default post;
