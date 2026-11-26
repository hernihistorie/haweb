import { getInventoryStats } from "#lib/server/inventory_stats.js";
import type { PageServerLoad } from "./$types";

// Lists what is published, so it is rendered on demand (scripts/build_search_index.ts
// still adds it to the search index)
export const prerender = false;

// TODO: rhinventory's home page also lists featured tags (`AssetTag.is_featured`) with
// their assets.  None are featured yet; port them once one is, with a public endpoint.
export const load: PageServerLoad = async () => {
    const stats = await getInventoryStats();
    return { assetCount: stats?.asset_count };
};
