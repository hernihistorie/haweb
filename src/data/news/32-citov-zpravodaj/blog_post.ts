import { Temporal } from "@js-temporal/polyfill";

import type { Post } from "$src/types";
import { authors } from "$src/data/authors";

const post: Post = {
    published: true,
    id: 32,
    slug: "citov-zpravodaj",
    kind: "news",
    title: {
        cs: "PROJEKT CÍTOV - Skeny cítovského zpravodaje",
    },
    date: new Temporal.PlainDate(2024, 12, 9),
    author: authors.HerniHistorie,
    description_html: `
        Oskenovali jsme počítačový zpravodaj, který vznikal v 80. letech v rámci činnosti cítovského atari klubu.
    `,
};

export default post;
