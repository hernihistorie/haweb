import { Temporal } from '@js-temporal/polyfill';

import type { BlogPost } from '$src/types';
import { authors } from '$src/data/authors';

export const blogPost22: BlogPost = {
    id: 22,
    slug: 'skeny-scenaru',
    title: {
        cs: 'Skeny scénářů k pořadu Videostop'
    },
    date: new Temporal.PlainDate(2024, 8, 2),
    author: authors.HerniHistorie,
    description_html: `
        Jak jsme oznámili v jenom z předchozích příspěvků, tak jsme dělali rozhovor s Vladimírem Bezděkem, s tvůrcem pořadu Videostop. Ten nám po dokončení rozhovoru zapůjčil scénáře ke dvěma dílům tohoto slavného pořadu - přesněji návrh na první díl (který je doplněný o posudek pořadu a ruční poznámky k úpravě scénáře) a pak scénář k dílu pátému.
    `
};
