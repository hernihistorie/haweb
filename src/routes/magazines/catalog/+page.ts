import type { PageLoad } from '../catalog/$types';
import { MAGDB_BASE_URL, type Catalog } from "$src/lib/magdb";

export const load: PageLoad = async ({ fetch, params }) => {
	const response = await fetch(`${MAGDB_BASE_URL}/catalog.json`);
	return await response.json() as Catalog;
};