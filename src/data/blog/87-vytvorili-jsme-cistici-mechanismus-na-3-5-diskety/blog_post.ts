import { Temporal } from '@js-temporal/polyfill';

import type { BlogPost } from '$src/types';
import { authors } from '$src/data/authors';

const blogPost: BlogPost = {
    published: true,
    id: 87,
    slug: 'vytvorili-jsme-cistici-mechanismus-na-3-5-diskety',
    image: '/photos/blog-posts/vytvorili-jsme-cistici-mechanismus-na-3-5-diskety/vytvorili-jsme-cistici-mechanismus-na-3-5-diskety.jpg',
    title: {
        cs: "Vytvořili jsme čistící mechanismus na 3,5″ diskety",
        en: "We have created a cleaning mechanism for 3,5″ floppy disks"
    },
    date: new Temporal.PlainDateTime(2026, 5, 5, 8, 15),
    author: authors.HerniHistorie,
    description_html: {
        cs: "Stejně jako u 8″ disketovek tak i k 3,5″ disketetám jsme ve spolupráci s Birdbrain vytvořili mechanismus na jejich čištění. Oproti předchozím řešením se vyznačuje podporou pro čištění diskety z obou stran",
        en: "Following the one for 8″ flopies, for 3,5″ floppies too we have made a cleaning mechanism in cooperation with Birdbrain. Compared to previous solutions, it provides capability for cleaning floppy disks from both sides."
    },
    bufferPostId: '69f3eb99639a311a400956a2',
};

export default blogPost;
