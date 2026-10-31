import type { Event } from "./events/event";

export interface Talk {
    event: Event;
    /** Either a colocated file imported with `?url`, or an external URL */
    slides?: { url: string; filesize?: number };
}
