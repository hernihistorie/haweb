import { Temporal } from '@js-temporal/polyfill';

import type { BlogPost } from '$src/types';
import { authors } from '$src/data/authors';

const blogPost: BlogPost = {
    published: true,
    id: 51,
    slug: 'kybermys-sken',
    image: '/photos/blog-posts/kybermys_sken.jpg',
    title: {
        cs: 'Oskenovali jsme velkou část časopisu KyberMyš!'
    },
    date: new Temporal.PlainDate(2025, 7, 8),
    author: authors.HerniHistorie,
    description_html: `
        Mezi lety 2002 a 2007 vycházel herní časopis KyberMyš, který oproti své konkurenci cílil primárně na mladší čtenářstvo. Celkem vyšlo 68 čísel, první v květnu 2002, poslední v prosinci 2007. Začínal s 36 stranami, ale časem se rozrostl – nejprve na 44, později až na 52 stran. Každé číslo obsahovalo CD-ROM plné herních dem, plných verzí i bonusových programů. Vydával ho Egmont ČR.
    `
};

export default blogPost;
