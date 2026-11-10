import { Temporal } from "@js-temporal/polyfill";

import type { VideoPost } from "$src/types";
import HerniHistorie from "$src/data/authors/herni-historie/author";

const post: VideoPost = {
    published: true,
    id: 128,
    slug: "retrofest-2024-hrani-unreal-tournamentu-99-s-divaky",
    kind: "video",
    title: {
        cs: "Hraní Unreal Tournamentu 99 s diváky",
        en: "Playing Unreal Tournament 99 with Viewers",
    },
    // Date of the stream
    date: new Temporal.PlainDate(2024, 1, 28),
    author: HerniHistorie,
    description_html: {
        cs: `
            Zahráli jsme si Unreal Tournament 99 společně s diváky streamu.
        `,
        en: `
            We play Unreal Tournament 99 together with the stream's viewers.
        `,
    },
    video: {
        youtubeId: "nqpgn2SkMqw",
        duration: 3736,
    },
};

export default post;
