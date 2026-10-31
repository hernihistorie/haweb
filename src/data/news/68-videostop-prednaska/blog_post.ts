import { Temporal } from "@js-temporal/polyfill";

import type { Post } from "$src/types";
import HerniHistorie from "$src/data/authors/herni-historie/author";

const post: Post = {
    published: true,
    id: 68,
    slug: "videostop-prednaska",
    kind: "news",
    image: "/photos/prednaska.jpg",
    title: {
        cs: "Byla zveřejněna naše přednáška o Videostopu",
    },
    date: new Temporal.PlainDate(2025, 10, 2),
    author: HerniHistorie,
    description_html: `
        inulý rok měl člen našeho spolku Rudolf Jan Suchý přednášku o historii a archivaci hry z televizního pořadu Videostop. Záznam z této přednášky nyní naleznete na YouTubu ByteFESTu.
    `,
};

export default post;
