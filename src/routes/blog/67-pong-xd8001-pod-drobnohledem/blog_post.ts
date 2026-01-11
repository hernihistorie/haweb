import { Temporal } from '@js-temporal/polyfill';

import type { BlogPost } from '$src/types';
import { authors } from '$src/data/authors';

export const blogPost67: BlogPost = {
    id: 67,
    slug: 'pong-xd8001-pod-drobnohledem',
    image: '/photos/pong/1-XD-8001.jpg',
    title: {
        cs: 'Televizní hra Tesla XD-8001 pod drobnohledem'
    },
    date: new Temporal.PlainDate(2025, 9, 26),
    author: authors.JiriBernasek,
    description_html: `
        Herní konzole ve stylu známého Pongu byly fenoménem 70. let nejen na západě, ale zhruba od přelomu 1976-1977 začaly různé jejich verze vznikat i v tehdejším Československu. Říkalo se jim tu zpravidla Televizní tenis, či prostě Televizní hra, a my se nyní v trojdílné minisérii článků zaměříme po technické stránce na jeden unikát mezi nimi.
    `
};
