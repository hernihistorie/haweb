import { Temporal } from '@js-temporal/polyfill';

import type { BlogPost } from '$src/types';

export const blogPost73: BlogPost = {
    id: 73,
    slug: 'seznam-her',
    title: {
        cs: 'Vytvořili jsme s Herním archologem a cs.speccy seznam nezazálohovaných her'
    },
    date: new Temporal.PlainDate(2025, 10, 24),
    author_name: 'Herní historie',
    description_html: `
        Zdaleka ne všechny hry z naší historie existují ve sbírkách a digitálních repozitářích. Čas od času se stane, že narazíme na nějaký kousek který byl třeba plánovaný, nebo dokonce na něj lidé vzpomínají, ale dostat se k hratelné verzi nedá. Ty je pak dobré někam sepsat a doufat, že se třeba někde vyloupnou. My jsme se rozhodli vytvořit seznam univerzální a doplnit ke každé hře ideálně i zdroje aby šlo v budoucnu zjistit, jak jsme se o hře dozvěděli.
    `
};
