import { Temporal } from "@js-temporal/polyfill";

import type { VideoPost } from "$src/types";
import HerniHistorie from "$src/data/authors/herni-historie/author";

const post: VideoPost = {
    published: true,
    id: 111,
    slug: "retrofest-2021-bomberman",
    kind: "video",
    title: {
        cs: "Let's Play: Bomberman",
        en: "Let's Play: Bomberman",
    },
    // Date of the stream
    date: new Temporal.PlainDate(2021, 12, 19),
    author: HerniHistorie,
    description_html: {
        cs: `
            Zahráli jsme si Bombermana.
        `,
        en: `
            We play Bomberman.
        `,
    },
    video: {
        youtubeId: "8ofpYq-ZZPs",
        duration: 549,
    },
};

export default post;
