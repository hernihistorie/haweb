import { Temporal } from "@js-temporal/polyfill";

import type { Post } from "$src/types";
import HerniHistorie from "$src/data/authors/herni-historie/author";

const post: Post = {
    published: true,
    id: 89,
    slug: "predelali-jsme-nas-discord",
    kind: "news",
    image: "/photos/blog-posts/predelali-jsme-nas-discord/predelali-jsme-nas-discord.jpg",
    title: {
        cs: "Předělali jsme náš Discord!",
    },
    date: new Temporal.PlainDateTime(2026, 7, 14, 8, 0),
    author: HerniHistorie,
    description_html:
        "Předělali jsme náš Discord! V rámci hledání nových dobrovolníků jsme předělali náš Discord, který je teď přehlednější a doplněn o nové komunitní funkce!",
    bufferPostId: "6a50e669e8766eb72202fc7c",
};

export default post;
