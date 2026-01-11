import { Temporal } from '@js-temporal/polyfill';

import type { BlogPost } from '$src/types';
import { authors } from '$src/data/authors';

export const blogPost20: BlogPost = {
    id: 20,
    slug: 'prislusenstvi-zxspectrum',
    image: '/photos/prislusenstvi_zxspectrum.jpg',
    title: {
        cs: 'Přírůstek do sbírky Herního archivu: Příslušenství k mikropočítačům',
        en: 'New addition to the Czechoslovak Game Archive collection: Accessories for microcomputers'
    },
    date: new Temporal.PlainDate(2024, 6, 21),
    english_translation_date: new Temporal.PlainDate(2025, 12, 18),
    author: authors.HerniHistorie,
    description_html: {
        cs:`
            Velmi často se naše sbírka rozšiřuje o věci ke straým mikropočítačům jako je ZX Spectrum  nebo 8-bitové Atari. Typicky jde o kazety s programy nicméně občas se k nám dostanou i velmi roztomilé, po domácku dělané příslušenství, jako je např. ovladač na obrázku. Ty byly svého času vyráběné ze všeho možného - ze starých zásuvek, tlačítek z telefonů, páček od sprch, krabiček od mýdel apod.. Kdyby náhodou někdo měl podobné dobové příslušenství a byl ochoten ho darovat někomu kdo se o něj postará a využije, tak budeme moc rádi, když nás kontaktujete!
        `,
        en:`
            Our collection very often expands with items for old microcomputers such as the ZX Spectrum or 8-bit Atari platforms. Typically, these are cassettes with programs, but occasionally we also acquire very cute, homemade accessories, like the controller in the picture. These were made at the time from all sorts of materials - old sockets, buttons from phones, shower handles, soap boxes, etc. If anyone happens to have similar period accessories and is willing to donate them to someplace who will take care of and use them, we would be very grateful if you contact us!
        `
    }
};
