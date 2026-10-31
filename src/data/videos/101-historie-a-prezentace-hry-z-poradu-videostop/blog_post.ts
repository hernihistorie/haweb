import { Temporal } from "@js-temporal/polyfill";

import type { Post } from "$src/types";
import RudolfJanSuchy from "$src/data/authors/rudolf-jan-suchy/author";
import bytefest2024 from "$src/data/events/bytefest-2024/event";

const post: Post = {
    published: true,
    id: 101,
    slug: "historie-a-prezentace-hry-z-poradu-videostop",
    kind: "video",
    title: {
        cs: "Historie a prezentace hry z pořadu Videostop",
        en: "The History of the Game from the Videostop TV Show",
    },
    // Date of the talk
    date: new Temporal.PlainDate(2024, 10, 26),
    author: RudolfJanSuchy,
    description_html: {
        cs: `
            Záznam přednášky z ByteFESTu 2024 o historii a záchraně původní hry z televizního pořadu Videostop, kterou jsme získali od jejího autora Zdeňka Vodáka.
        `,
        en: `
            A recording of a talk from ByteFEST 2024 about the history and rescue of the original game from the Videostop TV show, which we obtained from its author, Zdeněk Vodák.
        `,
    },
    video: {
        youtubeId: "Ce_lJMa0X6s",
        channel: { name: "ByteFEST", url: "https://www.youtube.com/@bytefest" },
    },
    talk: {
        event: bytefest2024,
    },
};

export default post;
