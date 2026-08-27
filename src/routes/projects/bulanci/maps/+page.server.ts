import { bulanciMaps } from "$src/data/bulanci";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
	return {
		bulanciMaps
	};
};