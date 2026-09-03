import { Temporal } from '@js-temporal/polyfill';

import type { BlogPost } from '$src/types';
import { authors } from '$src/data/authors';

const blogPost: BlogPost = {
    published: true,
    id: 90,
    slug: 'oskenovali-a-zverejnili-jsme-casopis-doupe',
    image: '/photos/blog-posts/oskenovali-a-zverejnili-jsme-casopis-doupe/oskenovali-a-zverejnili-jsme-casopis-doupe_1.jpg',
    title: {
        cs: "Oskenovali a zveřejnili jsme časopis Doupě",
    },
    date: new Temporal.PlainDateTime(2026, 9, 8, 8, 0),
    author: authors.HerniHistorie,
    description_html: "Oskenovali a zveřejnili jsme časopis Doupě Po letní pauze přicházíme s dalším skenem českého herního magazínu, tentokrát časopisu Doupě. Doupě vzniklo v létě 1999 jako internetový herní magazín vydavatelství Computer Press. Od roku 2005 na něj navázalo tištěné Doupě, měsíčník vycházející jedenáctk",
    bufferPostId: '6a99a53308f2ed85a8ae17be',
};

export default blogPost;
