import { bulanciWebs } from "$src/data/bulanci/webDetails.server";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
    return {
        webCount: bulanciWebs.length,
    };
};
