import { Temporal } from '@js-temporal/polyfill';

import type { BlogPost } from '$src/types';
import { authors } from '$src/data/authors';

const blogPost: BlogPost = {
    published: true,
    id: 89,
    slug: 'predelali-jsme-nas-discord',
    image: '/photos/blog-posts/predelali-jsme-nas-discord/predelali-jsme-nas-discord.jpg',
    title: {
        cs: "Předělali jsme náš Discord!",
    },
    date: new Temporal.PlainDateTime(2026, 7, 14, 8, 0),
    author: authors.HerniHistorie,
    description_html: "Předělali jsme náš Discord! V rámci hledání nových dobrovolníků jsme předělali náš Discord, který je teď přehlednější a doplněn o nové komunitní funkce!",
    bufferPostId: '6a50e669e8766eb72202fc7c',
};

export default blogPost;
