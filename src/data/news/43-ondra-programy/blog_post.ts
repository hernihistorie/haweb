import { Temporal } from "@js-temporal/polyfill";

import type { Post } from "$src/types";
import HerniHistorie from "$src/data/authors/herni-historie/author";

const post: Post = {
    published: true,
    id: 43,
    slug: "ondra-programy",
    kind: "news",
    title: {
        cs: "Zachráněný software pro Ondra SPO 186",
    },
    date: new Temporal.PlainDate(2025, 3, 14),
    author: HerniHistorie,
    description_html: `
        Jak jsme psali toto úterý, tak se nám povedlo nedávno nejen sehnat počítač Ondra, ale také osm kazet s nezazálohavnými programy pro tento počítač. Díky úžasnému Janu Heřmanovi, už nezazálohované ale nejsou! Jedná se primárně o jednoduché obrázky, ale jde zde taky nalézt vzdělávací programy, kondiciogramy a samozřejmě jednoduché hry.
    `,
};

export default post;
