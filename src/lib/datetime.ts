import { Temporal } from '@js-temporal/polyfill';
import { getLocale } from './paraglide/runtime';

export type PartialDate = 
    | { type: 'full'; date: Temporal.PlainDate }
    | { type: 'year-month'; date: Temporal.PlainYearMonth }
    | { type: 'year'; year: number };

export function parsePartialDate(
    day: number | null,
    month: number | null,
    year: number | null
): PartialDate | null {
    if (day && month && year) {
        return { type: 'full', date: Temporal.PlainDate.from({ year, month, day }) };
    } else if (month && year) {
        return { type: 'year-month', date: Temporal.PlainYearMonth.from({ year, month }) };
    } else if (year) {
        return { type: 'year', year };
    } else {
        return null;
    }
}

export function formatPartialDate(partialDate: PartialDate): string {
    const locale = getLocale();
    switch (partialDate.type) {
        case 'full':
            if (locale === 'cs') {
                return `${partialDate.date.day}. ${partialDate.date.month}. ${partialDate.date.year}`;
            } else {
                return partialDate.date.toString(); // YYYY-MM-DD
            }
        case 'year-month':
            return `${localizedMonthName(partialDate.date.month)} ${partialDate.date.year}`;
        case 'year':
            return `${partialDate.year}`;
    }
}

/** Parse a calendar_id string in YYYY-MM or MM/YYYY format into a PartialDate */
export function parseCalendarId(calendarId: string | null): PartialDate | null {
    if (!calendarId) return null;
    
    // Try YYYY-MM format
    const isoMatch = calendarId.match(/^(\d{4})-(\d{1,2})$/);
    if (isoMatch) {
        const year = parseInt(isoMatch[1], 10);
        const month = parseInt(isoMatch[2], 10);
        return { type: 'year-month', date: Temporal.PlainYearMonth.from({ year, month }) };
    }
    
    // Try MM/YYYY format
    const slashMatch = calendarId.match(/^(\d{1,2})\/(\d{4})$/);
    if (slashMatch) {
        const month = parseInt(slashMatch[1], 10);
        const year = parseInt(slashMatch[2], 10);
        return { type: 'year-month', date: Temporal.PlainYearMonth.from({ year, month }) };
    }
    
    return null;
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

export function isPartialDateDifferentOrMorePrecise(
    date0: PartialDate,
    date1: PartialDate
): boolean {
    if (date0.type != 'full' && date1.type === 'full') return true;
    if (date0.type != 'year-month' && date1.type === 'year-month') return true;

    if (date0.type === 'year' && date1.type === 'year') {
        return date0.year !== date1.year;
    }

    if (date0.type === 'year-month' && date1.type === 'year-month') {
        return date0.date.year !== date1.date.year || date0.date.month !== date1.date.month;
    }
    
    if (date0.type === 'full' && date1.type === 'full') {
        return date0.date.year !== date1.date.year || date0.date.month !== date1.date.month || date0.date.day !== date1.date.day;
    }

    return false;
}