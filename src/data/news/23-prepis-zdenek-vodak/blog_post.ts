import { Temporal } from "@js-temporal/polyfill";

import type { Post } from "$src/types";
import HerniHistorie from "$src/data/authors/herni-historie/author";

const post: Post = {
    published: true,
    id: 23,
    slug: "prepis-zdenek-vodak",
    kind: "news",
    title: {
        cs: "Přepis rozhovoru se Zdeňkem Vodákem, autorem hry z Videostopu",
    },
    date: new Temporal.PlainDate(2024, 8, 11),
    author: HerniHistorie,
    description_html: `
        Jak jsme minulý Pátek slíbili, tak jsme tak i učinili: interview se Zdeňkem Vodákem jak v textové tak zvukové podobě najdete v rámci našich přepsaných Rozhovorů.
    `,
};

export default post;
