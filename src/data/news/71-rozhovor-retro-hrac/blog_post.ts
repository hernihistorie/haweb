import { Temporal } from "@js-temporal/polyfill";

import type { Post } from "$src/types";
import { authors } from "$src/data/authors";

const post: Post = {
    published: true,
    id: 71,
    slug: "rozhovor-retro-hrac",
    kind: "news",
    image: "/photos/blog-posts/rozhovor-retro-hrac.jpg",
    title: {
        cs: "Retro Hráč s námi dělal rozhovor",
    },
    date: new Temporal.PlainDate(2025, 10, 17),
    author: authors.HerniHistorie,
    description_html: `
        Kluci z Retro Hráče si nás odchytili na letošním Game Accessu a vyptali se jak se nám daří s RetroHernou i zbytkem projektů. Poprvé jsme se lépe poznali už před mnoha lety na námi spoluorganizovaném ReTripu a od té doby na sebe čas od času narazíme. Dan je skvělý expert na konzolové retro tituly a vrací se teď ke starší sérii Retro Pokec a nám je ctí být součástí nového dílu, kde shrneme nedávnou historii našeho projektu i jaké hry bychom doporučili. Je skvělé, že zájem o historii her je u nás vidět a dokazuje to i existence projektů jako právě Retro Hráč!
    `,
};

export default post;
