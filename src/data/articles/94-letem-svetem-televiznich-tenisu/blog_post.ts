import { Temporal } from "@js-temporal/polyfill";

import type { Post } from "$src/types";
import { authors } from "$src/data/authors";
import img01 from "./img/1-kolaz-uvodni.jpg?w=1200&format=jpg&imagetools";

const post: Post = {
    published: false,
    id: 94,
    slug: "letem-svetem-televiznich-tenisu",
    kind: "article",
    image: img01,
    title: {
        cs: "Letem světem televizních tenisů",
    },
    // TODO
    date: new Temporal.PlainDateTime(2026, 10, 31, 14, 0),
    author: authors.JiriBernasek,
    description_html: {
        cs: `
            Tuzemské televizní hry nevznikaly v žádném vakuu - měly v zahraničí své předchůdce, současníky i následovníky. TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO 
        `,
    },
};

export default post;
