import { Temporal } from '@js-temporal/polyfill';

import type { BlogPost } from '$src/types';
import { authors } from '$src/data/authors';

export const blogPost80: BlogPost = {
    id: 80,
    slug: 'vystava-disk-nelze-nacist',
    image: '/images/blog/80-vystava-disk-nelze-nacist/photo1.jpg',
    title: {
        cs: 'Podílíme se na výstavě Disk nelze načíst',
        en: "We are participating in the exhibition Disc Cannot Be Read"
    },
    date: new Temporal.PlainDate(2026, 1, 23),
    // english_translation_date: new Temporal.PlainDate(2026, 1, 22),
    author: authors.HerniHistorie,
    description_html: {
        cs: `
            Dostali jsme příležitost podílet se na výstavě Disk nelze načíst - výstava od týmu Vašulka Kitchen zaměřující se na historii analogových, (před) digitálních technologií, nosičů a uměleckých experimentů zhruba od začátku 90. let.
        `,
        en: `
            We have received the opportunity to participate in the exhibition Disk nelze načíst (Disc Cannot Be Read) - an exhibition by the Vašulka Kitchen team focusing on the history of analog, (pre) digital technologies, media, and artistic experiments from around the early 1990s.
        `
    }
};
