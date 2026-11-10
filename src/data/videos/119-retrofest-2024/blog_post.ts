import { Temporal } from "@js-temporal/polyfill";

import type { StreamPost } from "$src/types";
import HerniHistorie from "$src/data/authors/herni-historie/author";
import retrofest2024 from "$src/data/events/retrofest-2024/event";
import part1 from "../120-retrofest-2024-uvod/blog_post";
import part2 from "../121-retrofest-2024-oralni-historie-a-digitalizace-fotografii/blog_post";
import part3 from "../122-retrofest-2024-hrani-bulanku/blog_post";
import part4 from "../123-retrofest-2024-skenovani-a-katalogizace-casopisu/blog_post";
import part5 from "../124-retrofest-2024-hrani-fpscore/blog_post";
import part6 from "../125-retrofest-2024-inventarni-system-a-digitalizace-kazet-a-disket/blog_post";
import part7 from "../126-retrofest-2024-hrani-zachranenych-her-na-zx-spectrum/blog_post";
import part8 from "../127-retrofest-2024-prednaska-o-historii-mistnich-televiznich-tenisu/blog_post";
import part9 from "../128-retrofest-2024-hrani-unreal-tournamentu-99-s-divaky/blog_post";
import part10 from "../129-retrofest-2024-vecerni-hrani-diabla/blog_post";

const post: StreamPost = {
    published: true,
    id: 119,
    slug: "retrofest-2024",
    kind: "video",
    image: "/photos/stream_2024.jpg",
    title: "RetroFest 2024",
    // Date of the stream
    date: new Temporal.PlainDate(2024, 1, 28),
    author: HerniHistorie,
    description_html: {
        cs: `
            Záznam našeho nepravidelného streamu RetroFest, na kterém jsme představili, na čem jsme poslední dva roky pracovali, a zahráli si retro hry.
        `,
        en: `
            A recording of our occasional RetroFest stream, where we showed what we had been working on for the past two years and played some retro games.
        `,
    },
    stream: {
        event: retrofest2024,
        parts: [part1, part2, part3, part4, part5, part6, part7, part8, part9, part10],
    },
};

export default post;
