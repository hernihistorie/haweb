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
        en: "Become a volunteer for the Herní historie association!"
    },
    date: new Temporal.PlainDateTime(2026, 4, 28, 8, 25),
    author: authors.HerniHistorie,
    description_html: {
        cs: "V našem spolku už 11 let pracujeme na popularizaci a zachování tuzemské i zahraniční herní historie. Naše činnost je z podstaty nezisková, a proto se dlouhodobě spoléháme na pomoc dobrovolníků, kteří se aktivitám spolku věnují ve svém volném čase. A právě teď se k nám můžete připojit i vy!",
        en: "Within our association, we've been working for 11 years to popularize and preserve both local and global game history. Our activities are principally nonprofit, and that's why in the long run, we're relying on the activities of volunteers, who contribute to the group's activities in their free time. And now's the time when you can join in too!"
    },
    bufferPostId: '69e95bca37c7cb9a4e08fc71',
};

export default blogPost;
