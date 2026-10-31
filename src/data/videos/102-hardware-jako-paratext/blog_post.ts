import { Temporal } from "@js-temporal/polyfill";

import type { Post } from "$src/types";
import DavidLabsky from "$src/data/authors/david-labsky/author";
import besitka2025 from "$src/data/events/besitka-2025/event";
import slides from "./slides.pdf?url";

const post: Post = {
    published: true,
    id: 102,
    slug: "hardware-jako-paratext",
    kind: "video",
    title: {
        cs: "Hardware jako paratext",
        en: "Hardware as a Paratext",
    },
    // Date of the talk
    date: new Temporal.PlainDate(2025, 4, 5),
    author: DavidLabsky,
    description_html: {
        cs: `
            Záznam přednášky z 2. BeSÍŤky o tom, jak hardware - jeho název, vzhled, ovladače i samotné možnosti - utváří zážitek z her a hráčskou kulturu, na příkladech ze sbírek našeho spolku.
        `,
        en: `
            A recording of a talk from the 2nd BeSÍŤka about how hardware - its name, design, controllers and capabilities - shapes the experience of games and gaming culture, with examples from our association's collections.
        `,
    },
    video: {
        youtubeId: "5LM8DhmTT0E",
        channel: {
            name: "Národní filmový archiv",
            url: "https://www.youtube.com/@narodnifilmovyarchiv",
        },
    },
    talk: {
        event: besitka2025,
        slides: { url: slides },
    },
};

export default post;
