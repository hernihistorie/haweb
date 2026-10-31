import type { PostSeries } from "$src/types";
import PongXD8001Series from "./pong-xd8001";
import { PONG_XD8001_SERIES_SLUG } from "./pong-xd8001";

export const seriesBySlug = {
    [PONG_XD8001_SERIES_SLUG]: PongXD8001Series,
} as const;

export type SeriesSlug = keyof typeof seriesBySlug;

export const seriesByBlogPostId: Record<number, PostSeries[]> = Object.values(seriesBySlug).reduce(
    (acc, series) => {
        series.posts.forEach((post) => {
            if (!acc[post.id]) {
                acc[post.id] = [];
            }
            acc[post.id].push(series);
        });
        return acc;
    },
    {} as Record<number, PostSeries[]>,
);
