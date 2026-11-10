import { Temporal } from "@js-temporal/polyfill";

import type { VideoPost } from "$src/types";
import HerniHistorie from "$src/data/authors/herni-historie/author";

const post: VideoPost = {
    published: true,
    id: 118,
    slug: "retrofest-2021-legie",
    kind: "video",
    title: {
        cs: "Let's Play: Legie",
        en: "Let's Play: Legie",
    },
    // Date of the stream
    date: new Temporal.PlainDate(2021, 12, 19),
    author: HerniHistorie,
    description_html: {
        cs: `
            Stream jsme zakončili hraním Legie, obskurní české hry s depresivním středověkým prostředím a fantasy prvky.
        `,
        en: `
            We close the stream by playing Legie, an obscure Czech game with a gloomy medieval setting and fantasy elements.
        `,
    },
    video: {
        youtubeId: "JWsM7VALh2c",
        duration: 15477,
    },
};

export default post;
