import { Temporal } from '@js-temporal/polyfill';

import type { BlogPost } from '$src/types';
import { authors } from '$src/data/authors';

const blogPost: BlogPost = {
    published: false,
    id: 85,
    slug: 'vytvorili-jsme-cistici-mechanismus-na-8-diskety',
    image: '/photos/blog-posts/vytvorili-jsme-cistici-mechanismus-na-8-diskety/vytvorili-jsme-cistici-mechanismus-na-8-diskety_1.jpg',
    title: {
        cs: "Vytvořili jsme čistící mechanismus na 8″ diskety",
        en: "We created a cleaning mechanism for 8″ floppy disks"
    },
    date: new Temporal.PlainDateTime(2026, 4, 15, 8, 25),
    author: authors.HerniHistorie,
    description_html: {
        cs: "Nedávno jsme ve spolupráci s Birdbrain vytvořili mechanismus na čištění 8″ disket. Mechanismus si můžete vytisknout i vy na své 3D tiskárně.",
        en: "Recently, in collaboration with Birdbrain, we created a cleaning mechanism for 8″ floppy disks. You can also print the mechanism on your own 3D printer."
    },
    bufferPostId: '69d905c876cd773eca025b4f',
};

export default blogPost;
