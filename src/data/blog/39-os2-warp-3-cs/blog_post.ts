import { Temporal } from '@js-temporal/polyfill';

import type { BlogPost } from '$src/types';
import { authors } from '$src/data/authors';

const blogPost: BlogPost = {
    published: true,
    id: 39,
    slug: 'os2-warp-3-cs',
    image: '/photos/os2_warp_3/os2_1.jpg',
    title: {
        cs: 'Zdigitalizovali jsme českou verzi OS/2 Warp 3',
        en: 'We have digitized the Czech version of OS/2 Warp 3'
    },
    date: new Temporal.PlainDate(2025, 2, 12),
    english_translation_date: new Temporal.PlainDate(2025, 12, 18),
    author: authors.HerniHistorie,
    description_html: {
        cs: `
            Nedávno se nám do archivu podařilo získat dvě kompletní krabice s operačním systémem OS/2 od IBM. V jedné z nich je dokonce česká varianta OS/2 Warp 3 - pravděpodobně nejranější lokalizovaná verze, která u nás vyšla.
        `,
        en: `
            Recently, our archive managed to acquire two complete boxes with the IBM OS/2 operating system. One of them even contains the Czech version of OS/2 Warp 3 - probably the earliest localized version released in our country.
        `
    }
};

export default blogPost;
