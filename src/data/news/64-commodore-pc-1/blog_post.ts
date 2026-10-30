import { Temporal } from "@js-temporal/polyfill";

import type { Post } from "$src/types";
import HerniHistorie from "$src/data/authors/herni-historie/author";

const post: Post = {
    published: true,
    id: 64,
    slug: "commodore-pc-1",
    kind: "news",
    image: "/photos/blog-posts/commodore_pc_1-1.jpg",
    title: {
        cs: "Opravili jsme Commodore PC-1 (Jen aby se mu hned rozbila disketovka)",
    },
    date: new Temporal.PlainDate(2025, 9, 9),
    author: HerniHistorie,
    description_html: `
        Lukáš Nevařil při své opravovací návštěvě opravil i Commodore PC-1. Mimo to mu přidělal také speaker. Commodore se hned po opravách s námi podíval na EuroPython, kde se mu ale po intenzivním používání rozbila disketovka.
    `,
};

export default post;
