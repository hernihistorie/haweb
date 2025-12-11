import { Temporal } from '@js-temporal/polyfill';

import type { BlogPost } from '$src/types';

export const blogPost43: BlogPost = {
    id: 43,
    slug: 'ondra-programy',
    title: {
        cs: 'Zachráněný software pro Ondra SPO 186'
    },
    date: new Temporal.PlainDate(2025, 3, 14),
    author_name: 'Herní historie',
    description_html: `
        Jak jsme psali toto úterý, tak se nám povedlo nedávno nejen sehnat počítač Ondra, ale také osm kazet s nezazálohavnými programy pro tento počítač. Díky úžasnému Janu Heřmanovi, už nezazálohované ale nejsou! Jedná se primárně o jednoduché obrázky, ale jde zde taky nalézt vzdělávací programy, kondiciogramy a samozřejmě jednoduché hry.
    `
};
