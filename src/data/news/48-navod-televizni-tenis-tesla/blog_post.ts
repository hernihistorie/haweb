import { Temporal } from "@js-temporal/polyfill";

import type { Post } from "$src/types";
import HerniHistorie from "$src/data/authors/herni-historie/author";

const post: Post = {
    published: true,
    id: 48,
    slug: "navod-televizni-tenis-tesla",
    kind: "news",
    title: {
        cs: "Oskenovali jsme návod k Televiznímu tenisu z Tesly",
    },
    date: new Temporal.PlainDate(2025, 5, 27),
    author: HerniHistorie,
    description_html: `
        ong byl na počátcích digitálních her defacto synonymem pro videohru - mnoho západních barů a restaurací si pořídilo do svých prostor arkádu a mnozí si pořizovali televizní tenisy do svých domácností. Domácí Pongy se ale nevyráběly jen na Západě, ale i u nás za železnou oponou a to třeba v závodech Tesla Piešťany.
    `,
};

export default post;
