import { Temporal } from '@js-temporal/polyfill';

import type { BlogPost } from '$src/types';

export const blogPost41: BlogPost = {
    id: 41,
    slug: 'excalibur-skeny',
    image: '/photos/blog-posts/excalibur.jpg',
    title: {
        cs: 'Oskenovali jsme (SKORO) celý časopis Excalibur',
        en: 'We digitized (ALMOST) the entire Excalibur magazine'
    },
    date: new Temporal.PlainDate(2025, 3, 4),
    // english_translation_date: new Temporal.PlainDate(2025, 12, 11),
    author_name: 'Herní historie',
    description_html: {
        cs: `
            Časopis Excalibur, jehož nulté číslo vyšlo v roce 1990, byl jedním z prvních časopisů o videohrách, který u nás vycházel a v kterém zároveň začínalo mnoho významných osobnostní herní žurnalistiky jako Jakub Červinka, Jan Eisler, Andrej Anastasov, Tomáš Mrkvička, Jan Tománek ad. Časopis jsme téměř celý oskenovali a zveřejnili.
        `,
        en: `
            The Excalibur magazine, the zeroth issue of which was published in 1990, was one of the first magazines about video games published in our country, and many significant figures in game journalism began their careers there, including Jakub Červinka, Jan Eisler, Andrej Anastasov, Tomáš Mrkvička, Jan Tománek, and others. We have digitized almost the entire magazine and made it available online.
        `
    }
};
