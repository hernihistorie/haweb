import yaml from "yaml";
import type { PageLoad } from "./$types";
import type { MagazineDetail } from "$src/lib/magdb";

const selectedMagazineSlugs = ['excalibur', 'kybermys', 'psm2', 'gamestar'];

export const load: PageLoad = async ({ fetch, params }) => {
	const selectedMagazines = await Promise.all(
		selectedMagazineSlugs.map(
			slug =>
				fetch(`https://casopisy.herniarchiv.cz/public-magdb/catalog/magazine-detail/${slug}.yaml`)
				.then(async response => (yaml.parse(await response.text()) as MagazineDetail).magazine)
		)
	);
	return { selectedMagazines };
};