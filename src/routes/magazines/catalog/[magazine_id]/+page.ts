import type { PageLoad } from './$types';
import { MAGDB_BASE_URL, type MagazineDetail } from "$src/lib/magdb";

export const load: PageLoad = async ({ fetch, params }) => {
	const response = await fetch(`${MAGDB_BASE_URL}/catalog/magazine-detail/${params.magazine_id}.json`);
	return await response.json() as MagazineDetail;
};