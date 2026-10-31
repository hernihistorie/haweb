import { Temporal } from "@js-temporal/polyfill";

import type { Post } from "$src/types";
import RetroHrac from "$src/data/authors/retro-hrac/author";

const post: Post = {
    published: true,
    id: 98,
    slug: "retro-pokec-rozhovor-o-retroherne",
    kind: "video",
    title: {
        cs: "Retro Pokec 3: rozhovor o RetroHerně",
        en: "Retro Pokec 3: An Interview about RetroHerna",
    },
    // Date the video was published
    date: new Temporal.PlainDate(2025, 9, 29),
    author: RetroHrac,
    description_html: {
        cs: `
            Retro Hráč si nás odchytil na Game Accessu 2025 a ve třetím dílu pořadu Retro Pokec jsme si povídali o nedávné historii RetroHerny a o hrách, které bychom doporučili.
        `,
        en: `
            Retro Hráč caught up with us at Game Access 2025, and in the third episode of the Retro Pokec show we talked about the recent history of RetroHerna and the games we would recommend.
        `,
    },
    video: {
        youtubeId: "O6DZSGkZ5Ck",
        channel: { name: "Retro Hráč", url: "https://www.youtube.com/@retrohrac" },
    },
};

export default post;
