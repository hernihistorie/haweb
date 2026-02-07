import { getLocale } from "$lib/paraglide/runtime";
import type { LocalizedString } from "$src/types";

// Use this function if you have a simple string to localize.
// Use the Loc Svelte component for more complex content.
export function loc(string: LocalizedString): string {
    if (typeof string === 'string') {
        return string;
    }
    if (getLocale() === 'cs') {
        return 'cs' in string ? string.cs : string.en;
    } else {
        return 'en' in string ? string.en : string.cs;
    }
}

export function czechPlural(count: number, singular: string, pluralNominative: string, pluralGenitive: string): string {
    if (count === 1) {
        return singular;
    } else if (count >= 2 && count <= 4) {
        return pluralNominative;
    } else {
        return pluralGenitive;
    }
}

export function englishPlural(count: number, singular: string, plural: string): string {
    return count === 1 ? singular : plural;
}

export function localizedMonthName(month: number): string {
    const monthNames: { [key: string]: string[] } = {
        en: [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ],
        cs: [
            "leden", "únor", "březen", "duben", "květen", "červen",
            "červenec", "srpen", "září", "říjen", "listopad", "prosinec"
        ]
    };
    const locale = getLocale();
    const names = monthNames[locale] || monthNames['en'];
    return names[month - 1] || '';
}