import { Temporal } from '@js-temporal/polyfill';

import type { BlogPost } from '$src/types';
import { authors } from '$src/data/authors';

export const blogPost2: BlogPost = {
    id: 2,
    slug: 'retrofest-2024',
    image: 'https://retroherna.org/wiki/lib/exe/fetch.php?media=web2:novinky:rf24_banner.jpg',
    title: {
        cs: 'RetroFest 2024 streamuje do vašich obýváků'
    },
    date: new Temporal.PlainDate(2024, 1, 23),
    author: authors.HerniHistorie,
    description_html: `
        S radostí oznamujeme, že v neděli 28. ledna se odehraje další ročník RetroFest streamu! Ať už jste fanoušci retroher, co rádi navštěvují RetroHernu na veřejných akcích, nebo se zajímáte o herní historii v našich kotlinách a chcete vědět na čem pracujeme, doufáme, že vás nalákáme se stavit na našem nepravidelném streamu. Můžete se těšit na přednášku o Československých televizních tenisech, na pařbu Unreal Tournamentu s publikem, na ohlášení několika novinek v rámci našeho projektu Herní archiv, a na hraní více či méně známých her z našich luhů a hájů!
    `
};
