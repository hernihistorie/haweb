import { Temporal } from "@js-temporal/polyfill";

import type { VideoPost } from "$src/types";
import TajemnoAZahady from "$src/data/authors/tajemno-a-zahady/author";

const post: VideoPost = {
    published: true,
    id: 108,
    slug: "jak-se-vyrabela-ceskoslovenska-herni-konzole",
    kind: "video",
    title: {
        cs: "Jak se vyráběla československá herní konzole",
        en: "How the Czechoslovak Game Console Was Made",
    },
    // Date the video was published
    date: new Temporal.PlainDate(2026, 9, 30),
    author: TajemnoAZahady,
    description_html: {
        cs: `
            Rozhovor kanálu Tajemno a záhady s Vojtěchem Strakou o konzoli Tesla XD-8001, ve kterém zazní to, co se do předchozího dílu nevešlo.
        `,
        en: `
            An interview by the Tajemno a záhady channel with Vojtěch Straka about the Tesla XD-8001 console, covering what didn't fit into the previous episode.
        `,
    },
    video: {
        youtubeId: "CwwGFGFsnCw",
        channel: { name: "Tajemno a záhady", url: "https://www.youtube.com/@Tajemnoazahady" },
    },
};

export default post;
