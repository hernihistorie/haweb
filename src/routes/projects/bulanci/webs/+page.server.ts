import { bulanciWebs } from "$src/data/bulanci/webDetails.server";
import { bulanciWebGraph } from "$src/data/bulanci/webGraph.server";
import type { PageServerLoad } from "./$types";
import type { BulanciWebListItem } from "./webList";

export const load: PageServerLoad = async () => {
    return {
        graph: bulanciWebGraph,
        webCount: bulanciWebs.length,
        // Only what the list shows, to keep the page's data small
        webs: bulanciWebs.map((web): BulanciWebListItem => ({
            id: web.id,
            slug: web.slug,
            domain: web.domain,
            shownName: web.shownName,
            description: web.description,
            startYear: web.startYear,
            endYear: web.endYear,
            services: web.services,
            authors: web.authors,
            mapCount: web.mapCount,
            screenshot: web.screenshot,
        })),
    };
};
