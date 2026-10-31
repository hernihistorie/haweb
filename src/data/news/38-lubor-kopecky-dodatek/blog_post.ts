import { Temporal } from "@js-temporal/polyfill";

import type { Post } from "$src/types";
import HerniHistorie from "$src/data/authors/herni-historie/author";

const post: Post = {
    published: true,
    id: 38,
    slug: "lubor-kopecky-dodatek",
    kind: "news",
    title: {
        cs: "Doplňkové otázky k rozhovoru s Luborem Kopeckým, autorem prvních Bulánků",
    },
    date: new Temporal.PlainDate(2025, 2, 4),
    author: HerniHistorie,
    description_html: `
        Lubor Kopecký, s kterým jsme dělali rozhovor před necelýma dvěma lety, jsme se doptali na vzpomínky ohledně prvních Bulánků - jak byli propagovaný, jak autorstvo komunikovalo s komunitou a jakým způsobem ji podporovalo a jaký měla hra úspěch v zahraničí.
    `,
};

export default post;
