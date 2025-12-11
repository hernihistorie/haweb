import { Temporal } from '@js-temporal/polyfill';

import type { BlogPost } from '$src/types';

export const blogPost1: BlogPost = {
    id: 1,
    slug: 'svycarske-dobrodruzstvi',
    image: '/photos/svycarske-dobrodruzstvi/prace.jpg',
    title: {
        cs: 'Švýcarské dobrodružství',
        en: 'Swiss Adventure'
    },
    description_html: `
        Krátce po té, co jsem se oficiálně zapojil do činnosti spolku Herní historie, stala se věc. Už si bohužel napamatuji, kdo s ní přišel, ale protože pro mě každá věc co smrdí dobrodružstvím, je věcí šíleně neodolatelnou, okamžitě jsem se přihlásil a dokonce jsem nabídl i svá rychlá kola. O jakou věc, že se jedná? Výlet do Švýcarska.
    `,
    date: new Temporal.PlainDate(2021, 4, 28),
    author_name: 'Čápa'
};
