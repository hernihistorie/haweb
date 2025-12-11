import { Temporal } from '@js-temporal/polyfill';

import type { BlogPost } from '$src/types';

export const blogPost3: BlogPost = {
    id: 3,
    slug: 'novinky-na-pocatku-roku-2024',
    title: {
        cs: 'Novinky na počátku roku 2024'
    },
    date: new Temporal.PlainDate(2024, 3, 1),
    author_name: 'Herní historie',
    description_html: `
        Začátkem tohoto roku jsme vypustili (a na streamu oznámili) některé naše projekty, na kterých jsme v rámci našeho spolku a archivu pracovali. V tomto článku se o nich můžete dozvědět.
    `
};
