import { bulanciMaps } from "$src/data/bulanci/maps";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
	return {
		bulanciMaps
	};
};