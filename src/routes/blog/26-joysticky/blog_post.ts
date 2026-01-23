import { Temporal } from '@js-temporal/polyfill';

import type { BlogPost } from '$src/types';
import { authors } from '$src/data/authors';

const blogPost: BlogPost = {
    published: true,
    id: 26,
    slug: 'joysticky',
    image: '/photos/ovladac_homebrew1.jpg',
    title: {
        cs: 'Přírůstek do Herního archivu: Podomácku vyrobené ovladače k ZX Spectru'
    },
    date: new Temporal.PlainDate(2024, 8, 26),
    author: authors.HerniHistorie,
    description_html: `
        Herní historií nejsou jen hry a oficiální hardware – součástí herní historie (zejména té jenž se odehrávala v rámci bývalého Východního bloku) je i podomácku zbastlené příslušenství, jako např. herní joysticky.
    `
};

export default blogPost;
