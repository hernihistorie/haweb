import { prerenderForSearch } from "#lib/prerender.server.js";
import { getInventoryStats } from "#lib/server/inventory_stats.js";
import type { PageServerLoad } from "./$types";

export const prerender = prerenderForSearch;

// TODO: rhinventory's home page also lists featured tags (`AssetTag.is_featured`) with
// their assets.  None are featured yet; port them once one is, with a public endpoint.
export const load: PageServerLoad = async () => {
    const stats = await getInventoryStats();
    return { assetCount: stats?.asset_count };
};
