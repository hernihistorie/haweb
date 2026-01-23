import { Temporal } from '@js-temporal/polyfill';

import type { BlogPost } from '$src/types';
import { authors } from '$src/data/authors';

const blogPost: BlogPost = {
    published: true,
    id: 52,
    slug: 'timewarrior',
    image: '/photos/blog-posts/timewarrior.jpg',
    title: {
        cs: 'Zdigitalizovali jsme anglickou hru Time Warrior'
    },
    date: new Temporal.PlainDate(2025, 7, 11),
    author: authors.HerniHistorie,
    description_html: `
        Time Warrior je hra pro ZX Spectrum z roku 1992 a později pro Amigu z roku 1997, kterou vytvořil anglický autor Frank Oliver. Odehrává ve fantaskním světě inspirované jeho trilogií knih a k příběhům vznikl i hudební soundtrack. Přestože se většinou věnujeme místní tvorbě, tak hru Time Warrior sháněl pro projekt eXoIF kolega z Rakouska a kontaktoval Franka Olivera, tkerý mu poslal CD které vytvořil v roce 2016 s kompilací vlastní tvorby včetně plné verze Time Warriora.
    `
};

export default blogPost;
