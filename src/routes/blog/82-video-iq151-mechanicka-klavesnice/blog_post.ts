import { Temporal } from '@js-temporal/polyfill';

import type { BlogPost } from '$src/types';
import { authors } from '$src/data/authors';

const blogPost: BlogPost = {
    published: false,
    id: 82,
    slug: 'video-iq151-mechanicka-klavesnice',
    image: '/photos/blog-posts/iq151_mechanicka_klavesnice.png',
    title: {
        cs: 'Video o našem IQ 151 od kanálu Andrew Tesla',
        en: 'Video about our IQ 151 by Andrew Tesla'
        },
    date: new Temporal.PlainDate(2026, 2, 18),
    // english_translation_date: new Temporal.PlainDate(2026, 1, 22),
    author: authors.HerniHistorie,
    description_html: {
        cs: `
            Nedávno se nám dostal do rukou speciální kousek IQ 151, který nemá svou klasickou klávesnici vyrobenou z telefonových tlačítek, ale má krásnou klávesnici mechanickou. Toto IQ si od nás půjčil kanál Andrew Tesla a udělal o této krásce video.
        `,
        en: `
            We recently got our hands on a special piece of the IQ 151 computer, which doesn't have the classic keyboard made from telephone buttons, but features a beautiful mechanical keyboard. This IQ was borrowed by the Andrew Tesla channel, who made a video about this beauty.
        `
    }
};

export default blogPost;
