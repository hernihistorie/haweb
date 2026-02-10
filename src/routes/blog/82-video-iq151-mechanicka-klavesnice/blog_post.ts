import { Temporal } from '@js-temporal/polyfill';

import type { BlogPost } from '$src/types';
import { authors } from '$src/data/authors';

const blogPost: BlogPost = {
    published: false,
    id: 82,
    slug: 'video-iq151-mechanicka-klavesnice',
    image: '/photos/blog-posts/iq151_mechanicka_klavesnice.png',
    title: {
        cs: 'Video o našem IQ 151 od kanálu Andrew Tesla'
        },
    date: new Temporal.PlainDate(2026, 2, 18),
    // english_translation_date: new Temporal.PlainDate(2026, 1, 22),
    author: authors.HerniHistorie,
    description_html: {
        cs: `
            Nedávno se nám dostal do rukou speciální kousek IQ 151, který nemá svou klasickou klávesnici vyrobenou z telefonových tlačítek, ale má krásnou klávesnici mechanickou. Toto IQ si od nás půjčil kanál Andrew Tesla a udělal o této krásce video.
        `
    }
};

export default blogPost;
