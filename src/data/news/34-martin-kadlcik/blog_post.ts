import { Temporal } from "@js-temporal/polyfill";

import type { Post } from "$src/types";
import HerniHistorie from "$src/data/authors/herni-historie/author";

const post: Post = {
    published: true,
    id: 34,
    slug: "martin-kadlcik",
    kind: "news",
    title: {
        cs: "Rozhovor s Martinem Kadlčíkem, autorem hry das ADLERNEST",
    },
    date: new Temporal.PlainDate(2024, 12, 27),
    author: HerniHistorie,
    description_html: `
        Po záchraně hry das ADLERNEST na ZX Spectrum jsme položili jeho autorovi - Martinu Kadlčíkovi - i několik otázek ohledně toho, jak hru tvořil, jak se k hrám a počítačům vůbec dostal a co dělá v současnosti.
    `,
};

export default post;
