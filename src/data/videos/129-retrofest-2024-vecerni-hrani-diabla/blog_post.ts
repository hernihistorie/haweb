import { Temporal } from "@js-temporal/polyfill";

import type { Post } from "$src/types";
import HerniHistorie from "$src/data/authors/herni-historie/author";

const post: Post = {
    published: true,
    id: 129,
    slug: "retrofest-2024-vecerni-hrani-diabla",
    kind: "video",
    title: {
        cs: "Večerní hraní Diabla",
        en: "An Evening of Diablo",
    },
    // Date of the stream
    date: new Temporal.PlainDate(2024, 1, 28),
    author: HerniHistorie,
    description_html: {
        cs: `
            Stream jsme zakončili delším hraním Diabla.
        `,
        en: `
            We close the stream with a longer session of Diablo.
        `,
    },
    video: {
        youtubeId: "O6tK0DVflfw",
        duration: 10717,
    },
};

export default post;
