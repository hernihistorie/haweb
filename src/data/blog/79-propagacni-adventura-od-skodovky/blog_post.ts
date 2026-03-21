import { Temporal } from '@js-temporal/polyfill';

import type { BlogPost } from '$src/types';
import { authors } from '$src/data/authors';

const blogPost: BlogPost = {
    id: 79,
    slug: 'propagacni-adventura-od-skodovky',
    image: '/images/blog/79-propagacni-adventura-od-skodovky/skoda_cd.jpg',
    title: {
        cs: 'Propagační adventura od Škodovky, aneb „Neruš mé kruhy!“',
        en: "Škoda's promotional adventure game, or \"Don't disturb my circles!\""
    },
    published: true,
    date: new Temporal.PlainDate(2026, 1, 26),
    english_translation_date: new Temporal.PlainDate(2026, 1, 26),
    author: authors.JakubSkrdla,
    description_html: {
        cs: `
            V roce 1997 vydala automobilka Škoda propagační CD-ROM, který kombinoval běžné marketingové materiály s interaktivním rozhraním podobným point-and-click adventurám.  Dozvěte se v tomto článku více o tomto unikátním multimediálním počinu.
        `,
        en: `
            In 1997, the car manufacturer Škoda released a promotional CD-ROM that combined typical marketing materials with an interactive interface similar to point-and-click adventures. Learn more about this unique multimedia endeavor in this article.
        `
    }
};

export default blogPost;
