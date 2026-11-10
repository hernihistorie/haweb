import { Temporal } from "@js-temporal/polyfill";

import type { VideoPost } from "$src/types";
import HerniHistorie from "$src/data/authors/herni-historie/author";

const post: VideoPost = {
    published: true,
    id: 116,
    slug: "retrofest-2021-talking-heads-jetsy",
    kind: "video",
    title: {
        cs: "Talking Heads: Jetsy",
        en: "Talking Heads: Jetsy",
    },
    // Date of the stream
    date: new Temporal.PlainDate(2021, 12, 19),
    author: HerniHistorie,
    description_html: {
        cs: `
            V segmentu Talking Heads se dostává ke slovu Jetsy.
        `,
        en: `
            Jetsy takes the floor in the Talking Heads segment.
        `,
    },
    video: {
        youtubeId: "ZkHv73QmZOc",
        duration: 1536,
    },
};

export default post;
