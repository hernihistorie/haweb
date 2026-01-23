import { Temporal } from '@js-temporal/polyfill';

import type { BlogPost } from '$src/types';
import { authors } from '$src/data/authors';

const blogPost: BlogPost = {
    published: true,
    id: 54,
    slug: 'bulanci-paratexty',
    title: {
        cs: 'Projekt Bulánci: Data o hráčské činnosti od vývojářů Bulánků'
    },
    date: new Temporal.PlainDate(2025, 8, 1),
    author: authors.HerniHistorie,
    description_html: `
        Nedávno jsme dostali od jednoho z tvůrců Bulánků flashku s hromadou dat k této kultovní hře. Na flashce jsou primárně data k aktivitám kolem hry jako statistiky návštěvnosti oficiálního webu, fanouškovské výtvory jako demo fanouškovské mapy, nebo materiály jako zprávy a data pro potenciální sponzory a mnoho dalšího.
    `
};

export default blogPost;
