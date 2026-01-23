import { Temporal } from '@js-temporal/polyfill';

import type { BlogPost } from '$src/types';
import { authors } from '$src/data/authors';

const blogPost: BlogPost = {
    published: true,
    id: 72,
    slug: 'pong-mas601-pod-lupou',
    image: '/photos/pong/blog-post-3/1-kolaz-AY-MAS-lupa.jpg',
    title: {
        cs: 'Obvody MAS601 vs AY-3-8500 pod detektivní lupou'
    },
    date: new Temporal.PlainDate(2025, 10, 21),
    author: authors.JiriBernasek,
    description_html: `
        V předchozích dvou článcích jsme si podrobně prohlédli unikátní herní konzoli XD-8001 z Piešťanské Tesly, z pohledu uživatele, vnitřku přístroje, i struktury samotných integrovaných obvodů, které celou hru řídí. Tento závěrečný článek uzavře naši dobrodružnou cestu historickou herní technologií několika ukázkami zajímavých nálezů ve struktuře čipů, a konečně i srovnáním kvalit MAS601-603 s podobně zaměřeným, celosvětově dominantním čipem AY-3-8500, jehož zdokumentování se výborně zhostil Cole Johnson.
    `
};

export default blogPost;
