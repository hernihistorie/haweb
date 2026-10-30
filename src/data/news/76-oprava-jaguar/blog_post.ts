import { Temporal } from "@js-temporal/polyfill";

import type { Post } from "$src/types";
import HerniHistorie from "$src/data/authors/herni-historie/author";

const post: Post = {
    published: true,
    id: 76,
    slug: "oprava-jaguar",
    kind: "news",
    image: "/photos/blog-posts/oprava-jaguar_1_1.jpg",
    title: {
        cs: "Opravili jsme naše Atari Jaguary",
    },
    date: new Temporal.PlainDate(2025, 11, 4),
    author: HerniHistorie,
    description_html: `
        Ačkoliv jde o jednu z těch obskurnějších konzolí, tak v naší výjezdové výbavě RetroHerny je dlouho konzole Atari Jaguar. Bohužel oba kousky které vlastníme se nám rozbily a bylo potřeba, aby je opravil šikovný Lukáš Nevařil.
    `,
};

export default post;
