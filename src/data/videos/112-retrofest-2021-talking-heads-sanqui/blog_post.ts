import { Temporal } from "@js-temporal/polyfill";

import type { VideoPost } from "$src/types";
import HerniHistorie from "$src/data/authors/herni-historie/author";

const post: VideoPost = {
    published: true,
    id: 112,
    slug: "retrofest-2021-talking-heads-sanqui",
    kind: "video",
    title: {
        cs: "Talking Heads: Sanqui",
        en: "Talking Heads: Sanqui",
    },
    // Date of the stream
    date: new Temporal.PlainDate(2021, 12, 19),
    author: HerniHistorie,
    description_html: {
        cs: `
            V segmentu Talking Heads se dostává ke slovu Sanqui.
        `,
        en: `
            Sanqui takes the floor in the Talking Heads segment.
        `,
    },
    video: {
        youtubeId: "qQ_pUcY0h4g",
        duration: 1416,
    },
};

export default post;
