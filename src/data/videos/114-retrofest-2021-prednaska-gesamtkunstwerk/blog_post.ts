import { Temporal } from "@js-temporal/polyfill";

import type { VideoPost } from "$src/types";
import HerniHistorie from "$src/data/authors/herni-historie/author";

const post: VideoPost = {
    published: true,
    id: 114,
    slug: "retrofest-2021-prednaska-gesamtkunstwerk",
    kind: "video",
    title: {
        cs: "Přednáška: Gesamtkunstwerk",
        en: "Talk: Gesamtkunstwerk",
    },
    // Date of the stream
    date: new Temporal.PlainDate(2021, 12, 19),
    author: HerniHistorie,
    description_html: {
        cs: `
            Přednáška s názvem Gesamtkunstwerk.
        `,
        en: `
            A talk titled Gesamtkunstwerk.
        `,
    },
    video: {
        youtubeId: "YDAHmOUrdGU",
        duration: 2846,
    },
};

export default post;
