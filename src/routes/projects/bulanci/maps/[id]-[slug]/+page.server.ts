import {
    bulanciMaps,
    bulanciMapsById,
    getBulanciMapDetails,
    resolveBulanciPlaces,
} from "$src/data/bulanci";
import { error, redirect } from "@sveltejs/kit";
import { compareMaps, normalizeForSearch } from "../mapList";
import type { EntryGenerator, PageServerLoad } from "./$types";

// 'auto': every map is prerendered, while URLs with an outdated slug still get redirected
export const prerender = "auto";

/** How many of the author's other maps are shown before linking to the filtered list */
const MORE_BY_AUTHOR_LIMIT = 8;

export const entries: EntryGenerator = () =>
    bulanciMaps.map((map) => ({ id: map.id, slug: map.slug }));

export const load: PageServerLoad = async ({ params, url }) => {
    const map = bulanciMapsById[params.id];
    if (!map) {
        error(404, "Map not found");
    }
    if (params.slug !== map.slug) {
        redirect(301, url.pathname.replace(/[^/]+\/?$/, `${map.id}-${map.slug}/`));
    }

    const others = bulanciMaps.filter((other) => other !== map);

    const byAuthor = others
        .filter((other) => other.authors.some((author) => map.authors.includes(author)))
        .sort((a, b) => compareMaps(a, b, { key: "year", desc: false }));

    const normalizedName = normalizeForSearch(map.name);
    const sameName = others.filter((other) => normalizeForSearch(other.name) === normalizedName);

    return {
        map: getBulanciMapDetails(map),
        places: resolveBulanciPlaces(map.placesOfOccurrence),
        moreByAuthor: byAuthor.slice(0, MORE_BY_AUTHOR_LIMIT),
        moreByAuthorCount: byAuthor.length,
        sameName,
    };
};
