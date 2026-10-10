import type { PostSeries } from "$src/types";
import post67 from "$src/data/articles/67-pong-xd8001-pod-drobnohledem/blog_post";
import post70 from "$src/data/articles/70-pong-mas601-pod-mikroskopem/blog_post";
import post72 from "$src/data/articles/72-pong-mas601-pod-lupou/blog_post";

export const PONG_XD8001_SERIES_SLUG = "pong-xd8001";

const PongXD8001Series: PostSeries = {
    slug: PONG_XD8001_SERIES_SLUG,
    title: {
        cs: "O televizní hře Tesla XD-8001",
        en: "Tesla XD-8001 television game",
    },
    // description: {
    //     cs: "Série článků o vnitřnostech televizní hry Tesla XD-8001.",
    //     en: "A series of blog posts about the insides of the Tesla XD-8001 television game."
    // },
    posts: [post67, post70, post72],
};

export default PongXD8001Series;
