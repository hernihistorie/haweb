/** Links to the Internet Archive's Wayback Machine. Safe to use client-side. */

/** A snapshot URL, e.g. https://web.archive.org/web/20051208033249/http://bulanci.sleepteam.com/ */
const SNAPSHOT_URL = /^https:\/\/web\.archive\.org\/web\/(\d{14})\/(https?:\/\/.+)$/;

export type WaybackSnapshot = {
    /** When the page was captured, as YYYYMMDDhhmmss */
    timestamp: string;
    /** The original URL of the archived page */
    url: string;
};

/** Parses a snapshot URL with a full timestamp; null if it isn't one */
export function parseWaybackUrl(href: string): WaybackSnapshot | null {
    const match = SNAPSHOT_URL.exec(href);
    return match ? { timestamp: match[1], url: match[2] } : null;
}

/** The date of a timestamp, as YYYY-MM-DD */
export const waybackDate = (timestamp: string): string =>
    `${timestamp.slice(0, 4)}-${timestamp.slice(4, 6)}-${timestamp.slice(6, 8)}`;

/**
 * A link to the snapshot of `url` that's closest to `time`, which the Wayback Machine picks
 * itself. `time` may be just a year, or any other prefix of YYYYMMDDhhmmss.
 */
export const waybackUrl = (url: string, time: string | number): string =>
    `https://web.archive.org/web/${time}/${url}`;

/**
 * The snapshot of `url` closest to `timestamp`, meant to be shown in an iframe: the `if_`
 * modifier leaves out the Wayback Machine's toolbar, but links still lead to other snapshots.
 */
export const waybackFrameUrl = (url: string, timestamp: string): string =>
    `https://web.archive.org/web/${timestamp}if_/${url}`;
