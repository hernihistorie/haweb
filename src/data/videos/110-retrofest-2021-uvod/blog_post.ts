import { Temporal } from "@js-temporal/polyfill";

import type { VideoPost } from "$src/types";
import HerniHistorie from "$src/data/authors/herni-historie/author";

const post: VideoPost = {
    published: true,
    id: 110,
    slug: "retrofest-2021-uvod",
    kind: "video",
    title: {
        cs: "Úvod",
        en: "Introduction",
    },
    // Date of the stream
    date: new Temporal.PlainDate(2021, 12, 19),
    author: HerniHistorie,
    description_html: {
        cs: `
            Úvodní slovo k prvnímu ročníku našeho streamu RetroFest.
        `,
        en: `
            The opening of the first edition of our RetroFest stream.
        `,
    },
    video: {
        youtubeId: "DodqomHcngA",
        duration: 362,
    },
};

export default post;
