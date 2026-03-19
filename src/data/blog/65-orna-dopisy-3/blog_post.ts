import { Temporal } from '@js-temporal/polyfill';

import type { BlogPost } from '$src/types';
import { authors } from '$src/data/authors';

const blogPost: BlogPost = {
    published: true,
    id: 65,
    slug: 'orna-dopisy-3',
    title: {
        cs: 'Do třetice všeho dobrého: Poslední část dopisové komunikace Jana Orny'
    },
    date: new Temporal.PlainDate(2025, 9, 16),
    author: authors.HerniHistorie,
    description_html: `
        Po měsíci usilovného skenování je naše práce u konce - všechny dopisy od Jana Orny jsou zdigitalizovány. V poslední části najdete další seznamy her a nabídkových listů, dopisy od řady tuzemských pirátů a dokonce dopisovou komunikaci obohacenou i o fotografie mezi Janem Ornou a jeho kamarádem, s kterým si začal psát nazákladě inzerátu v časopisu Excalibur.
    `
};

export default blogPost;
