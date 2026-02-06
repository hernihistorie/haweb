import yaml from "yaml";
import type { PageLoad } from '../catalog/$types';
import type { Catalog } from "$src/lib/magdb";

export const load: PageLoad = async ({ fetch, params }) => {
	const response = await fetch("https://casopisy.herniarchiv.cz/public-magdb/catalog.yaml");
	return yaml.parse(await response.text()) as Catalog;
};