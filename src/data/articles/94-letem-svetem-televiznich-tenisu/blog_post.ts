import { Temporal } from "@js-temporal/polyfill";

import type { Post } from "$src/types";
import JiriBernasek from "$src/data/authors/jiri-bernasek/author";
import img01 from "./img/1-kolaz-uvodni.jpg?w=1200&format=jpg&imagetools";

const post: Post = {
    published: true,
    id: 94,
    slug: "letem-svetem-televiznich-tenisu",
    kind: "article",
    image: img01,
    title: {
        cs: "Letem světem televizních tenisů",
        en: "Around the World of TV Tennis",
    },
    // TODO
    date: new Temporal.PlainDateTime(2026, 10, 31, 14, 0),
    author: JiriBernasek,
    description_html: {
        cs: `
            Tuzemské televizní hry nevznikaly v žádném vakuu - měly v zahraničí své předchůdce, současníky i následovníky. Vydejte se s námi na vyhlídkový let první generací televizních her bez specializovaných čipů: od <em>Magnavox Odyssey</em> a <em>Pongu</em> přes záplavu klonů a časopisových návodů na západě i ve východním bloku až po svéráznou cestu Sovětského svazu, kde tato éra vydržela o celou dekádu déle.
        `,
        en: `
            Czechoslovak television games did not come about in a vacuum - they had predecessors, contemporaries and successors abroad. Join us on a sightseeing flight through the first generation of TV games built without dedicated chips: from the <em>Magnavox Odyssey</em> and <em>Pong</em>, through a flood of clones and magazine guides in the West and the Eastern Bloc, all the way to the peculiar path of the Soviet Union, where this era lasted a whole decade longer.
        `,
    },
};

export default post;
