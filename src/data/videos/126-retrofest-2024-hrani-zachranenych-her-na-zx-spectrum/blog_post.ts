import { Temporal } from "@js-temporal/polyfill";

import type { Post } from "$src/types";
import HerniHistorie from "$src/data/authors/herni-historie/author";

const post: Post = {
    published: true,
    id: 126,
    slug: "retrofest-2024-hrani-zachranenych-her-na-zx-spectrum",
    kind: "video",
    title: {
        cs: "Hraní zachráněných her na ZX Spectrum",
        en: "Playing Rescued Games on the ZX Spectrum",
    },
    // Date of the stream
    date: new Temporal.PlainDate(2024, 1, 28),
    author: HerniHistorie,
    description_html: {
        cs: `
            Ukázka zachráněných her z kazety, včetně textovek, které vznikaly na konci 80. a začátku 90. let.
        `,
        en: `
            A look at games rescued from a tape, including text adventures made in the late 1980s and early 1990s.
        `,
    },
    video: {
        youtubeId: "wQEHMgwcGCw",
        duration: 852,
    },
};

export default post;
