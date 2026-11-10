import { Temporal } from "@js-temporal/polyfill";

import type { VideoPost } from "$src/types";
import HerniHistorie from "$src/data/authors/herni-historie/author";

const post: VideoPost = {
    published: true,
    id: 122,
    slug: "retrofest-2024-hrani-bulanku",
    kind: "video",
    title: {
        cs: "Hraní Bulánků",
        en: "Playing Bulánci",
    },
    // Date of the stream
    date: new Temporal.PlainDate(2024, 1, 28),
    author: HerniHistorie,
    description_html: {
        cs: `
            Poměřili jsme síly v Buláncích.
        `,
        en: `
            We face off in Bulánci.
        `,
    },
    video: {
        youtubeId: "AhDkeZb1E7o",
        duration: 902,
    },
};

export default post;
