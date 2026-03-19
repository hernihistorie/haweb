import { Temporal } from '@js-temporal/polyfill';

import type { BlogPost } from '$src/types';
import { authors } from '$src/data/authors';

const blogPost: BlogPost = {
    published: true,
    id: 57,
    slug: 'amiga-diskety',
    title: {
        cs: 'Zazálohovali jsme diskety s programy pro počítač Amiga'
    },
    date: new Temporal.PlainDate(2025, 8, 15),
    author: authors.HerniHistorie,
    description_html: `
        Kromě her se u nás vyvíjel i užitkový software. U mnoha programů postačovaly překlady nebo dokonce jen návody v češtině, ale občas vznikl úplně nový kousek. Několik pro Amigu jsme získali a zdigitalizovali. Velkým tahákem byla podpora češtiny v operačním systému, najdete tu tak překlad pro Workbench. Stejně tak byly populární výukové programy. Pokud neumíte psát všemi deseti, tak teď máte příležitost to dohnat.
    `
};

export default blogPost;
