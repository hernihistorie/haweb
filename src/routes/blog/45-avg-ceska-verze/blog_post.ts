import { Temporal } from '@js-temporal/polyfill';

import type { BlogPost } from '$src/types';

export const blogPost45: BlogPost = {
    id: 45,
    slug: 'avg-ceska-verze',
    title: {
        cs: 'Zdigitalizovali jsme Antivirus AVG v 1.62'
    },
    date: new Temporal.PlainDate(2025, 4, 11),
    author_name: 'Herní historie',
    description_html: `
        Není nic horšího, než když si na počítači chcete zahrát letní olympiádu a místo ní na vás vybafne virus, který chce sušenku. A proto jsme do archivu pořídili prvotřídní ochranu od AVG - tedy vlastně Anti-Virus Guard, jak se program tehdy jmenoval. Verze 1.62 z listopadu 1991 je nově v našem inventáři a její dump si můžete stáhnout i vy a ochránit své 386ky od pravěkých breberek.
    `
};
