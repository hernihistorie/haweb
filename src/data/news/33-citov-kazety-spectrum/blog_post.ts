import { Temporal } from "@js-temporal/polyfill";

import type { Post } from "$src/types";
import HerniHistorie from "$src/data/authors/herni-historie/author";

const post: Post = {
    published: true,
    id: 33,
    slug: "citov-kazety-spectrum",
    kind: "news",
    title: {
        cs: "PROJEKT CÍTOV - Další kazety s výukovými programy na ZX Spectrum",
    },
    date: new Temporal.PlainDate(2024, 12, 16),
    author: HerniHistorie,
    description_html: `
        V rámci činnosti Cítovského klubu začal v 90. letech vznikat komerčně distribuovaný výukový software, který v současnosti digitalizujeme. Třetí várka tohoto softwaru jsme nedostali pro změnu od pana Havelky - zakladatele klubu - ale od jednoho člověka, jenž nás kontaktoval na sociálních sítítch.
    `,
};

export default post;
