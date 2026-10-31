import { INVENTORY, INVENTORY_ORIGIN } from "$src/lib/embedded";

const RHINVENTORY_URL = `${INVENTORY_ORIGIN}/`;
// const RHINVENTORY_URL = 'http://127.0.0.1:5000/';

import { proxyEmbedded } from "$src/lib/server/embed";

export const prerender = false;
// Frame URLs mirror rhinventory's own paths, don't redirect them
export const trailingSlash = "ignore";

export function GET(event) {
    return proxyEmbedded(INVENTORY, RHINVENTORY_URL, event, event.params.path);
}
