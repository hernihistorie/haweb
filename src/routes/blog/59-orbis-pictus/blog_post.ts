import { Temporal } from '@js-temporal/polyfill';

import type { BlogPost } from '$src/types';
import { authors } from '$src/data/authors';

const blogPost: BlogPost = {
    published: true,
    id: 59,
    slug: 'orbis-pictus',
    title: {
        cs: 'Zaarchivovali jsme Orbis Pictus - němčina'
    },
    date: new Temporal.PlainDate(2025, 8, 22),
    author: authors.HerniHistorie,
    description_html: `
        Nedávno se nám dostaly do rukou dvě kazety s výukovými hrami na ZX Spectrum Orbis Pictus 1 a Orbis Pictus 2. Bohužel obě kazety byly poškozené a i přes značnou snahu data opravit se nám všechny programy na kazetách nepovedlo zcela sprovoznit. Proto moc děkujeme Danielovi Szarázovi že nám poslal kopie svých kazet z kterých jsme následně celý program zkompletovali.
    `
};

export default blogPost;
