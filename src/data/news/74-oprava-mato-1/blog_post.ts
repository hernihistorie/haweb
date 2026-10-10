import { Temporal } from "@js-temporal/polyfill";

import type { Post } from "$src/types";
import { authors } from "$src/data/authors";

const post: Post = {
    published: true,
    id: 74,
    slug: "oprava-mato-1",
    kind: "news",
    image: "/photos/blog-posts/mato_1_1.png",
    title: {
        cs: "Opravili jsme počítač Maťo",
    },
    date: new Temporal.PlainDate(2025, 10, 28),
    author: authors.HerniHistorie,
    description_html: `
        Již nějakou delší dobu nazpět se nám do rukou dostalo několik kazet s programy a počítač Maťo — stroj slovenské výroby z konce 80. let, který byl klonem PMD 85. Počítač úspěšně zprovoznil Lukáš Nevařil a nyní je uložen v našem archivu.
    `,
};

export default post;
