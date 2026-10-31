import { Temporal } from "@js-temporal/polyfill";

import type { Post } from "$src/types";
import HerniHistorie from "$src/data/authors/herni-historie/author";

const post: Post = {
    published: true,
    id: 27,
    slug: "nabidkovy-katalog",
    kind: "news",
    title: {
        cs: "Oskenovali jsme nabídkový katalog z počátku 90. let",
    },
    date: new Temporal.PlainDate(2024, 9, 20),
    author: HerniHistorie,
    description_html: `
        Nedávno se nám dostala do rukou sbírka návodů (a jiné literatury) pro ZX Spectrum. Mezi těmito návody byl i drobný sešítek nadepsaný "Nabídkový katalog pro počítače ZX SPECTRUM a kompatibilní" z konce roku roku 1990.
    `,
};

export default post;
