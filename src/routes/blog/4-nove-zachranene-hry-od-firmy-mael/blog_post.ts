import { Temporal } from '@js-temporal/polyfill';

import type { BlogPost } from '$src/types';

export const blogPost4: BlogPost = {
    id: 4,
    slug: 'nove-zachranene-hry-od-firmy-mael',
    image: '/photos/mael/mael1.jpg',
    title: {
        cs: 'Nově zachráněné hry od firmy Mael'
    },
    date: new Temporal.PlainDate(2024, 4, 20),
    author_name: 'Herní historie',
    description_html: `
        Tento pátek (20.4.2024) jsme byli na základě iniciativy ze strany <a href="https://www.facebook.com/karel.ondracek.5">Karla Ondráčka</a> (aka Solarise z Česko-Slovenského Speccy Archivu) u sběratele Filip Reichert zdigitalizovat některé předměty z jeho sbírky. Nejdůležitějším předmětem co jsme zdigitalizovali byly do teď nezachráněné hry (a jeden "propagační prográmek") na ZX Spectrum od firmy MAEL.
    `
};
