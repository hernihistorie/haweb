import { Temporal } from '@js-temporal/polyfill';

import type { BlogPost } from '$src/types';

export const blogPost15: BlogPost = {
    id: 15,
    slug: 'gta-3-prirucky',
    image: '/photos/gta_3_prirucka.jpg',
    title: {
        cs: 'Do archivu jsme získali vzácnou příručku ke GTA 3'
    },
    date: new Temporal.PlainDate(2024, 7, 15),
    author_name: 'Herní historie',
    description_html: `
        Sérii videoherních příruček u nás vydávala firma STUARE, která u nás překládala "strategy guides" od dvou konkurenčních zahrničních firem - Brady Games (od kterého je příručka na obrázku) a Prima Games. Těchto návodů vyšo celkově 48 (a v archivu nám jich zbývá 9). Tyto návody byli svého času plnohodnotnou součástí mnoha herních zážitků a proto jsme rádi, že máme možnost mít tento vzácnější kousek u nás v archvivu.
    `
};
