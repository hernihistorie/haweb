import type { PageLoad } from './$types';
import type { MagazineDetail } from "$src/lib/magdb";

export const load: PageLoad = async ({ fetch, params }) => {
	const response = await fetch(`https://casopisy.herniarchiv.cz/public-magdb/catalog/magazine-detail/${params.magazine_id}.json`);
	return await response.json() as MagazineDetail;
};