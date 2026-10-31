import { Temporal } from "@js-temporal/polyfill";

import type { Post } from "$src/types";
import VojtechStraka from "$src/data/authors/vojtech-straka/author";
import besitka2025 from "$src/data/events/besitka-2025/event";
// import slides from "./slides.pdf?url";

const post: Post = {
    published: true,
    id: 95,
    slug: "paratexty-ve-sbirkach-spolku-herni-historie",
    kind: "video",
    title: {
        cs: "Paratexty ve sbírkách spolku Herní historie",
        en: "Paratexts in the Collections of Herní historie",
    },
    // Date of the talk
    date: new Temporal.PlainDate(2025, 4, 5),
    author: VojtechStraka,
    description_html: {
        cs: `
            Záznam přednášky z 2. BeSÍŤky o paratextech - krabicích, manuálech, reklamách a dalších materiálech kolem her - které uchováváme ve sbírkách našeho spolku.
        `,
        en: `
            A recording of a talk from the 2nd BeSÍŤka about paratexts - boxes, manuals, advertisements and other materials surrounding games - preserved in our association's collections.
        `,
    },
    video: {
        youtubeId: "wHx_fTJq178",
        channel: {
            name: "Národní filmový archiv",
            url: "https://www.youtube.com/@narodnifilmovyarchiv",
        },
    },
    talk: {
        event: besitka2025,
        // slides: { url: slides },
    },
};

export default post;
