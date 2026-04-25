import { Temporal } from '@js-temporal/polyfill';

import type { BlogPost } from '$src/types';
import { authors } from '$src/data/authors';

const blogPost: BlogPost = {
    published: true,
    id: 86,
    slug: 'stante-se-dobrovolnikem-spolku-herni-historie',
    image: '/photos/blog-posts/stante-se-dobrovolnikem-spolku-herni-historie/stante-se-dobrovolnikem-spolku-herni-historie.jpg',
    title: {
        cs: "Staňte se dobrovolníkem spolku Herní historie!",
    },
    date: new Temporal.PlainDateTime(2026, 4, 29, 8, 25),
    author: authors.HerniHistorie,
    description_html: "V našem spolku už 11 let pracujeme na popularizaci a zachování tuzemské i zahraniční herní historie. Naše činnost je z podstaty nezisková, a proto se dlouhodobě spoléháme na pomoc dobrovolníků, kteří se aktivitám spolku věnují ve svém volném čase. A právě teď se k nám můžete připojit i vy!",
    bufferPostId: '69e95bca37c7cb9a4e08fc71',
};

export default blogPost;
