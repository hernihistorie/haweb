import { Temporal } from '@js-temporal/polyfill';

import type { BlogPost } from '$src/types';
import { authors } from '$src/data/authors';

export const blogPost9: BlogPost = {
    id: 9,
    slug: 'playboy2-riskuj',
    title: {
        cs: 'PLAYBOY2 a RISKUJ!'
    },
    date: new Temporal.PlainDate(2024, 5, 3),
    author: authors.HerniHistorie,
    description_html: `
        Kromě toho, že jsme u sběratele Filip Reichert  před dvěma týdny zdigitalizovali několik kazet s hrami na ZX Spectrum, tak jsme také zvládli zdigitalizovat řadu videoher na CDčkách a Disketách (a něco jsme stihli i naskenovat!). Za zmínku stojí zejména dva tituly a to nikde nezdigitalizovaný Playboy 2 a Datadisk k riskuj.
    `
};
