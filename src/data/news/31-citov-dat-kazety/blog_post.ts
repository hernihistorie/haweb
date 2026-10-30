import { Temporal } from "@js-temporal/polyfill";

import type { Post } from "$src/types";
import HerniHistorie from "$src/data/authors/herni-historie/author";

const post: Post = {
    published: true,
    id: 31,
    slug: "citov-dat-kazety",
    kind: "news",
    image: "/photos/dat_kazety_1.jpg",
    title: {
        cs: "PROJEKT CÍTOV - Digitalizace DAT kazet",
    },
    date: new Temporal.PlainDate(2024, 12, 2),
    author: HerniHistorie,
    description_html: `
        Povedlo se nám dát dohromady funkční sestavu na zálohování DAT kazet.
    `,
};

export default post;
