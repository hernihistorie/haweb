import { Temporal } from "@js-temporal/polyfill";

import type { Post } from "$src/types";
import RudolfJanSuchy from "$src/data/authors/rudolf-jan-suchy/author";
import bytefest2025 from "$src/data/events/bytefest-2025/event";
import slides from "./slides.pdf?url";
// The second slide, as there is no recording to take a thumbnail from
import thumbnail from "./thumbnail.jpg?w=1200&format=jpg&imagetools";

const post: Post = {
    published: true,
    id: 104,
    slug: "programy-tvorene-v-ramci-ceskoslovenske-televize",
    kind: "video",
    image: thumbnail,
    title: {
        cs: "Programy tvořené v rámci Československé televize",
        en: "Programs Made for Czechoslovak Television",
    },
    // Date of the talk
    date: new Temporal.PlainDate(2025, 10, 3),
    author: RudolfJanSuchy,
    description_html: {
        cs: `
            Slajdy z přednášky z ByteFESTu 2025 o počítačových programech z pořadů Československé televize, jako byly Kurz rychlého čtení a Počítačová dilemata, a o šíření programů rozhlasovým vysíláním.
        `,
        en: `
            Slides from a talk at ByteFEST 2025 about computer programs from Czechoslovak Television shows such as Kurz rychlého čtení and Počítačová dilemata, and about distributing programs over radio broadcasts.
        `,
    },
    // The recording hasn't been published
    video: {},
    talk: {
        event: bytefest2025,
        slides: { url: slides },
    },
};

export default post;
