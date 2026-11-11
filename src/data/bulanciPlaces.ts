/** Kept separate from bulanci.ts, so that it can be used client-side without loading all the data */

const storageServices: Record<string, string> = { UlozTo: "Ulož.to", Webshare: "Webshare" };

/** Places of occurrence grouped for filtering: each website is a group of its own */
export type BulanciPlaceGroup = {
    /** The website's domain, or the storage service's prefix in places, e.g. "UlozTo" */
    key: string;
    name: string;
    /** Whether this groups uploads to a cloud storage service */
    storage: boolean;
};

/** Uploads to a cloud storage service, such as "UlozTo_5PsfU2pb917t", are grouped by the service */
export function bulanciPlaceGroup(place: string): BulanciPlaceGroup {
    const prefix = place.split("_")[0];
    if (place.includes("_") && prefix in storageServices) {
        return { key: prefix, name: storageServices[prefix], storage: true };
    }
    return { key: place, name: place, storage: false };
}
