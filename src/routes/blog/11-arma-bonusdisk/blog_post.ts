import { Temporal } from '@js-temporal/polyfill';

import type { BlogPost } from '$src/types';
import { authors } from '$src/data/authors';

const blogPost: BlogPost = {
    published: true,
    id: 11,
    slug: 'arma-bonusdisk',
    image: '/photos/arma_sheet.jpg',
    title: {
        cs: 'Do archivu sháníme bonusdisk k ARMA'
    },
    date: new Temporal.PlainDate(2024, 5, 13),
    author: authors.HerniHistorie,
    description_html: `
        Činnost herního archiváře občas obnáší si všímat i takových detailů, jako je drobný papírek přiložený ke hře. V tomto případě jde o papírek z obalu Army, který nasvědčuje existenci bonusového disku ke hře. Nicméně, ačkoliv máme nyní v archivu tento papírek tak nám chybí samotný bonusdisk. Pokud by se tedy náhodou našel někdo, kdo by byl ochotný vzdát se tohoto bonusdisku a věnovat ho našemu archivu, tak budeme moc rádi.
    `
};

export default blogPost;
