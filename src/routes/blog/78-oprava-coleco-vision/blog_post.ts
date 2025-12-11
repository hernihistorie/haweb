import { Temporal } from '@js-temporal/polyfill';

import type { BlogPost } from '$src/types';

export const blogPost78: BlogPost = {
    id: 78,
    slug: 'oprava-coleco-vision',
    image: '/photos/blog-posts/coleco-vision_1.jpg',
    title: {
        cs: 'Opravili jsme konzoli ColecoVision'
    },
    date: new Temporal.PlainDate(2025, 11, 11),
    author_name: 'Herní historie',
    description_html: `
        Z rané éry herního průmyslu asi většina lidí zná zejména Atari VCS, nicméně VCS nebylo jedinou konzolí, která se na americkém trhu tehdy prodávala. Další bylo třeba ColecoVision které se nám po mnoha výjezdech rozbilo. Nakonec ho opraviil Lukáš Nevařil takže nyní se na něj můžete těšit na dalších výjezdech!
    `
};
