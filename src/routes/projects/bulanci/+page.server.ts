import { bulanciAuthors, bulanciMaps } from "$src/data/bulanci";
import { compareMaps, DEFAULT_SORT } from "./maps/mapList";
import type { PageServerLoad } from "./$types";

/** How many of the most widespread maps are shown before linking to the full list */
const TOP_MAPS_LIMIT = 9;

export const load: PageServerLoad = async () => {
    return {
        // The default sort is by the number of places of occurrence
        topMaps: bulanciMaps
            .toSorted((a, b) => compareMaps(a, b, DEFAULT_SORT))
            .slice(0, TOP_MAPS_LIMIT),
        mapCount: bulanciMaps.length,
        interviewees: bulanciAuthors.filter((author) => author.interview),
        authorCount: bulanciAuthors.length,
    };
};
