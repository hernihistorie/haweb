import type { AssetData } from "$src/types";

export const PAGE_SIZE = 20

type RHInventoryAPIAsset = {
    id: number;
    name: string;
    description: string;
    primary_image_path: string;
    primary_document_path: string;
    primary_dump_path: string;
}

type RHInventoryAssetsResponse = {
    assets: RHInventoryAPIAsset[];
    asset_count: number;
}

export async function loadRHInventoryAssetData(
    params: {tagId: number, page: number}
): Promise<
    {
        assets: AssetData[],
        assetCount: number
    }
> {
    // TODO handle page
    const offset = (params.page-1) * PAGE_SIZE
    const url = `https://api.inventory.herniarchiv.cz/asset/list-by-tag?tag_id=${params.tagId}&limit=${PAGE_SIZE}&offset=${offset}`;
    const response = await fetch(url);
    const apiAssets = (await response.json()) as RHInventoryAssetsResponse;

    console.log(`Loaded ${apiAssets.assets.length} assets from RHInventory API`);

    const assets = apiAssets.assets.map(APIAsset => {
        return {
            id: APIAsset.id,
            name: APIAsset.name,
            picture: {url: APIAsset.primary_image_path},
            description: APIAsset.description,
            inventory_url: `https://inventory.herniarchiv.cz/asset/${APIAsset.id}` /* TODO use slug */
        }
    })

    return {
        assets,
        assetCount: apiAssets.asset_count
    };
}