import { Temporal } from "@js-temporal/polyfill";

import type { Post } from "$src/types";
import HerniHistorie from "$src/data/authors/herni-historie/author";

const post: Post = {
    published: true,
    id: 37,
    slug: "pocitac-tns-xt",
    kind: "news",
    image: "/photos/tns_xt/tns-xt_1.jpg",
    title: {
        cs: "Dostali jsme osobní počítač TNS-XT",
    },
    date: new Temporal.PlainDate(2025, 1, 28),
    author: HerniHistorie,
    description_html: `
        Dostali jsme do naší sbírky československý počítač TNS-XT i s plně lokalizovanou verzí systému TE-DOS 2.00 jež byl sestaven v legendárních Slušovicích. Po pár úpravách se nám ho konečně povedlo dostat do stavu kdy je prezentovatelný veřejnosti.
    `,
};

export default post;
