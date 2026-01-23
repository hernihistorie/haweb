import { Temporal } from '@js-temporal/polyfill';

import type { BlogPost } from '$src/types';
import { authors } from '$src/data/authors';

const blogPost: BlogPost = {
    published: true,
    id: 44,
    slug: 'bulanci-dotaznik',
    image: '/photos/blog-posts/bulanci_dotaznik.jpg',
    title: {
        cs: 'Projekt Fanouškovské aktivity kolem hry Bulánci - DOTAZNÍK'
    },
    date: new Temporal.PlainDate(2025, 4, 16),
    author: authors.RudolfJanSuchy,
    description_html: `
        Mnozí z vás jistě vyrůstali na prvních Buláncích - na hře, která několik let v kuse okupovala mnoho školních, firemních a domácích počítačů a která byla hlavní náplní každé hodiny, která probíhala v nějaké počítačové učebně. Narozdíl od jiných významných her československého kánonu si Bulánky moc lidí nepamatuje pro příběh, ani pro hlášky ale právě pro sdílený zážitek z jejich hraní.
    `
};

export default blogPost;
