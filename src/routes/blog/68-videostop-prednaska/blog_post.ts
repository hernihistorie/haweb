import { Temporal } from '@js-temporal/polyfill';

import type { BlogPost } from '$src/types';
import { authors } from '$src/data/authors';

const blogPost: BlogPost = {
    published: true,
    id: 68,
    slug: 'videostop-prednaska',
    image: '/photos/prednaska.jpg',
    title: {
        cs: 'Byla zveřejněna naše přednáška o Videostopu'
    },
    date: new Temporal.PlainDate(2025, 10, 2),
    author: authors.HerniHistorie,
    description_html: `
        inulý rok měl člen našeho spolku Rudolf Jan Suchý přednášku o historii a archivaci hry z televizního pořadu Videostop. Záznam z této přednášky nyní naleznete na YouTubu ByteFESTu.
    `
};

export default blogPost;
