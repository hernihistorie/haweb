import { Temporal } from '@js-temporal/polyfill';

import type { BlogPost } from '$src/types';
import { authors } from '$src/data/authors';

const blogPost: BlogPost = {
    published: true,
    id: 10,
    slug: 'pokemon-hraj-si-s-nami',
    image: '/photos/pokemon_hraj.jpg',
    title: {
        cs: 'Nový přírůstek do Herního Archivu: Magazín POKÉMON: Hraj si s námi'
    },
    date: new Temporal.PlainDate(2024, 5, 6),
    author: authors.HerniHistorie,
    description_html: `
        Do sbírky se nám nedávno dostala skoro všechna čísla složitě sehnatelného časopisu „POKÉMON: Hraj si s námi." Tento časopis byl překladem italského originálu, vycházel na přelomu devadesátých a nultých let pod vydavatelstvím EGMONT a svým obsahem cílil na dětské čtenářstvo.
    `
};

export default blogPost;
