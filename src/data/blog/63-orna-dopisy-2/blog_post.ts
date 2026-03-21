import { Temporal } from '@js-temporal/polyfill';

import type { BlogPost } from '$src/types';
import { authors } from '$src/data/authors';

const blogPost: BlogPost = {
    published: true,
    id: 63,
    slug: 'orna-dopisy-2',
    title: {
        cs: 'Druhá várka naskenované dopisové komunikace Jana Orny'
    },
    date: new Temporal.PlainDate(2025, 9, 5),
    author: authors.HerniHistorie,
    description_html: `
        Po měsíci pečlivého skenování sdílíme další várku dopisů které přišly Janu Ornovi, či jim byly odeslány. V této várce najdete zejména dopisy od různých pirátských distributorů stejně jako několik seznamů her, které různí piráti nabízeli.
    `
};

export default blogPost;
