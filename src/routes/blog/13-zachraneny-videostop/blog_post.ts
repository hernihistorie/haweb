import { Temporal } from '@js-temporal/polyfill';

import type { BlogPost } from '$src/types';
import { authors } from '$src/data/authors';

export const blogPost13: BlogPost = {
    id: 13,
    slug: 'zachraneny-videostop',
    image: '/photos/videostop_screenshot.jpg',
    title: {
        cs: 'Originální hra z pořadu Videostop'
    },
    date: new Temporal.PlainDate(2024, 6, 28),
    author: authors.HerniHistorie,
    description_html: `
        Jak jsme slíbili, tak jsme konečně zdigitalizovali a zveřejnili originální hru z pořadu Videostop. Hra původně neměla být vůbec veřejně distribuovaná a její spuštění a zapojení tedy není úplně triviální. Z tohoto důvodu jsme pro vás připravili stručný návod, který by vás měl seznámit s tím, co vše k hraní potřebujete a jak hru zapnout a ovládat.
    `
};
