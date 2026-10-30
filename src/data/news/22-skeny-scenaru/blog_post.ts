import { Temporal } from "@js-temporal/polyfill";

import type { Post } from "$src/types";
import HerniHistorie from "$src/data/authors/herni-historie/author";

const post: Post = {
    published: true,
    id: 22,
    slug: "skeny-scenaru",
    kind: "news",
    title: {
        cs: "Skeny scénářů k pořadu Videostop",
    },
    date: new Temporal.PlainDate(2024, 8, 2),
    author: HerniHistorie,
    description_html: `
        Jak jsme oznámili v jenom z předchozích příspěvků, tak jsme dělali rozhovor s Vladimírem Bezděkem, s tvůrcem pořadu Videostop. Ten nám po dokončení rozhovoru zapůjčil scénáře ke dvěma dílům tohoto slavného pořadu - přesněji návrh na první díl (který je doplněný o posudek pořadu a ruční poznámky k úpravě scénáře) a pak scénář k dílu pátému.
    `,
};

export default post;
