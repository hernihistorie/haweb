import { dev } from "$app/env";
import { MAGDB_ORIGIN } from "#lib/magdb.js";
import type { Logo } from "#lib/logo.js";

/** The dev server talks to a locally running rhinventory */
const LOCAL_ORIGIN = "http://127.0.0.1:5000";
const INVENTORY_ORIGIN = dev ? LOCAL_ORIGIN : "https://inventory.herniarchiv.cz";
const MAGAZINES_ORIGIN = dev ? LOCAL_ORIGIN : MAGDB_ORIGIN;

/** How long fetched stats are served before they are refreshed in the background */
const MAX_AGE_MS = 10 * 60 * 1000;
const TIMEOUT_MS = 3000;

export type InventoryStats = {
    asset_count: number;
    latest_public_asset: { id: number; name: string; slug: string } | null;
};

export type MagazineStats = {
    magazine_count: number;
    latest_magazine: { id: number; slug: string | null; title: string; logo: Logo | null } | null;
};

/**
 * Returns a getter for stats from rhinventory.  Stale stats are returned right away
 * while being refreshed, so only the first request after startup waits for rhinventory.
 * The getter returns `undefined` if rhinventory has never been reachable.
 */
function cachedStats<T>(url: string): () => Promise<T | undefined> {
    let cached: { stats: T; fetchedAt: number } | undefined;
    let pending: Promise<T | undefined> | undefined;

    async function fetchStats(): Promise<T | undefined> {
        try {
            const response = await fetch(url, { signal: AbortSignal.timeout(TIMEOUT_MS) });
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            const stats = (await response.json()) as T;
            cached = { stats, fetchedAt: Date.now() };
            return stats;
        } catch (e) {
            console.error(`Failed to load stats from ${url}:`, e);
            return cached?.stats;
        } finally {
            pending = undefined;
        }
    }

    return async () => {
        if (cached && Date.now() - cached.fetchedAt < MAX_AGE_MS) return cached.stats;
        pending ??= fetchStats();
        return cached ? cached.stats : pending;
    };
}

/** Public stats of the collection from rhinventory. */
export const getInventoryStats = cachedStats<InventoryStats>(
    `${INVENTORY_ORIGIN}/public-stats.json`,
);

const getRawMagazineStats = cachedStats<MagazineStats>(
    `${MAGAZINES_ORIGIN}/public-magdb/stats.json`,
);

/** Public stats of the magazine database from rhinventory, with an absolute logo URL. */
export async function getMagazineStats(): Promise<MagazineStats | undefined> {
    const stats = await getRawMagazineStats();
    const logo = stats?.latest_magazine?.logo;
    if (!stats?.latest_magazine || !logo) return stats;
    return {
        ...stats,
        latest_magazine: {
            ...stats.latest_magazine,
            logo: { ...logo, url: new URL(logo.url, MAGAZINES_ORIGIN).href },
        },
    };
}
