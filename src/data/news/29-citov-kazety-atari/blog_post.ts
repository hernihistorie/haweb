import { Temporal } from "@js-temporal/polyfill";

import type { Post } from "$src/types";
import { authors } from "$src/data/authors";

const post: Post = {
    published: true,
    id: 29,
    slug: "citov-kazety-atari",
    kind: "news",
    title: {
        cs: "PROJEKT CÍTOV - Kazety s výukovýmy programy na Atari 800XL/XE, 130XE",
    },
    date: new Temporal.PlainDate(2024, 9, 30),
    author: authors.HerniHistorie,
    description_html: `
        V rámci činnosti Cítovského klubu začal v 90. letech vznikat komerčně distribuovaný výukový software, který právě v současnosti digitalizujeme. Druhá várka tohoto softwaru, kterou se nám povedlo zachránit, jsou 2 výukové hry na 8-bit Atari distribuovaných na kazetách.
    `,
};

export default post;
