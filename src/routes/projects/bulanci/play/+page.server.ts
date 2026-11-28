import { bulanciMapFile, bulanciMaps, galleryMap } from "$src/data/bulanci/maps.server";
import { compareMaps, DEFAULT_SORT, PLAY_GALLERY_SIZE } from "../maps/mapList";
import type { PageServerLoad } from "./$types";

/**
 * How many other maps the browser picks its random selection from. All of them would make the
 * page's data large, and this is plenty to keep reshuffling.
 */
const RANDOM_POOL_SIZE = 90;

export const load: PageServerLoad = async () => {
    const playable = bulanciMaps.filter((map) => bulanciMapFile(map));
    const topMaps = playable
        .toSorted((a, b) => compareMaps(a, b, DEFAULT_SORT))
        .slice(0, PLAY_GALLERY_SIZE);
    // Picked when the page is built; the browser shuffles them again
    const randomPool = playable
        .filter((map) => !topMaps.includes(map) && map.screenshot && !map.nsfw)
        .map((map) => ({ map, order: Math.random() }))
        .sort((a, b) => a.order - b.order)
        .slice(0, RANDOM_POOL_SIZE)
        .map(({ map }) => galleryMap(map));

    return {
        topMaps: topMaps.map(galleryMap),
        randomPool,
        mapCount: playable.length,
    };
};
