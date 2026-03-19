import { Temporal } from '@js-temporal/polyfill';

import type { BlogPost } from '$src/types';
import { authors } from '$src/data/authors';

const blogPost: BlogPost = {
    published: true,
    id: 78,
    slug: 'oprava-coleco-vision',
    image: '/photos/blog-posts/coleco-vision_1.jpg',
    title: {
        cs: 'Opravili jsme konzoli ColecoVision',
        en: 'We have repaired a ColecoVision console'
    },
    date: new Temporal.PlainDate(2025, 11, 11),
    english_translation_date: new Temporal.PlainDate(2025, 12, 18),
    author: authors.HerniHistorie,
    description_html: {
        cs: `
            Z rané éry herního průmyslu asi většina lidí zná zejména Atari VCS, nicméně VCS nebylo jedinou konzolí, která se na americkém trhu tehdy prodávala. Další bylo třeba ColecoVision které se nám po mnoha výjezdech rozbilo. Nakonec ho opravil Lukáš Nevařil takže nyní se na něj můžete těšit na dalších výjezdech!
        `,
        en: `
            From the early era of the game industry, most people probably know mainly about the Atari VCS, but the VCS was not the only console sold on the American market at that time. Another was the ColecoVision, and ours broke down after many exhibitions. Now, it was repaired by Lukáš Nevařil, so you can now look forward to it at future outings!
        `
    }
};

export default blogPost;
