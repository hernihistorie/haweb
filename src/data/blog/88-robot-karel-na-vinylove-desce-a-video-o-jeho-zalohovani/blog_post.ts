import { Temporal } from '@js-temporal/polyfill';

import type { BlogPost } from '$src/types';
import { authors } from '$src/data/authors';

const blogPost: BlogPost = {
    published: true,
    id: 88,
    slug: 'robot-karel-na-vinylove-desce-a-video-o-jeho-zalohovani',
    image: '/photos/blog-posts/robot-karel-na-vinylove-desce-a-video-o-jeho-zalohovani/robot-karel-na-vinylove-desce-a-video-o-jeho-zalohovani.jpg',
    title: {
        cs: "️Robot Karel na vinylové desce a video o jeho zálohování",
    },
    date: new Temporal.PlainDateTime(2026, 5, 18, 8, 25),
    author: authors.HerniHistorie,
    description_html: "️Tomáš Bartovský, autor české verze Robota Karla, nám do archivu minulý rok věnoval dvě vinylové desky a instrukce k jejich používání. Po zevrubné digitalizaci, na které se podílel i Jan Heřman se nám z desek podařilo vydolovat několik starých programů. O procesu této digitalizace vzniklo video.",
    bufferPostId: '6a07c0a2c8c77dcca90b66b9',
};

export default blogPost;
