import { Temporal } from "@js-temporal/polyfill";

import type { StreamPost } from "$src/types";
import HerniHistorie from "$src/data/authors/herni-historie/author";
import retrofest2021 from "$src/data/events/retrofest-2021/event";
import part1 from "../110-retrofest-2021-uvod/blog_post";
import part2 from "../111-retrofest-2021-bomberman/blog_post";
import part3 from "../112-retrofest-2021-talking-heads-sanqui/blog_post";
import part4 from "../113-retrofest-2021-talking-heads-capa/blog_post";
import part5 from "../114-retrofest-2021-prednaska-gesamtkunstwerk/blog_post";
import part6 from "../115-retrofest-2021-unreal-tournament-99/blog_post";
import part7 from "../116-retrofest-2021-talking-heads-jetsy/blog_post";
import part8 from "../117-retrofest-2021-odhaleni-projektu-herni-archiv/blog_post";
import part9 from "../118-retrofest-2021-legie/blog_post";

const post: StreamPost = {
    published: true,
    id: 109,
    slug: "retrofest-2021",
    kind: "video",
    title: "RetroFest 2021",
    // Date of the stream
    date: new Temporal.PlainDate(2021, 12, 19),
    author: HerniHistorie,
    description_html: {
        cs: `
            Záznam prvního ročníku našeho nepravidelného streamu RetroFest s hraním her, rozhovory a odhalením projektu Herní archiv.
        `,
        en: `
            A recording of the first edition of our occasional RetroFest stream, with games, conversations and the unveiling of the Czechoslovak Game Archive.
        `,
    },
    stream: {
        event: retrofest2021,
        parts: [part1, part2, part3, part4, part5, part6, part7, part8, part9],
    },
};

export default post;
