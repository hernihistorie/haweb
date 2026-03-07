import type { PageLoad } from '../catalog/$types';
import type { Catalog } from "$src/lib/magdb";

export const load: PageLoad = async ({ fetch, params }) => {
	const response = await fetch("https://casopisy.herniarchiv.cz/public-magdb/catalog.json");
	return await response.json() as Catalog;
};