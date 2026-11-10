import { Temporal } from "@js-temporal/polyfill";

import type { VideoPost } from "$src/types";
import HerniHistorie from "$src/data/authors/herni-historie/author";

const post: VideoPost = {
    published: true,
    id: 117,
    slug: "retrofest-2021-odhaleni-projektu-herni-archiv",
    kind: "video",
    title: {
        cs: "Odhalení projektu Herní archiv",
        en: "Unveiling the Czechoslovak Game Archive",
    },
    // Date of the stream
    date: new Temporal.PlainDate(2021, 12, 19),
    author: HerniHistorie,
    description_html: {
        cs: `
            Ohlášení vzniku Československého herního archivu.
        `,
        en: `
            The announcement of the founding of the Czechoslovak Game Archive.
        `,
    },
    video: {
        youtubeId: "QoxK0TEKe5o",
        duration: 1133,
    },
};

export default post;
