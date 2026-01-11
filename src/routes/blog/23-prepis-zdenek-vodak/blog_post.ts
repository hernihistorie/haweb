import { Temporal } from '@js-temporal/polyfill';

import type { BlogPost } from '$src/types';
import { authors } from '$src/data/authors';

export const blogPost23: BlogPost = {
    id: 23,
    slug: 'prepis-zdenek-vodak',
    title: {
        cs: 'Přepis rozhovoru se Zdeňkem Vodákem, autorem hry z Videostopu'
    },
    date: new Temporal.PlainDate(2024, 8, 11),
    author: authors.HerniHistorie,
    description_html: `
        Jak jsme minulý Pátek slíbili, tak jsme tak i učinili: interview se Zdeňkem Vodákem jak v textové tak zvukové podobě najdete v rámci našich přepsaných Rozhovorů.
    `
};
