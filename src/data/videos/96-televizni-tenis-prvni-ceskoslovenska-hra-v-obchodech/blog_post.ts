import { Temporal } from "@js-temporal/polyfill";

import type { Post } from "$src/types";
import VojtechStraka from "$src/data/authors/vojtech-straka/author";
import bytefest2025 from "$src/data/events/bytefest-2025/event";

const post: Post = {
    published: true,
    id: 96,
    slug: "televizni-tenis-prvni-ceskoslovenska-hra-v-obchodech",
    kind: "video",
    title: {
        cs: "Televizní tenis – první československá hra v obchodech",
        en: "TV Tennis – the First Czechoslovak Game in Shops",
    },
    // Date of the talk
    date: new Temporal.PlainDate(2025, 10, 3),
    author: VojtechStraka,
    description_html: {
        cs: `
            Záznam přednášky z ByteFESTu 2025 o televizním tenisu, první československé hře, která se dostala do obchodů.
        `,
        en: `
            A recording of a talk from ByteFEST 2025 about TV tennis, the first Czechoslovak game to make it to the shops.
        `,
    },
    video: {
        youtubeId: "UNlb_jyy-wY",
        channel: { name: "ByteFEST", url: "https://www.youtube.com/@bytefest" },
    },
    talk: {
        event: bytefest2025,
    },
};

export default post;
