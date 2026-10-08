import { INVENTORY, encodePath } from '$src/lib/embedded';

export const prerender = false;
// Mirror rhinventory's paths, which only sometimes end with a slash
export const trailingSlash = 'ignore';

export function load({ params, url }) {
    return { src: `${INVENTORY.framePrefix}/${encodePath(params.path)}${url.search}` };
}
