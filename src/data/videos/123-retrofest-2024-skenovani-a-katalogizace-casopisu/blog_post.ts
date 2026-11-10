import { Temporal } from "@js-temporal/polyfill";

import type { VideoPost } from "$src/types";
import HerniHistorie from "$src/data/authors/herni-historie/author";

const post: VideoPost = {
    published: true,
    id: 123,
    slug: "retrofest-2024-skenovani-a-katalogizace-casopisu",
    kind: "video",
    title: {
        cs: "Skenování a katalogizace časopisů",
        en: "Scanning and Cataloging Magazines",
    },
    // Date of the stream
    date: new Temporal.PlainDate(2024, 1, 28),
    author: HerniHistorie,
    description_html: {
        cs: `
            O herních časopisech, které patřily k prvním věcem, jimž jsme se začali věnovat, a o tom, jak je skenujeme a katalogizujeme.
        `,
        en: `
            On game magazines, one of the first things we started working on, and how we scan and catalog them.
        `,
    },
    video: {
        youtubeId: "Ru1WALY0kkI",
        duration: 1026,
    },
};

export default post;
