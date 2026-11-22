import { bulanciMaps } from "$src/data/bulanci/maps.server";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
	return {
		bulanciMaps
	};
};