import { Temporal } from "@js-temporal/polyfill";

import type { Post } from "$src/types";
import { authors } from "$src/data/authors";
import img01 from "../91-prototyp-televiznich-her-z-tesly-vust/img/01-cela-sestava.jpg?w=1200&format=jpg&imagetools";

const post: Post = {
    published: true,
    id: 92,
    slug: "clanek-o-ceskoslovenskem-prototypu-televizni-hry",
    image: img01,
    title: {
        cs: "Článek o československém prototypu Televizní hry",
        en: "An article about a Czechoslovak television game prototype",
    },
    date: new Temporal.PlainDateTime(2026, 9, 30, 8, 25),
    author: authors.HerniHistorie,
    description_html: {
        cs: "Na letošním ByteFestu jsme odhlalili vzácný kus prototypu televizního tenisu od TESLA-VÚST. O této raritě Jiří Bernášek napsal na našem webu článek, kde shrnuje jeho historii a zabývá se tím, jak funguje.",
        en: "At this year's ByteFest, we unveiled a rare TV tennis prototype from TESLA-VÚST. Jiří Bernášek wrote an article about this rarity on our website, summarizing its history and explaining how it works.",
    },
    bufferPostId: "6ab8f3fc8f35fc042c06a55f",
};

export default post;
