import { Temporal } from "@js-temporal/polyfill";

import type { VideoPost } from "$src/types";
import HerniHistorie from "$src/data/authors/herni-historie/author";

const post: VideoPost = {
    published: true,
    id: 113,
    slug: "retrofest-2021-talking-heads-capa",
    kind: "video",
    title: {
        cs: "Talking Heads: Čápa",
        en: "Talking Heads: Čápa",
    },
    // Date of the stream
    date: new Temporal.PlainDate(2021, 12, 19),
    author: HerniHistorie,
    description_html: {
        cs: `
            V segmentu Talking Heads se dostává ke slovu Čápa.
        `,
        en: `
            Čápa takes the floor in the Talking Heads segment.
        `,
    },
    video: {
        youtubeId: "44FQp1TYrJo",
        duration: 957,
    },
};

export default post;
