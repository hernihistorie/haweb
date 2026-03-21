import type { BlogPostSeries } from "$src/types";
import blogPost67 from "$src/data/blog/67-pong-xd8001-pod-drobnohledem/blog_post";
import blogPost70 from "$src/data/blog/70-pong-mas601-pod-mikroskopem/blog_post";
import blogPost72 from "$src/data/blog/72-pong-mas601-pod-lupou/blog_post";

export const PONG_XD8001_SERIES_SLUG = "pong-xd8001";

const PongXD8001Series: BlogPostSeries = {
    slug: PONG_XD8001_SERIES_SLUG,
    title: {
        cs: "O televizní hře Tesla XD-8001",
        en: "Tesla XD-8001 television game"
    },
    // description: {
    //     cs: "Série článků o vnitřnostech televizní hry Tesla XD-8001.",
    //     en: "A series of blog posts about the insides of the Tesla XD-8001 television game."
    // },
    blogPosts: [
        blogPost67,
        blogPost70,
        blogPost72
    ]
};

export default PongXD8001Series;