import { Temporal } from '@js-temporal/polyfill';

import type { BlogPost } from '$src/types';
import { authors } from '$src/data/authors';

const blogPost: BlogPost = {
    published: true,
    id: 19,
    slug: 'jrc-letaky',
    image: '/photos/jrc_letak.jpg',
    title: {
        cs: 'Do sbírky Herního archivu nám přibylo několik katalogů od JRC'
    },
    date: new Temporal.PlainDate(2024, 5, 24),
    author: authors.HerniHistorie,
    description_html: `
        Do správného archivu videoher samozřejmě nepatří jen samotné hry ale i mnoho věcí kolem - herní časopiy, propagační materiály, merch, ale také distribuční materiály od prodejců jako je např. JRC. Z takovýchto katalogů se dají vyčíst různé zajímavé historické informace, jako co za hry se zde distribuovalo, kolik tyto hry stály nebo kdy se sem vůbec dostaly.
    `
};

export default blogPost;
