const STATS_URL = "https://inventory.herniarchiv.cz/public-stats.json";
// const STATS_URL = "http://127.0.0.1:5000/public-stats.json";

/** How long fetched stats are served before they are refreshed in the background */
const MAX_AGE_MS = 10 * 60 * 1000;
const TIMEOUT_MS = 3000;

export type InventoryStats = {
    asset_count: number;
    latest_public_asset: { id: number; name: string; slug: string } | null;
};

let cached: { stats: InventoryStats; fetchedAt: number } | undefined;
let pending: Promise<InventoryStats | undefined> | undefined;

async function fetchStats(): Promise<InventoryStats | undefined> {
    try {
        const response = await fetch(STATS_URL, { signal: AbortSignal.timeout(TIMEOUT_MS) });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const stats = (await response.json()) as InventoryStats;
        cached = { stats, fetchedAt: Date.now() };
        return stats;
    } catch (e) {
        console.error("Failed to load RHInventory stats:", e);
        return cached?.stats;
    } finally {
        pending = undefined;
    }
}

/**
 * Public stats of the collection from rhinventory.  Stale stats are returned right away
 * while being refreshed, so only the first request after startup waits for rhinventory.
 * Returns `undefined` if rhinventory has never been reachable.
 */
export async function getInventoryStats(): Promise<InventoryStats | undefined> {
    if (cached && Date.now() - cached.fetchedAt < MAX_AGE_MS) return cached.stats;
    pending ??= fetchStats();
    return cached ? cached.stats : pending;
}
