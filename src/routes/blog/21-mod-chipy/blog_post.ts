import { Temporal } from '@js-temporal/polyfill';

import type { BlogPost } from '$src/types';

export const blogPost21: BlogPost = {
    id: 21,
    slug: 'mod-chipy',
    image: '/photos/modchipy_ps.jpg',
    title: {
        cs: 'Přírůstek do sbírky Herního archivu: Modchipy pro PS1/PS2'
    },
    date: new Temporal.PlainDate(2024, 7, 29),
    author_name: 'Herní historie',
    description_html: `
        Dějiny herního média nejsou jen dějinami velkých společností, AAA her a oficiálně distribuovaných titulů - dějiny videoher jsou i dějinami pirátění, ilegálního šíření ale i modování herních konzolí. Takové modchipy umožňovali hráčstvu (které si jej pečlivě napájelo do své konzole), nejen hrát oficiální hry nepříliš oficiální cestou, ale také jim otevřeli možnost pro danou platformu vytvářet hry nové.
    `
};
