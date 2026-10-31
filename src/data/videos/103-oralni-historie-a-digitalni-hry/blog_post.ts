import { Temporal } from "@js-temporal/polyfill";

import type { Post } from "$src/types";
import RudolfJanSuchy from "$src/data/authors/rudolf-jan-suchy/author";
import besitka2025 from "$src/data/events/besitka-2025/event";

const post: Post = {
    published: true,
    id: 103,
    slug: "oralni-historie-a-digitalni-hry",
    kind: "video",
    title: {
        cs: "Orální historie a digitální hry",
        en: "Oral History and Digital Games",
    },
    // Date of the talk
    date: new Temporal.PlainDate(2025, 4, 5),
    author: RudolfJanSuchy,
    description_html: {
        cs: `
            Záznam přednášky z 2. BeSÍŤky o orální historii jako metodě poznávání herní minulosti a o rozhovorech s pamětníky, které natáčíme v našem spolku.
        `,
        en: `
            A recording of a talk from the 2nd BeSÍŤka about oral history as a method of exploring the gaming past and about the interviews with witnesses recorded by our association.
        `,
    },
    video: {
        youtubeId: "2ubE-dB_1O0",
        channel: {
            name: "Národní filmový archiv",
            url: "https://www.youtube.com/@narodnifilmovyarchiv",
        },
    },
    talk: {
        event: besitka2025,
    },
};

export default post;
