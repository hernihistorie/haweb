import type { PageLoad } from "./$types";
import type { MagazineDetail } from "$src/lib/magdb";

const selectedMagazineSlugs = ['excalibur', 'kybermys', 'psm2', 'gamestar'];

export const load: PageLoad = async ({ fetch, params }) => {
	const selectedMagazines = await Promise.all(
		selectedMagazineSlugs.map(
			slug =>
				fetch(`https://casopisy.herniarchiv.cz/public-magdb/catalog/magazine-detail/${slug}.json`)
				.then(async response => (await response.json() as MagazineDetail).magazine)
		)
	);
	return { selectedMagazines };
};