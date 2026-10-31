import { Temporal } from "@js-temporal/polyfill";

import type { Post } from "$src/types";
import AndrewTesla from "$src/data/authors/andrew-tesla/author";

const post: Post = {
    published: true,
    id: 100,
    slug: "karel-pro-iq-151-zachraneny-z-vinylu",
    kind: "video",
    title: {
        cs: "Karel pro IQ 151 zachráněný z vinylu",
        en: "Karel for the IQ 151 Rescued from Vinyl",
    },
    // Date the video was published
    date: new Temporal.PlainDate(2026, 5, 15),
    author: AndrewTesla,
    description_html: {
        cs: `
            Kanál Andrew Tesla natočil video o digitalizaci vinylových desek s programy pro ZX Spectrum a IQ 151, které jsme dostali do archivu od autora české verze Robota Karla, včetně rozhovoru s Rudolfem Janem Suchým.
        `,
        en: `
            The Andrew Tesla channel made a video about digitizing vinyl records with programs for the ZX Spectrum and IQ 151, which our archive received from the author of the Czech version of Robot Karel, including an interview with Rudolf Jan Suchý.
        `,
    },
    video: {
        youtubeId: "gccZcTYVXbk",
        channel: { name: "Andrew Tesla", url: "https://www.youtube.com/@Andrew_Tesla" },
    },
};

export default post;
