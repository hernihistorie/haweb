import { Temporal } from "@js-temporal/polyfill";

import type { VideoPost } from "$src/types";
import HerniHistorie from "$src/data/authors/herni-historie/author";

const post: VideoPost = {
    published: true,
    id: 115,
    slug: "retrofest-2021-unreal-tournament-99",
    kind: "video",
    title: {
        cs: "Let's Play: Unreal Tournament 99",
        en: "Let's Play: Unreal Tournament 99",
    },
    // Date of the stream
    date: new Temporal.PlainDate(2021, 12, 19),
    author: HerniHistorie,
    description_html: {
        cs: `
            Zahráli jsme si Unreal Tournament 99.
        `,
        en: `
            We play Unreal Tournament 99.
        `,
    },
    video: {
        youtubeId: "eK1Zwsm1kHc",
        duration: 1500,
    },
};

export default post;
