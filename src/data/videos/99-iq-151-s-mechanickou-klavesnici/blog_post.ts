import { Temporal } from "@js-temporal/polyfill";

import type { Post } from "$src/types";
import AndrewTesla from "$src/data/authors/andrew-tesla/author";

const post: Post = {
    published: true,
    id: 99,
    slug: "iq-151-s-mechanickou-klavesnici",
    kind: "video",
    title: {
        cs: "IQ 151 s mechanickou klávesnicí",
        en: "An IQ 151 with a Mechanical Keyboard",
    },
    // Date the video was published
    date: new Temporal.PlainDate(2026, 1, 23),
    author: AndrewTesla,
    description_html: {
        cs: `
            Kanál Andrew Tesla si od nás půjčil vzácné IQ 151, které má místo klávesnice z telefonních tlačítek klávesnici mechanickou, a pátral po tom, odkud se vzala.
        `,
        en: `
            The Andrew Tesla channel borrowed a rare IQ 151 from us which has a mechanical keyboard instead of the one made of telephone buttons, and investigated where it came from.
        `,
    },
    video: {
        youtubeId: "pXCawKNNey0",
        channel: { name: "Andrew Tesla", url: "https://www.youtube.com/@Andrew_Tesla" },
    },
};

export default post;
