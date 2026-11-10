import { Temporal } from "@js-temporal/polyfill";

import type { VideoPost } from "$src/types";
import HerniHistorie from "$src/data/authors/herni-historie/author";

const post: VideoPost = {
    published: true,
    id: 124,
    slug: "retrofest-2024-hrani-fpscore",
    kind: "video",
    title: {
        cs: "Hraní FPSCore",
        en: "Playing FPSCore",
    },
    // Date of the stream
    date: new Temporal.PlainDate(2024, 1, 28),
    author: HerniHistorie,
    description_html: {
        cs: `
            Zahráli jsme si FPSCore, samostatně vydanou modifikaci, včetně mapy s pražským metrem.
        `,
        en: `
            We play FPSCore, a standalone modification, including a map set in the Prague metro.
        `,
    },
    video: {
        youtubeId: "EhB4-9pIbWg",
        duration: 806,
    },
};

export default post;
