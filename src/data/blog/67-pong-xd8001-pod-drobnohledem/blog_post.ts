import { Temporal } from '@js-temporal/polyfill';

import type { BlogPost } from '$src/types';
import { authors } from '$src/data/authors';

const blogPost: BlogPost = {
    published: true,
    id: 67,
    slug: 'pong-xd8001-pod-drobnohledem',
    image: '/photos/pong/1-XD-8001.jpg',
    title: {
        cs: 'Televizní hra Tesla XD-8001 pod drobnohledem',
        en: 'The Tesla XD-8001 television game under the microscope'
    },
    date: new Temporal.PlainDate(2025, 9, 26),
    english_translation_date: new Temporal.PlainDate(2026, 7, 16),
    author: authors.JiriBernasek,
    description_html: {
        cs: `
            Herní konzole ve stylu známého Pongu byly fenoménem 70. let nejen na západě, ale zhruba od přelomu 1976-1977 začaly různé jejich verze vznikat i v tehdejším Československu. Říkalo se jim tu zpravidla Televizní tenis, či prostě Televizní hra, a my se nyní v trojdílné minisérii článků zaměříme po technické stránce na jeden unikát mezi nimi.
        `,
        en: `
            Game consoles in the style of the famous Pong were a phenomenon of the 1970s not only in the West: from around the turn of 1976-1977, various versions of them began to appear in what was then Czechoslovakia as well. They were usually called Television tennis, or simply Television game, and in this three-part mini-series of articles we will take a technical look at one unique specimen among them.
        `
    }
};

export default blogPost;
