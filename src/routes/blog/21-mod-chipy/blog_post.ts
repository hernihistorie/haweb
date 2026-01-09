import { Temporal } from '@js-temporal/polyfill';

import type { BlogPost } from '$src/types';
import { authors } from '$src/lib/data/authors';

export const blogPost21: BlogPost = {
    id: 21,
    slug: 'mod-chipy',
    image: '/photos/modchipy_ps.jpg',
    title: {
        cs: 'Přírůstek do sbírky Herního archivu: Modchipy pro PS1/PS2',
        en: 'New addition to the Czechoslovak Game Archive collection: Modchips for PS1/PS2'
    },
    date: new Temporal.PlainDate(2024, 7, 29),
    english_translation_date: new Temporal.PlainDate(2025, 12, 18),
    author: authors.HerniHistorie,
    description_html: {
        cs:`
            Dějiny herního média nejsou jen dějinami velkých společností, AAA her a oficiálně distribuovaných titulů - dějiny videoher jsou i dějinami pirátění, ilegálního šíření ale i modování herních konzolí. Takové modchipy umožňovali hráčstvu (které si jej pečlivě napájelo do své konzole), nejen hrát oficiální hry nepříliš oficiální cestou, ale také jim otevřeli možnost pro danou platformu vytvářet hry nové.
        `,
        en:`
            The history of the game medium is not only the history of big companies, AAA games, and officially distributed titles - the history of video games also includes piracy, illegal distribution, and console modding too. Such modchips allowed gamers (who carefully soldered them into their consoles) not only to play official games through unofficial means but also opened up the possibility of creating new games for the given platform.
        `
    }
};
