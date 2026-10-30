import { Temporal } from "@js-temporal/polyfill";

import type { Post } from "$src/types";
import HerniHistorie from "$src/data/authors/herni-historie/author";

const post: Post = {
    published: true,
    id: 28,
    slug: "citov-kazety-spectrum",
    kind: "news",
    title: {
        cs: "PROJEKT CÍTOV - Kazety s výukovými hrami na ZX Spectrum",
    },
    date: new Temporal.PlainDate(2024, 9, 23),
    author: HerniHistorie,
    description_html: `
        V rámci činnosti Cítovského klubu začal v 90. letech vznikat komerčně distribuovaný výukový software, který právě v současnosti digitalizujeme. První várka tohoto softwaru, kterou se nám povedlo zachránit, je 10 výukových her na ZX Spectrum distribuovaných na kazetách.
    `,
};

export default post;
