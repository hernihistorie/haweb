import { goto } from "$app/navigation";
import { page } from "$app/state";

/** Sets or removes (when empty) URL search params of the current page, keeping the others */
export function setUrlParams(
    changes: Record<string, string | null>,
    { replace = false }: { replace?: boolean } = {},
): void {
    const url = new URL(page.url.href);
    for (const [key, value] of Object.entries(changes)) {
        if (value) {
            url.searchParams.set(key, value);
        } else {
            url.searchParams.delete(key);
        }
    }
    goto(url, { replace, reset: false, state: page.state });
}
