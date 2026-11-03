import { Temporal } from "@js-temporal/polyfill";

import type { Post } from "$src/types";
import HerniHistorie from "$src/data/authors/herni-historie/author";
import img01 from "./img/01.jpg?w=1200&format=jpg&imagetools";

const post: Post = {
    published: true,
    id: 105,
    slug: "vysly-dve-videa-o-historii-ceskoslovenskeho-pongu",
    kind: "news",
    image: img01,
    title: {
        cs: "️Vyšly dvě videa o historii československého pongu",
    },
    date: new Temporal.PlainDateTime(2026, 11, 4, 8, 25),
    author: HerniHistorie,
    description_html:
        "️Vyšly dvě videa o historii československého pongu Předseda našeho spolku Vojtěch Straka vystoupil ve dvou videích od kanálu Tajemno a záhady, kde vypráví o historii vzniku československého tenisu.",
    bufferPostId: "6ae9085d4c60e99c24d46488",
};

export default post;
