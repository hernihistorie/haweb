import { getLocale } from "./paraglide/runtime";

// Use this function if you have a simple string to localize.
// Use the Loc Svelte component for more complex content.
export function loc({cs, en}: {cs: string, en?: string}): string {
    return getLocale() === 'cs' ? cs : en ?? cs;
}