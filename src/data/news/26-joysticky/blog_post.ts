import { Temporal } from "@js-temporal/polyfill";

import type { Post } from "$src/types";
import HerniHistorie from "$src/data/authors/herni-historie/author";

const post: Post = {
    published: true,
    id: 26,
    slug: "joysticky",
    kind: "news",
    image: "/photos/ovladac_homebrew1.jpg",
    title: {
        cs: "Přírůstek do Herního archivu: Podomácku vyrobené ovladače k ZX Spectru",
    },
    date: new Temporal.PlainDate(2024, 8, 26),
    author: HerniHistorie,
    description_html: `
        Herní historií nejsou jen hry a oficiální hardware – součástí herní historie (zejména té jenž se odehrávala v rámci bývalého Východního bloku) je i podomácku zbastlené příslušenství, jako např. herní joysticky.
    `,
};

export default post;
