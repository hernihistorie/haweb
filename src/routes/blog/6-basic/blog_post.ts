import { Temporal } from '@js-temporal/polyfill';

import type { BlogPost } from '$src/types';

export const blogPost6: BlogPost = {
    id: 6,
    slug: 'basic',
    image: '/photos/basic_interpreter.jpg',
    title: {
        cs: 'Nově zachráněné kompilátory BASICu'
    },
    date: new Temporal.PlainDate(2024, 3, 25),
    author_name: 'Herní historie',
    description_html: `
        Kazeta na obrázku níže byla do nedávna plná nezazálohovaných a do češtiny/slovenštiny přeložených programů na kompilaci jazyku BASICu. Všechny programy jsou pro počítač ZX Spectrum/Didaktik/Delta a patří mezi ně: COLT, MCCODER2, TOBOS PF a HiSoft BASIC.
    `
};
