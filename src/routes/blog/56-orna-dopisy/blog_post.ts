import { Temporal } from '@js-temporal/polyfill';

import type { BlogPost } from '$src/types';
import { authors } from '$src/data/authors';

export const blogPost56: BlogPost = {
    id: 56,
    slug: 'orna-dopisy',
    title: {
        cs: 'Jsme v procesu skenování dopisové komunikace Jana Orny'
    },
    date: new Temporal.PlainDate(2025, 8, 8),
    author: authors.HerniHistorie,
    description_html: `
        Velmi často zdůrazňujeme, že herní historie nejsou jen hry samotné - je to hardware na kterém tyto hry běží, jsou to recenze a časopisy o hrách, jsou to vzpomínky vývojářů i hráčů, ale je to i komunikace ať už mezi vývojáři, tak mezi hráči. Proto jsme byli nadšení, když jsme nedávno od Honzi Orny z Arcade Her dostali (společně s československou arkádou) krabici s jeho dopisovou komunikací.
    `
};
