import {
    bulanciMapsByWeb,
    bulanciWebDetailsById,
    bulanciWebs,
} from "$src/data/bulanci/webDetails.server";
import { parseWaybackUrl } from "$src/lib/wayback";
import { error, redirect } from "@sveltejs/kit";
import type { EntryGenerator, PageServerLoad } from "./$types";

// 'auto': every website is prerendered, while URLs with an outdated slug still get redirected
export const prerender = "auto";

export const entries: EntryGenerator = () =>
    bulanciWebs.map((web) => ({ id: String(web.id), slug: web.slug }));

export const load: PageServerLoad = async ({ params, url }) => {
    const web = bulanciWebDetailsById[params.id];
    if (!web) {
        error(404, "Website not found");
    }
    if (params.slug !== web.slug) {
        redirect(301, url.pathname.replace(/[^/]+\/?$/, `${web.id}-${web.slug}/`));
    }
    return {
        web,
        // Parsed when the metadata was, so it can't fail here
        snapshot: parseWaybackUrl(web.canonUrl)!,
        maps: bulanciMapsByWeb[web.domain] ?? [],
    };
};
