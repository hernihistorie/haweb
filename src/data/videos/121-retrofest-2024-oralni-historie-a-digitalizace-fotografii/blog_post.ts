import { Temporal } from "@js-temporal/polyfill";

import type { Post } from "$src/types";
import HerniHistorie from "$src/data/authors/herni-historie/author";

const post: Post = {
    published: true,
    id: 121,
    slug: "retrofest-2024-oralni-historie-a-digitalizace-fotografii",
    kind: "video",
    title: {
        cs: "Orální historie a digitalizace fotografií",
        en: "Oral History and Digitizing Photographs",
    },
    // Date of the stream
    date: new Temporal.PlainDate(2024, 1, 28),
    author: HerniHistorie,
    description_html: {
        cs: `
            Jak vedeme rozhovory s pamětníky místní herní kultury a jak digitalizujeme staré fotografie.
        `,
        en: `
            How we interview people who lived through local gaming culture, and how we digitize old photographs.
        `,
    },
    video: {
        youtubeId: "MIFdfWnWwCU",
        duration: 1012,
    },
};

export default post;
