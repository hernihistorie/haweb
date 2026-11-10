import { Temporal } from "@js-temporal/polyfill";

import type { VideoPost } from "$src/types";
import HerniHistorie from "$src/data/authors/herni-historie/author";

const post: VideoPost = {
    published: true,
    id: 127,
    slug: "retrofest-2024-prednaska-o-historii-mistnich-televiznich-tenisu",
    kind: "video",
    title: {
        cs: "Přednáška o historii místních televizních tenisů",
        en: "A Talk on the History of Local TV Tennis Games",
    },
    // Date of the stream
    date: new Temporal.PlainDate(2024, 1, 28),
    author: HerniHistorie,
    description_html: {
        cs: `
            Přednáška o historii televizních tenisů ve světě a hlavně u nás, kde jde o nejstarší herní přístroje. Slajdy jsou v angličtině, komentář v češtině.
        `,
        en: `
            A talk on the history of TV tennis games around the world and especially in our region, where they are the oldest gaming devices. The slides are in English, the commentary in Czech.
        `,
    },
    video: {
        youtubeId: "okUjqIcDBQY",
        duration: 2227,
    },
};

export default post;
