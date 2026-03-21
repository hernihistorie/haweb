import { Temporal } from '@js-temporal/polyfill';

import type { BlogPost } from '$src/types';
import { authors } from '$src/data/authors';

const blogPost: BlogPost = {
    published: true,
    id: 46,
    slug: 'spoluprace-nfa',
    image: '/photos/blog-posts/nfa_spoluprace.jpg',
    title: {
        cs: 'Oznamujeme spolupráci mezi spolkem Herní historie a Pixelarchiv.cz!'
    },
    date: new Temporal.PlainDate(2025, 4, 11),
    author: authors.HerniHistorie,
    description_html: `
        S velikým potěšením oficiálně oznamujeme partnerství mezi naším skromným spolkem a Pixelarchiv.cz z Národního filmovýho archivu. V rámci této spolupráce konzultujeme vývoj archivní stanice stejně jako herní databáze a spolupořádáme workshopy o historii a prezervaci her. Jsme rádi, že existuje ze strany státních institucí snaha zachovat tuto část našeho kulturního dědictví a jsme rádi, že můžeme k těmto snahám nějak přispět!
    `
};

export default blogPost;
