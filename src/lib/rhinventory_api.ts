import type { AssetData } from "$src/types";

type RHInventoryAPIAsset = {
    id: number;
    name: string;
    note: string;
    primary_image_path: string;
    primary_document_path: string;
    primary_dump_path: string;
}

type RHInventoryAssetsResponse = {
    assets: RHInventoryAPIAsset[];
}

export async function loadRHInventoryAssetData(params: {tagId: number, page: number}): Promise<AssetData[]> {
    // TODO handle page
    const url = `https://api.inventory.herniarchiv.cz/asset/list-by-tag?tag_id=${params.tagId}`;
    const response = await fetch(url);
    const APIAssets = (await response.json()) as RHInventoryAssetsResponse;

    console.log(APIAssets);

    return APIAssets.assets.map(APIAsset => {
        return {
            name: APIAsset.name,
            picture: {url: APIAsset.primary_image_path},
            description: APIAsset.note,
            inventory_url: `https://inventory.herniarchiv.cz/asset/${APIAsset.id}` /* TODO use slug */
        }
    });
}