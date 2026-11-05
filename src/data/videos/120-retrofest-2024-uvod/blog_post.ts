import { Temporal } from "@js-temporal/polyfill";

import type { VideoPost } from "$src/types";
import HerniHistorie from "$src/data/authors/herni-historie/author";

const post: VideoPost = {
    published: true,
    id: 120,
    slug: "retrofest-2024-uvod",
    kind: "video",
    title: {
        cs: "Úvod",
        en: "Introduction",
    },
    // Date of the stream
    date: new Temporal.PlainDate(2024, 1, 28),
    author: HerniHistorie,
    description_html: {
        cs: `
            Přivítání na streamu, představení spolku Herní historie a toho, co nás čeká.
        `,
        en: `
            A welcome to the stream, an introduction to the Herní historie association and a look at what's ahead.
        `,
    },
    video: {
        youtubeId: "_Tw5BTebPq8",
        duration: 172,
    },
};

export default post;
