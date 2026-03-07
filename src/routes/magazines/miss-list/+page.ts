import type { PageLoad } from '../catalog/$types';
import type { MissList } from "$src/lib/magdb";

export const load: PageLoad = async ({ fetch, params }) => {
	const response = await fetch("https://casopisy.herniarchiv.cz/public-magdb/miss-list.json");
	return await response.json() as MissList;
};